import { useContext } from "react"
import { AuthContext } from "../auth"

import { Navigate } from "react-router-dom"

export const PrivateRoute = ({children}: {children: React.ReactNode}) => {

    const { logged } = useContext( AuthContext )

    return (logged)
        ? children
        : <Navigate to="/login" />
}// Nos vamos al app router y lo importamos y lo usamos en el router 
