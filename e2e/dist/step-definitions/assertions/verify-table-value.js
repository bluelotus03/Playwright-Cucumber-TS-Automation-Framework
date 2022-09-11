"use strict";

var _cucumber = require("@cucumber/cucumber");

var _webElementHelper = require("../../support/web-element-helper");

var _waitForBehavior = require("../../support/wait-for-behavior");

var _logger = require("../../logger");

var _htmlBehavior = require("../../support/html-behavior");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(0, _cucumber.Then)(/^the "([^"]*)" table should( not)? equal the following:$/, /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(elementKey, negate, dataTable) {
    var page, globalConfig, elementIdentifier;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            page = this.screen.page, globalConfig = this.globalConfig;

            _logger.logger.log("the ".concat(elementKey, " table should ").concat(negate ? 'not ' : '', "equal the following:"));

            elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);

            _logger.logger.log(elementIdentifier + " tbody tr");

            _context2.next = 6;
            return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var elementStable, tableDataBefore;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return (0, _waitForBehavior.waitForSelector)(page, elementIdentifier);

                    case 2:
                      elementStable = _context.sent;

                      if (!elementStable) {
                        _context.next = 12;
                        break;
                      }

                      _context.next = 6;
                      return (0, _htmlBehavior.getTableData)(page, elementIdentifier);

                    case 6:
                      tableDataBefore = _context.sent;

                      _logger.logger.log("html table ", JSON.stringify(tableDataBefore));

                      _logger.logger.log("cucumber table ", JSON.stringify(dataTable.raw()));

                      return _context.abrupt("return", tableDataBefore === JSON.stringify(dataTable.raw()) === !negate);

                    case 12:
                      return _context.abrupt("return", elementStable);

                    case 13:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })));

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