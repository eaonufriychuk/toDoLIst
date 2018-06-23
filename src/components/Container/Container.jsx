import React, { Component, Fragment } from 'react';
import TaskList from '../TaskList/TaskList';
import Search from '../Search/Search';

export default class Container extends Component {

  render() {
    const { search } = this.props;
    return (
      <Fragment>
        <TaskList search={search} />
      </Fragment>
    )
  }

}