import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Assigned from '../schedule/Assigned';
import Scheduled from '../schedule/Scheduled';
import ReactModal from 'react-modal';

const Wrapper = styled.section`
  width: 100%;
  padding-bottom: 100px;

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

const ModalStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '450px',
    width: '300px',
    background: '#ffffff',
    borderRadius: '20px',
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.4)',
  },
};

ReactModal.setAppElement('#root');

// Modal components
const ModalHeader = styled.h2`
  font-size: 18px;
  line-height: 120%;
  font-weight: normal;

  margin-bottom: 10px;
`;

const ResponseContainer = styled.div`
  display: flex;

  justify-content: center;
`;

const ResponseButton = styled.button`
  height: 31px;
  padding: 8px 14px;
  border: 1px solid #3ab5ad;
  border-radius: 27px;

  font-weight: 600;
  font-size: 14px;
  line-height: 110%;
  color: #3ab5ad;
  background: #ffffff;
  margin-right: 10px;

  &:focus {
    outline: none;
    background: #3ab5ad;
    color: #ffffff;
  }
`;

const CheckedButton = styled(ResponseButton)`
  background: #3ab5ad;
  color: #ffffff;
`;

const ResponseBox = styled.textarea`
  padding: 20px;
  margin: 20px auto;
  height: 160px;
  width: 99%;
  background: #f8f8f8;
  border-radius: 4px;
  border: none;

  color: #222222;
  font-weight: 600;
  font-size: 14px;

  &:focus {
    outline: 1px solid #3ab5ad;
  }
`;

const SubmitButton = styled(CheckedButton)`
  display: block;
  margin: 0 auto;
`;

const ModalInput = styled.input`
  height: 40px;
  width: 99%;
  padding: 20px;
  margin: 10px auto;
  background: #f8f8f8;
  border-radius: 4px;
  border: none;

  color: #222222;
  font-weight: 600;
  font-size: 14px;

  &:focus {
    outline: 1px solid #3ab5ad;
  }
`;

const Schedule = ({
  checkIn,
  checkInModal,
  checkInModalState,
  addTaskModal,
  addTaskModalState,
  user,
  dispatch,
}) => {
  const addEvent = () => {
    dispatch({ type: 'ADDTASK_MODAL', payload: true });
  };

  const closeAddTaskModal = () => {
    dispatch({ type: 'ADDTASK_MODAL', payload: false });
  };

  const updateTaskName = () => {
    const name = document.querySelector('#addTaskName').value;

    dispatch({ type: 'UPDATE_TASKNAME', payload: name });
  };

  const updateTaskStart = () => {
    const start = document.querySelector('#addTaskStart').value;

    dispatch({ type: 'UPDATE_TASKSTART', payload: start });
  };

  const updateTaskEnd = () => {
    const end = document.querySelector('#addTaskEnd').value;

    dispatch({ type: 'UPDATE_TASKEND', payload: end });
  };

  const submitAddTask = () => {
    dispatch({ type: 'SUBMIT_TASK' });
    dispatch({ type: 'ADDTASK_MODAL', payload: false });
  };

  const placeholder = () => {
    console.log('Haha you clicked me I guess');
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

  const openCheckIn = () => {
    dispatch({ type: 'CHECKIN_MODAL', payload: true });
  };

  const closeCheckIn = () => {
    dispatch({ type: 'CHECKIN_MODAL', payload: false });
  };

  const markProductive = (response) => {
    dispatch({ type: 'MARK_TASK', payload: response });
  };

  const updateCheckResponse = () => {
    const response = document.querySelector('#checkInResponseBox').value;

    dispatch({ type: 'UPDATE_RESPONSE', payload: response });
  };

  const submitCheckIn = () => {
    dispatch({ type: 'SUBMIT_CHECKIN' });
    dispatch({ type: 'CHECKIN_MODAL', payload: false });
  };

  return (
    <Wrapper>
      {/* Check In Modal */}
      <ReactModal
        isOpen={checkInModal}
        onRequestClose={closeCheckIn}
        style={ModalStyle}
        contentLabel='Check In Modal'
      >
        <ModalHeader>How did you feel during this event?</ModalHeader>
        {checkIn.type === 'event' ? (
          <Scheduled task={checkIn} check='true' complete={placeholder} />
        ) : (
          <Assigned task={checkIn} check='true' complete={placeholder} />
        )}
        <ResponseContainer>
          {checkInModalState.button === 1 ? (
            <CheckedButton>Productive</CheckedButton>
          ) : (
            <ResponseButton onClick={() => markProductive(1)}>
              Productive
            </ResponseButton>
          )}
          {checkInModalState.button === 2 ? (
            <CheckedButton>Unproductive</CheckedButton>
          ) : (
            <ResponseButton onClick={() => markProductive(2)}>
              Unproductive
            </ResponseButton>
          )}
        </ResponseContainer>
        <ResponseBox
          placeholder='What are your thoughts on this event?'
          onChange={updateCheckResponse}
          id='checkInResponseBox'
          value={checkInModalState.thoughts}
        />
        <SubmitButton onClick={submitCheckIn}>Submit</SubmitButton>
      </ReactModal>

      {/* Add Task Modal */}
      <ReactModal
        isOpen={addTaskModal}
        onRequestClose={closeAddTaskModal}
        style={ModalStyle}
        contentLabel='Add Task Modal'
      >
        <ModalHeader>Add a Task</ModalHeader>
        <ModalInput
          value={addTaskModalState.name}
          placeholder='Task'
          onChange={updateTaskName}
          id='addTaskName'
        />
        <ModalInput
          value={addTaskModalState.start}
          placeholder='Start Time'
          onChange={updateTaskStart}
          id='addTaskStart'
        />
        <ModalInput
          value={addTaskModalState.end}
          placeholder='End Time'
          onChange={updateTaskEnd}
          id='addTaskEnd'
        />
        <SubmitButton onClick={submitAddTask} style={{ marginTop: '20px' }}>
          Add Task
        </SubmitButton>
      </ReactModal>

      <Greeting>Hi, {user.firstName}</Greeting>
      {Object.keys(checkIn).length > 0 && (
        <Completed>
          <CompletedPara>
            You have completed something! How did it go?
          </CompletedPara>
          <CompletedLink onClick={openCheckIn}>Check In</CompletedLink>
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
      {user.events.map((task) => {
        return <Scheduled task={task} key={task.id} complete={completeItem} />;
      })}
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
  user: state.curUser,
  checkIn: state.checkIn,
  checkInModal: state.checkInModal,
  checkInModalState: state.checkInModalState,
  addTaskModal: state.addTaskModal,
  addTaskModalState: state.addTaskModalState,
});

export default connect(mapStateToProps)(Schedule);
