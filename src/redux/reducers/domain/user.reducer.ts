import { Reducer } from "redux";
import { SIGN_IN_SUCCESS, SIGN_OUT } from "../../types/user.types"

// Convention name: <REDUCER_NAME_IN_CAPS>_DATA_TYPE
export type USER_REDUCER_DATA_TYPE = {
    isAuthenticated: boolean, 
    userToken?: string,
}

const initialState: USER_REDUCER_DATA_TYPE = {
    isAuthenticated: false, 
    userToken: undefined,  
}

// Convention name: <REDUCER_NAME_IN_CAPS>_ACTION_TYPES
type USER_REDUCER_ACTION_TYPES = SIGN_IN_SUCCESS | SIGN_OUT


// ====================================================== REDUCER ====================================================== \\
const userReducer: Reducer<
    USER_REDUCER_DATA_TYPE, USER_REDUCER_ACTION_TYPES
> = (state=initialState, action) => 
{
	switch (action.type) {
        case SIGN_IN_SUCCESS: {
            return {  
                ...state, isAuthenticated: true, userToken: "askaj78a9495b98714jwjasyd7812"
            };
        }
			
		case SIGN_OUT: {
            return { 
                ...state, isAuthenticated: false, userToken: undefined 
            };
        }
            
		default:
			return state
	}
}
// ====================================================== REDUCER ====================================================== \\

export default userReducer