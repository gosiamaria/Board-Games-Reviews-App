import AddVotes from "./AddVotes";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function ReviewCard({ review }) {
    const { params } = useParams();
    return (
        <section className="reviewCard">
            <div id="postedBy">
                <span>posted by<Link to={`/users/${review.owner}`} className="userLink"> {review.owner} </Link> {' '}• {' '}
                {review.created_at.slice(0,10)} {' '} {' '} at{' '} {review.created_at.slice(11,16)}</span>
            </div>
            <div id="revTitle">
            {(params) ? <span>{review.title.toUpperCase()}</span> : <Link to={`/reviews/${review.review_id}`} className="singleReviewLink"><span>{review.title.toUpperCase()}</span></Link>}
            </div>
            <div id="revBody">
            <img src={review.review_img_url} alt={review.title} />
                <span>{review.review_body}</span>

            </div>

            <div id="comms">
            {(params) ? <p>{review.comment_count} comments</p> : <Link to={`/reviews/${review.review_id}`} className="commentsLink"> View all {review.comment_count} comments </Link>}    
            </div>

            <div id="vote">
                <AddVotes votes={review.votes} reviewId={review.review_id} reviewOwner={review.owner} />
            </div>
        </section>
    )
}

