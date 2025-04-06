import {FC, ButtonHTMLAttributes} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

function Button({ 
    children, 
    variant = "primary", 
    className = "", 
    ...props }: ButtonProps) {

        const baseStyle = "px-4 py-2 rounded transition-colors";
        const variants = {
            primary: "",
            secondary: ""
        };

        return (
            <button
            {...props}
            className={`${baseStyle} ${variants[variant]} ${className}`}>{children}</button>
        );
};

export default Button;
