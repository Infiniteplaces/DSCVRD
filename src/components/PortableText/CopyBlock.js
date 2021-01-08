import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';

//

const CopyBlock = ({ node }) => {
  console.log(node);

  if (node.style === 'h2') {
    return <h2 className="font__header-two">{node.children[0].text}</h2>;
  }

  if (node.style === 'h3') {
    return <h3 className="font__header-three">{node.children[0].text}</h3>;
  }

  if (node.style === 'blockquote') {
    return <blockquote>{node.children[0].text}</blockquote>;
  }

  if (node.style === 'normal') {
    return node.children.map((content) => {
      if (content.text.length > 180) {
        const test = content.text.replace(/.{470}/g, '$1$');
        console.log('test', test);

        return <DoubleCol className="font__copy">{content.text}</DoubleCol>;
      }

      return <SingleCol className="font__copy">{content.text}</SingleCol>;
    });
  }

  return null;
};

export default CopyBlock;
const DoubleCol = styled.p`
  display: unset !important;
  max-width: 82rem;
  columns: 2;
  column-gap: 6.4rem;
`;

const SingleCol = styled.p`
  max-width: 38rem;
  text-align: center;
`;
