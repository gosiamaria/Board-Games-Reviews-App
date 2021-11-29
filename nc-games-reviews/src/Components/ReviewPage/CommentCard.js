import AddVotesComments from "./AddVotesComments"
import GetAvatar from "./GetAvatar";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { useContext, useState } from "react";
import { deleteComment } from '../../utils/api';

export default function CommentCard({ comment }) {
    const { currentUser } = useContext(UserContext);
    const [deleteConfirmation, setDeleteConfirmation ] = useState("")

    // const handleDelete = (e) => {
    //     e.preventDefault();
    //     deleteComment(comment.comment_id).then(() => {
    //         setDeleteConfirmation("Your comment has been deleted. Promise it ain't gonna be there when you refresh the page.");
    //         setComments((prevComments) => {
    //             let newComments = [...prevComments];
    //             return newComments.filter(com => com.comment_id !== comment.comment_id);
    //         })
    //     })
    // }

    return (
        <section className="commentCard">
            <div id="author">
            <GetAvatar username={comment.author} />
            <span>posted by <Link to={`/users/${comment.author}`} className="userLink">{comment.author} </Link> {' '}• {' '} {comment.created_at.slice(0, 10)}{' '} {' '} at{' '} {comment.created_at.slice(11, 16)}</span>
            </div>
            <div id="commBody">
                <span>{comment.body}</span>
            </div>
            <div id="commVotes">
                <AddVotesComments votes={comment.votes} comment_id={comment.comment_id} />
            </div>
            {/* <div className="delete">
            {comment.author === currentUser.username ? <span onClick={handleDelete}>Delete</span> : <span></span>}
            </div>
            <span>{deleteConfirmation}</span> */}
        </section>
    )
}
