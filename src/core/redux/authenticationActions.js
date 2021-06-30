

export const login = (payload) => ({
    payload: payload,
    type: 'AUTH_LOGIN'
});

export const logout = (payload) => ({
    //payload: payload,
    type: 'AUTH_LOGOUT'
});