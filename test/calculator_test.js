
module('Calculator Unit Test', {
  setup: function() {
    Calculator.clear(); 
  }
});

test("Clear", function() {
  Calculator.clear(); 
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
  strictEqual(Calculator.equal(), 2, '1 + 1 = 2');
  Calculator.input('add'); 
  Calculator.input(51); 
  Calculator.input('add'); 
  Calculator.input(11); 
  strictEqual(Calculator.equal(), 64, '2 + 51 + 11 = 64');
  Calculator.input('add'); 
  Calculator.input(10); 
  strictEqual(Calculator.equal(), 74, '64 + 10 = 74');
});

test("Subtract", function() {
  Calculator.input(10); 
  Calculator.input('subtract'); 
  Calculator.input(5);
  strictEqual(Calculator.equal(), 5, '10 - 5 = 5');
  Calculator.input('subtract'); 
  Calculator.input(2);
  Calculator.input('subtract'); 
  strictEqual(Calculator.equal(), 3, '2 - 3');
});

test("Add & Subtract", function() {
  Calculator.input(5).input('add').input(12).input('subtract').input(4);
  strictEqual(Calculator.equal(), 13, '5+12-4=13');
});
