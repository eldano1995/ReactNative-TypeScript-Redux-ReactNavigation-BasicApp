import { combineReducers } from "redux";
/*
Most applications deal with multiple types of data, which can be broadly divided into three categories:
    - Domain data: data that the application needs to show, use, or modify (such as "all of the Todos retrieved from the server")    
    - App state: data that is specific to the application's behavior (such as "Todo #5 is currently selected", or "there is a request
    in progress to fetch Todos")    
    - UI state: data that represents how the UI is currently displayed (such as "The EditTodo modal dialog is currently open")

A typical app's state shape might look roughly like:
    {
        domainData1 : {}, domainData2 : {},
        ui : { 
            uiState1 : {},  uiState2 : {}, 
        }
    }
*/

// import Domain Reducers
import userReducer from "./domain/user.reducer"

// app and ui state reducers
import appUiReducer from "./appUi/appUi.reducer";


const rootReducer = combineReducers({
    user: userReducer,
    appUI: appUiReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;