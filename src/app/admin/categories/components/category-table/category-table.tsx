import React from "react";
import styles from "./category-table.module.css";
import Table from "../../../components/table/table";
import TableHead from "../../../components/table/table-head";
import TableRow from "../../../components/table/table-row";
import TableCell from "../../../components/table/table-cell";
import TableBody from "../../../components/table/table-body";

export interface CategoryTableProps extends React.ComponentProps<"table"> {}

export default function CategoryTable(props: CategoryTableProps) {
  return (
    <Table {...props}>
      <TableHead>
        <TableRow>
          <TableCell as="th" align="left">
            Категорія
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell align="left">Піки</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
