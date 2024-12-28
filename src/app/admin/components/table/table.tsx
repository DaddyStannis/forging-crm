import React from "react";
import classNames from "classnames";
import styles from "./table.module.css";

export interface TableProps extends React.ComponentProps<"table"> {}

export default function Table(props: TableProps) {
  return (
    <section className={styles.overlay}>
      <table
        {...props}
        cellSpacing={1}
        className={classNames(styles.table, props.className)}
      />
    </section>
  );
}
