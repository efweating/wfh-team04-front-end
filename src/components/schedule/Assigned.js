import React from 'react';
import styled from 'styled-components';
import Check from '../../img/checkCircle2.png';
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

const Assigned = ({ task, complete, check, response }) => {
  const completeItem = () => {
    complete(task);
  };

  return (
    <Wrapper
      onClick={completeItem}
      style={
        (check && { border: 'none', width: '250px' }) ||
        (response && { border: 'none', width: '100%', background: '#f8f8f8' })
      }
    >
      <Icon src={Check} />
      <TextContainer>
        <MainText>{task.name}</MainText>
        <SubText>Assigned by {task.manager}</SubText>
      </TextContainer>
    </Wrapper>
  );
};

Assigned.propTypes = {
  task: PropTypes.object.isRequired,
};

export default Assigned;
