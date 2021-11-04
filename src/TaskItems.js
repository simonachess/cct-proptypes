import React from 'react';
import Radio from './Radio.svg';

export default function TaskItems(props) {

    return (
        <div>{props.handleShow}
            <div className="all-tasks">
                <h2> Hello </h2>
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
