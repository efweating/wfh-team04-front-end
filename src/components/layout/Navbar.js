import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CalendarSVG from '../../img/calendar.svg';
import GridSVG from '../../img/grid.svg';
import BookSVG from '../../img/book.svg';

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

  const Icon = styled.img`
    padding-top: 5px;
    height: 28px;
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
          <Icon src={CalendarSVG} />
          <NavText>Schedule</NavText>
        </Frame>
      </Link>
      <Link to='/' style={{ textDecoration: 'none', color: '#000000' }}>
        <Frame>
          <Icon src={GridSVG} />
          <NavText>Dashboard</NavText>
        </Frame>
      </Link>
      <Link to='/tips' style={{ textDecoration: 'none', color: '#000000' }}>
        <Frame>
          <Icon src={BookSVG} />
          <NavText>Tips</NavText>
        </Frame>
      </Link>
    </Wrapper>
  );
};

export default Navbar;
