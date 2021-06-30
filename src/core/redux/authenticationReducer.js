

const INITIAL_STATE = {
    user: JSON.parse(sessionStorage.getItem('USER')),
    isConnected: sessionStorage.getItem('USER') !== null,
    token: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'AUTH_LOGIN':
            sessionStorage.setItem('USER', JSON.stringify(action.payload));
            return { isConnected: true, user: action.payload };
        case 'AUTH_LOGOUT':
            sessionStorage.removeItem('USER');
            return { isConnected: false, user: null, token: '' };
        default:
            return state;
    }

}