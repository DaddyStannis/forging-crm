import React from "react";
import classNames from "classnames";
import styles from "./table.module.css";

type TableCellOwnProps<El extends React.ElementType = React.ElementType> = {
  align?: "left" | "center" | "right";
  as?: El;
};

export type TableCellProps<El extends React.ElementType> =
  TableCellOwnProps<El> &
    Omit<React.ComponentProps<El>, keyof TableCellOwnProps>;

export default function TableCell<El extends React.ElementType = "td">({
  align = "center",
  as,
  ...props
}: TableCellProps<El>) {
  const Component = as || "td";
  return (
    <Component
      {...props}
      className={classNames(styles.cell, props.className, `align-${align}`)}
    />
  );
}
