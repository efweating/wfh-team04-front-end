import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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

const SectionHeader = styled.h2`
  margin: 20px 20px 0 20px;

  font-size: 18px;
  line-height: 120%;
  font-weight: normal;
`;

const Graph = styled.section`
  margin: 20px 20px 30px 20px;
  height: 113px;

  background: #ffffff;
  border: 1px solid #cccccc;
  box-sizing: border-box;
  border-radius: 8px;
`;

const Stat = styled.p`
  width: 18px;
  height: 38px;

  font-weight: 500;
  font-size: 32px;
  line-height: 120%;

  color: #4695f8;
`;

const Stat2 = styled(Stat)`
  color: #faca78;
`;

const Stat3 = styled(Stat)`
  color: #aaaaaa;
`;

const Label = styled.p`
  width: 77px;
  height: 19px;

  font-size: 16px;
  line-height: 120%;
  text-align: center;
  font-weight: normal;

  color: #222222;
`;

const StatContainer = styled.section`
  margin: 20px 0;
  width: 100%;
  height: 84px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const SingleStat = styled.section`
  position: relative;
  height: 70px;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  padding: 8px 14px;
  align-items: center;

  margin: 40px auto 30px auto;
  width: 253px;

  background: #3ab5ad;
  border-radius: 27px;
  border: none;
  color: #ffffff;
  font-weight: 600;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

const NewsBlock = styled.section`
  width: 100%;
  background: #f8f8f8;
  padding-bottom: 100px;
`;

const SectionHeader2 = styled(SectionHeader)`
  padding: 20px 0 0 0;
`;

const Dashboard = ({ user, recommended } = this.props) => {
  const viewStats = () => {
    console.log('Checking stats!');
  };

  return (
    <Wrapper>
      <Greeting>Hi, {user.firstName}</Greeting>
      <SectionHeader>How you spent your time today</SectionHeader>
      <Graph></Graph>
      <SectionHeader>How you felt about today</SectionHeader>
      <StatContainer>
        <SingleStat>
          <Stat>5</Stat>
          <Label>Productive</Label>
        </SingleStat>
        <SingleStat>
          <Stat2>2</Stat2>
          <Label>Could be better</Label>
        </SingleStat>
        <SingleStat>
          <Stat3>3</Stat3>
          <Label>No response</Label>
        </SingleStat>
      </StatContainer>
      <Button onClick={viewStats}>View responses and check in</Button>
      <NewsBlock>
        <SectionHeader2>
          These articles may help you while working from home
        </SectionHeader2>
        {recommended.map((article) => {
          return <NewsItem article={article} key={article.id} />;
        })}
        <Link
          to='/tips'
          style={{
            textDecoration: 'none',
            color: '#3AB5AD',
            margin: '5px auto',
            textAlign: 'center',
            display: 'block',
            fontWeight: 600,
          }}
        >
          More tips
        </Link>
      </NewsBlock>
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
  user: state.curUser,
  recommended: state.recommended,
});

export default connect(mapStateToProps)(Dashboard);
