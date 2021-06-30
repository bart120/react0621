

const INITIAL_STATE = {
    user: null,
    isConnected: false,
    token: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'AUTH_LOGIN':
            return { isConnected: true, user: action.payload };
        case 'AUTH_LOGOUT':
            return { isConnected: false, user: null, token: '' };
        default:
            return state;
    }

}