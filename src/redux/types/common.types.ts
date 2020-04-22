import { ThunkAction, ThunkDispatch } from "redux-thunk";
// Import using alfabethical order, making thinks easy to find
import { Action, ActionCreator } from "redux";
import { RootState } from "../reducers/root.reducer";
  

export type CustomThunkAction< ActionType=Action<any>, ReturnType=void > = (
    ActionCreator< ThunkAction< ReturnType, RootState, unknown, ActionType > >
)

export type CustomThunkDispatch< ActionType=Action<string> > = ThunkDispatch< RootState, unknown, ActionType>