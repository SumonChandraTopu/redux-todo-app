import React from "react";

import "./App.css";
import Input from "./components/Input";
import TodoItems from "./components/TodoItems";

function App() {
  return (
    <div className="App">
      <div className="container">
        <TodoItems />
        <Input />
      </div>
    </div>
  );
}

export default App;
