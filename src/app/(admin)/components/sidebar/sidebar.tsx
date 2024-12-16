import styles from "./sidebar.module.css";
import Navbar from "./navbar";
import OpenBookIcon from "../../../../assets/icons/book-open.svg";
import Squares2x2Icon from "../../../../assets/icons/squares-2x2.svg";

export interface SidebarProps extends React.ComponentProps<"aside"> {}

const NAV_ITEMS = [
  {
    link: "/categories",
    label: "Категорії товарів",
    icon: <OpenBookIcon />,
  },
  {
    link: "/products",
    label: "Товари",
    icon: <Squares2x2Icon />,
  },
];

export default function Sidebar(props: SidebarProps) {
  return (
    <aside className={styles.sidebar}>
      <Navbar items={NAV_ITEMS} />
    </aside>
  );
}
