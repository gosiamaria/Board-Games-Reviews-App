import { useState, useEffect } from "react";
import { getReviewById } from "../../utils/api";
import { useParams } from "react-router-dom";
import ReviewCard from "../Reviews/ReviewCard";
import GetComments from "./GetComments";

export default function Review() {
    const { review_id } = useParams();
    const [err, setErr] = useState(null);
    const [review, setReview] = useState({});
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        setIsLoading(true);
        getReviewById(review_id).then((review) => {
            setReview(review);
            setIsLoading(false);
        }).catch((err) => {
            setIsLoading(false);
            setErr("Review does not exist");
        })
    }, [review_id])

    if (isLoading) {
        return <p><img id="loading" src="https://www.providentinsurance.co.uk/Static/images/loader.gif" alt="loading"/></p>
    }
    if(err) return <p>{err}</p>

    return (
        <div className="singleReview">
            <ReviewCard review={review} />
            <GetComments review_id={review.review_id} />
        </div>
    )
}