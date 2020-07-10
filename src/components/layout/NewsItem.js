import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const NewsItem = ({ article } = this.props) => {
  const Wrapper = styled.section`
    height: 100px;
    margin: 20px 20px;
s
    background: #ffffff;
    border-radius: 8px;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: 'pic title title';
  `;

  const Photo = styled.img`
    height: 100%;
    grid-area: pic;
    overflow: hidden;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  `;

  const Description = styled.section`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    grid-area: title;
    background: #ffffff;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  `;

  const Title = styled.h2`
    text-align: center;
    font-size: 20px;
  `;

  const Author = styled.p`
    font-size: 15px;
  `;

  return (
    <Wrapper>
      <Photo src={article.url} />
      <Description>
        <Title>{article.title}</Title>
        <Author>
          {article.category} * {article.author}
        </Author>
      </Description>
    </Wrapper>
  );
};

NewsItem.propTypes = {
  article: PropTypes.object.isRequired,
};

export default NewsItem;
