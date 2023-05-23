import React from 'react';
import LineCircleLine from '../If Rule Components/If Rule Sub-Components/Line Circle Line';

const NotifyComponent = ({ rule }) => {
    return (
        <div key={rule.key} style={{ boxSizing: "border-box", display: "contents" }}>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    width: '480px',
                    height: '60px',
                    padding: '',
                    border: '1px solid black',
                    boxShadow: '1px 3px 8px 1px rgba(0,0,0,0.24)',
                    borderRadius: 4,
                }}
            >
                <p>Notify</p>

            </div>

            {/* Other content */}
            <LineCircleLine />
        </div>
    );
};

export default NotifyComponent;