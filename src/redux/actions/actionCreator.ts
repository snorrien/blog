import { Post } from "../../models/Post";
import { User } from "../../models/User";
import { SET_POSTS, SET_COMMENTS, GET_COMMENTS, GET_POSTS, SET_USERS, GET_USERS } from "../constants";

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

export const setUsers = (payload: User[]) => ({
    type: SET_USERS,
    users: payload
});

export const getUsers = () => ({
    type: GET_USERS,
});