import React from 'react';


function ThreeButtonMenu({ rule }) {
    return (
        <div style={{ position: 'relative' }}>
            <img
                src={require('../../../Assets/FlowLogic Assets/FlowMenu Icon.png')}
                alt=""
                style={{
                    width: 20,
                    height: 20,
                    cursor: 'pointer',
                    position: 'absolute',
                    right: -49,
                    bottom: 10,
                    marginRight: 10,
                    marginTop: 10,
                }}
                onClick={() => {
                    const menu = document.getElementById(`menu-${rule.key}`);
                    menu.classList.toggle('show');
                }}
            />
            <div id={`menu-${rule.key}`} className="menu">
                <button
                    style={{
                        marginRight: 5,
                        padding:1,
                        border:"none",
                        backgroundColor:"transparent",
                        fontSize:12
                    }}
                >
                    Edit
                </button>
                <button
                    style={{
                        marginRight: 5,
                        padding:1,
                        border:"none",
                        backgroundColor:"transparent",
                        fontSize:12
                    }}
                >
                    Analytics
                </button>
                <button
                    style={{
                        marginRight: 5,
                        padding:1,
                        border:"none",
                        color:'#B60000',
                        backgroundColor:"transparent",
                        fontSize:12
                    }}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default ThreeButtonMenu;