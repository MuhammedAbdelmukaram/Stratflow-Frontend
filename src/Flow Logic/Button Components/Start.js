import React from 'react';

const Start = () => {
    return (
        <div
            style={{
                width:"480px",
                display:"flex",
                justifyContent:"center",
            }}
        >
            <div
                style={{
                    height: '60px',
                    width: '150px',
                    backgroundColor: 'white',
                    border: '1px solid black',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <p style={{ margin: 0, fontSize: 14, fontWeight: 600, display:"flex", flexDirection:"column", color:"#000000" }}>
                    Start
                </p>
            </div>
        </div>
    );
};

export default Start;