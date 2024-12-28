import React from "react";
import classNames from "classnames";
import styles from "./table.module.css";

export interface TableBodyProps extends React.ComponentProps<"tbody"> {}

export default function TableBody(props: TableBodyProps) {
  return (
    <tbody {...props} className={classNames(styles.body, props.className)} />
  );
}
