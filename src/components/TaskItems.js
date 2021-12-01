import React from 'react';
import Radio from './Radio.svg';
import PropTypes from "prop-types";

function TaskItems(props) {

    return (
        <div className="tasks-container">
            <div className="all-tasks">
                {props.subtasks.map((item, index) => {
                    return (
                        <div className="task-item" key={index}>
                            <img src={Radio} alt="checked" />
                            <p dangerouslySetInnerHTML={{
                                __html: item
                            }}></p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

TaskItems.propTypes = {
    subtasks: PropTypes.arrayOf(PropTypes.string, PropTypes.array),
    item: PropTypes.string,
    index: PropTypes.number,
    Radio: PropTypes.string,
}


export default TaskItems