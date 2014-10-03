var Calculator =  (function () {
  
  var stack = [], memory = 0, tail = 0;

  var operations = {
    value: function (val) {
      return function () {
        return val; 
      };  
    },

    add: function(a) { 
      return function(b) { 
        return a + b; 
      };
    },

    subtract: function (a) { 
      return function (b) {
        return a - b; 
      }; 
    } 
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
    //console.log(numbers,'::', stack,stack.indexOf('add'));
    //return operations.add.apply(this,numbers);
    return curry(operations.add,'add')(numbers);
    //return numbers.reduce(operations.subtract);
  };

  var commulate = function (val) {
    return (memory !== 0 && stack.lenght === 0) ? val + memory : val;  
  };


  /* public */ 

  var input = function (val) {
    if(isNumber(val)){
      if(stack.length > 0) {
        memory = stack[0](val);
        stack = [];
      }
      else{
        memory = val;
      }
    }
    else {
      stack.push(operations[val](memory));  
    }
    console.log("input:".concat(val, " memory:", memory, " stack:", stack));
  },

  equal = function () {
    return memory;
  },

  clear = function () {
    stack = []; 
    memory = 0;
    return 0;
  };
  
  return {
    'input' : input,
    'equal' : equal,
    'clear' : clear
  };

}());

