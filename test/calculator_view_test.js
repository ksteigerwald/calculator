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

test("clicking a button updates display", function() {
  CalculatorView.init('#calculator'); 
  var $el = $($('.calculator ul li')[8]),
   $input = $('.calculator input');
  $el.trigger('mousedown');
  equal($input.val() , '4');
  $el = $('li[data-fn="add"]');
  $el.trigger('mousedown');
  $el = $($('.calculator ul li')[5]);
  $el.trigger('mousedown');
  $el = $('li[data-fn="equal"]');
  $el.trigger('mousedown');
  equal($input.val() , '12', '4+8=12');
});
