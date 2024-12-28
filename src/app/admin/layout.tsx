import Sidebar from "./components/sidebar/sidebar";
import styles from "./layout.module.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.wrapper}>{children}</div>
    </div>
  );
}
