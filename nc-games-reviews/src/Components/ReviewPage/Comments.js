import { useState, useEffect } from "react";
import { getCommentsByReview } from "../../utils/api";
import { postComment } from "../../utils/api";
import CommentCard from "./CommentCard";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { deleteComment } from '../../utils/api';

export default function Comments({review_id}){
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [commentToAdd, setCommentToAdd] = useState('');
    const [ confirmation, setConfirmation ] = useState([]);
    const { currentUser } = useContext(UserContext);
    const [deleteConfirmation, setDeleteConfirmation ] = useState("")

    useEffect(() => {
        setIsLoading(true);
        getCommentsByReview(review_id).then((comments) => {
            setComments(comments)
            setIsLoading(false);
        })
    }, [review_id])

    if (isLoading) {
        return <p><img id="loading" src="https://www.teahub.io/photos/full/226-2267889_animated-circle-gif-transparent.gif" alt="loading"/></p>
    }

    const handleSubmit = (e) => {
        setIsLoading(true);
        e.preventDefault();
        postComment(review_id, currentUser.username, commentToAdd).then((comment) => {
            setIsLoading(false);
            setCommentToAdd('');
            setDeleteConfirmation('');
            setConfirmation('Your comment has been added');
            setComments((prevComments) => {
                return [comment, ...prevComments];
            })
        })
    }

    const handleDelete = (e) => {
        setIsLoading(true);
        e.preventDefault();
        const commentId = e.target.value;
        deleteComment(commentId).then(() => {
            setIsLoading(false);
            setConfirmation('');
            setDeleteConfirmation("Your comment has been deleted");
            setComments((prevComments) => {
                return prevComments.filter((comment) => {
                    return comment.comment_id != commentId;
                })
            })
        })
    }

    return(
        <>
        <div className="commentForm">
            <form onSubmit={handleSubmit}>
                <div id="label">
                <label htmlFor="newComment">comment as <Link to={`/users/${currentUser.username}`} className="userLink">{currentUser.username}</Link></label>
                </div>
                <div>
                <input 
                type="text" 
                value={commentToAdd}
                placeholder='What are your thoughts?'
                name="newComment"
                id="input"
                required
                onChange={(e) => setCommentToAdd(e.target.value)} />
                </div>
                <button id="button" type="submit">Add comment</button>
                <p>{confirmation}</p>
                <p>{deleteConfirmation}</p>
                <p></p>
            </form>
        </div>
        <div className="comments">
            {comments.map((comment) => {
                return (
                <>
                <CommentCard comment={comment} />
                <div className="delete">
                    {comment.author === currentUser.username ? <button value={comment.comment_id} onClick={handleDelete}>Delete</button> : <span></span>}
                </div>
                </>
                )
            })}
        </div>
        </>
    )
}