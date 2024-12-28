import React from "react";
import classNames from "classnames";
import styles from "./button.module.css";

export interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: "filled" | "outlined";
}

export default function Button({ variant = "filled", ...props }: ButtonProps) {
  return (
    <button
      type="button"
      {...props}
      className={classNames(styles.button, props.className, {
        filled: variant === "filled",
        outlined: variant === "outlined",
      })}
    />
  );
}
