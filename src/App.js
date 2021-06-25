
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './counter';


function App() {
  return (
    <div className="App">
      <h2>Counter Application</h2>
	<h6>Date - 18th Aug 2020</h6>
	<Counter  title='counter-1'/>
	<Counter  title='counter-2'/>
	<Counter  title='counter-3'/>
    </div>
  );
}

export default App;
