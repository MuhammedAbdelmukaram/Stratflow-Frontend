import React from 'react';
import {useDrag} from "react-dnd";

const Pause = ({fromSidebar}) => {
    const [{ isDragging }, drag] = useDrag({
        type: 'PAUSE',
        item: { name: 'PAUSE' },
        canDrag: () => fromSidebar,
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),

    });

    return (
        <div
            ref={drag}
            style={{
                height:60,
                width:150,
                backgroundColor:'#2E2E2E',
                border:'1px solid black',
                display:"flex",
                marginTop:10,
            }}>

            <div
                style={{
                    width:'100%',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                }}
            >
                <p
                    style={{
                        marginBottom:0,
                        fontSize:14,
                        color:'white',
                        fontWeight:600
                    }}
                >PAUSE</p>
            </div>

        </div>
    );
};

export default Pause;