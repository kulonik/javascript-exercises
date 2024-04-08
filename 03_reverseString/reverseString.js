const reverseString = function(string) {
    let stringArr = string.split('');
    let reverseArr = [];
    for(i = stringArr.length - 1; i >= 0; i-- ) {
        reverseArr += stringArr[i];
    }
    return reverseArr;
};

// Do not edit below this line
module.exports = reverseString;
