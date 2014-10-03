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
  Calculator.input(1).input('add').input(1); 
  strictEqual(Calculator.equal(), 2, '1 + 1 = 2');
  Calculator.input('add').input(51).input('add').input(11); 
  strictEqual(Calculator.equal(), 64, '2 + 51 + 11 = 64');
  Calculator.input('add').input(10); 
  strictEqual(Calculator.equal(), 74, '64 + 10 = 74');
});

test("Subtract", function() {
  Calculator.input(10).input('subtract').input(5);
  strictEqual(Calculator.equal(), 5, '10 - 5 = 5');
  Calculator.input('subtract').input(2).input('subtract'); 
  strictEqual(Calculator.equal(), 3, '2 - 3');
});

test("Add & Subtract", function() {
  Calculator.input(5).input('add').input(12).input('subtract').input(4);
  strictEqual(Calculator.equal(), 13, '5+12-4=13');
});

test("Multiply", function() {
  Calculator.input(5).input('multiply').input(5); 
  strictEqual(Calculator.equal(), 25, '5 * 5 = 25');
});

test("Divide", function() {
  Calculator.input(5).input('divide').input(50); 
  strictEqual(Calculator.equal(), 10, '5/50 = 10');
});

test("Decimals", function() {
 Calculator.input(12.5).input('add').input(10.4);
 strictEqual(Calculator.equal(), 22.9, '12.5 + 10.4 = 22.9');
});
