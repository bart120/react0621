
const INITIAL_STATE = {
    title: '',
    message: '',
    show: false
}

export default (state = INITIAL_STATE, action) => {
    //console.log(action);
    switch (action.type) {
        case 'SHOW':
            return { show: true, title: action.payload.title, message: action.payload.message };
            break;
        case 'HIDE':
            return { show: false, title: '', message: '' };
            break;

        default:
            return state;
    }
}

//export default toastReducer;