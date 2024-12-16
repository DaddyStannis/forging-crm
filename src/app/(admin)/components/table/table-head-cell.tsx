import React from "react";
import classNames from "classnames";
import styles from "./table.module.css";

export interface TableHeadCellProps extends React.ComponentProps<"th"> {}

export default function TableHeadCell(props: TableHeadCellProps) {
  return <th {...props} className={classNames(styles.cell, props.className)} />;
}
