var CalculatorView = (function () {
  
  var selector,
      $el,
      html = [
      '<header>',
       ' <input type="text" id="display"/ >',
      '</header>',
      '<ul>',
       '<li>MC</li>',
       '<li>M-</li>',
       '<li>M+</li>',
       '<li>MR</li>',
       '<li>7</li>',
       '<li>8</li>',
       '<li>9</li>',
       '<li data-fn="divide">%</li>',
       '<li>4</li>',
       '<li>5</li>',
       '<li>6</li>',
       '<li data-fn="multiply">x</li>',
       '<li>1</li>',
       '<li>2</li>',
       '<li>3</li>',
       '<li data-fn="subtract">-</li>',
       '<li>0</li>',
       '<li>.</li>',
       '<li data-fn="equal">=</li>',
       '<li data-fn="add">+</li>',
       ' </ul>'].join("\n"),
       $display,
       closeArgument = false;

  var _create_element =  function () {

    var el = document.createElement('div'); 
        el.setAttribute('id',selector);
        el.setAttribute('class','calculator');

    document.body.appendChild(el);
    return el;
  },

  _find_or_create = function (el) {
    return document.getElementById(el) || _create_element();
  },
  
  _readVal = function () {
    return $display.value;   
  },

  _parseEvents =  function (ar) {
    return ar.split('=');
  },

   _showEqual =  function () {
     _updateInput();
     $display.value = Calculator.equal(); 
     closeArgument = true;
   },

   _handler = function (evt) {
    if(evt == 'clear') return Calculator.clear();
    if(evt == 'equal') return _showEqual();
    _updateInput();
    Calculator.input(evt);
    _setDisplay();
    closeArgument = true;
  },

  _operation = function(attrs) {
    if(attrs.length <= 0) return false;
    var evt = attrs[0].value;
    _handler(evt); 
    return true;
  },

  _updateInput = function () {
    var val = Number($display.value);
    Calculator.input(val);
  },

  _updateDisplay = function (val) {
    if(closeArgument) $display.value = '';
    $display.value = $display.value.concat(val); 
    closeArgument = false;
  },
  
  _setDisplay = function () {
    $display.value = Calculator.equal(); 
  },

  _events = function (e) {
    e.onmousedown =  function (el) {
      var isOperation =  _operation(el.target.attributes);
      if(isOperation) return false;
      _updateDisplay(el.target.textContent);   
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
         $el = _find_or_create(selector);
    _render();
  };

  return {
    'init' : init
  };

}());
