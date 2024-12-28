import React from "react";
import classNames from "classnames";
import styles from "./container.module.css";

export interface ContainerProps extends React.ComponentProps<"div"> {}

export default function Container(props: ContainerProps) {
  return (
    <div {...props} className={classNames(styles.container, props.className)} />
  );
}
