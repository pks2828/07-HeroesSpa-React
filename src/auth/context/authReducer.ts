import { types } from "../types/types";
//! En el reducer nunca se debe llamar infromacion que se encuentre fuera del reducer 

interface AuthState {
    // Define the properties of the state 
    logged?: boolean;
    user: string | null; 
}

interface AuthAction {
    type: string;
    payload?: unknown;
}



export const authReducer = (state: AuthState = { logged: false, user: null }, action: AuthAction): AuthState => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload as string
            };

        case types.logout:
            return {
                ...state,
                logged: false,
                user: null
            };

        default:
            return state;
    }
}