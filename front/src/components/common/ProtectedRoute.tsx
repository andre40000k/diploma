import { useSelector } from "react-redux"
import { RootState } from "../../store/store";
import { Navigate, Outlet, useLocation } from "react-router";

const ProtectedRoute = () =>
{
    const { user } = useSelector((state: RootState) => state.login);
    const location = useLocation();

    return user ? (<Outlet/>) : (<Navigate to="auth/login" state={{from: location}} replace/>)
}

export default ProtectedRoute;