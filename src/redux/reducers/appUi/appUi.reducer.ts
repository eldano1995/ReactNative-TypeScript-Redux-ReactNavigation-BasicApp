import { combineReducers } from "redux";

// app and ui state reducers
import signIn_Screen_Reducer from "./SignIn_Screen.reducer";


const appUiReducer = combineReducers({
    SignIn_Screen: signIn_Screen_Reducer    
})

export type RootState = ReturnType<typeof appUiReducer>

export default appUiReducer;