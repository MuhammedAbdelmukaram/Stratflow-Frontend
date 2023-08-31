import React from 'react';
import '../../../Assets/CSS/Flow Logic/Line Circle Line.css'
const LineCircleLineHorizontal = ({isOver}) => {
    const circleClassName = isOver ? 'circle isOverH' : 'circle';
    const line1ClassName = isOver ? 'line-horizontal line1-horizontal isOver' : 'line-horizontal line1-horizontal';
    const line2ClassName = isOver ? 'line-horizontal line2-horizontal isOver' : 'line-horizontal line2-horizontal';


    return (
        <div
            className="horizontal-wrapper"
            style={{
                width: 100,
                height: 60,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                marginLeft: 52,
                marginRight: -52
            }}
        >
                <div className={line1ClassName}></div>
                 <div className={circleClassName}></div>
                <div className={line2ClassName}></div>

        </div>
    );
};

export default LineCircleLineHorizontal;
