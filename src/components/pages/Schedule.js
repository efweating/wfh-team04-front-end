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

const Schedule = ({ user }) => {
  return (
    <Wrapper>
      <Greeting>Hi, {user.name}</Greeting>
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
        return <Assigned task={task} key={task.id} />;
      })}
      {user.events.map((task) => {
        return <Scheduled task={task} key={task.id} />;
      })}
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
  user: state.curUser,
});

export default connect(mapStateToProps)(Schedule);
