"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.waitForSelectorOnPage = exports.waitForSelectorInIframe = exports.waitForSelector = exports.waitForResult = exports.waitFor = void 0;

var _errorHelper = require("./error-helper");

var _logger = require("../logger");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var waitForResult;
exports.waitForResult = waitForResult;

(function (waitForResult) {
  waitForResult[waitForResult["PASS"] = 1] = "PASS";
  waitForResult[waitForResult["FAIL"] = 2] = "FAIL";
  waitForResult[waitForResult["ELEMENT_NOT_AVAILABLE"] = 3] = "ELEMENT_NOT_AVAILABLE";
})(waitForResult || (exports.waitForResult = waitForResult = {}));

var waitFor = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(predicate, globalConfig, options) {
    var _ref2, _ref2$timeout, timeout, _ref2$wait, wait, _ref2$target, target, _ref2$type, type, sleep, startDate, notAvailableContext, result, resultAs;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref2 = options || {}, _ref2$timeout = _ref2.timeout, timeout = _ref2$timeout === void 0 ? 10000 : _ref2$timeout, _ref2$wait = _ref2.wait, wait = _ref2$wait === void 0 ? 2000 : _ref2$wait, _ref2$target = _ref2.target, target = _ref2$target === void 0 ? '' : _ref2$target, _ref2$type = _ref2.type, type = _ref2$type === void 0 ? 'element' : _ref2$type;

            sleep = function sleep(ms) {
              return new Promise(function (resolve) {
                return setTimeout(resolve, ms);
              });
            };

            startDate = new Date();
            _context.prev = 3;

          case 4:
            if (!(new Date().getTime() - startDate.getTime() < timeout)) {
              _context.next = 21;
              break;
            }

            _context.next = 7;
            return predicate();

          case 7:
            result = _context.sent;
            resultAs = void 0;

            if (result.result) {
              notAvailableContext = result.replace;
              resultAs = result.result;
            } else {
              resultAs = result;
            }

            if (!(resultAs === waitForResult.PASS)) {
              _context.next = 14;
              break;
            }

            return _context.abrupt("return");

          case 14:
            if (!(resultAs === waitForResult.FAIL)) {
              _context.next = 16;
              break;
            }

            throw new Error((options === null || options === void 0 ? void 0 : options.failureMessage) || "Test assertion failed");

          case 16:
            _context.next = 18;
            return sleep(wait);

          case 18:
            _logger.logger.debug("Waiting ".concat(wait, "ms"));

            _context.next = 4;
            break;

          case 21:
            throw new Error("Wait time of ".concat(timeout, "ms for ").concat(notAvailableContext || target, " exceeded"));

          case 24:
            _context.prev = 24;
            _context.t0 = _context["catch"](3);
            (0, _errorHelper.handleError)(globalConfig.errorsConfig, _context.t0, target, type);

          case 27:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 24]]);
  }));

  return function waitFor(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.waitFor = waitFor;

var waitForSelector = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(page, elementIdentifier) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return page.waitForSelector(elementIdentifier, {
              state: 'visible',
              timeout: Number(process.env['SELECTOR_TIMEOUT']) // TODO: Use -> timeout: envNumber('SELECTOR_TIMEOUT')

            });

          case 3:
            return _context2.abrupt("return", true);

          case 6:
            _context2.prev = 6;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", false);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 6]]);
  }));

  return function waitForSelector(_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();

exports.waitForSelector = waitForSelector;

var waitForSelectorOnPage = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(page, elementIdentifier, pages, pageIndex) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return pages[pageIndex].waitForSelector(elementIdentifier, {
              state: 'visible',
              timeout: Number(process.env['SELECTOR_TIMEOUT']) // TODO: Use -> timeout: envNumber('SELECTOR_TIMEOUT')

            });

          case 3:
            return _context3.abrupt("return", true);

          case 6:
            _context3.prev = 6;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", false);

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 6]]);
  }));

  return function waitForSelectorOnPage(_x6, _x7, _x8, _x9) {
    return _ref4.apply(this, arguments);
  };
}();

exports.waitForSelectorOnPage = waitForSelectorOnPage;

var waitForSelectorInIframe = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(elementIframe, elementIdentifier) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return elementIframe === null || elementIframe === void 0 ? void 0 : elementIframe.waitForSelector(elementIdentifier, {
              state: 'visible',
              timeout: Number(process.env['SELECTOR_TIMEOUT']) // TODO: Use -> timeout: envNumber('SELECTOR_TIMEOUT')

            });

          case 3:
            return _context4.abrupt("return", true);

          case 6:
            _context4.prev = 6;
            _context4.t0 = _context4["catch"](0);
            return _context4.abrupt("return", false);

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 6]]);
  }));

  return function waitForSelectorInIframe(_x10, _x11) {
    return _ref5.apply(this, arguments);
  };
}();

exports.waitForSelectorInIframe = waitForSelectorInIframe;