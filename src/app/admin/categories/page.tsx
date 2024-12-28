import CategoryTable from "./components/category-table/category-table";
import CategoryToolbar from "./components/category-toolbar/category-toolbar";

export default async function Categories() {
  return (
    <>
      <CategoryToolbar />
      <CategoryTable />
    </>
  );
}
