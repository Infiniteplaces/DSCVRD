import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FiFacebook, FiTwitter, FiInstagram, FiLink } from 'react-icons/fi';

//

const Social = ({ invert, className, link, small }) => (
  <SocialIcons invert={invert} className={className} small={small}>
    <li>
      <a href="/">
        <FiFacebook />
      </a>
    </li>
    <li>
      <a href="/">
        <FiTwitter />
      </a>
    </li>
    <li>
      <a href="/">
        <FiInstagram />
      </a>
    </li>
    {link && (
      <li>
        <a href="/">
          <FiLink />
        </a>
      </li>
    )}
  </SocialIcons>
);

export default Social;

const SocialIcons = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;

  svg {
    width: ${(props) => (props.small ? '1.6rem' : '2rem')};
    height: ${(props) => (props.small ? '1.6rem' : '2rem')};
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${(props) => (props.small ? '3rem' : '4.4rem')};
    height: ${(props) => (props.small ? '3rem' : '4.4rem')};
    margin: 0 0.4rem;
    transition: 250ms ease all;
    border: ${(props) => (props.small ? '1px' : '2px')} solid
      var(--${(props) => (props.invert ? 'white' : 'black')});
    border-radius: 100%;
    background-color: transparent;
    color: var(--${(props) => (props.invert ? 'white' : 'black')});

    &:hover {
      background-color: var(--${(props) => (props.invert ? 'white' : 'black')});
      color: var(--${(props) => (props.invert ? 'black' : 'yellow')});
    }
  }
`;

Social.propTypes = {
  invert: PropTypes.bool,
  link: PropTypes.bool,
  small: PropTypes.bool,
  className: PropTypes.string,
};

Social.defaultProps = {
  invert: false,
  link: false,
  small: false,
  className: null,
};
