import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  // const getData = () => {
  //   console.log('Hello I am Here');
  // }
  async function getData() {
    try {
      const response = await axios.get('http://localhost:5000/notes');
      // console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <div className="App">
       <button onClick={getData}>Click Muneeb</button>
    </div>
  );
}

export default App;
