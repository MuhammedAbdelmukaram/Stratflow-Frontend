import React, { useState } from 'react';


const InputFieldDecreaseBudget = () => {
    const [value, setValue] = useState('');
    const [isPercentage, setIsPercentage] = useState(false);

    const handleInputChange = (event) => {
        setValue(event.target.value);
    };

    const handleToggleChange = () => {
        setIsPercentage(!isPercentage);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', width: 85, marginLeft:12 }}>
            <input
                type="text"
                value={value}
                onChange={handleInputChange}
                style={{
                    width: '70px',
                    height: '20px',
                    fontSize:'12px',
                    border: `1px solid`,
                    borderRadius: '2px',
                }}
            />
            <div
                style={{
                    marginLeft: '8px',
                    display:"flex"
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        width:34,
                        marginRight:2,
                        height: '18px',
                        border: `1px solid ${isPercentage ? '#bebebe' : '#bebebe'}`,
                        borderRadius: '8px',
                        padding: '4px',
                        cursor: 'pointer',
                        backgroundColor: isPercentage ? 'transparent' : '#313131',
                        color: isPercentage ? 'black' : 'white',
                    }}
                    onClick={handleToggleChange}
                >
                    <p style={{ fontSize:10,width:'100%',fontWeight:"bolder",textAlign:"center",marginBottom:0, }}>$</p>
                </div>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        width:34,
                        justifyContent:'center',
                        height: '18px',
                        border: `1px solid ${isPercentage ? '#bebebe' : '#bebebe'}`,
                        borderRadius: '8px',
                        padding: '4px',
                        cursor: 'pointer',
                        backgroundColor: isPercentage ? '#313131' : 'transparent',
                        color: isPercentage ? 'white' : 'black',
                    }}
                    onClick={handleToggleChange}
                >
                    <p style={{ fontSize:10,width:'100%',fontWeight:"bolder",textAlign:"center",marginBottom:0, }}>%</p>
                </div>
            </div>
        </div>
    );
};

export default InputFieldDecreaseBudget;