"use strict";

var _cucumber = require("@cucumber/cucumber");

var _htmlBehavior = require("../support/html-behavior");

var _waitForBehavior = require("../support/wait-for-behavior");

var _webElementHelper = require("../support/web-element-helper");

var _logger = require("../logger");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(0, _cucumber.When)(/^I click the "([^"]*)" (?:button|link|icon|element)$/, /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(elementKey) {
    var page, globalConfig, elementIdentifier;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            page = this.screen.page, globalConfig = this.globalConfig;

            _logger.logger.log("I click the ".concat(elementKey, " (?:button|link|icon|element)"));

            elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
            _context2.next = 5;
            return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var elementIdentifier;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);

                      if (!elementIdentifier) {
                        _context.next = 5;
                        break;
                      }

                      _context.next = 4;
                      return (0, _htmlBehavior.clickElement)(page, elementIdentifier);

                    case 4:
                      return _context.abrupt("return", _waitForBehavior.waitForResult.PASS);

                    case 5:
                      ;
                      return _context.abrupt("return", _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE);

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })), globalConfig, {
              target: elementKey
            });

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
(0, _cucumber.When)(/^I click the "([0-9]+th|[0-9]+st|[0-9]+nd|[0-9]+rd)" "([^"]*)" (?:button|link|icon|element)$/, /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(elementPosition, elementKey) {
    var _elementPosition$matc;

    var page, globalConfig, elementIdentifier, pageIndex;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            page = this.screen.page, globalConfig = this.globalConfig;

            _logger.logger.log("I click the ".concat(elementPosition, " ").concat(elementKey, " (?:button|link|icon|element)"));

            elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
            pageIndex = Number((_elementPosition$matc = elementPosition.match(/\d/g)) === null || _elementPosition$matc === void 0 ? void 0 : _elementPosition$matc.join('')) - 1;
            _context4.next = 6;
            return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var elementIdentifier;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);

                      if (!elementIdentifier) {
                        _context3.next = 5;
                        break;
                      }

                      _context3.next = 4;
                      return (0, _htmlBehavior.clickElementAtIndex)(page, elementIdentifier, pageIndex);

                    case 4:
                      return _context3.abrupt("return", _waitForBehavior.waitForResult.PASS);

                    case 5:
                      ;
                      return _context3.abrupt("return", _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE);

                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            })), globalConfig, {
              target: elementKey
            });

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function (_x3, _x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}());