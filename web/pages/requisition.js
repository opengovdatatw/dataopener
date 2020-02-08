import _ from "lodash";
import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import * as Yup from "yup";
import base58 from "../helps/base58";
import {
  SearchRequisition,
  DataRequisition,
  ValueRequisition,
  ImportantRequisition,
  InitiativeRequisition,
  CaseRequisition,
  RecommendRequisition,
} from "../components/Requisition";

const stepComponent = [
  SearchRequisition,
  DataRequisition,
  ValueRequisition,
  ImportantRequisition,
  InitiativeRequisition,
  CaseRequisition,
  RecommendRequisition,
];

const dataSchema = Yup.object().shape({
  dataset: Yup.string().required("Required"),
  fields: Yup.string().required("Required"),
});

const valueSchema = dataSchema.shape({
  valuePublics: Yup.array().of(Yup.string()),
  valueEconomics: Yup.array().of(Yup.string()),
  valueTransparencys: Yup.array().of(Yup.string()),
});

const importantSchema = valueSchema.shape({
  importants: Yup.array().of(Yup.string()),
});

const initiativeSchema = importantSchema.shape({
  initiatives: Yup.array().of(Yup.string()),
});

const caseSchema = initiativeSchema.shape({
  caseAgency: Yup.string(),
  caseName: Yup.string(),
  caseUrl: Yup.string(),
});

const recommendSchema = caseSchema.shape({
  recommend: Yup.string(),
});

const stepSchema = [
  undefined,
  dataSchema,
  valueSchema,
  importantSchema,
  initiativeSchema,
  caseSchema,
  recommendSchema,
];

export default function Requisition() {
  const [step, setStep] = useState(0);

  const Step = stepComponent[step];

  const onSubmit = useCallback(
    data => {
      if (step >= 6) {
        window.location.href = `/r?data=${base58.encode(
          Buffer.from(JSON.stringify(data)),
        )}`;
        return;
      }
      setStep(step + 1);
    },
    [step, setStep],
  );

  const onBack = useCallback(() => {
    setStep(step - 1);
  }, [step, setStep]);

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
      validationSchema={stepSchema[step]}
      onSubmit={onSubmit}
    >
      {props => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Step {...props} onSubmit={props.handleSubmit} onBack={onBack} />
      )}
    </Formik>
  );
}

Requisition.propTypes = {
  handleSubmit: PropTypes.func,
};

Requisition.defaultProps = {
  handleSubmit: _.identity,
};
