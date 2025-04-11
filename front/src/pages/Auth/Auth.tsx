import { useState } from "react"
import { Link, useLocation } from "react-router";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Auth = () => {
    const location = useLocation();
    const [isLogin, setIsLogin] = useState(location.pathname.includes('login'));
    return(
        <div>
            <h1>
                {isLogin ? 'Login' : 'Sing up'}
            </h1>

            {isLogin ? <LoginForm/> : <RegisterForm/>}

            <div>
                <span>
                    {isLogin? 'Do not you have an account?' : 'Do you hav an account?'}
                </span>
                <Link
                to={isLogin ? '/auth/register' : '/auth/login'}
                className=""
                onClick={() => setIsLogin(!isLogin)}
                >
                    {isLogin ? 'Sing up' : 'Login'}

                </Link>
            </div>
        </div>
    );
}

export default Auth;