import { authService } from "../services/Auth.service";

const loggedUser = { user: null };

export const auth = (state = loggedUser, action) => {
    switch (action.type) {
        case 'Disconnect':
            return { ...state, user: null };
        case 'Connect':
            return {...state, user: action.user};
        default:
            return state;
    }
};