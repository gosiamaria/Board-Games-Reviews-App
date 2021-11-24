import axios from "axios";

const reviewsApi = axios.create({
    baseURL: "https://nc-games-by-gosia.herokuapp.com/api"
})

export const getAllReviews = (sort, order) => {
    return reviewsApi.get(`/reviews?sort_by=${sort}&&order=${order}`).then((res) => {
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

export const getUserByUsername = (username) => {
    return reviewsApi.get(`/users/${username}`).then((res) => {
        return res.data.user;
    })
}

export const getReviewsByCat = (cat) => {
    return reviewsApi.get(`/reviews?category=${cat}`).then((res) => {
        return res.data.reviews;
    })
}

export const patchVotes = (review_id, inc) => {
    return reviewsApi.patch(`/reviews/${review_id}`, {inc_votes : inc}).then((res) => {
        return res.data.votes;
    })
}

export const getCommentsByReview = (review_id) => {
    return reviewsApi.get(`/reviews/${review_id}/comments`).then((res) => {
        return res.data.comments;
    })
}

export const getReviewById = (review_id) => {
    return reviewsApi.get(`/reviews/${review_id}`).then((res) => {
        return res.data.review;
    })
}

export const postComment = (review_id, username, comment) => {
    return reviewsApi.post(`/reviews/${review_id}/comments`, {username: username, body: comment}).then((res) => {
        return res.data.comment;
    })
}

export const patchVotesComments = (comment_id, inc) => {
    return reviewsApi.patch(`/comments/${comment_id}`, {inc_votes: inc}).then((res) => {
        return res.data.votes;
    })
}