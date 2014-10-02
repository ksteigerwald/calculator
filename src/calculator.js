var Calculator =  (function () {
  
  var stack = [];

  var operations = {
    add: function(a, b) { return a + b; }
  };
  
  var isNumber = function (n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
  };
 
  var last = function () {
    stack = [stack[stack.length -1]];
    return stack[0];
  };

  var compute = function () {
    var operators = stack.filter(isNaN),
          numbers = stack.filter(isNumber);      
    if(operators.length === 0) return last();
    
  };

  /* public */ 

  var input = function (val) {
    stack.push(val);  
  },

  equal = function () {

    var total = compute();

    return total;
  },

  clear = function () {
    stack = [0]; 
    return equal();
  };
  
  return {
    'input' : input,
    'equal' : equal,
    'clear' : clear
  };

}());

