import { AsyncStorage, Alert } from 'react-native';
import firebase from 'firebase';

import ActionsType from './types';
import NavigationService from '../utilites/NavigationService';

// action when email change
export const emailChanged = (text, key) => {
    return {
        type: ActionsType.EMAIL_CHANGED,
        payload: { text, key }
    }
}

// action when password change
export const passwordChanged = (text, pkey) => {
    return {
        type: ActionsType.PASSWORD_CHANGED,
        payload: { text, pkey }
    }
}

// action when user logins successfully
const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: ActionsType.LOGIN_USER_SUCCESS,
        payload: user,
    })
    NavigationService.resetnavigation('home');
}

//action when user fails to login 
const loginUserFail = (dispatch) => {
    dispatch({ type: ActionsType.LOGIN_USER_FAIL });
}

//login user action
export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: ActionsType.LOGIN_USER })
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                if (user.user.uid) {
                    dispatch(saveUserToken())
                    NavigationService.navigate('App')
                    loginUserSuccess(dispatch, user)
                }
            }).catch((error) => loginUserFail(dispatch));
    };
};

// register name change action
export const nameChanged = (text) => {
    return {
        type: ActionsType.NAME_CHANGED,
        payload: text
    }
}

// register success action
const regUserSuccess = (dispatch, user) => {
    console.log("regUserSuccess", user);
    dispatch({
        type: ActionsType.REG_USER_SUCCESS,
        payload: user,
    })
    Alert.alert('User registered successfully!!')
    NavigationService.navigate('login');
}

// Register user action
export const registerUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: ActionsType.REGISTER_USER })
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => regUserSuccess(dispatch, user))
            .catch((error) => {
                console.log('error', error)
                if (error.code === 'auth/email-already-in-use') {
                    alert('Email already in use, Please use another email');
                }
                regUserFail(dispatch)
            });
    }
}

// fail to register action
const regUserFail = (dispatch) => {
    dispatch({ type: ActionsType.REG_USER_FAIL });
}

// async store token
export const getToken = (token) => ({
    type: ActionsType.GET_TOKEN,
    token,
});

// save user token
export const saveToken = token => ({
    type: ActionsType.SAVE_TOKEN,
    token
});

// remove token when user logs out
export const removeToken = () => ({
    type: ActionsType.REMOVE_TOKEN,
});


// loading data
export const loading = bool => ({
    type: ActionsType.LOADING,
    isLoading: bool,
});

export const error = error => ({
    type: ActionsType.ERROR,
    error,
});

// get user token 
export const getUserToken = () => dispatch =>
    AsyncStorage.getItem('userToken')
        .then((data) => {
            dispatch(loading(false));
            dispatch(getToken(data));
        })
        .catch((err) => {
            dispatch(loading(false));
            dispatch(error(err.message || 'ERROR'));
        })

// save user token
export const saveUserToken = (data) => dispatch =>
    AsyncStorage.setItem('userToken', 'abc')
        .then((data) => {
            dispatch(loading(true));
            dispatch(saveToken('token'));
        })
        .catch((err) => {
            dispatch(loading(false));
            dispatch(error(err.message || 'ERROR'));
        })

// remove token
export const removeUserToken = () => dispatch =>
    AsyncStorage.removeItem('userToken')
        .then((data) => {
            dispatch(loading(false));
            dispatch(removeToken(data));
        })
        .catch((err) => {
            dispatch(loading(false));
            dispatch(error(err.message || 'ERROR'));
        })