import React from 'react';
const ComponentNode = ({ component }) => {
    const { id, name, type } = component;

    return (
        <div style={{ border: '1px solid black', margin: '10px', padding: '10px', width: '100px' }}>
            <h3>Component ID: {id}</h3>
            <p>Name: {name}</p>
            <p>Type: {type}</p>
        </div>
    );
};

// Recursive function to render the tree
const renderTree = (node) => {
    if (!node) {
        return null;
    }

    const { ANDchild, ORchild } = node;

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex' }}>
                {/* Render the parent node */}
                <ComponentNode component={node} />

                {/* Render the "orChild" nodes horizontally */}
                {ORchild && (
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        {ORchild.map((child) => (
                            <div key={child.id} style={{ marginLeft: '20px' }}>
                                {renderTree(child)}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Render the "andChild" nodes vertically */}
            {ANDchild && (
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {ANDchild.map((child) => (
                        <div key={child.id} style={{ marginTop: '20px' }}>
                            {renderTree(child)}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
const Scheduler = () => {
    const rootNode = {
        id: '0',
        name: 'Root Node',
        type: 'IF_RULE',
        operation: 'and',
        ANDchild: [
            {
                id: '1',
                name: 'andChild 1',
                type: 'ComponentType1',
                operation: 'and',
                ANDchild: [],
                ORchild: [],
            },
        ],
        ORchild: [
            {
                id: '2',
                name: 'orChild 2',
                type: 'ComponentType2',
                operation: 'or',
                ANDchild: [{
                    id: '2',
                    name: 'AndChild 2',
                    type: 'ComponentType2',
                    operation: 'or',
                    ANDchild: [],
                    ORchild: [],
                },],
                ORchild: [],
            },
        ],
    };
    return (
        <div style={{ marginLeft:"15vw"}} >
            {renderTree(rootNode)}
        </div>
    );
};

export default Scheduler;
