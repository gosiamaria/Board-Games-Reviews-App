import { useState, useEffect } from "react";
import { getReviewById } from "../../utils/api";
import { useParams } from "react-router-dom";
import ReviewCard from "../Reviews/ReviewCard";
import Comments from "./Comments";
import arrowLeft from "../images/arrowLeft.png";
import { Link } from "react-router-dom";

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
        return <p><img id="loading" src="https://www.teahub.io/photos/full/226-2267889_animated-circle-gif-transparent.gif" alt="loading"/></p>
    }
    if(err) return <p>{err}</p>

    return (
        <div className="singleReview">
            <Link to="/" className="goBackLink">
            <span className="goBack"><img src={arrowLeft} alt="back arrow" /> Back to all reviews</span></Link>
            <div className="oneReview">
            <ReviewCard review={review} />
            </div>
            <Comments review_id={review.review_id} />
        </div>
    )
}