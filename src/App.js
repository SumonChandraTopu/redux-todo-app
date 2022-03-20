import React from 'react';
import Todos from "./components/Todos"

import './App.css';
import Input from './components/Input';

function App() {
  return (
    <div className="App">
      <Todos />
      <Input />
    </div>
  );
}

export default App;
