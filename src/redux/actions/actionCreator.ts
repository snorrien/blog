import { Post } from "../../models/Post";
import { SET_POSTS, SET_COMMENTS, GET_COMMENTS, GET_POSTS } from "../constants";

export const setPosts = (payload: Post[]) => ({
    type: SET_POSTS,
    posts: payload
});

export const getPosts = () => ({
    type: GET_POSTS,
});

export const setComments = (payload: Comment[]) => ({
    type: SET_COMMENTS,
    comments: payload
});

export const getComments = (postId: number) => ({
    type: GET_COMMENTS,
    postId: postId
});