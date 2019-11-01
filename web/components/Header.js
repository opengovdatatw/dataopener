import React from "react";
import styled from "styled-components";

const Warpper = styled.div`
  background-image: url(/static/header.png);
  background-position: center center;
  background-size: cover;
  height: 535px;
  width: 100%;
`;

const Vision = styled.div`
  background-image: url(/static/vision.png);
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 100%;
`;

export default function Header() {
  return (
    <Warpper>
      <Vision>
        <div>自助資料申請全攻略，讓你申請更有力。</div>
      </Vision>
    </Warpper>
  );
}
