import { Reducer } from "redux";
import { SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAILURE } from "../../types/user.types"


// Convention name: <REDUCER_NAME_IN_CAPS>_DATA_TYPE
export type SIGN_IN_SCREEN_REDUCER_DATA_TYPE = {
    loading: boolean, errorMessage?: string,
}

const initialState: SIGN_IN_SCREEN_REDUCER_DATA_TYPE = {
    loading: false, errorMessage: undefined,
}

// Convention name: <REDUCER_NAME_IN_CAPS>_ACTION_TYPES
export type SIGN_IN_SCREEN_REDUCER_ACTION_TYPES = SIGN_IN_REQUEST | SIGN_IN_SUCCESS | SIGN_IN_FAILURE


// ====================================================== REDUCER ====================================================== \\
const SignIn_Screen_Reducer: Reducer<
    SIGN_IN_SCREEN_REDUCER_DATA_TYPE, SIGN_IN_SCREEN_REDUCER_ACTION_TYPES
> = (state=initialState, action) => 
{
	switch (action.type) {
        case SIGN_IN_REQUEST: {
            return { ...state, loading: true };
        }

        case SIGN_IN_SUCCESS: {
            return { ...state, loading: false, errorMessage: undefined };
        }
			
		case SIGN_IN_FAILURE: {
            return { 
                ...state, loading: false, errorMessage: "Something went wrong"
            };
        }

		default:
			return state
	}
}
// ====================================================== REDUCER ====================================================== \\

export default SignIn_Screen_Reducer