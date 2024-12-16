import React from "react";
import classNames from "classnames";
import styles from "./product-toolbar.module.css";
import Container from "@/app/(admin)/components/container/container";
import Button from "@/app/(admin)/components/button/button";
import SearchForm from "@/app/(admin)/components/search-form/search-form";

export interface ProductToolbarProps extends React.ComponentProps<"section"> {}

export default function ProductToolbar(props: ProductToolbarProps) {
  return (
    <section {...props} className={classNames(styles.toolbar, props.className)}>
      <Container className={styles.container}>
        <SearchForm />
        <div className={styles.buttonGroup}>
          <Button variant="outlined">Попередній перегляд</Button>
          <Button>Додати товар</Button>
        </div>
      </Container>
    </section>
  );
}
