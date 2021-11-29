import About from "../About";
import { getAllReviews } from "../../utils/api";
import { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import arrowLeft from "../images/arrowLeft.png";

export default function Reviews() {
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const numArr = [10, 20, 50];
  const [reviews, setReviews] = useState([]);
  const [err, setErr] = useState(null);
  const [query, setQuery] = useState({
    sort: 'created_at',
    order: 'desc',
    limit: 10,
    p: 1,
  })

  useEffect(() => {
    setIsLoading(true);
    setErr(null);
    getAllReviews(query, slug).then((reviews) => {
      setReviews(reviews);
      setIsLoading(false);
      setErr(null);
    }).catch((err) => {
      setIsLoading(false);
      if(err.response.status === 404) {
        setErr("Category does not exist");
      } else {
        setErr("Something has gone wrong!");
      }
    })
  },[query, slug]);
  
  const handleSortby = (e) => {
    e.preventDefault();
    const val = JSON.parse(e.target.value);
    setQuery((prevQuery) => {
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

  if (isLoading) {
    return <p><img id="loading" src="https://www.teahub.io/photos/full/226-2267889_animated-circle-gif-transparent.gif" alt="loading"/></p>
  }
  if(err) return <p>{err}</p>;

  return (
    <section className="main">
      <About slug={slug} />
      <div className="sortBy">
        <div className="sort">
        <h5>Sort by</h5>
        <select className="sortByOptions" onChange={handleSortby}>
          <option key="created_at_desc" value='{"sort":"created_at","order":"desc"}'>Newest first</option>
          <option key="created_at_asc" value='{"sort":"created_at","order":"asc"}'>Older first</option>
          <option key="title_asc" value='{"sort":"title","order":"asc"}'>Title: alphabetically</option>
          <option key="title_asc" value='{"sort":"votes","order":"asc"}'>Least voted </option>
          <option key="title_asc" value='{"sort":"votes","order":"desc"}'>Most voted </option>
        </select>
      </div>
      <div className="items">
        <h5>Items per page</h5>
          <select className="itemsPerPage" onChange={handleItemsPerPage}>
            {numArr.map((num) => {
              return <option key={num} value={num}>{num}</option>
            })}
            <option key="view all"
              value={100000}
            >
              View all
            </option>
          </select>
      </div>

      </div>
        <div className="display">
            {(slug) ?  <span className="backNow"><Link to="/" className="goBackLink">
            <img src={arrowLeft} alt="back arrow" /> Back to all reviews</Link></span> : <span></span>}
          {reviews.map((review) => {
            return <ReviewCard review={review} />
          })}
          </div>
    </section>
    )
}