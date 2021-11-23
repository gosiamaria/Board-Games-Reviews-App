import axios from "axios";

const reviewsApi = axios.create({
    baseURL: "https://nc-games-by-gosia.herokuapp.com/api"
})

export const getAllReviews = () => {
    return reviewsApi.get("/reviews").then((res) => {
        return res.data.reviews;
    })
}

export const getCategories = () => {
    return reviewsApi.get("/categories").then((res) => {
        return res.data.categories;
    })
}

export const getAllUsers = () => {
    return reviewsApi.get("/users").then((res) => {
        return res.data.users;
    })
}

export const getReviewsByCat = (cat) => {
    return reviewsApi.get(`/reviews?category=${cat}`).then((res) => {
        return res.data.reviews;
    })
}