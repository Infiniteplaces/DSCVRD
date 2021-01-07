import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

//

const BannerCopy = ({ category, title, copy, author, involved, className }) => {
  let credits = null;

  if (author || involved) {
    credits = [author && `Words by ${author}`, ...involved];
  }

  return (
    <BannerMeta className={className}>
      <div className="headline__meta--inner">
        <h5 className="font__spacey-subtitle">{category}</h5>
        <h2 className="font__big-headline-text">{title}</h2>

        {copy && <p className="font__article-card-copy">{copy}</p>}

        {credits && (
          <ul className="font__spacey-subtitle">
            {credits && credits.map((credit) => <li>{credit}</li>)}
          </ul>
        )}
      </div>
    </BannerMeta>
  );
};

export default BannerCopy;

const BannerMeta = styled.div`
  display: flex;
  position: absolute;
  z-index: 10;
  bottom: 0;
  justify-content: center;
  width: 100%;
  padding: 5.6rem 0;
  background: var(--fade-from-bottom);
  text-align: center;

  .font__article-card-copy {
    color: var(--white);
  }

  .font__big-headline-text {
    max-width: 110rem;
    margin: 3.2rem;
    color: var(--white);

    @media screen and (min-width: 666px) {
      margin: 5.6rem;
    }
  }

  .font__spacey-subtitle {
    color: var(--yellow);
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

BannerCopy.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  copy: PropTypes.string,
  author: PropTypes.string,
  involved: PropTypes.array,
  className: PropTypes.string,
};

BannerCopy.defaultProps = {
  copy: null,
  author: null,
  involved: null,
  className: null,
};