import { AuthContext } from "./AuthContext"
import { ReactNode, useReducer } from "react"
import { authReducer } from "./authReducer"

import { types } from ".."

const initialState = {
    logged: false,
    user: null
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    
    const [ authState, dispatch ] = useReducer( authReducer, initialState);

    const login = async ( name = '' ) => {
        const action = {
            type: types.login,
            payload: {
                id: 'ABC',
                name:name
            }
        }
        dispatch( action );
    }
    
    return (
        <AuthContext.Provider value={{
            ...authState,
            login: login
        }}>
            {children}
        </AuthContext.Provider>
    )
}
