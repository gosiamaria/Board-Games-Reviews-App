

export default function SortBy({ setQuery }) {

    const handleSortby = (e) => {
        e.preventDefault();
        const val = JSON.parse(e.target.value);
        setQuery((prevQuery) => {
            console.log(prevQuery, 'prev query')
        let newQuery = {...prevQuery}
        newQuery.sort = val.sort;
        newQuery.order = val.order;
        return newQuery;
    })
    }
    
    const handleItemsPerPage = (e) => {
    e.preventDefault();
    setQuery((prevQuery) => {
        let newQuery = {...prevQuery}
        newQuery.limit = e.target.value;
        return newQuery;
    })
    }

    return (
    <div className="sortBy">
        <div className="sort">
            <h5>Sort by</h5>
            <select className="sortByOptions" onChange={handleSortby}>
            <option key="created_at_desc" value='{"sort":"created_at","order":"desc"}'>Newest first</option>
            <option key="created_at_asc" value='{"sort":"created_at","order":"asc"}'>Older first</option>
            <option key="title_asc" value='{"sort":"title","order":"asc"}'>Title: alphabetically</option>
            <option key="votes_asc" value='{"sort":"votes","order":"asc"}'>Least voted </option>
            <option key="votes_desc" value='{"sort":"votes","order":"desc"}'>Most voted </option>
            </select>
        </div>
        <div className="items">
            <h5>Items per page</h5>
                <select className="itemsPerPage" onChange={handleItemsPerPage}>
                <option key="10"
                value={10}
                >
                10
                </option>
                <option key="20"
                value={20}
                >
                20
                </option>
                <option key="50"
                value={50}
                >
                50
                </option>
                <option key="view all"
                value={100000}
                >
                View all
                </option>
                </select>
        </div>
    </div>
    )
}