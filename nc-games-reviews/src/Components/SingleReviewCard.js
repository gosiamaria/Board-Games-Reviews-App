import AddVotes from "./AddVotes";
import { Link } from "react-router-dom";

export default function SingleReviewCard({ review }) {

    return (
        <section className="reviewCard">
            <div id="postedBy">
                <p> Posted by:<Link to={`/users/${review.owner}`} className="userLink"> {review.owner} </Link> • 
                {review.created_at}</p>
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
                <p><img src="https://cdn-icons-png.flaticon.com/512/54/54761.png" alt="commentIcon"/>{review.comment_count} comments</p>
            </div>

            <div id="vote">
                <AddVotes votes={review.votes} reviewId={review.review_id} />
            </div>
        </section>
    )
}