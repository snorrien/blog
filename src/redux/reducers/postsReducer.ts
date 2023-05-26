import { Post } from "../../models/Post";

interface PostsState {
    posts: Post[]
}

const initialState: PostsState = {
    posts: []
}

const postsReducer = (state: PostsState = initialState, action: any) => {
    switch (action.type) {
        case 'SET_POSTS':
            return { ...state, posts: action.posts }
        default:
            return state;
    }
};
export default postsReducer;