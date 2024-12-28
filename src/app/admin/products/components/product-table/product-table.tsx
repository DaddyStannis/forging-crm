import React from "react";
import styles from "./product-table.module.css";
import Table from "../../../components/table/table";
import TableHead from "../../../components/table/table-head";
import TableRow from "../../../components/table/table-row";
import TableCell from "../../../components/table/table-cell";
import TableBody from "../../../components/table/table-body";

export interface ProductTableProps extends React.ComponentProps<"section"> {}

export default function ProductTable(props: ProductTableProps) {
  return (
    <section {...props}>
      <Table className={styles.section}>
        <TableHead>
          <TableRow>
            <TableCell as="th" align="left">
              Категорія
            </TableCell>
            <TableCell as="th" align="left">
              Артикул
            </TableCell>
            <TableCell as="th">Матеріал</TableCell>
            <TableCell as="th">Ширина</TableCell>
            <TableCell as="th">Висота</TableCell>
            <TableCell as="th">Додатково</TableCell>
            <TableCell as="th">Діаметр</TableCell>
            <TableCell as="th">Вага</TableCell>
            <TableCell as="th">Ціна</TableCell>
            <TableCell as="th">Кількість</TableCell>
            <TableCell as="th">Зображення</TableCell>
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
