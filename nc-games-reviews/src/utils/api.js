import axios from "axios";

const reviewsApi = axios.create({
    baseURL: "https://nc-games-by-gosia.herokuapp.com/api"
})

export const getAllReviews = ({ sort, order, limit, p }, category ) => {
    let path = `/reviews?sort_by=${sort}&order=${order}&limit=${limit}&p=${p}`;
    if(category) {
        path += `&category=${category}`
    }
    return reviewsApi.get(`${path}`).then((res) => {
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

export const deleteComment = (comment_id) => {
    return reviewsApi.delete(`/comments/${comment_id}`).then(() => {
        console.log('Deleted')
    })
}

export const patchVotesComments = (comment_id, inc) => {
    return reviewsApi.patch(`/comments/${comment_id}`, {inc_votes: inc}).then((res) => {
        return res.data.votes;
    })
}

