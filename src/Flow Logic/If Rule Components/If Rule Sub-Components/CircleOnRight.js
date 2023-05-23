import React from 'react';
import '../../../Assets/CSS/Flow Logic/CircleOnRight.css'

const CircleOnRight = ({ isOver }) => {
    const circleClassName = isOver ? 'circle-right isOver' : 'circle-right';

    return (
        <div className="">

            <div className={circleClassName}></div>

        </div>
    );
};

export default CircleOnRight;