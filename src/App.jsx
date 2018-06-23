import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header/Header';
import TaskBar from './components/TaskBar/TaskBar';
import TaskList from './components/TaskList/TaskList';
import Search from './components/Search/Search';
import Container from './components/Container/Container';

export const formatDate = (date) => {
  let d = new Date(date),
    month = `${d.getMonth() + 1}`,
    day = `${d.getDate()}`,
    year = d.getFullYear();

  if (month.length < 2) month = `0${month}`;
  if (day.length < 2) day = `0${day}`;

  return [day, month, year].join('.');
};

class App extends Component {
  state = {
    search: '',
    filters: {
      priority: [],
      category: [],
    },
  };


  upDateSearch = (event) => {
    this.setState({ search: event.target.value });
  };

  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <div className="card">
            <Header />
            <div className="card-body">
              <TaskBar />
              <Search upDateSearch={this.upDateSearch} />
              <Container search={this.state.search} />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
