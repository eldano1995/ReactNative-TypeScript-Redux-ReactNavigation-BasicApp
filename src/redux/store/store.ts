// ==================================== RECOMENDED VARIANT ===============================================

import thunkMiddleware from 'redux-thunk'
// import { createLogger } from 'redux-logger'
import rootReducer from "../reducers/root.reducer";
import { createStore, applyMiddleware } from 'redux';
// https://www.npmjs.com/package/redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

// const loggerMiddleware = createLogger()

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(
        thunkMiddleware,
        // loggerMiddleware     // no need for this. 
    ),
));



// =========== MANULLY VARIANT (NOT RECOMMENDED WHEN USING TS BECAUSE OF THE WINDOW OBJETC) ===========

// import thunkMiddleware from 'redux-thunk'
// // import { createLogger } from 'redux-logger'
// import rootReducer from "../reducers/root.reducer";
// import { createStore, applyMiddleware, compose } from 'redux';

// // This is for Redux dev tools
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//     rootReducer, composeEnhancers(
//         applyMiddleware(
//             thunkMiddleware, 
//             // loggerMiddleware     // no need for this. 
//         ),
//     )   
// )

// ==================== WITHOUT REACT NATIVE DEBUGGER (REACT AND REDUX DEV EXTENSIONS ====================

// import thunkMiddleware from 'redux-thunk'
// import { createLogger } from 'redux-logger'
// import rootReducer from "../reducers/root.reducer";
// import { createStore, applyMiddleware } from 'redux';

// const loggerMiddleware = createLogger()

// const store = createStore(
//     rootReducer, applyMiddleware(
//         thunkMiddleware,
//         loggerMiddleware
//     )   
// )




export default store;