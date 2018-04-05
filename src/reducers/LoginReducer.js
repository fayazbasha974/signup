import { USER_LOGIN } from '../constants/Constants';

const initialState = {
    userDetails : []
};

export default function(state = initialState, action) {
    switch(action.type){
        case USER_LOGIN:
        return {
            ...state,
            userDetails: action.data
        }
        default:
        return state;
    }
};