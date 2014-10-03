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
    },

    divide: function (a) {
      return  function (b) {
        return b / a; 
      };
    },

    multiply: function (a) {
      return function (b) {
        return a * b; 
      };  
    }
  };
  
  var isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
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
    return this;
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

