import { useState, useEffect } from "react";
import { getReviewById } from "../utils/api";
import { useParams } from "react-router-dom";
import SingleReviewCard from "./SingleReviewCard";
import { postComment } from "../utils/api";
import GetComments from "./GetComments";
import CommentCard from "./CommentCard";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Review() {
    const { review_id } = useParams();
    const { currentUser } = useContext(UserContext);
    const [review, setReview] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [commentToAdd, setCommentToAdd] = useState('');
    const [ confirmation, setConfirmation ] = useState([]);

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

const handleSubmit = (e) => {
    e.preventDefault();
    return postComment(review.review_id, currentUser.username, commentToAdd).then((comment) => {
        setConfirmation('Your comment has been added')
        return <CommentCard comment={comment}/>
    })
}

    return (
        <div className="singleReview">
            <SingleReviewCard review={review} />

            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="newComment">Comment as <Link to={`/users/${currentUser.username}`} className="userLink">{currentUser.username}</Link></label>
                <input 
                type="text" 
                value={commentToAdd}
                placeholder='What are your thoughts?'
                name="newComment"
                id="newComment"
                required
                onChange={(e) => setCommentToAdd(e.target.value)} />
                <button type="submit">Add comment</button>
                <p>{confirmation}</p>
                <p></p>
            </form>

            <GetComments review_id={review.review_id} />
        </div>
    )
}