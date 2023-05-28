import { Post } from "../../models/Post";
import { User } from "../../models/User";
import { SET_POSTS, SET_COMMENTS, GET_POSTS_REQUEST, SET_USERS, GET_USERS, GET_POSTS_LOADED, SET_USERPOSTS, GET_USERPOSTS_REQUEST, GET_USERPOSTS_LOADED, GET_COMMENTS_LOADED, GET_COMMENTS_REQUEST } from "../constants";

export const setPosts = (payload: Post[]) => ({
    type: SET_POSTS,
    posts: payload
});

export const getPosts = () => ({
    type: GET_POSTS_REQUEST
});

export const postsLoaded = () => ({
    type: GET_POSTS_LOADED
});

export const setComments = (payload: Comment[]) => ({
    type: SET_COMMENTS,
    comments: payload
});

export const getComments = (postId: number) => ({
    type: GET_COMMENTS_REQUEST,
    postId: postId
});

export const commentsLoaded = () => ({
    type: GET_COMMENTS_LOADED,
});

export const setUsers = (payload: User[]) => ({
    type: SET_USERS,
    users: payload
});

export const getUsers = () => ({
    type: GET_USERS,
});

export const getUserPosts = (userId: number) => ({
    type: GET_USERPOSTS_REQUEST,
    userId: userId
})

export const userPostsLoaded = () => ({
    type: GET_USERPOSTS_LOADED
});

export const setUserPosts = (payload: Post[])  => ({
    type: SET_USERPOSTS,
    posts: payload
})