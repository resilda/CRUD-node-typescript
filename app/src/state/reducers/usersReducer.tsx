import * as actionTypes from '../actions/actionTypes';
import { InitialStateProps } from '../types/types';

const initialState: InitialStateProps = {
    loading: false,
    userData: [],
    error: null,
    fetchUser: {},
    addUser: {},
};

function usersReducer(state = initialState, action: any) {
    if (action.type === actionTypes.FETCH_DATA_REQUEST) {
        return {
            ...state,
            loading: true
        };
    }

    if (action.type === actionTypes.FETCH_DATA_SUCCESS) {
        return {
            ...state,
            loading: false,
            userData: action.payload
        };
    }

    if (action.type === actionTypes.FETCH_DATA_FAILURE) {
        return {
            ...state,
            userData: [],
            error: action.payload
        };
    }

    if (action.type === actionTypes.FETCH_A_USER) {
        return {
            ...state,
            fetchUser: action.payload
        }
    }

    if (action.type === actionTypes.ADD_USER) {
        //check if the user has been added before
        return {
            ...state,
            addUser: action.payload
        }
    }

    //update user

    if (action.type === actionTypes.DELETE_USER) {
        return {
            ...state,
            userData: state.userData.filter((user) => user.id !== action.payload.id)
        }
    }

    return state;
}

export default usersReducer;
