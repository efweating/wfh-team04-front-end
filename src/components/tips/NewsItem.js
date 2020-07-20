import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.section`
  height: 100px;
  margin: 20px 20px;

  background: #ffffff;
  border: 1px solid #f8f8f8;
  border-radius: 8px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: 'pic title title';
`;

const Photo = styled.img`
  height: 100%;
`;

const PhotoContainer = styled.div`
  height: 100%;
  overflow: hidden;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  grid-area: pic;
`;

const Description = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 12px 12px 20px;
  grid-area: title;
  background: #ffffff;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 600;
`;

const Author = styled.p`
  font-size: 12px;
  font-size: normal;
`;

const NewsItem = ({ article } = this.props) => {
  const redirect = () => {
    window.open(article.location, '_blank');
  };

  return (
    <Wrapper onClick={redirect}>
      <PhotoContainer>
        <Photo src={article.url} />
      </PhotoContainer>
      <Description>
        <Title>{article.title}</Title>
        <Author>
          {article.category}
          &nbsp;&nbsp;&nbsp;{`-`}&nbsp;&nbsp;&nbsp;
          {article.author}
        </Author>
      </Description>
    </Wrapper>
  );
};

NewsItem.propTypes = {
  article: PropTypes.object.isRequired,
};

export default NewsItem;
