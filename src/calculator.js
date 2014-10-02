var Calculator =  (function () {
  
  var stack = [];

  var operations = {
    add: function(a, b) { return a + b; },
    subtract: function (a, b) { return a - b; } 
  };
  
  var isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };
 
  var last = function () {
    stack = [stack[stack.length -1]];
    return stack[0] || 0;
  };

  var compute = function () {
    var operators = stack.filter(isNaN),
          numbers = stack.filter(isNumber);      
    if(operators.length === 0) return last();
    //return operations.add.apply(this,numbers);
    //return numbers.reduce(operations.add);
    return numbers.reduce(operations.subtract);
  };

  /* public */ 

  var input = function (val) {
    stack.push(val);  
  },

  equal = function () {

    var total = compute();
        stack = [total];

    return total;
  },

  clear = function () {
    stack = []; 
    return 0;
  };
  
  return {
    'input' : input,
    'equal' : equal,
    'clear' : clear
  };

}());

