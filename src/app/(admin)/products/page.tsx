import Header from "../components/header/header";
import ProductTable from "./components/product-table/product-table";
import ProductToolbar from "./components/product-toolbar/product-toolbar";
import styles from "./page.module.css";

export default async function Products() {
  return (
    <>
      <Header pageName="Товари" />
      <main className={styles.main}>
        <ProductToolbar />
        <ProductTable />
      </main>
    </>
  );
}
