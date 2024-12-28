import React from "react";
import Link from "next/link";
import classNames from "classnames";
import styles from "./category-toolbar.module.css";
import Container from "@/app/admin/components/container/container";
import SearchForm from "@/app/admin/components/search-form/search-form";
import Button from "@/app/admin/components/button/button";

export interface CategoryToolbarProps extends React.ComponentProps<"menu"> {}

export default function CategoryToolbar(props: CategoryToolbarProps) {
  return (
    <menu {...props} className={classNames(styles.toolbar, props.className)}>
      <Container className={styles.container}>
        <SearchForm />
        <div className={styles.buttonGroup}>
          <Link href="categories/create">
            <Button>Додати категорію</Button>
          </Link>
        </div>
      </Container>
    </menu>
  );
}
