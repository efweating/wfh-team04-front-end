import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 60px;
  width: 335px;
  margin: 0 auto 10px auto;
  display: flex;
  align-items: center;

  &:hover {
    background: #f8f8f8;
  }
`;

const ProfilePhoto = styled.img`
  height: 48px;
  width: 48px;
  margin-right: 20px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MainText = styled.p`
  font-weight: normal;
  font-size: 16px;
  line-height: 120%;

  color: #222222;
`;

const SubText = styled.p`
  margin-top: 3px;
  font-weight: 600;
  font-size: 14px;
  line-height: 110%;

  color: #999999;
`;

const User = ({ user, login }) => {
  const loginAction = () => {
    login(user);
  };

  return (
    <Wrapper onClick={loginAction}>
      <ProfilePhoto src={user.photo} />
      <TextContainer>
        <MainText>{user.name}</MainText>
        <SubText>{user.email}</SubText>
      </TextContainer>
    </Wrapper>
  );
};

export default User;
