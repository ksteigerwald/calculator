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
          console.log(funcs[i]);
            args = [funcs[i].apply(this, args)];
        }
        return args[0];
    };
  }, 

  _showEqual =  function () {
    _updateInput();
    $display.value = Calculator.equal(); 
    closeArgument = true;
  },

  _clearDisplay = function () {
    Calculator.clear();
    $display.value = Calculator.equal(); 
  },

  _updateInput = function () {
    var val = Number($display.value);
    Calculator.input(val);
  },

  _updateDisplay = function (val) {
    //if(closeArgument) $display.value = '';
    $display.value = val; 
    return false;
    //closeArgument = false;
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
  },

  _handler = function (evt) {
    if(evt == 'clear') return _clearDisplay();
    if(evt == 'equal') return _showEqual();
    _updateInput();
    Calculator.input(evt);
    _setDisplay();
    closeArgument = true;
  },

  _setArgument = function (bool) {
    closeArgument = bool; 
  },

  _operation = function(attrs) {
    if(attrs.length <= 0) return false;
    var evt = attrs[0].value;
    _handler(evt); 
    return true;
  },
  
  _display = function () {
    _wipeDisplay();
    return compose.apply(this, arguments);
  },

  _events = function (e) {
    e.onmousedown =  function (el) {
      var isOperation = _operation(el.target.attributes);
      if(isOperation) return false;
      _display(_setArgument, _updateDisplay, _logInput)(el.target.textContent);
      //_updateDisplay(el.target.textContent);   
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
