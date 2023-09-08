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
        collection.shift();
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