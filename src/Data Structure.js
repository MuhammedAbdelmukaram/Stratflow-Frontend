class Node {
    constructor(type, value) {
        this.type = type;
        this.value = value;
        this.children = [];
    }
}

class Tree {
    constructor() {
        this.root = new Node("IFRULE", "");
    }

    addNode(type, value, parent, position) {
        const newNode = new Node(type, value);

        if (parent === null) {
            this.root = newNode;
            return;
        }

        if (position === "AND") {
            parent.children.push(newNode);
        } else if (position === "OR") {
            const lastChild = parent.children[parent.children.length - 1];
            if (lastChild && lastChild.type === "IFRULE") {
                lastChild.children.push(newNode);
            } else {
                const orNode = new Node("IFRULE", "");
                orNode.children.push(lastChild);
                orNode.children.push(newNode);
                parent.children[parent.children.length - 1] = orNode;
            }
        } else {
            const index = parent.children.findIndex(child => child === position);
            parent.children.splice(index + 1, 0, newNode);
        }
    }

    removeNode(node) {
        const parent = this.findParent(node);
        if (parent) {
            const index = parent.children.findIndex(child => child === node);
            parent.children.splice(index, 1);
        }
    }

    findParent(node) {
        const queue = [this.root];
        while (queue.length > 0) {
            const currentNode = queue.shift();
            for (let i = 0; i < currentNode.children.length; i++) {
                if (currentNode.children[i] === node) {
                    return currentNode;
                } else {
                    queue.push(currentNode.children[i]);
                }
            }
        }
        return null;
    }

    toJSON() {
        return JSON.stringify(this.root);
    }

    fromJSON(json) {
        this.root = JSON.parse(json);
    }
}