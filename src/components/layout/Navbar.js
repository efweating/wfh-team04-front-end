import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const Wrapper = styled.section`
    position: fixed;
    width: 100%;
    height: 80px;
    bottom: 0px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    background: #ffffff;
    box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.1);
  `;

  const Frame = styled.section`
    position: relative;
    width: 80px;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  `;

  const Icon = styled.i`
    padding-top: 5px;
    font-size: 25px;
  `;

  const NavText = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 110%:
    text-align: center;
  `;

  return (
    <Wrapper>
      <Link to='/schedule' style={{ textDecoration: 'none', color: '#000000' }}>
        <Frame>
          <Icon className='far fa-calendar fa-2x'></Icon>
          <NavText>Schedule</NavText>
        </Frame>
      </Link>
      <Link to='/' style={{ textDecoration: 'none', color: '#000000' }}>
        <Frame>
          <Icon className='fas fa-th-large fa-2x'></Icon>
          <NavText>Dashboard</NavText>
        </Frame>
      </Link>
      <Link to='/tips' style={{ textDecoration: 'none', color: '#000000' }}>
        <Frame>
          <Icon className='fas fa-book fa-2x'></Icon>
          <NavText>Tips</NavText>
        </Frame>
      </Link>
    </Wrapper>
  );
};

export default Navbar;
