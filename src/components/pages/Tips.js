import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import NewsItem from '../tips/NewsItem';

const Wrapper = styled.section`
  width: 100%;
`;

const Greeting = styled.h1`
  margin: 48px 20px 0 20px;

  font-size: 24px;
  line-height: 120%;
  font-weight: normal;
`;

const SearchBar = styled.input`
  width: 335px;
  height: 36px;
  margin: 20px auto 0 auto;
  padding-left: 20px;
  display: block;

  border: none;

  background: #f8f8f8;

  font-weight: 600;
  font-size: 14px;
  line-height: 110%:

  color: #999999;

  &:focus {
    outline: 1px solid #3ab5ad;
  }
`;

const CategoryContainer = styled.div`
  height: 31px;
  margin: 16px 20px 0 20px;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  Category {
    flex: 0 0 auto;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Category = styled.button`
  height: 31px;
  padding: 8px 14px;
  border: 1px solid #3ab5ad;
  border-radius: 27px;

  font-weight: 600;
  font-size: 14px;
  line-height: 110%;
  color: #999999;
  background: #ffffff;
  margin-right: 10px;

  &:focus {
    outline: none;
  }
`;

const NewsBlock = styled.section`
  margin-top: 32px;
  width: 100%;
  padding-bottom: 100px;
`;

const Tips = ({ articles, user }) => {
  return (
    <Wrapper>
      <Greeting>Hi, {user.firstName}</Greeting>
      <SearchBar placeholder='Search here' />
      <CategoryContainer>
        <Category>Workspace</Category>
        <Category>Productivity</Category>
        <Category>Resting</Category>
        <Category>Communication</Category>
        <Category>Engagement</Category>
      </CategoryContainer>
      <NewsBlock>
        {articles.map((article) => {
          return <NewsItem article={article} key={article.id} />;
        })}
      </NewsBlock>
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
  articles: state.articles,
  user: state.curUser,
});

export default connect(mapStateToProps)(Tips);
