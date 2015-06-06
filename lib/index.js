'use strict';

var _bluebird = require('bluebird');

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Bbbb = (function () {
  function Bbbb() {
    _classCallCheck(this, Bbbb);

    var smile = '(＾0＾）';
    this.hello = 'Hello ' + smile;
  }

  Bbbb.prototype.sayHello = function sayHello() {
    var hello = this.hello += ' 哈哈';
    return (function () {
      return hello;
    })();
  };

  Bbbb.prototype.getNumber = _bluebird.coroutine(function* (x) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(Number(x));
      }, 200);
    });
  });
  return Bbbb;
})();

exports['default'] = Bbbb;
module.exports = exports['default'];