"use strict";

var _cucumber = require("@cucumber/cucumber");

var _waitForBehavior = require("../support/wait-for-behavior");

var _webElementHelper = require("../support/web-element-helper");

var _htmlBehavior = require("../support/html-behavior");

var _logger = require("../logger");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(0, _cucumber.Then)(/^I fill in the "([^"]*)" input on the "([0-9]+th|[0-9]+st|[0-9]+nd|[0-9]+rd])" (?:tab|window) with "([^"]*)"$/, /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(elementKey, elementPosition, inputValue) {
    var _elementPosition$matc;

    var _this$screen, page, context, globalConfig, pageIndex, elementIdentifier;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _this$screen = this.screen, page = _this$screen.page, context = _this$screen.context, globalConfig = this.globalConfig;

            _logger.logger.log("I fill in the ".concat(elementKey, " on the ").concat(elementPosition, " tab|window with the ").concat(inputValue));

            pageIndex = Number((_elementPosition$matc = elementPosition.match(/\d/g)) === null || _elementPosition$matc === void 0 ? void 0 : _elementPosition$matc.join('')) - 1;
            elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
            _context2.next = 6;
            return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var pages, elementStable;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      pages = context.pages();
                      _context.next = 3;
                      return (0, _waitForBehavior.waitForSelectorOnPage)(page, elementIdentifier, pages, pageIndex);

                    case 3:
                      elementStable = _context.sent;

                      if (!elementStable) {
                        _context.next = 8;
                        break;
                      }

                      _context.next = 7;
                      return (0, _htmlBehavior.inputValueOnPage)(pages, pageIndex, elementIdentifier, inputValue);

                    case 7:
                      return _context.abrupt("return", _waitForBehavior.waitForResult.PASS);

                    case 8:
                      return _context.abrupt("return", _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE);

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })), globalConfig, {
              target: elementKey
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