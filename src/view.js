var CalculatorView = (function () {

  var selector,
    $el,
    html = [
    '<header>',
      ' <input disabled type="text" id="display"/ >',
    '</header>',
    '<ul>',
      '<li data-fn="clear">C</li><li></li><li></li><li></li>',
      '<li>7</li><li>8</li><li>9</li><li data-fn="divide">%</li>',
      '<li>4</li><li>5</li><li>6</li><li data-fn="multiply">x</li>',
      '<li>1</li><li>2</li><li>3</li><li data-fn="subtract">-</li>',
      '<li>0</li><li>.</li><li data-fn="equal">=</li><li data-fn="add">+</li>',
    ' </ul>'].join("\n"),
    $display,
    closeArgument = false;

  var createElement  =  function () {

    var el = document.createElement('div'); 
    el.setAttribute('id',selector);
    el.setAttribute('class','calculator');

    document.body.appendChild(el);
    return el;
  },

  findOrCreate  = function (el) {
    return document.getElementById(el) || createElement();
  },

  compose = function() {
    var funcs = arguments;
    return function() {
      var args = arguments;
      for (var i = funcs.length; i --> 0;) {
        args = [funcs[i].apply(this, args)];
      }
      return args[0];
    };
  }, 

  _showEqual =  function (close) {
    $display.value = Calculator.equal(); 
    return close || false;
  },

  _clearDisplay = function () {
    $display.value = '';
  },
  
  _clearCalculator = function () {
    Calculator.clear();
  },

  _updateInput = function (val) {
    Calculator.input(val);
  },

  _updateDisplay = function (val) {
    $display.value = val; 
    return false;
  },
  
  _logInput = function (val) {
    return $display.value.concat(val); 
  },

  _wipeDisplay = function () {
    if(closeArgument) $display.value = '';
    return true;
  },

  _setDisplay = function () {
    $display.value = Calculator.equal(); 
    return true;
  },

  _setArgument = function (bool) {
    closeArgument = bool; 
  },
  
  _triggerOperation = function (val) {
    _updateInput(val);  
    return function (evt) {
      return _updateInput(evt); 
    };
  },

  _operation = function(attrs) {

    var evt = attrs[0].value, 
        currentValue = Number($display.value);

    switch(evt){
      case 'clear':
        return compose(_clearDisplay, _clearCalculator)();
      case 'equal':
        return compose(_setArgument, _showEqual, _updateInput)(currentValue);
      default:
        var op = _triggerOperation(currentValue);
        return compose(_setArgument, _setDisplay, op)(evt);
    }

  },
  
  _display = function () {
    _wipeDisplay();
    return compose.apply(this, arguments);
  },
  
  _event = function (el) {
    if(el.attributes.length > 0) 
      return _operation(el.attributes);
    _display(_setArgument, _updateDisplay, _logInput)(el.textContent);
  },

  _events = function (e) {
    e.onmousedown =  function (el) {
      _event(el.target);
    };
  },

  _render = function () {

    $el.innerHTML = html;
    var list = document.querySelectorAll('.calculator ul li');

    $display = document.querySelector('div.calculator input');
    [].slice.call(list).map(_events);
  };

  /* Public */

  var init = function (el, options) {
    if(el === undefined) return false;

    selector = el;
    $el = findOrCreate(selector);
    _render();
  };

  return {
    'init' : init
  };

}());
