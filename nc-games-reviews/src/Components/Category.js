import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getReviewsByCat } from "../utils/api";
import About from "./About";
import ReviewCard from "./ReviewCard"

export default function Category(props){
    const { slug } = useParams();

    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getReviewsByCat(slug).then((reviews) => {
        setReviews(reviews);
        setIsLoading(false);
    });
    }, [slug]);

    if (isLoading) {
        return <p>...loading</p>;
    }

    return (
        <main>
        <h1>{slug.toUpperCase()}</h1>
        <About slug={slug} />
        {reviews.map((review) => {
            return <ReviewCard review={review} />
        })}
    </main>
    );
};
