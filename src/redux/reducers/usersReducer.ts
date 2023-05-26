import { User } from "../../models/User";

interface UsersState {
    users: User[]
}

const initialState: UsersState = {
    users: []
}

const usersReducer = (state: UsersState = initialState, action: any) => {
    switch (action.type) {
        case 'SET_USERS':
            return { ...state, users: action.users }
        default:
            return state;
    }
};
export default usersReducer;