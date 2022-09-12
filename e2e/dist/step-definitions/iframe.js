"use strict";

var _cucumber = require("@cucumber/cucumber");

var _waitForBehavior = require("../support/wait-for-behavior");

var _htmlBehavior = require("../support/html-behavior");

var _webElementHelper = require("../support/web-element-helper");

var _logger = require("../logger");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(0, _cucumber.Then)(/^I fill in the "([^"]*)" input on the "([^"]*)" iframe with "([^"]*)"$/, /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(elementKey, iframeKey, inputValue) {
    var page, globalConfig, elementIdentifier, iframeIdentifier;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            page = this.screen.page, globalConfig = this.globalConfig;

            _logger.logger.log("I fill in the ".concat(elementKey, " input on the ").concat(iframeKey, " iframe with ").concat(inputValue));

            elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
            iframeIdentifier = (0, _webElementHelper.getElementLocator)(page, iframeKey, globalConfig);
            _context2.next = 6;
            return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var elementIframe, elementStable;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return (0, _htmlBehavior.getIframeElement)(page, iframeIdentifier);

                    case 2:
                      elementIframe = _context.sent;

                      if (!elementIframe) {
                        _context.next = 16;
                        break;
                      }

                      _context.next = 6;
                      return (0, _waitForBehavior.waitForSelectorInIframe)(elementIframe, elementIdentifier);

                    case 6:
                      elementStable = _context.sent;

                      if (!elementStable) {
                        _context.next = 13;
                        break;
                      }

                      _context.next = 10;
                      return (0, _htmlBehavior.inputValueOnIframe)(elementIframe, elementIdentifier, inputValue);

                    case 10:
                      return _context.abrupt("return", {
                        result: _waitForBehavior.waitForResult.PASS
                      });

                    case 13:
                      return _context.abrupt("return", {
                        result: _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE,
                        replace: elementKey
                      });

                    case 14:
                      _context.next = 17;
                      break;

                    case 16:
                      return _context.abrupt("return", {
                        result: _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE,
                        replace: iframeKey
                      });

                    case 17:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })), globalConfig, {
              target: iframeKey
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