import React from 'react';

import { connect } from 'react-redux';

import Main from '../components/Main/Main';

import { addToDo } from "../actions/toDoLIst";

function MainContainer(props) {
  const { handleAddToDO } = props;
  return (
    <Main handleAddToDO={handleAddToDO} />
  );
}

export default connect(
  () => {
    return {}
  },
  (dispatch) => ({ handleAddToDO: todo => dispatch(addToDo(todo)) })
)(MainContainer);