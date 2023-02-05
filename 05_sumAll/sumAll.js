const sumAll = function(...lims) {
    let sum = 0;
    let max = lims[0] >= lims[1] ? lims[0] : lims[1];
    let min = lims[0] >= lims[1] ? lims[1] : lims[0];
    if (max < 0 || min < 0 || typeof(max) !== 'number' || typeof(min) !== 'number') return "ERROR";
    for(let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
