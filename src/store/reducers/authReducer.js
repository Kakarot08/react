const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LogIn_Error':
            console.log('LogIn Error')
            return {
                ...state,
                authError: 'Login Failed'
            }
        case 'LogIn_Success':
            console.log('LogIn Success')
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS': 
            console.log('signout success');
            return state;
        default: 
            return state;
    }
}

export default authReducer