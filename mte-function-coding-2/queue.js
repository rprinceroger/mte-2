let collection = [];

// Write the queue functions below.
function print() {
    //add code here
    return collection;
}

function enqueue(element) {
    //add code here    
    collection[collection.length] = element;
    return collection;
}

function dequeue() {
    //add code here
    if (!isEmpty()) {
        for (let i = 0; i < collection.length - 1; i++) {
            collection[i] = collection[i + 1];
        }
        collection.length -= 1;
        return collection;
    }
}

function front() {
    //add code here
    if (!isEmpty()) {
        return collection[0];
    }
}

function size() {
    //add code here
    return collection.length;
}

function isEmpty() {
    //add code here
    return collection.length === 0;
}

module.exports = {
    collection,
    print,
    enqueue,
    dequeue,
    front,
    size,
    isEmpty
};