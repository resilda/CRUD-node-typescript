import * as actionTypes from './actionTypes';
import axios from 'axios';

// const USERS_API = process.env.REACT_APP_USERS_API;

export function fetchDataRequest() {
    return {
        type: actionTypes.FETCH_DATA_REQUEST
    }
}

export function fetchDataSuccess(userData) {
    return {
        type: actionTypes.FETCH_DATA_SUCCESS,
        payload: userData
    }
}

export function fetchDataFailure(error: string) {
    return {
        type: actionTypes.FETCH_DATA_FAILURE,
        payload: error
    }
}

export function fetchAUser(userID) {
    return {
        type: actionTypes.FETCH_A_USER,
        payload: {
            id: userID
        }
    }
}

export function addUser(user) {
    return {
        type: actionTypes.ADD_USER,
        payload: user
    }
}

export function updateUser(user) { //maybe userID
    return {
        type: actionTypes.UPDATE_USER,
        payload: user
    }
}

export function deleteUser(userID) {
    return {
        type: actionTypes.DELETE_USER,
        payload: {
            id: userID
        }
    }
}

export function fetchData() {
    return async function (dispatch: any) {
        dispatch(fetchDataRequest());
        try {
            const response: any = await axios.get("http://localhost:4000/users");
            dispatch(fetchDataSuccess(response.data));
        } catch (error) {
            dispatch(fetchDataFailure(error));
        }
    };
}
