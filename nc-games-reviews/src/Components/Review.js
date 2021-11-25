import { useState, useEffect } from "react";
import { getReviewById } from "../utils/api";
import { useParams } from "react-router-dom";
import SingleReviewCard from "./SingleReviewCard";

import GetComments from "./GetComments";


export default function Review() {
    const { review_id } = useParams();

    const [review, setReview] = useState({});
    const [isLoading, setIsLoading] = useState(true);
   

    useEffect(() => {
        setIsLoading(true);
        getReviewById(review_id).then((review) => {
            setReview(review);
            setIsLoading(false);
        });
    }, [review_id])

    if (isLoading) {
        return <p>...loading</p>;
    }

    return (
        <div className="singleReview">
            <SingleReviewCard review={review} />
 

            <GetComments review_id={review.review_id} />
        </div>
    )
}