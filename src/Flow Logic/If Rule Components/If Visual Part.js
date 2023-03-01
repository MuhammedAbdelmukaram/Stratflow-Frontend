import React from 'react';

function IfVisualPart() {
    return (
        <div
            style={{
                borderRight: '2px dotted black',
                width: 62,
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#06AD85',
            }}
        >
            <p style={{ fontSize: 22, marginBottom: 0, paddingLeft: '-10px', color: 'white' }}>IF</p>
        </div>
    );
}

export default IfVisualPart;