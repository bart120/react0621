

export const displayToast = (payload) => ({
    payload: payload,
    type: 'SHOW'
});

export const hideToast = (payload) => ({
    type: 'HIDE'
});