import React from 'react';
import styled from 'styled-components';
import NewsItem from '../layout/NewsItem';

const Dashboard = () => {
  const Wrapper = styled.section`
    width: 100%;
  `;

  const Greeting = styled.h1`
    margin: 48px 20px 0 20px;

    font-size: 24px;
    line-height: 120%;
  `;

  const SectionHeader = styled.h2`
    margin: 20px 20px 0 20px;

    font-size: 18px;
    line-height: 120%;
  `;

  const Graph = styled.section`
    margin: 20px 20px;
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
    width: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  `;

  const Button = styled.button`
    display: flex;
    flex-direction: column;
    padding: 8px 14px;

    margin: 40px auto;
    width: 253px;

    background: #3ab5ad;
    border-radius: 27px;
    border: none;
    color: #ffffff;
  `;

  const NewsBlock = styled.section`
    width: 100%;
    background: #e5e5e5;
    padding-bottom: 100px;
  `;

  const SectionHeader2 = styled(SectionHeader)`
    padding: 20px 0;
  `;

  const Articles = [
    {
      url: 'https://www.clickorlando.com/resizer/Jpt8mNL-CQcJS36yiJ6wJyNcnuM=/520x347/smart/filters:format(jpeg):strip_exif(true):strip_icc(true):no_upscale(true):quality(65)/cloudfront-us-east-1.images.arcpublishing.com/gmg/OEBI4UCVP5CKJDVLIEBQSW7ZFU.webp',
      title: 'SpaceX Launches Falcon 9',
      author: 'spacex.com',
      category: 'Technology'
    },
    {
      url: 'https://www.clickorlando.com/resizer/Jpt8mNL-CQcJS36yiJ6wJyNcnuM=/520x347/smart/filters:format(jpeg):strip_exif(true):strip_icc(true):no_upscale(true):quality(65)/cloudfront-us-east-1.images.arcpublishing.com/gmg/OEBI4UCVP5CKJDVLIEBQSW7ZFU.webp',
      title: 'SpaceX Launches Falcon 9',
      author: 'spacex.com',
      category: 'Technology'
    }
  ];

  return (
    <Wrapper>
      <Greeting>Hi, Josh</Greeting>
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
      <Button>View your words and check in more</Button>
      <NewsBlock>
        <SectionHeader2>
          These articles may help you while working from home
        </SectionHeader2>
        <NewsItem article={Articles[0]} />
        <NewsItem article={Articles[1]} />
      </NewsBlock>
    </Wrapper>
  );
};

export default Dashboard;
