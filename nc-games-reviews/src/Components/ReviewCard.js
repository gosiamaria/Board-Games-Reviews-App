import AddVotes from "./AddVotes";
import { Link } from "react-router-dom";

export default function ReviewCard({ review }) {
    return (
        <section className="reviewCard">
            <div id="postedBy">
                <p> Posted by:<Link to={`/users/${review.owner}`} className="userLink"> {review.owner} </Link> {' '}• {' '}
                {review.created_at.slice(0,10)} {' '} {' '} at{' '} {review.created_at.slice(11,16)}</p>
            </div>
            <div id="revTitle">
            <Link to={`/reviews/${review.review_id}`} className="singleReview"><p>{review.title}</p></Link>
            </div>
            <div id="revBody">
                <p>{review.review_body}</p>
            </div>
            <div id="revImg">
                <img src={review.review_img_url} alt={review.title} />
            </div>

            <div id="comms">
                <Link to={`/reviews/${review.review_id}`} className="singleReview"><img src="https://cdn-icons-png.flaticon.com/512/54/54761.png" alt="commentIcon"/>    {review.comment_count} comments</Link>
            </div>

            <div id="vote">
                <AddVotes votes={review.votes} reviewId={review.review_id} />
            </div>
        </section>
    )
}