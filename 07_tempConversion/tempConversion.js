const convertToCelsius = function(degree) {
  let degreeF = (degree - 32) * 5 / 9;
  return Math.round(degreeF * 10) / 10;
};
console.log(convertToCelsius(100));


const convertToFahrenheit = function(degree) {
  let degreeC = (degree * 9 / 5 + 32);
  return Math.round(degreeC * 10) / 10;
};
console.log(convertToFahrenheit(73.2));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
