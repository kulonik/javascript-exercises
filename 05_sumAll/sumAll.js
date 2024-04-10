const sumAll = function(startNum, endNum) {
    let sum = 0;
    for(i = startNum; i <= endNum; i++) {
        sum += i;
    }
    return sum;
};
console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
