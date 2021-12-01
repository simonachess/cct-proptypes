import React, { useState, useEffect, useRef } from 'react';
import TaskItems from "./TaskItems";
import PropTypes from "prop-types";

function Task(props) {

    const [show, setShow] = useState(false);
    const toggle = () => {
        setShow(!show);
    }

    const node = useRef();

    const handleClick = e => {
        if (node.current.contains(e.target)) {
            return;
        }
        setShow(false);
    };

    useEffect(() => {
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, []);

    return (
        <div ref={node} onClick={toggle}>
            <div className="task-text">
                <div className="number" key={props.index}>{props.index}</div>
                <div className="text" key={props.title}>{props.title}</div>
                <span className={`line ${show ? "line-longer" : ""}`}></span>
            </div>
            {show && <TaskItems subtasks={props.subtasks} />}
        </div>
    )
}

Task.propTypes = {
    toggle: PropTypes.func,
    index: PropTypes.number,
    title: PropTypes.string,
    subtasks: PropTypes.arrayOf(PropTypes.string, PropTypes.array),
}

export default Task