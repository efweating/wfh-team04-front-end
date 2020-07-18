import React from 'react';
import styled from 'styled-components';
import Microsoft from '../../img/microsoftlogo.jpg';
import User from './User';
import Josh from '../../img/joshprofile.png';
import Tim from '../../img/timprofile.png';
import Unkown from '../../img/defaultprofile.png';
import { connect } from 'react-redux';

const user1 = {
  name: 'Josh Richards (Employee)',
  firstName: 'Josh',
  email: 'joshxtech@outlook.com',
  password: '1234',
  photo: Josh,
  admin: false,
  eventCount: 6,
  assigned: [
    {
      name: 'Create outline of presentation',
      manager: 'Tim',
      employee: 'Josh',
      type: 'assigned',
      id: 6,
    },
  ],
  events: [
    {
      name: 'Launch Party',
      start: '11:00',
      end: '12:00',
      type: 'event',
      id: 1,
    },
    {
      name: 'Demo Day',
      start: '11:00',
      end: '12:00',
      type: 'event',
      id: 2,
    },
    {
      name: 'Member Retreat',
      start: '11:00',
      end: '12:00',
      type: 'event',
      id: 3,
    },
    {
      name: 'Portfolio Review',
      start: '11:00',
      end: '12:00',
      type: 'event',
      id: 4,
    },
    {
      name: 'Framer Workshop',
      start: '11:00',
      end: '12:00',
      type: 'event',
      id: 5,
    },
  ],
  responses: {
    productive: 0,
    unproductive: 0,
    noresponse: 0,
  },
};

const user2 = {
  name: 'Tim Chapman (Manager)',
  firstName: 'Tim',
  email: 'chapmantim@outlook.com',
  password: '2345',
  photo: Tim,
  admin: true,
};

const Wrapper = styled.div`
  width: 100%;
`;

const HeaderSection = styled.header`
  height: 64px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  border-bottom: 1px solid #ddd;
`;

const HeaderImg = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 16px;
`;

const HeaderTxt = styled.p`
  font-weight: 600;
  font-size: 14px;
`;

const Intro = styled.h1`
  width: 311px;
  font-weight: normal;
  font-size: 24px;
  line-height: 120%;
  color: #222222;

  margin: 40px 0 40px 20px;
`;

const UnlistedAccount = styled.div`
  width: 335px;
  height: 60px;
  margin: 20px auto;
  display: flex;
  align-items: center;

  &:hover {
    background: #f8f8f8;
  }
`;

const ImgContainer = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

const FinalText = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: #222222;
`;

const SignIn = ({ dispatch }) => {
  const loginJosh = (user) => {
    dispatch({ type: 'LOGIN_USER', payload: user });
  };

  const loginTim = (user) => {
    console.log('Log in Tim!');
    //dispatch({ type: 'LOGIN_USER', payload: user });
  };

  return (
    <Wrapper>
      <HeaderSection>
        <HeaderImg src={Microsoft} />
        <HeaderTxt>Sign in with Microsoft</HeaderTxt>
      </HeaderSection>
      <Intro>{`Choose a demo account to continue to ADAPTIVE`}</Intro>
      <User user={user1} login={loginJosh} />
      <User user={user2} login={loginTim} />
      <UnlistedAccount
        onClick={() => console.log('Signing in with another account!')}
      >
        <ImgContainer>
          <img src={Unkown} alt='' />
        </ImgContainer>
        <FinalText>Use another account</FinalText>
      </UnlistedAccount>
    </Wrapper>
  );
};

export default connect()(SignIn);
