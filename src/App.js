import React from "react";
import "./App.css";
import Task from "./Task";
import PropTypes from "prop-types";

const data = [
  {
    index: 1,
    title: 'Build test task',
    tasks:
      [
        'Create repository',
        'Implement designs',
        'Implement functionality',
      ],
  },
  {
    index: 2,
    title: 'Submit your test task',
    tasks:
      [
        'Open email client',
        'Sent link with information to <a href=mailto:careers@cornercasetech.com>careers@cornercasetech.com</a>',
      ],
  },
  {
    index: 3,
    title: 'Participate in tech interview',
    tasks:
      [
        'Talk with HR',
        'Talk with Tech team',
      ],
  },
  {
    index: 4,
    title: 'Receive answer',
    tasks:
      [
        'Receive answer',
        'Start your IT career',
      ],
  }
]

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
