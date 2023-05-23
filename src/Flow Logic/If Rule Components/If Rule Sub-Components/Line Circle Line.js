import React from 'react';
import '../../../Assets/CSS/Flow Logic/Line Circle Line.css'


const LineCircleLine = ({ isOver, bottomSide }) => {
    const circleClassName = isOver ? 'circle isOver' : 'circle';
    const line1ClassName = isOver ? 'line line1 isOver' : 'line line1';
    const line2ClassName = isOver ? 'line line2 isOver' : 'line line2';

    return (
        <div className="wrapper" ref={bottomSide}>
            <div className={line1ClassName}></div>
            <div className={circleClassName}></div>
            <div className={line2ClassName}></div>
        </div>
    );
};

export default LineCircleLine;