import React from "react";
import "../Style/Button.css";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  icon: Icon, // componente de icono
  iconPosition = "left", // "left" | "right"
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${variant} ${disabled ? "btn-disabled" : ""} ${className}`}
    >
      {iconPosition === "left" && Icon && (
        <span className="btn-icon">
          <Icon />
        </span>
      )}

      <span>{children}</span>

      {iconPosition === "right" && Icon && (
        <span className="btn-icon">
          <Icon />
        </span>
      )}
    </button>
  );
};

export default Button;