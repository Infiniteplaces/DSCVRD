import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

//

const Credits = ({ involved, published }) => (
  <CreditsWrap data-sal="fade">
    <ul className="font__spacey-subtitle">
      {involved && involved.map((involvee) => <li>{involvee}</li>)}
      <li>Published on {published}</li>
    </ul>
  </CreditsWrap>
);

export default Credits;

const CreditsWrap = styled.section`
  padding: 4rem 0;
  border-top: 2px solid var(--yellow);

  ul {
    margin: 0;
    padding: 0;
    color: var(--black);
    list-style: none;
    text-align: center;
  }

  li:last-of-type {
    margin-top: 2.4rem;
  }
`;

Credits.propTypes = {
  involved: PropTypes.array,
  published: PropTypes.string.isRequired,
};

Credits.defaultProps = {
  involved: null,
};
