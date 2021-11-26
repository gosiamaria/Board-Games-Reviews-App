import { useState, useEffect } from "react";
import { getCommentsByReview } from "../../utils/api";
import { postComment } from "../../utils/api";
import CommentCard from "./CommentCard";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function GetComments({review_id}){
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [commentToAdd, setCommentToAdd] = useState('');
    const [ confirmation, setConfirmation ] = useState([]);
    const { currentUser } = useContext(UserContext);

    useEffect(() => {
        setIsLoading(true);
        getCommentsByReview(review_id).then((comments) => {
            setComments(comments)
            setIsLoading(false);
        })
    }, [review_id])

    if (isLoading) {
        return <p><img id="loading" src="https://www.providentinsurance.co.uk/Static/images/loader.gif" alt="loading"/></p>
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postComment(review_id, currentUser.username, commentToAdd).then((comment) => {
            setConfirmation('Your comment has been added');
            setComments((prevComments) => {
                return [comment, ...prevComments];
            })
        })
    }

    return(
        <>
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
                <button id="button" type="submit">Add comment</button>
                <p>{confirmation}</p>
                <p></p>
            </form>
        <div className="display">
            {comments.map((comment) => {
                return <CommentCard comment={comment} />
            })}
        </div>
        </>
    )
}