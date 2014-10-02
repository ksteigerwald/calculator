var Calculator =  (function () {
  
  var stack = [];
  
  var isNumber = function (n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
  };
 
  var last = function () {
    stack = [stack[stack.length -1]];
    return stack[0];
  };

  var process = function () {
    var operators = stack.filter(isNaN),
          numbers = stack.filter(isNumber);      

    if(operators.length === 0) return last();
    
  };

  /* public */ 

  var input = function (val) {
    stack.push(val);  
  },

  equal = function () {

    var total = process();

    return total;
  };

  return {
    'input' : input,
    'equal' : equal
  }

}());

