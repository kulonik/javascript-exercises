const leapYears = function(year) {
    if(year % 4 === 0) {
        return true;
    } else {
        return false;
    }
};

console.log(leapYears(1997));

// Do not edit below this line
module.exports = leapYears;
