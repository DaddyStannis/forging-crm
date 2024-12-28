import React from "react";
import classNames from "classnames";
import styles from "./table.module.css";

export interface TableRowProps extends React.ComponentProps<"tr"> {}

export default function TableRow(props: TableRowProps) {
  return <tr {...props} className={classNames(styles.row, props.className)} />;
}
