import React from "react";
import "./App.css";
import Task from "./components/Task";
import PropTypes from "prop-types";
import data from './data/tasks'

function App() {
  return (
    <div className="App">
      <h1>CCT Lab Process</h1>
      {data.map((task, index) =>
        <Task index={task.index} title={task.title} subtasks={task.tasks} key={index} />
      )}
    </div>
  );
}
App.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  index: PropTypes.number,
  title: PropTypes.string,
  tasks: PropTypes.string
}

export default App
