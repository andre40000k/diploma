import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/hooks";
import { Link } from "react-router-dom";
import Button from "./Button";
import { logout } from "../../store/slices/authSlices/loginSlice";

const Header = () => {
    const dispatch = useDispatch();
    const { user } = useAppSelector((state) => state.login)
    const handleLogout = () =>
    {
        dispatch(logout());
    }

    return (
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <nav className="flex gap-4">
            <Link to="/" className="text-blue-500 hover:text-blue-600">
              Main page
            </Link>
            {user && (
              <Link to="/dashboard" className="text-blue-500 hover:text-blue-600">
                Personal account
              </Link>
            )}
          </nav>

          <div className="flex gap-2">
            {user ? (
              <>
                <span className="text-gray-600">{user.email}</span>
                <Button variant="secondary" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button as={Link} to="/auth/login" variant="primary">
                  Login
                </Button>
                <Button as={Link} to="/auth/register" variant="secondary">
                  Sing up
                </Button>
              </>
            )}
          </div>
        </div>
      </header>
    );
};

export default Header;