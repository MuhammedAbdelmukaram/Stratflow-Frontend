import React, { useState } from 'react';

const Sign = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleMenuClick = () => {
        setIsMenuOpen((prevState) => !prevState);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setIsMenuOpen(false);
    };

    const renderOption = (option) => (
        <div
            key={option}
            style={{ padding: 3, cursor: 'pointer' }}
            className={`menu-item ${selectedOption === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(option)}
        >
            {option}
        </div>
    );

    const renderTopBottomOptions = () => (
        <>
            {renderOption('TOP')}
            {renderOption('BOTTOM')}
        </>
    );

    const renderComparisonOptions = () => (
        <>
            {renderOption('=')}
            {renderOption('<')}
            {renderOption('>')}
        </>
    );

    return (
        <div
            className="menu-container"
            style={{ position: 'relative', backgroundColor: 'white' }}
        >
            <div
                className="clickable-element"
                style={{
                    marginLeft:20,
                    width: 50,
                    border: '1px solid black',
                    fontSize: 12,
                    height: '2rem',
                    borderRadius: 4,
                    boxShadow: '1px 3px 8px 1px rgba(0, 0, 0, 0.24)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                }}
                onClick={handleMenuClick}
            >
                {selectedOption ? selectedOption : ''}
            </div>
            {isMenuOpen && (
                <div
                    className="category-menu"
                    style={{
                        position: 'absolute',
                        left: 50,
                        display: 'flex',
                        fontSize: 12,
                        backgroundColor: 'white',
                        boxShadow: '1px 3px 8px 1px rgba(0, 0, 0, 0.24)',
                        zIndex: 2,
                        padding: 5,
                        borderRadius: 4,
                        border: '1px solid #A7A7A7',
                    }}
                >
                    <div
                        className="category-list"
                        style={{
                            height: 'fit-content',
                            width: 100,
                        }}
                    >
                        {renderTopBottomOptions()}
                    </div>
                    <div
                        style={{
                            backgroundColor: 'white',
                            zIndex: 2,
                            borderLeft: '1px solid black',
                            height: 'fit-content',
                            paddingLeft: 10,
                            width: 100,
                            fontWeight: 'bold',
                            fontSize: 10,
                        }}
                        className="item-list"
                    >
                        {renderComparisonOptions()}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sign;