import { GET_COMMENTS_REQUEST, GET_COMMENTS_LOADED, SET_COMMENTS } from "../constants";

interface CommentsState {
    comments: Comment[],
    loading: boolean
}

const initialState: CommentsState = {
    comments: [],
    loading: false
}

const commentsReducer = (state: CommentsState = initialState, action: any) => {
    switch (action.type) {
        case SET_COMMENTS:
            return { ...state, comments: action.comments }
        case GET_COMMENTS_REQUEST:
            return { ...state, loading: true }
        case GET_COMMENTS_LOADED:
            return { ...state, loading: false }
        default:
            return state;
    }
};
export default commentsReducer;
