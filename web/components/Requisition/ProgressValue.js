import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  flex: 1;
`;

const Processing = styled.div`
  height: 100%;
  background: #35c9fe;
  width: ${({ value }) => value * 100}%;
`;

const Completed = styled.div`
  height: 100%;
  background: #2dc388;
`;

export default function ProgressValue({ value }) {
  if (value < 0) return <Wrapper />;
  if (value > 1)
    return (
      <Wrapper>
        <Completed />
      </Wrapper>
    );
  return (
    <Wrapper>
      <Processing value={value} />
    </Wrapper>
  );
}

ProgressValue.propTypes = {
  value: PropTypes.number,
};

ProgressValue.defaultProps = {
  value: 0,
};
