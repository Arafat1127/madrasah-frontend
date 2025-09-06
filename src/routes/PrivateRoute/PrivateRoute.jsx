import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../../utilites/auth";

const PrivateRoute = ({ children }) => {
    if (!isLoggedIn()) {
        return <Navigate to="/admin/login" replace />;
    }
    return children;
};

export default PrivateRoute;
