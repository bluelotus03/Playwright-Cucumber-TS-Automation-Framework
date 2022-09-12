"use strict";

var _cucumber = require("@cucumber/cucumber");

var _webElementHelper = require("../../support/web-element-helper");

var _waitForBehavior = require("../../support/wait-for-behavior");

var _htmlBehavior = require("../../support/html-behavior");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(0, _cucumber.Then)(/^the "([^"]*)" should( not)? equal "([^"]*)" stored in global variables$/, /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(elementKey, negate, variableKey) {
    var page, globalConfig, elementIdentifier;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            page = this.screen.page, globalConfig = this.globalConfig; //logger.log(`the ${elementKey} should ${negate?'not ':''}equal ${globalVariables[variableKey]} stored in global variables`);

            elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
            _context2.next = 4;
            return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var elementStable, variableValue, elementText;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return (0, _waitForBehavior.waitForSelector)(page, elementIdentifier);

                    case 2:
                      elementStable = _context.sent;
                      variableValue = ''; //TODO: should be globalVariables[variableKey];

                      if (!elementStable) {
                        _context.next = 15;
                        break;
                      }

                      _context.next = 7;
                      return (0, _htmlBehavior.getElementText)(page, elementIdentifier);

                    case 7:
                      elementText = _context.sent;

                      if (!(elementText === variableValue === !negate)) {
                        _context.next = 12;
                        break;
                      }

                      return _context.abrupt("return", _waitForBehavior.waitForResult.PASS);

                    case 12:
                      return _context.abrupt("return", _waitForBehavior.waitForResult.FAIL);

                    case 13:
                      _context.next = 16;
                      break;

                    case 15:
                      return _context.abrupt("return", _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE);

                    case 16:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })), globalConfig, {
              target: elementKey,
              failureMessage: "\u2757\uFE0F Expected ".concat(elementKey, " to ").concat(negate ? 'not ' : '', "equal ").concat(variableKey, " stored in global variables")
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}());
(0, _cucumber.Then)(/^the "([^"]*)" should( not)? contain the "([^"]*)" stored in global variables$/, /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(elementKey, negate, variableKey) {
    var page, globalConfig, elementIdentifier;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            page = this.screen.page, globalConfig = this.globalConfig; //logger.log(`the ${elementKey} should ${negate?'not ':''}contain the ${globalVariables[variableKey]} stored in global variables`);

            elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
            _context4.next = 4;
            return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var elementStable, variableValue, elementText;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return (0, _waitForBehavior.waitForSelector)(page, elementIdentifier);

                    case 2:
                      elementStable = _context3.sent;
                      variableValue = ''; //TODO: should be globalVariables[variableKey];

                      if (!elementStable) {
                        _context3.next = 15;
                        break;
                      }

                      _context3.next = 7;
                      return (0, _htmlBehavior.getElementText)(page, elementIdentifier);

                    case 7:
                      elementText = _context3.sent;

                      if (!((elementText === null || elementText === void 0 ? void 0 : elementText.includes(variableValue)) === !negate)) {
                        _context3.next = 12;
                        break;
                      }

                      return _context3.abrupt("return", _waitForBehavior.waitForResult.PASS);

                    case 12:
                      return _context3.abrupt("return", _waitForBehavior.waitForResult.FAIL);

                    case 13:
                      _context3.next = 16;
                      break;

                    case 15:
                      return _context3.abrupt("return", _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE);

                    case 16:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            })), globalConfig, {
              target: elementKey,
              failureMessage: "\u2757\uFE0F Expected ".concat(elementKey, " to ").concat(negate ? 'not ' : '', "contain the ").concat(variableKey, " stored in global variables")
            });

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function (_x5, _x6, _x7, _x8) {
    return _ref3.apply(this, arguments);
  };
}());