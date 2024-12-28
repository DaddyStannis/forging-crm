import React from "react";
import Link from "next/link";
import classNames from "classnames";
import styles from "./product-toolbar.module.css";
import Container from "../../../components/container/container";
import Button from "../../../components/button/button";
import SearchForm from "../../../components/search-form/search-form";

export interface ProductToolbarProps extends React.ComponentProps<"menu"> {}

export default function ProductToolbar(props: ProductToolbarProps) {
  return (
    <menu {...props} className={classNames(styles.toolbar, props.className)}>
      <Container className={styles.container}>
        <SearchForm />
        <div className={styles.buttonGroup}>
          <Link href="products/preview">
            <Button variant="outlined">Попередній перегляд</Button>
          </Link>
          <Button>Додати товар</Button>
        </div>
      </Container>
    </menu>
  );
}
