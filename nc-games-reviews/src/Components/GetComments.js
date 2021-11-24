import CommentCard from "./CommentCard";
import { useState, useEffect } from "react";
import { getCommentsByReview } from "../utils/api";

export default function GetComments({review_id}){
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getCommentsByReview(review_id).then((comments) => {
            setComments(comments)
            setIsLoading(false);
        })
    }, [review_id])

    return(
        <div className="display">
        {comments.map((comment) => {
            return <CommentCard comment={comment} />
        })}
        </div>
    )
}