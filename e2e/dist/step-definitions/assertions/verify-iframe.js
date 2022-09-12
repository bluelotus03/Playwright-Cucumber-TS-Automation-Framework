"use strict";

var _cucumber = require("@cucumber/cucumber");

var _webElementHelper = require("../../support/web-element-helper");

var _waitForBehavior = require("../../support/wait-for-behavior");

var _htmlBehavior = require("../../support/html-behavior");

var _logger = require("../../logger");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(0, _cucumber.Then)(/^the "([^"]*)" on the "([^"]*)" iframe should( not)? be displayed$/, /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(elementKey, iframeKey, negate) {
    var page, globalConfig, elementIdentifier, iframeIdentifier;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            page = this.screen.page, globalConfig = this.globalConfig;

            _logger.logger.log("the ".concat(elementKey, " on the ").concat(iframeKey, " iframe should ").concat(negate ? 'not ' : '', "be displayed}"));

            elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
            iframeIdentifier = (0, _webElementHelper.getElementLocator)(page, iframeKey, globalConfig);
            _context2.next = 6;
            return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var elementIframe, isElementVisible;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return (0, _htmlBehavior.getIframeElement)(page, iframeIdentifier);

                    case 2:
                      elementIframe = _context.sent;

                      if (!elementIframe) {
                        _context.next = 15;
                        break;
                      }

                      _context.next = 6;
                      return (0, _htmlBehavior.getElementWithinIframe)(elementIframe, elementIdentifier);

                    case 6:
                      _context.t0 = _context.sent;
                      isElementVisible = _context.t0 != null;

                      if (!(isElementVisible === !negate)) {
                        _context.next = 12;
                        break;
                      }

                      return _context.abrupt("return", {
                        result: _waitForBehavior.waitForResult.PASS
                      });

                    case 12:
                      return _context.abrupt("return", {
                        result: _waitForBehavior.waitForResult.FAIL,
                        replace: elementKey
                      });

                    case 13:
                      _context.next = 16;
                      break;

                    case 15:
                      return _context.abrupt("return", {
                        result: _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE,
                        replace: iframeKey
                      });

                    case 16:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })), globalConfig, {
              target: elementKey,
              failureMessage: "\u2757\uFE0F Expected ".concat(elementKey, " on the ").concat(iframeKey, " iframe to ").concat(negate ? 'not ' : '', "be displayed")
            });

          case 6:
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
(0, _cucumber.Then)(/^the "([^"]*)" on the "([^"]*)" iframe should( not)? contain the text "(.*)"$/, /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(elementKey, iframeKey, negate, expectedElementText) {
    var page, globalConfig, elementIdentifier, iframeIdentifier;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            page = this.screen.page, globalConfig = this.globalConfig;

            _logger.logger.log("the ".concat(elementKey, " on the ").concat(iframeKey, " iframe should ").concat(negate ? 'not ' : '', "contain the text ").concat(expectedElementText));

            elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
            iframeIdentifier = (0, _webElementHelper.getElementLocator)(page, iframeKey, globalConfig);
            _context4.next = 6;
            return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var elementIframe, elementStable, elementText;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return (0, _htmlBehavior.getIframeElement)(page, iframeIdentifier);

                    case 2:
                      elementIframe = _context3.sent;

                      if (!elementIframe) {
                        _context3.next = 21;
                        break;
                      }

                      _context3.next = 6;
                      return (0, _waitForBehavior.waitForSelectorInIframe)(elementIframe, elementIdentifier);

                    case 6:
                      elementStable = _context3.sent;

                      if (!elementStable) {
                        _context3.next = 18;
                        break;
                      }

                      _context3.next = 10;
                      return (0, _htmlBehavior.getTextWithinIframeElement)(elementIframe, elementIdentifier);

                    case 10:
                      elementText = _context3.sent;

                      if (!((elementText === null || elementText === void 0 ? void 0 : elementText.includes(expectedElementText)) === !negate)) {
                        _context3.next = 15;
                        break;
                      }

                      return _context3.abrupt("return", {
                        result: _waitForBehavior.waitForResult.PASS
                      });

                    case 15:
                      return _context3.abrupt("return", {
                        result: _waitForBehavior.waitForResult.FAIL,
                        replace: elementKey
                      });

                    case 16:
                      _context3.next = 19;
                      break;

                    case 18:
                      return _context3.abrupt("return", {
                        result: _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE,
                        replace: elementKey
                      });

                    case 19:
                      _context3.next = 22;
                      break;

                    case 21:
                      return _context3.abrupt("return", {
                        result: _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE,
                        replace: iframeKey
                      });

                    case 22:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            })), globalConfig, {
              target: elementKey,
              failureMessage: "\u2757\uFE0F Expected ".concat(elementKey, " on the ").concat(iframeKey, " iframe to ").concat(negate ? 'not ' : '', "contain the text ").concat(expectedElementText)
            });

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function (_x5, _x6, _x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}());
(0, _cucumber.Then)(/^the "([^"]*)" on the "([^"]*)" iframe should( not)? equal the text "(.*)"$/, /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(elementKey, iframeKey, negate, expectedElementText) {
    var page, globalConfig, elementIdentifier, iframeIdentifier;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            page = this.screen.page, globalConfig = this.globalConfig;

            _logger.logger.log("the ".concat(elementKey, " on the ").concat(iframeKey, " iframe should ").concat(negate ? 'not ' : '', "equal the text ").concat(expectedElementText));

            elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
            iframeIdentifier = (0, _webElementHelper.getElementLocator)(page, iframeKey, globalConfig);
            _context6.next = 6;
            return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var elementIframe, elementStable, elementText;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return (0, _htmlBehavior.getIframeElement)(page, iframeIdentifier);

                    case 2:
                      elementIframe = _context5.sent;

                      if (!elementIframe) {
                        _context5.next = 21;
                        break;
                      }

                      _context5.next = 6;
                      return (0, _waitForBehavior.waitForSelectorInIframe)(elementIframe, elementIdentifier);

                    case 6:
                      elementStable = _context5.sent;

                      if (!elementStable) {
                        _context5.next = 18;
                        break;
                      }

                      _context5.next = 10;
                      return (0, _htmlBehavior.getTextWithinIframeElement)(elementIframe, elementIdentifier);

                    case 10:
                      elementText = _context5.sent;

                      if (!(elementText === expectedElementText === !negate)) {
                        _context5.next = 15;
                        break;
                      }

                      return _context5.abrupt("return", {
                        result: _waitForBehavior.waitForResult.PASS
                      });

                    case 15:
                      return _context5.abrupt("return", {
                        result: _waitForBehavior.waitForResult.FAIL,
                        replace: elementKey
                      });

                    case 16:
                      _context5.next = 19;
                      break;

                    case 18:
                      return _context5.abrupt("return", {
                        result: _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE,
                        replace: elementKey
                      });

                    case 19:
                      _context5.next = 22;
                      break;

                    case 21:
                      return _context5.abrupt("return", {
                        result: _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE,
                        replace: iframeKey
                      });

                    case 22:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5);
            })), globalConfig, {
              target: elementKey,
              failureMessage: "\u2757\uFE0F Expected ".concat(elementKey, " on the ").concat(iframeKey, " iframe to ").concat(negate ? 'not ' : '', "equal the text ").concat(expectedElementText)
            });

          case 6:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function (_x10, _x11, _x12, _x13, _x14) {
    return _ref5.apply(this, arguments);
  };
}());