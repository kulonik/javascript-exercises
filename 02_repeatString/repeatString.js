const repeatString = function(string, num) {
    let i = 0;
    let newStr = "";
    while(i < num) {
        newStr += string;
        i++;
    }
    return newStr;
};
// Do not edit below this line
module.exports = repeatString;
