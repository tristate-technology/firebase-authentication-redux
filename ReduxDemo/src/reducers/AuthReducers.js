import ActionsType from '../actions/types';

const INITIAL_STATE = {
    name: '',
    loginEmail: '',
    regEmail: '',
    loginPass: '',
    regPass: '',
    token: {},
    errors: '',
    user: null,
    error: '',
    loading: false,
    isUser: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionsType.GET_TOKEN:
            return {
                ...state,
                token: action.token
            };
        case ActionsType.SAVE_TOKEN:
            return {
                ...state,
                token: action.token
            };
        case ActionsType.REMOVE_TOKEN:
            return {
                ...state,
                token: action.token
            };
        case ActionsType.LOADING:
            return {
                ...state,
                loading: action.isLoading
            };
        case ActionsType.ERROR:
            return {
                ...state,
                error: action.error
            };
        case ActionsType.NAME_CHANGED:
            return {
                ...state,
                name: action.payload
            }
        case ActionsType.EMAIL_CHANGED:
            let key = action.payload.key;
            return {
                ...state,
                [key]: action.payload.text,
            };
        case ActionsType.PASSWORD_CHANGED:
            let pkey = action.payload.pkey;
            return {
                ...state,
                [pkey]: action.payload.text,
            };
        case ActionsType.REGISTER_USER:
            return {
                ...state,
                loading: true
            };
        case ActionsType.REG_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                loading: false,
                regPass: '',
                regEmail: '',
                name: '',
                errors: ''

            };
        case ActionsType.LOGIN_USER:
            return {
                ...state,
                loading: true,
                error: ''
            };
        case ActionsType.LOGIN_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isUser: true,
                loading: false,
                loginPass: '',
                loginEmail: ''
            };
        case ActionsType.LOGIN_USER_FAIL:
            return {
                ...state,
                error: 'Authentication failed',
                loading: false,
                loginPass: '',
                isUser: false,
            };
        case ActionsType.REG_USER_FAIL:
            return {
                ...state,
                errors: 'Registration failed',
                loading: false,
                regPass: '',
                regEmail: '',
                name: ''
            };
        default:
            return state;
    }
}

