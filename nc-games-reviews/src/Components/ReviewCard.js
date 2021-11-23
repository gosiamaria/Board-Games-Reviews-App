
export default function ReviewCard({ review }) {
    return (
        <section className="reviewCard">
            <div id="postedBy">
                <p>{review.owner}</p>
                <p>{review.created_at}</p>
            </div>
            <div id="revTitle">
                <p>{review.title}</p>
            </div>
            <div id="revBody">
                <p>{review.review_body}</p>
            </div>
            <div id="revImg">
                <p>image will go here</p>
            </div>
            <div id="comms">
                <p>{review.comment_count} comments</p>
            </div>
            <div id="vote">
                <p>{review.votes}</p>
            </div>
        </section>
    )
}