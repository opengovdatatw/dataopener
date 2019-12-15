import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import AgencyCard from "./AgencyCard";

const Icon = styled.div`
  width: 146px;
  height: 146px;
  background-image: url("/static/central-agency.png");
  background-size: cover;
`;

export default function CentralAgency({ title }) {
  return (
    <AgencyCard title={title}>
      <Icon />
    </AgencyCard>
  );
}

CentralAgency.propTypes = {
  title: PropTypes.string,
};

CentralAgency.defaultProps = {
  title: "",
};
