import AddVotesComments from "./AddVotesComments"
import GetAvatar from "./GetAvatar";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { useContext, useState } from "react";
import { deleteComment } from '../../utils/api';

export default function CommentCard({ comment }) {
    const { currentUser } = useContext(UserContext);
    const [deleteConfirmation, setDeleteConfirmation ] = useState("")

    const handleDelete = (e) => {
        e.preventDefault();
        return deleteComment(comment.comment_id).then(() => {
            setDeleteConfirmation("Your comment has been deleted. You'll see it gone when you refresh the page.")
        })
    }

    return (
        <section className="commentCard">
            <div id="avatar">
                <GetAvatar username={comment.author} />
            </div>
            <div id="author">
            <p>Posted by: <Link to={`/users/${comment.author}`} className="userLink">{comment.author} </Link> {' '}• {' '} {comment.created_at.slice(0, 10)}{' '} {' '} at{' '} {comment.created_at.slice(11, 16)}</p>
            </div>
            <div id="commBody">
                <p>{comment.body}</p>
            </div>
            <div id="commVotes">
                <AddVotesComments votes={comment.votes} comment_id={comment.comment_id} />
            </div>
            <div className="delete">
            {comment.author === currentUser.username ? <p onClick={handleDelete}>Delete</p> : <p></p>}
            <p>{deleteConfirmation}</p>
            </div>
        </section>
    )
}
