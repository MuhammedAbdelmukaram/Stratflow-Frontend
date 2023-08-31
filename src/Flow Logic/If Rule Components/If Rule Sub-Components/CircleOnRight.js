import React from 'react';
import '../../../Assets/CSS/Flow Logic/CircleOnRight.css';

const CircleOnRight = ({ isOver }) => {
    const circleClassName = isOver ? 'horizontal-circle isOver' : 'horizontal-circle';

    return (
        <div
            className="horizontal-wrapper"
            style={{ width: 100, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}
        >
            <div style={{}}>
                <div className={circleClassName}></div>
            </div>
        </div>
    );
};

export default CircleOnRight;
