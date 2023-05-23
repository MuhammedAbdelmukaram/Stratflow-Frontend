import React from 'react';

const SignupSteps = ({ currentForm }) => {
    const steps = [    'Step 1',    'Step 2',    'Step 3',  ];

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            {steps.map((step, index) => (
                <div
                    key={step}
                    style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        backgroundColor: index + 1 <= currentForm ? '#2E2E2E' : '#D9D9D9',
                        margin: '0 10px',
                        marginBottom: '30px',
                    }}
                >
                </div>
            ))}
        </div>
    );
};

export default SignupSteps;