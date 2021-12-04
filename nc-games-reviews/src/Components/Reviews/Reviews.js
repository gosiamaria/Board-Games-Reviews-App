import About from "../About";
import { getAllReviews } from "../../utils/api";
import { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import arrowLeft from "../images/arrowLeft.png";
import Nav from "../Nav.js";

export default function Reviews({query}) {
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [err, setErr] = useState(null);

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
  
  if (isLoading) {
    return <p><img id="loading" src="https://www.teahub.io/photos/full/226-2267889_animated-circle-gif-transparent.gif" alt="loading"/></p>
  }
  if(err) return <p class="error">{err}</p>;

  return (
    <>
      <Nav />
      <About slug={slug} />
        <div className="display">
            {(slug) ?  <span className="backNow"><Link to="/" className="goBackLink">
            <img src={arrowLeft} alt="back arrow" /> Back to all reviews</Link></span> : <span></span>}
          {reviews.map((review) => {
            return <ReviewCard review={review} />
          })}
          </div>
    </>
    )
}