import * as React from 'react';
import styled from 'styled-components';

const IntroWrapper = styled.section`
  grid-area: intro;
  font-style: normal;
  font-weight: 500;
  font-size: 54px;
  line-height: 64px;
  letter-spacing: -2.2528px;
  width: 80%;
  padding-top: 1rem;
`;

export default function IndexRoute() {
  return (
    <>
      <IntroWrapper id="intro">
        <p>I'm an Argentinian Engineer & Full Stack Developer 🚀</p>
      </IntroWrapper>
    </>
  );
}
