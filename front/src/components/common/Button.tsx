import { ButtonHTMLAttributes, AnchorHTMLAttributes, ElementType, forwardRef } from "react";
import { Link, LinkProps } from "react-router-dom";

type ButtonVariant = "primary" | "secondary";

interface BaseButtonProps {
  variant?: ButtonVariant;
  as?: ElementType;
  className?: string;
  to?: string;
}

type ButtonProps = BaseButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "as" | "className">;

type AnchorButtonProps = BaseButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "as" | "className">;

type RouterLinkButtonProps = BaseButtonProps & Omit<LinkProps, "as" | "className" | "variant">;

type PolymorphicButtonProps = ButtonProps | AnchorButtonProps | RouterLinkButtonProps;

const Button = forwardRef<HTMLElement, PolymorphicButtonProps>(function Button(
  { as: Component = "button", children, variant = "primary", className = "", ...props },
  ref
) {
  const baseStyle = "px-4 py-2 rounded transition-colors";
  const variants = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-black",
  };

  return (
    <Component
      ref={ref}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      to={(props as RouterLinkButtonProps).to}
      {...props}
    >
      {children}
    </Component>
  );
});

export default Button;
