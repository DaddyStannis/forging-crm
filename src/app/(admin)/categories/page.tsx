import Header from "../components/header/header";
import styles from "./page.module.css";

export default async function Categories() {
  return (
    <>
      <Header pageName="Категорії товарів" />
      <main className={styles.main}></main>
    </>
  );
}
