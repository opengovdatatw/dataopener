/* eslint-disable react/jsx-props-no-spreading */

import React from "react";
import { Formik } from "formik";
import Requisitions from "../components/Requisition";

export default function Requisition() {
  return (
    <Formik
      initialValues={{
        title: "",
        dataset: "",
        fields: "",
      }}
      onSubmit={() => {
        // empty
      }}
    >
      {props => <Requisitions {...props} />}
    </Formik>
  );
}
