import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getReviewsByCat } from "../utils/api";
import About from "./About";
import ReviewCard from "./ReviewCard"

export default function Category(props){
    const { slug } = useParams();
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [sort, setSort] = useState('created_at')
    const [order, setOrder] = useState('desc')

    useEffect(() => {
        setIsLoading(true);
        getReviewsByCat(slug).then((reviews) => {
        setReviews(reviews);
        setIsLoading(false);
    });
    }, [slug, order]);

    const handleSelect = (e) => {
        e.preventDefault();
        setSort(e.target.value);
    }
    const handleChange = (e) => {
        e.preventDefault();
        setOrder(e.target.value);
    }

    if (isLoading) {
        return <p>...loading</p>;
    }

    return (
        <main>
          <h2 className="subTitle">{slug}</h2>
        <About slug={slug} />
        <div className="sortBy">
        <select className="sortByOptions" onChange={handleSelect}>
          <option
            key="sortByOptions selector"
            value="sortByOptions selector"
            defaultValue="sortByOptions"
            disabled
            selected
          >
            Sort by
          </option>
          <option key="created_at" value="created_at">date</option>
          <option key="title" value="title">title</option>
          <option key="votes" value="votes">votes</option>
        </select>

        <select className="orderOptions" onChange={handleChange}>
        <option key="orderOptions selector"
            value="orderOptions selector"
            defaultValue="orderOptions"
            disabled
            selected
          >
            Order
          </option>
          <option key="asc" value="asc">Ascending</option>
          <option key="desc" value="desc">Descending</option>
        </select>
      </div>
        {reviews.map((review) => {
            return <ReviewCard review={review} />
        })}
    </main>
    );
};
