interface CommentsState {
    comments: Comment[]
}

const initialState: CommentsState = {
    comments: []
}

const commentsReducer = (state: CommentsState = initialState, action: any) => {
    switch (action.type) {
        case 'SET_COMMENTS':
            return { ...state, comments: action.comments }
        default:
            return state;
    }
};
export default commentsReducer;