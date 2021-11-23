import About from "./About";
import { getAllReviews } from "../utils/api";
import { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard"

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getAllReviews().then((reviews) => {
      setReviews(reviews);
    });
  }, []);

  return (
    <main>
      <About />
      <p className="sortBy">sort by:</p>
        <div className="display">
          {reviews.map((review) => {
            return <ReviewCard review={review} />
          })}
        </div>
    </main>
    )
}