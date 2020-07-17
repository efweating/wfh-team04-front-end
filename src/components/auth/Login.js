import React from 'react';
import styled from 'styled-components';
import MicrosoftLogo from '../../img/microsoftlogo.jpg';
import GoogleLogo from '../../img/google.jpg';
import { connect } from 'react-redux';

const Wrapper = styled.section`
  background: #3ab5ad;
  width: 100%;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
  padding-top: 80px;

  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 120%;

  color: #ffffff;
`;

const Subheader = styled.h2`
  width: 275px;
  margin: 0 auto;
  text-align: center;
  padding-top: 20px;

  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 120%;

  color: #ffffff;
`;

const InputSection = styled.section`
  width: 100%;
  height: 570x;
  margin-top: 50px;
  padding-top: 50px;

  background: #ffffff;
  border-radius: 8px;
`;

const OutsideSignin = styled.div`
  width: 275px;
  height: 50px;
  margin: 0 auto 10px auto;
  display: flex;

  align-items: center;
  justify-content: space-evenly;

  background: #ffffff;
  text-decoration: none;
  border: 1px solid #999999;
  border-radius: 2px;

  &:hover {
    cursor: pointer;
  }
`;

const ButtonText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 120%;

  color: #222222;
`;

const ButtonImg = styled.img`
  width: 24px;
  height: 24px;
`;

const BetweenText = styled.p`
  margin: 20px auto;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 110%;
  text-align: center;

  color: #999999;
`;

const InputBox = styled.input`
  width: 275px;
  height: 50px;
  margin: 0 auto 10px auto;
  display: flex;
  padding: 20px;

  font-weight: normal;
  font-size: 16px;

  background: #f8f8f8;
  border: 1px solid #999999;
  border-radius: 2px;

  &:focus {
    outline: 1px solid #3ab5ad;
  }
`;

const SignInButton = styled(OutsideSignin)`
  background: #999999;

  font-weight: normal;
  font-size: 16px;

  color: #ffffff;
`;

const EndLink = styled.p`
  margin: 20px 0;
  text-align: center;

  font-weight: 600;
  font-size: 14px;
  line-height: 110%;

  color: #222222;
`;

const EndLinkColor = styled.span`
  color: #3ab5ad;
  font-weight: 600;

  &:hover {
    cursor: pointer;
  }
`;

const Login = ({ dispatch } = this.props) => {
  const signInMicrosoft = () => {
    window.location.href = '/signin';
  };

  const signInGoogle = () => {
    console.log('Signing in with Google!');
  };

  const signInNormal = () => {
    const email = document.querySelector('#loginEmail').value;
    const password = document.querySelector('#loginPassword').value;

    if (email === '' || password === '') {
      console.log('Invalid input!');
      return;
    }

    document.querySelector('#loginEmail').value = '';
    document.querySelector('#loginPassword').value = '';

    console.log({
      email: { email },
      password: { password },
    });
  };

  const createAccount = () => {
    console.log('Creating account!');
  };

  return (
    <Wrapper>
      <Title>{`[AppName]`}</Title>
      <Subheader>Productivity recipe for remote team.</Subheader>
      <InputSection>
        <OutsideSignin onClick={signInMicrosoft}>
          <ButtonImg src={MicrosoftLogo} />
          <ButtonText>Continue with Microsoft</ButtonText>
          <p> </p>
        </OutsideSignin>
        <OutsideSignin onClick={signInGoogle}>
          <ButtonImg src={GoogleLogo} />
          <ButtonText>Continue with Google</ButtonText>
          <p> </p>
        </OutsideSignin>
        <BetweenText>or</BetweenText>
        <InputBox id='loginEmail' placeholder='Email'></InputBox>
        <InputBox
          id='loginPassword'
          placeholder='Password'
          type='password'
        ></InputBox>
        <SignInButton onClick={signInNormal}>Sign In</SignInButton>
        <EndLink>
          Don't have an account?{' '}
          <EndLinkColor onClick={createAccount}>Create One</EndLinkColor>
        </EndLink>
      </InputSection>
    </Wrapper>
  );
};

export default connect()(Login);
