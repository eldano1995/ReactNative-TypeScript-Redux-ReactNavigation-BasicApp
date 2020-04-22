import { Action } from "redux"

// =================================================== ACTION LABELS =================================================== \\
export const SIGN_IN_REQUEST = "SIGN_IN_REQUEST";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_FAILURE = "SIGN_IN_FAILURE";

export const SIGN_OUT = "SIGN_OUT";
// =================================================== ACTION LABELS =================================================== \\


// =================================================== ACTION TYPES =================================================== \\
export type SIGN_IN_REQUEST = Action<typeof SIGN_IN_REQUEST>;
export type SIGN_IN_SUCCESS = Action<typeof SIGN_IN_SUCCESS>;
export type SIGN_IN_FAILURE = Action<typeof SIGN_IN_FAILURE>;
export type SIGN_IN = SIGN_IN_REQUEST | SIGN_IN_SUCCESS | SIGN_IN_FAILURE

export type SIGN_OUT = Action<typeof SIGN_OUT>;
// =================================================== ACTION TYPES =================================================== \\



