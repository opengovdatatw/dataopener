/* eslint-disable react/jsx-props-no-spreading */

import React from "react";
import { Formik } from "formik";
import window from "global/window";
import { Buffer } from "buffer";
import base58 from "../helps/base58";
import Requisitions from "../components/Requisition";

export default function Requisition() {
  return (
    <Formik
      initialValues={{
        dataset: "",
        fields: "",
        valuePublics: [],
        valueEconomics: [],
        valueTransparencys: [],
        importants: [],
        initiatives: [],
        caseAgency: "",
        caseName: "",
        caseUrl: "",
        recommend: "",
      }}
      onSubmit={data => {
        window.location.href = `/r?data=${base58.encode(
          Buffer.from(JSON.stringify(data)),
        )}`;
      }}
    >
      {props => <Requisitions {...props} />}
    </Formik>
  );
}
