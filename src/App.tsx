import React from 'react';
import './Styles/App.css';
import {Provider} from 'react-redux';
import {TodoComponent} from './Components/TodoComponent';
import store from './Redux/store';

function App() {
  return (
    <Provider store={store}>
      <TodoComponent />
    </Provider>
  )
}

export default App;
