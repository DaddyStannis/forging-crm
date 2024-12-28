import React from "react";
import classNames from "classnames";
import styles from "./circle-button.module.css";

export interface CircleButtonProps extends React.ComponentProps<"button"> {}

export default function CircleButton(props: CircleButtonProps) {
  return (
    <button {...props} className={classNames(styles.button, props.className)} />
  );
}
