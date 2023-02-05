const removeFromArray = function(theArray, ...elems) {
    for (let i = 0; i < elems.length; i++) {
        theArray = theArray.filter(els => els !== elems[i]);
    }
    return theArray;
};

// Do not edit below this line
module.exports = removeFromArray;