import React from 'react';
import styled from 'styled-components';
import Calendar from '../../img/calendarCircle.png';
import PropTypes from 'prop-types';

const Wrapper = styled.section`
  width: 335px;
  height: 60px;
  margin: 0 auto 5px auto;

  display: grid;
  grid-template-columns: 1fr 3fr;

  background: #ffffff;
  text-decoration: none;
  border-bottom: 1px solid #dddddd;

  &:hover {
    cursor: pointer;
    background: #f8f8f8;
  }
`;

const Icon = styled.img`
  width: 36px;
  height: 36px;

  justify-self: center;
  align-self: center;
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

const Scheduled = ({ task, complete, check }) => {
  const completeItem = () => {
    complete(task);
  };

  return (
    <Wrapper
      onClick={completeItem}
      style={(check && { border: 'none', width: '250px'})}
    >
      <Icon src={Calendar} />
      <TextContainer>
        <MainText>{task.name}</MainText>
        <SubText>
          {task.start} - {task.end}
        </SubText>
      </TextContainer>
    </Wrapper>
  );
};

Scheduled.propTypes = {
  task: PropTypes.object.isRequired,
};

export default Scheduled;
