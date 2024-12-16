import React from "react";
import classNames from "classnames";
import styles from "./table.module.css";

export interface TableFootProps extends React.ComponentProps<"tfoot"> {}

export default function TableFoot(props: TableFootProps) {
  return (
    <tfoot {...props} className={classNames(styles.foot, props.className)} />
  );
}
