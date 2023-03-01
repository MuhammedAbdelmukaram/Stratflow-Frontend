import React from 'react';

const DecreaseBudget = () => {
    return (
        <div
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