var CalculatorView = (function () {
  
  var selector;

  var _create_element =  function () {
    var el = document.createElement('div'); 
        el.setAttribute('id',selector);

    document.body.appendChild(el);

    return el;
  },

  _find_or_create = function (el) {
    return document.getElementById(el) || _create_element();
  };
  /* Public */

  var init = function (el, options) {
    selector = el;
    var $el = _find_or_create(selector);
  //  [].slice[document.querySelctorAll()].map();
  };
  return {
    'init' : init
  };

}());
