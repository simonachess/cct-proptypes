import React, { useState } from 'react';
import TaskItems from "./TaskItems";

export default function Task(props) {

    const [show, setshow] = useState(false);

    return (
        <div className="task-container" onClick={() => setshow(!show)}>
            <div className="task-text">
                <div className="number" key={props.index}>{props.index}</div>
                <div className="text" key={props.title}>{props.title}</div>
                <span className={`line ${show ? "line-longer" : ""}`}></span>
            </div>
            {show ? <TaskItems handleShow={show} subtasks={props.subtasks}/> : ""}
        </div>
    )
}
