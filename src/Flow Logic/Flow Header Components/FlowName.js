import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';

const FlowName = () => {
    const [text, setText] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    const handleInputChange = (event) => {
        setText(event.target.value);
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleInputBlur = () => {
        setIsEditing(false);
    };

    return (
        <div style={{ position: 'relative', width: 189 }}>
            {isEditing ? (
                <input type="text" value={text} onChange={handleInputChange} onBlur={handleInputBlur} />
            ) : (
                <div
                    onClick={handleEditClick}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        border: '1px solid #ccc',
                        padding: '4px',
                        paddingLeft: '8px',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        position: 'relative', // add this
                    }}
                >
                    {text || 'Type something here...'}
                    <div style={{ position: 'absolute', right: '4px', bottom: '4px' }}>
                        <FaEdit />
                    </div>
                </div>
            )}
        </div>
    );
};

export default FlowName;