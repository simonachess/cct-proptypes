import React from 'react';
import Radio from './Radio.svg';

export default function TaskItems(props) {

    return (
        <div className="tasks-container">{props.handleShow}
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
