import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "success";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = ({
  className = "",
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonProps) => {
  const baseStyles = `
    cursor-pointer border-2 border-black shadow-[4px_4px_0px_0px_rgb(0,0,0)]
    font-bold transition duration-200 hover:translate-y-1
    active:translate-y-2 active:translate-x-1 active:shadow-none
  `;

  const variantStyles = {
    primary: "bg-[#ffdb33] text-black hover:bg-[#fc0]",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
    success: "bg-green-500 text-white hover:bg-green-600",
  };

  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-6 py-2 text-base",
    lg: "px-8 py-3 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
