module('Calculator View Unit Test', {
  setup: function () {
    CalculatorView.init('#calculator'); 
  }
});

function isInPage(node) {
    return (node === document.body) ? false : document.body.contains(node);
}

test("init view", function() {
  ok(document.getElementById('#calculator') !== null);
});
