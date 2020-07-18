import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Assigned from '../schedule/Assigned';
import Scheduled from '../schedule/Scheduled';

const Wrapper = styled.section`
  width: 100%;

  & > :last-child {
    border: none !important;
  }
`;

const Greeting = styled.h1`
  margin: 48px 20px 0 20px;

  font-size: 24px;
  line-height: 120%;
  font-weight: normal;
`;

const SectionHeader = styled.h2`
  margin: 20px;

  font-size: 18px;
  line-height: 120%;
  font-weight: normal;
`;

const AddTask = styled.a`
  display: block;
  margin: 20px 0 0 20px;
  text-decoration: none;
  color: #3ab5ad;

  font-weight: 600;
  font-size: 14px;

  &:hover {
    cursor: pointer;
  }
`;

const Completed = styled.div`
  width: 335px;
  height: 125px;
  background: #67c7c1;
  border-radius: 8px;

  margin: 20px 0 0 20px;
  padding: 20px 20px 0 20px;
`;

const CompletedPara = styled.p`
  font-weight: normal;
  font-size: 18px;

  color: #222222;
`;

const CompletedLink = styled.a`
  text-decoration: none;
  display: block;
  margin-top: 20px;

  float: right;

  font-size: 14px;
  font-weight: 600;

  color: #222222;

  &:hover {
    cursor: pointer;
  }
`;

const Schedule = ({ checkIn, user, dispatch }) => {
  const addEvent = () => {
    console.log('Adding event!');
  };

  const completeItem = (item) => {
    if (item.type === 'assigned') {
      for (var i = 0; i < user.assigned.length; i++) {
        if (user.assigned[i].id === item.id) {
          user.assigned.splice(i, 1);
        }
      }
    }

    if (item.type === 'event') {
      for (i = 0; i < user.events.length; i++) {
        if (user.events[i].id === item.id) {
          user.events.splice(i, 1);
        }
      }
    }

    dispatch({ type: 'COMPLETE_ITEM', payload: item });
  };

  return (
    <Wrapper>
      <Greeting>Hi, {user.firstName}</Greeting>
      {Object.keys(checkIn).length > 0 && (
        <Completed>
          <CompletedPara>
            You have completed something! How did it go?
          </CompletedPara>
          <CompletedLink>Check In</CompletedLink>
        </Completed>
      )}
      <AddTask onClick={addEvent}>+ Add Event</AddTask>
      <SectionHeader>
        You have{' '}
        {user.eventCount > 0
          ? user.eventCount === 1
            ? `${user.eventCount} thing`
            : `${user.eventCount} things`
          : 'nothing'}{' '}
        scheduled!
      </SectionHeader>
      {user.assigned.map((task) => {
        return <Assigned task={task} key={task.id} complete={completeItem} />;
      })}
      {user.events.map((task, index) => {
        return <Scheduled task={task} key={task.id} complete={completeItem} />;
      })}
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
  user: state.curUser,
  checkIn: state.checkIn,
});

export default connect(mapStateToProps)(Schedule);
