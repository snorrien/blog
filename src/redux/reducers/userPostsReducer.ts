import { Post } from "../../models/Post";
import { GET_USERPOSTS_LOADED, GET_USERPOSTS_REQUEST, SET_USERPOSTS } from "../constants";

interface PostsState {
    posts: Post[],
    loading: boolean
}

const initialState: PostsState = {
    posts: [],
    loading: false
}

const userPostsReducer = (state: PostsState = initialState, action: any) => {
    switch (action.type) {
        case SET_USERPOSTS:
            return { ...state, posts: action.posts }
        case GET_USERPOSTS_REQUEST:
            return { ...state, loading: true }
        case GET_USERPOSTS_LOADED:
            return { ...state, loading: false }
        default:
            return state;
    }
};
export default userPostsReducer;