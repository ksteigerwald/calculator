module('Calculator View Unit Test', {
  setup: function () {
  }
});

test("false view", function() {
  equal(CalculatorView.init(), false);
});

test("init view", function() {
  CalculatorView.init('#calculator'); 
  var $el = document.getElementById('#calculator');
  ok($el !== null);
  strictEqual($el.getAttribute('class'), 'calculator');
});

