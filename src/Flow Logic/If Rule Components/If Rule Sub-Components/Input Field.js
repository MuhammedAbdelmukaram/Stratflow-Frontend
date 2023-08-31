import React, { useState } from 'react';

const InputWithToggle = ({updateNodeValue, updateNodePercentage, nodeID, nodeValue, nodePercentage}) => {
    const [value, setValue] = useState(nodeValue);
    const [isPercentage, setIsPercentage] = useState(nodePercentage);

    const handleInputChange = (event) => {
        setValue(event.target.value);
        // Call the updateNodeValue function from the parent component with the updated value and node ID
        updateNodeValue(nodeID, event.target.value);
    };

    const handleToggleChange = () => {
        // Toggle the isPercentage state locally
        setIsPercentage((prevIsPercentage) => !prevIsPercentage);
        // Call the updateNodePercentage function from the parent component with the updated percentage value and node ID
        updateNodePercentage(nodeID, !isPercentage);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', marginLeft:20 }}>
            <input
                type="text"
                placeholder={""}
                value={value}
                onChange={handleInputChange}
                style={{
                    width: '70px',
                    border: `1px solid`,
                    borderRadius:2,
                }}
            />
            <div
                style={{
                    marginLeft: '6px',
                    display:"flex"
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        height: '18px',
                        border: `1px solid ${isPercentage ? '#A7A7A7' : '#06AD85'}`,
                        borderRadius: '4px 0 0 4px',
                        padding: '4px',
                        cursor: 'pointer',
                        backgroundColor: isPercentage ? 'transparent' : '#06AD85',
                        color: isPercentage ? 'black' : 'white',
                    }}
                    onClick={handleToggleChange}
                >
                    <div style={{ fontSize:10 }}>Num</div>
                </div>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent:'center',
                        height: '18px',
                        border: `1px solid ${isPercentage ? '#06AD85' : '#A7A7A7'}`,
                        borderRadius: '0 4px 4px 0',
                        padding: '4px',
                        cursor: 'pointer',
                        backgroundColor: isPercentage ? '#06AD85' : 'transparent',
                        color: isPercentage ? 'white' : 'black',
                    }}
                    onClick={handleToggleChange}
                >
                    <div style={{ fontSize:10 }}>%</div>
                </div>
            </div>
        </div>
    );
};

export default InputWithToggle;
