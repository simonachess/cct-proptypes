import React, { useState } from 'react';
import TaskItems from "./TaskItems";
import PropTypes from "prop-types";

function Task(props) {

    const [show, setshow] = useState(false);

    return (
        <div onClick={() => setshow(!show)}>
            <div className="task-text">
                <div className="number" key={props.index}>{props.index}</div>
                <div className="text" key={props.title}>{props.title}</div>
                <span className={`line ${show ? "line-longer" : ""}`}></span>
            </div>
            {show ? <TaskItems handleShow={show} subtasks={props.subtasks} /> : ""}
        </div>
    )
}

Task.propTypes = {

    index: PropTypes.number,
    title: PropTypes.string,
    subtasks: PropTypes.arrayOf(PropTypes.string, PropTypes.array),
}

export default Task