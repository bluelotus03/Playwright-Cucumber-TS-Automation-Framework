"use strict";

var _cucumber = require("@cucumber/cucumber");

var _webElementHelper = require("../../support/web-element-helper");

var _waitForBehavior = require("../../support/wait-for-behavior");

var _htmlBehavior = require("../../support/html-behavior");

var _logger = require("../../logger");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(0, _cucumber.Then)(/^the "([^"]*)" should( not)? contain the text "(.*)"$/, /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(elementKey, negate, expectedElementText) {
    var page, globalConfig, elementIdentifier;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            page = this.screen.page, globalConfig = this.globalConfig;

            _logger.logger.log("the ".concat(elementKey, " should ").concat(negate ? 'not ' : '', "contain the text ").concat(expectedElementText));

            elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
            _context2.next = 5;
            return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var elementStable, elementText;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return (0, _waitForBehavior.waitForSelector)(page, elementIdentifier);

                    case 2:
                      elementStable = _context.sent;

                      if (!elementStable) {
                        _context.next = 16;
                        break;
                      }

                      _context.next = 6;
                      return (0, _htmlBehavior.getElementText)(page, elementIdentifier);

                    case 6:
                      elementText = _context.sent;

                      _logger.logger.debug("elementText", elementText);

                      _logger.logger.debug("expectedElementText", expectedElementText);

                      if (!((elementText === null || elementText === void 0 ? void 0 : elementText.includes(expectedElementText)) === !negate)) {
                        _context.next = 13;
                        break;
                      }

                      return _context.abrupt("return", _waitForBehavior.waitForResult.PASS);

                    case 13:
                      return _context.abrupt("return", _waitForBehavior.waitForResult.FAIL);

                    case 14:
                      _context.next = 17;
                      break;

                    case 16:
                      return _context.abrupt("return", _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE);

                    case 17:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })), globalConfig, {
              target: elementKey,
              failureMessage: "\u2757\uFE0F Expected ".concat(elementKey, " to ").concat(negate ? 'not ' : '', "contain the text ").concat(expectedElementText)
            });

          case 5:
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
(0, _cucumber.Then)(/^the "(.*)" should( not)? equal the text "(.*)"$/, /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(elementKey, negate, expectedElementText) {
    var page, globalConfig, elementIdentifier;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            page = this.screen.page, globalConfig = this.globalConfig;

            _logger.logger.log("the ".concat(elementKey, " should ").concat(negate ? 'not ' : '', "equal the text ").concat(expectedElementText));

            elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
            _context4.next = 5;
            return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var elementStable, elementText;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return (0, _waitForBehavior.waitForSelector)(page, elementIdentifier);

                    case 2:
                      elementStable = _context3.sent;

                      if (!elementStable) {
                        _context3.next = 14;
                        break;
                      }

                      _context3.next = 6;
                      return (0, _htmlBehavior.getElementText)(page, elementIdentifier);

                    case 6:
                      elementText = _context3.sent;

                      if (!(elementText === expectedElementText === !negate)) {
                        _context3.next = 11;
                        break;
                      }

                      return _context3.abrupt("return", _waitForBehavior.waitForResult.PASS);

                    case 11:
                      return _context3.abrupt("return", _waitForBehavior.waitForResult.FAIL);

                    case 12:
                      _context3.next = 15;
                      break;

                    case 14:
                      return _context3.abrupt("return", _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE);

                    case 15:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            })), globalConfig, {
              target: elementKey,
              failureMessage: "\u2757\uFE0F Expected ".concat(elementKey, " to ").concat(negate ? 'not ' : '', "equal the text ").concat(expectedElementText)
            });

          case 5:
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
(0, _cucumber.Then)(/^the "(.*)" should( not)? contain the value "(.*)"$/, /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(elementKey, negate, elementValue) {
    var page, globalConfig, elementIdentifier;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            page = this.screen.page, globalConfig = this.globalConfig;

            _logger.logger.log("the ".concat(elementKey, " should ").concat(negate ? 'not ' : '', "contain the value ").concat(elementValue));

            elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
            _context6.next = 5;
            return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var elementStable, elementAttribute;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return (0, _waitForBehavior.waitForSelector)(page, elementIdentifier);

                    case 2:
                      elementStable = _context5.sent;

                      if (!elementStable) {
                        _context5.next = 14;
                        break;
                      }

                      _context5.next = 6;
                      return (0, _htmlBehavior.getElementValue)(page, elementIdentifier);

                    case 6:
                      elementAttribute = _context5.sent;

                      if (!((elementAttribute === null || elementAttribute === void 0 ? void 0 : elementAttribute.includes(elementValue)) === !negate)) {
                        _context5.next = 11;
                        break;
                      }

                      return _context5.abrupt("return", _waitForBehavior.waitForResult.PASS);

                    case 11:
                      return _context5.abrupt("return", _waitForBehavior.waitForResult.FAIL);

                    case 12:
                      _context5.next = 15;
                      break;

                    case 14:
                      return _context5.abrupt("return", _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE);

                    case 15:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5);
            })), globalConfig, {
              target: elementKey,
              failureMessage: "\u2757\uFE0F Expected ".concat(elementKey, " to ").concat(negate ? 'not ' : '', "contain the value ").concat(elementValue)
            });

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function (_x9, _x10, _x11, _x12) {
    return _ref5.apply(this, arguments);
  };
}());
(0, _cucumber.Then)(/^the "(.*)" should( not)? equal the value "(.*)"$/, /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(elementKey, negate, elementValue) {
    var page, globalConfig, elementIdentifier;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            page = this.screen.page, globalConfig = this.globalConfig;

            _logger.logger.log("the ".concat(elementKey, " should ").concat(negate ? 'not ' : '', "equal the value ").concat(elementValue));

            elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
            _context8.next = 5;
            return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var elementStable, elementAttribute;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return (0, _waitForBehavior.waitForSelector)(page, elementIdentifier);

                    case 2:
                      elementStable = _context7.sent;

                      if (!elementStable) {
                        _context7.next = 14;
                        break;
                      }

                      _context7.next = 6;
                      return (0, _htmlBehavior.getElementValue)(page, elementIdentifier);

                    case 6:
                      elementAttribute = _context7.sent;

                      if (!(elementAttribute === elementValue === !negate)) {
                        _context7.next = 11;
                        break;
                      }

                      return _context7.abrupt("return", _waitForBehavior.waitForResult.PASS);

                    case 11:
                      return _context7.abrupt("return", _waitForBehavior.waitForResult.FAIL);

                    case 12:
                      _context7.next = 15;
                      break;

                    case 14:
                      return _context7.abrupt("return", _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE);

                    case 15:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7);
            })), globalConfig, {
              target: elementKey,
              failureMessage: "\u2757\uFE0F Expected ".concat(elementKey, " to ").concat(negate ? 'not ' : '', "equal the value ").concat(elementValue)
            });

          case 5:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this);
  }));

  return function (_x13, _x14, _x15, _x16) {
    return _ref7.apply(this, arguments);
  };
}());
(0, _cucumber.Then)(/^the "(.*)" should( not)? be enabled$/, /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(elementKey, negate) {
    var page, globalConfig, elementIdentifier;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            page = this.screen.page, globalConfig = this.globalConfig;

            _logger.logger.log("the ".concat(elementKey, " should ").concat(negate ? 'not ' : '', "be enabled"));

            elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
            _context10.next = 5;
            return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var elementStable, isElementEnabled;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return (0, _waitForBehavior.waitForSelector)(page, elementIdentifier);

                    case 2:
                      elementStable = _context9.sent;

                      if (!elementStable) {
                        _context9.next = 14;
                        break;
                      }

                      _context9.next = 6;
                      return (0, _htmlBehavior.elementEnabled)(page, elementIdentifier);

                    case 6:
                      isElementEnabled = _context9.sent;

                      if (!(isElementEnabled === !negate)) {
                        _context9.next = 11;
                        break;
                      }

                      return _context9.abrupt("return", _waitForBehavior.waitForResult.PASS);

                    case 11:
                      return _context9.abrupt("return", _waitForBehavior.waitForResult.FAIL);

                    case 12:
                      _context9.next = 15;
                      break;

                    case 14:
                      return _context9.abrupt("return", _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE);

                    case 15:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9);
            })), globalConfig, {
              target: elementKey,
              failureMessage: "\u2757\uFE0F Expected ".concat(elementKey, " to ").concat(negate ? 'not ' : '', "be enabled")
            });

          case 5:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, this);
  }));

  return function (_x17, _x18, _x19) {
    return _ref9.apply(this, arguments);
  };
}());
(0, _cucumber.Then)(/^the "([0-9]+th|[0-9]+st|[0-9]+nd|[0-9]+rd)" "([^"]*)" should( not)? contain the text "(.*)"$/, /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(elementPosition, elementKey, negate, expectedElementText) {
    var _elementPosition$matc;

    var page, globalConfig, elementIdentifier, index;
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            page = this.screen.page, globalConfig = this.globalConfig;

            _logger.logger.log("the ".concat(elementPosition, " ").concat(elementKey, " should ").concat(negate ? 'not ' : '', "contain the text ").concat(expectedElementText));

            elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
            index = Number((_elementPosition$matc = elementPosition.match(/\d/g)) === null || _elementPosition$matc === void 0 ? void 0 : _elementPosition$matc.join('')) - 1;
            _context12.next = 6;
            return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var elementStable, elementText;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return (0, _waitForBehavior.waitForSelector)(page, elementIdentifier);

                    case 2:
                      elementStable = _context11.sent;

                      if (!elementStable) {
                        _context11.next = 14;
                        break;
                      }

                      _context11.next = 6;
                      return (0, _htmlBehavior.getElementTextAtIndex)(page, elementIdentifier, index);

                    case 6:
                      elementText = _context11.sent;

                      if (!((elementText === null || elementText === void 0 ? void 0 : elementText.includes(expectedElementText)) === !negate)) {
                        _context11.next = 11;
                        break;
                      }

                      return _context11.abrupt("return", _waitForBehavior.waitForResult.PASS);

                    case 11:
                      return _context11.abrupt("return", _waitForBehavior.waitForResult.FAIL);

                    case 12:
                      _context11.next = 15;
                      break;

                    case 14:
                      return _context11.abrupt("return", _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE);

                    case 15:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11);
            })), globalConfig, {
              target: elementKey,
              failureMessage: "\u2757\uFE0F Expected ".concat(elementPosition, " ").concat(elementKey, " to ").concat(negate ? 'not ' : '', "contain the text ").concat(expectedElementText)
            });

          case 6:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, this);
  }));

  return function (_x20, _x21, _x22, _x23, _x24) {
    return _ref11.apply(this, arguments);
  };
}());
(0, _cucumber.Then)(/^the "([^"]*)" "([^"]*)" attribute should( not)? contain the text "(.*)"$/, /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(elementKey, attribute, negate, expectedElementText) {
    var page, globalConfig, elementIdentifier;
    return regeneratorRuntime.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            page = this.screen.page, globalConfig = this.globalConfig;

            _logger.logger.log("the ".concat(elementKey, " ").concat(attribute, " attribute should ").concat(negate ? 'not ' : '', "contain the text ").concat(expectedElementText));

            elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
            _context14.next = 5;
            return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var elementStable, attributeText;
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.next = 2;
                      return (0, _waitForBehavior.waitForSelector)(page, elementIdentifier);

                    case 2:
                      elementStable = _context13.sent;

                      if (!elementStable) {
                        _context13.next = 14;
                        break;
                      }

                      _context13.next = 6;
                      return (0, _htmlBehavior.getAttributeText)(page, elementIdentifier, attribute);

                    case 6:
                      attributeText = _context13.sent;

                      if (!((attributeText === null || attributeText === void 0 ? void 0 : attributeText.includes(expectedElementText)) === !negate)) {
                        _context13.next = 11;
                        break;
                      }

                      return _context13.abrupt("return", _waitForBehavior.waitForResult.PASS);

                    case 11:
                      return _context13.abrupt("return", _waitForBehavior.waitForResult.FAIL);

                    case 12:
                      _context13.next = 15;
                      break;

                    case 14:
                      return _context13.abrupt("return", _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE);

                    case 15:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13);
            })), globalConfig, {
              target: elementKey,
              failureMessage: "\u2757\uFE0F Expected ".concat(elementKey, " ").concat(attribute, " attribute to ").concat(negate ? 'not ' : '', "contain the text ").concat(expectedElementText)
            });

          case 5:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14, this);
  }));

  return function (_x25, _x26, _x27, _x28, _x29) {
    return _ref13.apply(this, arguments);
  };
}());