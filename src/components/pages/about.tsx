import * as React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.section`
  grid-area: intro;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 64px;
  letter-spacing: -2.2528px;
  width: 100%;
  padding-top: 5rem;
`;

const TextLinkedIn = styled.span`
  text-decoration: underline;
`;

export default function IndexRoute() {
  return (
    <>
      <AboutWrapper id="about">
        A bit about me...
        <p>
          Passionate software engineer who believes in continuous learning of new technologies and good practices. Who
          enjoys working in a group, sharing and discussing new ideas.
        </p>
        <p>
          Working area:
          <li>Analysis & Design of solutions</li>
          <li>Backend (apis, microservices)</li>
          <li>Web Apps Development</li>
          <li>Authentication</li>
          <li>Developer Solutions (libraries, utils)</li>
        </p>
        <p>
          Technologies:
          <li>PHP Symfony</li>
          <li>Groovy on Grails</li>
          <li>Angular 6</li>
          <li>VUE JS</li>
          <li>API REST / GraphQL</li>
          <li>MySQL / PostgreSQL / MongoDB</li>
          <li>UNIX-based OS</li>
          <li>Docker</li>
        </p>
        <p>
          Check my
          <a href="https://www.linkedin.com/in/ivanpianetti/" target="_blank">
            {' '}
            <TextLinkedIn>LinkedIn</TextLinkedIn>
          </a>{' '}
          for more details.
        </p>
      </AboutWrapper>
    </>
  );
}
