import React from "react";
import styles from "./product-table.module.css";
import Table from "../../../components/table/table";
import TableHead from "../../../components/table/table-head";
import TableHeadCell from "../../../components/table/table-head-cell";
import TableRow from "../../../components/table/table-row";
import TableCell from "../../../components/table/table-cell";
import TableBody from "../../../components/table/table-body";

export interface ProductTableProps extends React.ComponentProps<"div"> {}

export default function ProductTable(props: ProductTableProps) {
  return (
    <section className={styles.section}>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell align="left">Категорія</TableHeadCell>
            <TableHeadCell align="left">Артикул</TableHeadCell>
            <TableHeadCell>Матеріал</TableHeadCell>
            <TableHeadCell>Ширина</TableHeadCell>
            <TableHeadCell>Висота</TableHeadCell>
            <TableHeadCell>Додатково</TableHeadCell>
            <TableHeadCell>Діаметр</TableHeadCell>
            <TableHeadCell>Вага</TableHeadCell>
            <TableHeadCell>Ціна</TableHeadCell>
            <TableHeadCell>Кількість</TableHeadCell>
            <TableHeadCell>Зображення</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="left">Піки</TableCell>
            <TableCell align="left">40.048</TableCell>
            <TableCell>Сталь</TableCell>
            <TableCell>110</TableCell>
            <TableCell>55</TableCell>
            <TableCell>Товщина</TableCell>
            <TableCell>20</TableCell>
            <TableCell>0.105</TableCell>
            <TableCell>99.99</TableCell>
            <TableCell>999</TableCell>
            <TableCell>Зображення</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left">Піки</TableCell>
            <TableCell align="left">40.048</TableCell>
            <TableCell>Сталь</TableCell>
            <TableCell>110</TableCell>
            <TableCell>55</TableCell>
            <TableCell>Товщина</TableCell>
            <TableCell>20</TableCell>
            <TableCell>0.105</TableCell>
            <TableCell>99.99</TableCell>
            <TableCell>999</TableCell>
            <TableCell>Зображення</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left">Піки</TableCell>
            <TableCell align="left">40.048</TableCell>
            <TableCell>Сталь</TableCell>
            <TableCell>110</TableCell>
            <TableCell>55</TableCell>
            <TableCell>Товщина</TableCell>
            <TableCell>20</TableCell>
            <TableCell>0.105</TableCell>
            <TableCell>99.99</TableCell>
            <TableCell>999</TableCell>
            <TableCell>Зображення</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  );
}
