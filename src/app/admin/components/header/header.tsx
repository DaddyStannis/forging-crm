import classNames from "classnames";
import styles from "./header.module.css";

export interface HeaderProps extends React.ComponentProps<"header"> {
  pageName: string;
}

export default function Header({ pageName, ...props }: HeaderProps) {
  return (
    <header {...props} className={classNames(styles.header, props.className)}>
      <h2 className={styles.heading}>{pageName}</h2>
    </header>
  );
}
