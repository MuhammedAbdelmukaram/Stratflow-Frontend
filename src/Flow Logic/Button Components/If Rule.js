import React from 'react';
import { useDrag } from 'react-dnd';

const IfRule = ({ fromSidebar }) => {
    const [{ isDragging }, drag] = useDrag({
        type: 'IF_RULE',
        canDrag: () => fromSidebar,
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),

    });

    const backgroundColor = isDragging ? 'gray' : 'white';

    return (
        <div
            ref={drag}
            style={{
                height: 60,
                width: 150,
                backgroundColor,
                border: '1px solid black',
                display: 'flex',
                marginTop: 10,
                cursor:"pointer"
            }}
        >
            <div
                style={{
                    borderRight: '1px dotted black',
                    width: 62,
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <p style={{ fontSize: 22, marginBottom: 0 }}>IF</p>
            </div>

        </div>
    );
};

export default IfRule;