import AddVotes from "./AddVotes";
import { Link } from "react-router-dom";

export default function SingleReviewCard({ review }) {

    return (
        <section className="reviewCard">
            <div id="postedBy">
            <p> Posted by:<Link to={`/users/${review.owner}`} className="userLink"> {review.owner} </Link> {' '}• {' '}
                {review.created_at.slice(0,10)} {' '} {' '} at{' '} {review.created_at.slice(11,16)}</p>
            </div>
            <div id="revTitle">
                <p>{review.title}</p>
            </div>
            <div id="revBody">
                <p>{review.review_body}</p>
            </div>
            <div id="revImg">
                <img src={review.review_img_url} alt={review.title} />
            </div>

            <div id="comms">
                <p>{review.comment_count} comments</p>
            </div>

            <div id="vote">
                <AddVotes votes={review.votes} reviewId={review.review_id} />
            </div>
        </section>
    )
}