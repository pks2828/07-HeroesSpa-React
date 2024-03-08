import { useContext } from "react";
import { AuthContext } from "../auth";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({children}: {children: React.ReactNode}) => {

    const { logged } = useContext(AuthContext);

    return (!logged)
        ? children
        : <Navigate to="/marvel" /> // Redirige a la página de inicio o dashboard si el usuario ya está autenticado
}