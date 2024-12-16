import React from "react";
import classNames from "classnames";
import styles from "./table.module.css";

export interface TableCellProps extends React.ComponentProps<"td"> {
  align?: "left" | "center" | "right";
}

export default function TableCell({
  align = "center",
  ...props
}: TableCellProps) {
  return (
    <td
      {...props}
      className={classNames(styles.cell, props.className, `align-${align}`)}
    />
  );
}
