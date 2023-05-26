import { GET_COMMENTS, GET_POSTS, SET_COMMENTS } from "../constants";

export const addPosts = () => ({
    type: GET_POSTS,
});

export const setComments = (payload: Comment[]) => ({
    type: SET_COMMENTS,
    comments: payload
});

export const getComments = () => ({
    type: GET_COMMENTS
});