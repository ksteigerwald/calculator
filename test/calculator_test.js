
function isEven(val) {  
  return val % 2 === 0;  
}  

test('Recives Input, returns output', function() { 
  Calculator.input(12);
  strictEqual(Calculator.equal(), 12);
  Calculator.input(15);
  strictEqual(Calculator.equal(), 15);
});




