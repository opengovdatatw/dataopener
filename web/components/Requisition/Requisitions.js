import _ from "lodash";
import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import SearchRequisition from "./SearchRequisition";
import DataRequisition from "./DataRequisition";
import ValueRequisition from "./ValueRequisition";
import ImportantRequisition from "./ImportantRequisition";
import InitiativeRequisition from "./InitiativeRequisition";
import CaseRequisition from "./CaseRequisition";
import RecommendRequisition from "./RecommendRequisition";

const StepComponent = [
  SearchRequisition,
  DataRequisition,
  ValueRequisition,
  ImportantRequisition,
  InitiativeRequisition,
  CaseRequisition,
  RecommendRequisition,
];

export default function Requisition({ handleSubmit }) {
  const [step, setStep] = useState(0);

  const onNext = useCallback(() => {
    if (step >= 6) {
      handleSubmit();
      return;
    }
    setStep(step + 1);
  }, [step, setStep]);

  const onBack = useCallback(() => {
    setStep(step - 1);
  }, [step, setStep]);

  const Step = StepComponent[step];
  return <Step onSubmit={onNext} onBack={onBack} />;
}

Requisition.propTypes = {
  handleSubmit: PropTypes.func,
};

Requisition.defaultProps = {
  handleSubmit: _.identity,
};
