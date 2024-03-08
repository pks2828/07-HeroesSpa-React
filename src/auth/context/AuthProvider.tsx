import { AuthContext } from "./AuthContext"
import { ReactNode, useReducer } from "react"
import { authReducer } from "./authReducer"

import { types } from ".."

const initialState = {
    logged: false,
    user: null
}

const init = () => {
    const user = JSON.parse(localStorage.getItem('user') ?? 'null');
    return {
        logged: !!user,
        user: user
    }
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    
    const [ authState, dispatch ] = useReducer( authReducer, initialState, init);

    const login = async ( name = '' ) => {

        const user = { id: 'ABC', name: name }
        const action = {type: types.login, payload: user}
        
        localStorage.setItem('user', JSON.stringify(user));
        
        dispatch( action );
    }

    const logout = () => {
        localStorage.removeItem('user');
        const action = {type: types.logout}
        dispatch(action);
    }
    
    return (// lo que se hace aqui es que se envuelve el children con el AuthContext.Provider y se le pasa el value que es el estado y las funciones que se van a utilizar
        <AuthContext.Provider value={{
            // Estado de autenticación y usuario
            ...authState,
            //Metodos de autenticación 
            login: login,
            logout: logout
        }}> 
            {/* se le pasa el children que es el componente que se va a renderizar  */}
            {children}
        </AuthContext.Provider>
    )
}
