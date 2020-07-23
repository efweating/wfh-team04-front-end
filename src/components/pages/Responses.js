import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Scheduled from '../schedule/Scheduled';
import Assigned from '../schedule/Assigned';

const Wrapper = styled.section`
  width: 100%;
  padding: 0 20px 100px 20px;
`;

const Greeting = styled.h1`
  margin: 48px 0 20px 0;
  display: inline-block;

  font-size: 24px;
  line-height: 120%;
  font-weight: normal;
`;

const Exit = styled.i`
  float: right;
  margin-top: 48px;
`;

const ResponseBox = styled.div`
  width: 100%;
  background: #f8f8f8;
  border-radius: 4px;
  padding: 20px 10px;
  margin-bottom: 20px;
`;

const ResponseText = styled.h2`
  font-weight: normal;
  font-size: 16px;
  line-height: 120%;

  color: #3ab5ad;
  margin: 10px 0;
`;

const ResponseMessage = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 110%;

  color: #222222;
`;

const Underline = styled.span`
  font-weight: bold;
  font-size: 16px;
  line-height: 120%;
`;

const Responses = ({ user, dispatch }) => {
  const windowState = (flip) => {
    dispatch({ type: 'SHOW_RESPONSES', payload: flip });
  };

  const placeholder = () =>
    console.log('Haha you got me again wow ur so smart');

  return (
    <Wrapper>
      <Greeting>Your Responses</Greeting>
      <Exit
        className='fas fa-times fa-2x'
        onClick={() => windowState(false)}
      ></Exit>
      {user.responses.complete.map((task, index) => {
        return (
          <ResponseBox key={index}>
            {task.type === 'event' ? (
              <Scheduled task={task} response='true' complete={placeholder} />
            ) : (
              <Assigned task={task} response='true' complete={placeholder} />
            )}
            <ResponseText>
              You felt <Underline>{task.feel}</Underline> during this event
            </ResponseText>
            <ResponseMessage>{task.message}</ResponseMessage>
          </ResponseBox>
        );
      })}
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
  user: state.curUser,
});

export default connect(mapStateToProps)(Responses);
