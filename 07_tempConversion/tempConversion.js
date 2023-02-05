const convertToCelsius = function(farTem) {
  return Math.round((farTem -32)*50/9)/10
};

const convertToFahrenheit = function(celTem) {
  return Math.round((celTem*9/5+32)*10)/10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};