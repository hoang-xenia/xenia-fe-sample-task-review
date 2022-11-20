import React from "react";
import "./styles.css";

type ButtonProps = {
  children: JSX.Element;
  onClick?: () => void;
};

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
