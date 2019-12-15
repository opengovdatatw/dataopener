import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import AgencyCard from "./AgencyCard";

const Icon = styled.div`
  width: 146px;
  height: 146px;
  background-image: url("/static/local-agency.png");
  background-size: cover;
`;

export default function LocalAgency({ title }) {
  return (
    <AgencyCard title={title}>
      <Icon />
    </AgencyCard>
  );
}

LocalAgency.propTypes = {
  title: PropTypes.string,
};

LocalAgency.defaultProps = {
  title: "",
};
