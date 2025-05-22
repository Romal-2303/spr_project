import { cn } from "@/utility/cn";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  customClassName?: string;
  buttonStyle?:
    | "primary"
    | "secondary"
    | "outline"
    | "warning"
    | "success"
    | "danger";
  onClick?: () => void;
  disabled?: boolean;
  buttonType?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg";
}

const V2_Button = ({
  children,
  customClassName = "",
  buttonStyle = "primary",
  disabled = false,
  buttonType = "button",
  size = "md",
  onClick,
}: ButtonProps) => {
  const baseStyles = "rounded font-medium";

  const buttonStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-100 text-black hover:bg-gray-200",
    outline: "border border-gray-400 text-black hover:bg-gray-100",
    warning: "bg-yellow-500 hover:bg-yellow-600 text-white",
    success: "bg-green-600 hover:bg-green-700 text-white",
    danger: "bg-red-600 hover:bg-red-700 text-white",
  };

  const sizes = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-5 py-3",
  };

  return (
    <button
      type={buttonType}
      onClick={onClick}
      className={cn(
        baseStyles,
        buttonStyles[buttonStyle],
        sizes[size],
        disabled && "opacity-50 cursor-not-allowed",
        customClassName
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default V2_Button;
