import AddVotesComments from "./AddVotesComments"
import GetAvatar from "./GetAvatar";
import { Link } from "react-router-dom";

export default function CommentCard({ comment }) {
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
                <AddVotesComments votes={comment.votes} comment_id={comment.comment_id} commentAuthor={comment.author}/>
            </div>
        </section>
    )
}
