import React from 'react';
import {useDrag} from "react-dnd";

const DecreaseBudget = ({fromSidebar}) => {
    const [{ isDragging }, drag] = useDrag({
        type: 'DECREASE_BUDGET',
        item: { name: 'DECREASE_BUDGET' },
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
                backgroundColor:'#5F2F2F',
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
                >Decrease Budget</p>
            </div>

        </div>
    );
};

export default DecreaseBudget;