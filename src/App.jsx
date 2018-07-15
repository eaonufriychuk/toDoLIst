import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header/Header';
import MainContainer from './containers/MainContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <div className="card">
          <Header />
          <div className="card-body">
            <MainContainer />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
