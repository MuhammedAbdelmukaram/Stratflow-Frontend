const handleDelete = (nodeId) => {
    const newState = { ...state };

    const findNode = (node, nodeId) => {
        if (node.id === nodeId) {
            return node;
        }
        if (node.children && node.children.length > 0) {
            for (let i = 0; i < node.children.length; i++) {
                const childNode = node.children[i];
                const foundNode = findNode(childNode, nodeId);
                if (foundNode) {
                    return foundNode;
                }
            }
        }
        return null;
    };

    const findParent = (parent, nodeId) => {
        if (parent.children) {
            for (let i = 0; i < parent.children.length; i++) {
                const child = parent.children[i];
                if (child.id === nodeId) {
                    return parent;
                }
                const found = findParent(child, nodeId);
                if (found) {
                    return found;
                }
            }
        }
        return null;
    };

    const removeNode = (node) => {
        const parent = findParent(newState.rootNode, node.id);
        if (parent) {
            const index = parent.children.findIndex((child) => child.id === node.id);
            if (index !== -1) {
                parent.children.splice(index, 1);
                parent.children = parent.children.concat(node.children);
            }
        }
    };

    const node = findNode(newState.rootNode, nodeId);
    if (node) {
        removeNode(node);
    }

    setState(newState);
};

