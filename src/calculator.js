var Calculator =  (function () {
  
  var stack = [];
  
  var isNumber = function (n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
  };
  
  var process = function () {
    var operators = stack.filter(isNaN),
          numbers = stack.filter(isNumber);      
    if(operators.length === 0) return numbers[0];

  };
  /* public */ 

  var input = function (val) {
    stack.push(val);  
  },

  equal = function () {
    return process();
  };

  return {
    'input' : input,
    'equal' : equal
  }

}());

