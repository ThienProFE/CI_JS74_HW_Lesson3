import React from 'react';
import MyWork from './Work/work';
import './App.css';

const App = () => {
  return (
    <div id="app">
      <MyWork name="Clean up bedroom" />
      <MyWork name="Buy some milk" />
      <MyWork name="Jogging" />
      <MyWork name="Learn React" />
      <MyWork name="Doing Exercises" />
    </div>
  )
}
export default App;