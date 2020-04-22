// import userService from "../../services/user.service"
import {  
    SIGN_IN, SIGN_IN_REQUEST, SIGN_IN_SUCCESS, 
    SIGN_IN_FAILURE, SIGN_OUT,
} from "../types/user.types"

import { CustomThunkAction, CustomThunkDispatch } from "../types/common.types"


// ================================================== ACTION CREATORS ================================================== \\
type SignOut = () => SIGN_OUT
export const SignOut: SignOut = () => {
    return { type: SIGN_OUT }
}
// ================================================== ACTION CREATORS ================================================== \\


// ================================================== THUNK ACTIONS CREATORS ================================================== \\
type SignIn = (email: string, password: string) => CustomThunkAction<SIGN_IN>

export const SignIn = (email: string, password: string) => {
    
    type request = (email: string, password: string) => SIGN_IN_REQUEST
    const request: request = (email, password) => {
        return { type: SIGN_IN_REQUEST}
    }

    type success = () => SIGN_IN_SUCCESS
    const success: success = () => {
        return { type: SIGN_IN_SUCCESS }
    }

    type failure = () => SIGN_IN_FAILURE
    const failure: failure = () => {
        return { type: SIGN_IN_FAILURE }
    }

    return (dispatch: CustomThunkDispatch<SIGN_IN>) => {
        dispatch(request(email, password));

        // To try out without actually making API Calls
        const error_probability = Math.random();
        if (error_probability > 0.5) {
            dispatch(success())
        }
        else { dispatch(failure()) }
        
        // userService.signIn(email, password).then(
        //     (resp: any) => { dispatch(success()) },
        //     (error: any) => { dispatch(failure()) }
        // )
    }
}
// ================================================== THUNK ACTIONS CREATORS ================================================== \\


export const userActions = { SignIn, SignOut }