import AddVotesComments from "./AddVotesComments"
import GetAvatar from "./GetAvatar"

export default function CommentCard({ comment }) {
    return (
        <section className="commentCard">
            <div id="avatar">
                <GetAvatar username={comment.author} />
            </div>
            <div id="author">
            <p>Posted by: {comment.author}  • {comment.created_at}</p>
            </div>
            <div id="commBody">
                <p>{comment.body}</p>
            </div>
            <div id="commVotes">
                <AddVotesComments votes={comment.votes} comment_id={comment.comment_id} />
            </div>
        </section>
    )
}
