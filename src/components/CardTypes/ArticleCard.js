import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import _ from 'lodash';

import Noise from '../Noise';
import CardTag from '../CardTag';

//

// TODO Add `image` to prop types

const ArticleCard = ({ title, category, slug, image, desc, tags }) => (
  <Card>
    <Link to={`${category}/${slug}`}>
      <div className="card__thumb">
        <Noise />
        <Img fluid={image} alt={title} />
      </div>

      <div className="card__content">
        <h5 className="font__article-card-headline">
          {_.truncate(title, { length: 60, seperator: /,? +/ })}
        </h5>
        <p className="font__article-card-copy">
          {_.truncate(desc, {
            length: 100,
            separator: /,? +/,
          })}
        </p>
      </div>

      <div className="card__tags">
        <CardTag label={category} />
        <CardTag label="Records" color="yellow" />
        <CardTag label="Hip-hop" color="yellow" />
      </div>
    </Link>
  </Card>
);

export default ArticleCard;

const Card = styled.div`
  flex: 1 1 23.2rem;
  margin: 0 0 2.4rem 0;

  @media (max-width: 504px) {
    &:last-of-type {
      margin: 0;
    }
  }

  @media (min-width: 504px) {
    margin: 1.2rem;
  }

  a {
    color: var(--black);
    text-decoration: none;
  }

  .card__thumb {
    position: relative;
    height: 32rem;

    .gatsby-image-wrapper {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @media (min-width: 1280px) {
      height: 40rem;
    }
  }

  .card__content {
    .font__article-card-copy {
      margin-right: 1.6rem;
      color: var(--coal);
    }

    .font__article-card-headline {
      margin: 1.6rem 0 0.8rem;

      @media (min-width: 1024px) {
        margin: 1.6rem 0;
      }
    }
  }

  .card__tags {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1.2rem;

    @media (min-width: 1024px) {
      margin-top: 1.6rem;
    }

    article {
      margin: 0 0.8rem 0.8rem 0;

      &:last-of-type {
        margin-right: 0;
      }
    }
  }
`;

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  desc: PropTypes.string.isRequired,
  tags: PropTypes.object,
};

ArticleCard.defaultProps = {
  tags: null,
};
