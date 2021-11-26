import { UserContext } from '../../context/UserContext';
import Login from './Login';
import { useContext } from "react";

export default function RequireLogin ({ children }) {
    const { isLoggedIn } = useContext(UserContext);
    return isLoggedIn ? children : <Login />
}