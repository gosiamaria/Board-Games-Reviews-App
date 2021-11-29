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
  const numArr = [5, 10, 20, 50];
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
    setQuery((prevQuery) => {
      let newQuery = {...prevQuery}
      newQuery.sort = e.target.value;
      return newQuery;
  })
}

  const handleOrder = (e) => {
    e.preventDefault();
    setQuery((prevQuery) => {
      let newQuery = {...prevQuery}
      newQuery.order = e.target.value;
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
    return <p><img id="loading" src="https://www.providentinsurance.co.uk/Static/images/loader.gif" alt="loading"/></p>
  }
  if(err) return <p>{err}</p>;

  console.log(reviews.length, ' length of reviews')

  return (
    <section className="main">
      <About slug={slug} />
      <div className="sortBy">
        <select className="sortByOptions" onChange={handleSortby}>
          <option
            key="sortByOptions selector"
            value="sortByOptions selector"
            defaultValue="sortByOptions"
            disabled
            selected
          >
            Sort by
          </option>
          <option key="created_at" value="created_at">date</option>
          <option key="title" value="title">title</option>
          <option key="votes" value="votes">votes</option>
        </select>

        <select className="orderOptions" onChange={handleOrder}>
        <option key="orderOptions selector"
            value="orderOptions selector"
            defaultValue="orderOptions"
            disabled
            selected
          >
            Order by
          </option>
          <option key="asc" value="asc">Ascending</option>
          <option key="desc" value="desc">Descending</option>
        </select>

        <select className="itemsPerPage" onChange={handleItemsPerPage}>
        <option key="itemsPerPage selector"
            value="itemsPerPage selector"
            defaultValue="itemsPerPage"
            disabled
            selected
          >
            Items per page
          </option>
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
        <div className="display">
            {(slug) ?  <span className="backNow"><Link to="/" className="goBackLink">
            <img src={arrowLeft} alt="back arrow" /> Back to all reviews</Link></span> : <span></span>}
          {reviews.map((review) => {
            return <ReviewCard review={review} />
          })}
          </div>
          {/* {reviews.length > query.limit} */}
    </section>
    )
}