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
        case 'SIGNUP_SUCCESS':
            console.log('signup success');
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR': 
            console.log('signup error');
            return {
                ...state,
                authError: action.err.message
            }
        default: 
            return state;
    }
}

export default authReducer