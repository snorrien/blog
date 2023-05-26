import { Post } from "../../models/Post";
import { GET_POSTS_LOADED, GET_POSTS_REQUEST } from "../constants";

interface PostsState {
    posts: Post[],
    loading: boolean
}

const initialState: PostsState = {
    posts: [],
    loading: false
}

const postsReducer = (state: PostsState = initialState, action: any) => {
    switch (action.type) {
        case 'SET_POSTS':
            return { ...state, posts: action.posts }
        case GET_POSTS_REQUEST:
            return { ...state, loading: true }
        case GET_POSTS_LOADED:
            return { ...state, loading: false }
        default:
            return state;
    }
};
export default postsReducer;