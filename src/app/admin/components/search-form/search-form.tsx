"use client";

import React from "react";
import { Formik, Form } from "formik";
import { z } from "zod";
import { withZodSchema } from "formik-validator-zod";
import styles from "./search-form.module.css";
import MagnifyingGlassIcon from "../../../../assets/icons/magnifying-glass.svg";
import InputField from "../input-field/input-field";

export const SearchSchema = z.object({
  search: z.string().max(200),
});

export default function SearchForm() {
  return (
    <Formik
      initialValues={{ search: "" }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
      }}
      validate={withZodSchema(SearchSchema)}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form className={styles.form}>
          <InputField
            type="text"
            name="search"
            placeholder="Пошук за артикулом..."
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className={styles.button}
          >
            <MagnifyingGlassIcon />
          </button>
        </Form>
      )}
    </Formik>
  );
}
