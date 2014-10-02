
module('Calculator Unit Test', {
  setup: function() {
    Calculator.clear(); 
  }
});

test("Clear", function() {
  strictEqual(Calculator.equal(), 0);
});

test('Recives Input, returns output', function() { 
  Calculator.input(12);
  strictEqual(Calculator.equal(), 12);
  Calculator.input(15);
  strictEqual(Calculator.equal(), 15);
});

test("Add", function() {
  Calculator.input(1); 
  Calculator.input('add'); 
  Calculator.input(1); 
  strictEqual(Calculator.equal(), 2);
  
  Calculator.input(51); 
  Calculator.input('add'); 
  Calculator.input(11); 
  strictEqual(Calculator.equal(), 64);
  Calculator.input('add'); 
  Calculator.input(10); 
  strictEqual(Calculator.equal(), 74);
});
