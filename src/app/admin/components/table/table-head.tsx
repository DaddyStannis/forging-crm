import React from "react";
import classNames from "classnames";
import styles from "./table.module.css";

export interface TableHeadProps extends React.ComponentProps<"thead"> {}

export default function TableHead(props: TableHeadProps) {
  return (
    <thead {...props} className={classNames(styles.head, props.className)} />
  );
}
