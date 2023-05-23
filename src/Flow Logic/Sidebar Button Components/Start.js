import React from 'react';
import LineCircleLine from "../If Rule Components/If Rule Sub-Components/Line Circle Line";

const Start = ({allowDrop, reference}) => {
    const circleClassName = allowDrop ? 'circle isOver' : 'circle';


    return (
        <div>
            <div

                ref={allowDrop ? reference : null}
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

            <LineCircleLine  isOver={allowDrop} bottomSide={reference}/>
        </div>
    );

};

export default Start;