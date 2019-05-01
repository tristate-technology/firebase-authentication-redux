const AuthActions = {
    NAME_CHANGED: 'name_changed',
    EMAIL_CHANGED: 'email_changed',
    PASSWORD_CHANGED: 'password_changed',
    REGISTER_USER: 'register_user',
    LOGIN_USER_SUCCESS: 'login_user_success',
    REG_USER_SUCCESS: 'reg_user_success',
    LOGIN_USER_FAIL: 'login_user_fail',
    REG_USER_FAIL: 'reg_user_fail',
    LOGIN_USER: 'login_user',
    GET_TOKEN: 'get_token',
    SAVE_TOKEN: 'save_token',
    REMOVE_TOKEN: 'remove_token',
    LOADING: 'loading',
    ERROR: 'error',
}

const ActionsType = {
    ...AuthActions,
}

export default ActionsType;