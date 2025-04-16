import { Link, useLocation } from "react-router-dom";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname.includes("login");

  return (
    <div>
      <h1>
        {isLogin ? "Login" : "Sign up"}
      </h1>

      {isLogin ? <LoginForm /> : <RegisterForm />}

      <div>
        <span>{isLogin ? "Don't have an account?" : "Already have an account?"}</span>
        <Link to={isLogin ? "/auth/register" : "/auth/login"} className="">
          {isLogin ? "Sign up" : "Login"}
        </Link>
      </div>
    </div>
  );
};

export default Auth;
