import React from "react";
import { Field } from "formik";
import classNames from "classnames";
import styles from "./input-field.module.css";

export interface InputFieldProps extends React.ComponentProps<"input"> {}

export default function InputField(props: InputFieldProps) {
  return (
    <Field {...props} className={classNames(styles.input, props.className)} />
  );
}
