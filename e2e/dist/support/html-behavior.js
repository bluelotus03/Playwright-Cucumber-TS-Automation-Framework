"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uncheckElement = exports.selectValue = exports.scrollIntoView = exports.inputValueOnPage = exports.inputValueOnIframe = exports.inputValue = exports.getValue = exports.getTitleWithinPage = exports.getTextWithinIframeElement = exports.getTableData = exports.getIframeElement = exports.getElements = exports.getElementWithinIframe = exports.getElementTextWithinPage = exports.getElementTextAtIndex = exports.getElementText = exports.getElementOnPage = exports.getElementAtIndex = exports.getElement = exports.getAttributeText = exports.elementEnabled = exports.elementChecked = exports.clickElementAtIndex = exports.clickElement = exports.checkElement = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var clickElement = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(page, elementIdentifier) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return page.click(elementIdentifier);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function clickElement(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.clickElement = clickElement;

var clickElementAtIndex = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(page, elementIdentifier, elementPosition) {
    var element;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return page.$("".concat(elementIdentifier, ">>nth=").concat(elementPosition));

          case 2:
            element = _context2.sent;
            _context2.next = 5;
            return element === null || element === void 0 ? void 0 : element.click();

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function clickElementAtIndex(_x3, _x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();

exports.clickElementAtIndex = clickElementAtIndex;

var inputValue = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(page, elementIdentifier, input) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return page.focus(elementIdentifier);

          case 2:
            _context3.next = 4;
            return page.fill(elementIdentifier, input);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function inputValue(_x6, _x7, _x8) {
    return _ref3.apply(this, arguments);
  };
}();

exports.inputValue = inputValue;

var selectValue = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(page, elementIdentifier, option) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return page.focus(elementIdentifier);

          case 2:
            _context4.next = 4;
            return page.selectOption(elementIdentifier, option);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function selectValue(_x9, _x10, _x11) {
    return _ref4.apply(this, arguments);
  };
}();

exports.selectValue = selectValue;

var checkElement = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(page, elementIdentifier) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return page.focus(elementIdentifier);

          case 2:
            _context5.next = 4;
            return page.click(elementIdentifier);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function checkElement(_x12, _x13) {
    return _ref5.apply(this, arguments);
  };
}();

exports.checkElement = checkElement;

var uncheckElement = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(page, elementIdentifier) {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return page.uncheck(elementIdentifier);

          case 2:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function uncheckElement(_x14, _x15) {
    return _ref6.apply(this, arguments);
  };
}();

exports.uncheckElement = uncheckElement;

var elementChecked = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(page, elementIdentifier) {
    var checked;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return page.isChecked(elementIdentifier);

          case 2:
            checked = _context7.sent;
            return _context7.abrupt("return", checked);

          case 4:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function elementChecked(_x16, _x17) {
    return _ref7.apply(this, arguments);
  };
}();

exports.elementChecked = elementChecked;

var elementEnabled = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(page, elementIdentifier) {
    var enabled;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return page.isEnabled(elementIdentifier);

          case 2:
            enabled = _context8.sent;
            return _context8.abrupt("return", enabled);

          case 4:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function elementEnabled(_x18, _x19) {
    return _ref8.apply(this, arguments);
  };
}();

exports.elementEnabled = elementEnabled;

var getValue = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(page, elementIdentifier) {
    var value;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return page.waitForSelector(elementIdentifier);

          case 2:
            _context9.next = 4;
            return page.$eval(elementIdentifier, function (el) {
              return el.value;
            });

          case 4:
            value = _context9.sent;
            return _context9.abrupt("return", value);

          case 6:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function getValue(_x20, _x21) {
    return _ref9.apply(this, arguments);
  };
}();

exports.getValue = getValue;

var getElement = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(page, elementIdentifier) {
    var element;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return page.$(elementIdentifier);

          case 2:
            element = _context10.sent;
            return _context10.abrupt("return", element);

          case 4:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));

  return function getElement(_x22, _x23) {
    return _ref10.apply(this, arguments);
  };
}();

exports.getElement = getElement;

var getElements = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(page, elementIdentifier) {
    var elements;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return page.$$(elementIdentifier);

          case 2:
            elements = _context11.sent;
            return _context11.abrupt("return", elements);

          case 4:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));

  return function getElements(_x24, _x25) {
    return _ref11.apply(this, arguments);
  };
}();

exports.getElements = getElements;

var getElementAtIndex = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(page, elementIdentifier, index) {
    var elementAtIndex;
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return page.$("".concat(elementIdentifier, ">>nth=").concat(index));

          case 2:
            elementAtIndex = _context12.sent;
            return _context12.abrupt("return", elementAtIndex);

          case 4:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));

  return function getElementAtIndex(_x26, _x27, _x28) {
    return _ref12.apply(this, arguments);
  };
}();

exports.getElementAtIndex = getElementAtIndex;

var getElementWithinIframe = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(elementIframe, elementIdentifier) {
    var visibleOnIframeElement;
    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.next = 2;
            return elementIframe === null || elementIframe === void 0 ? void 0 : elementIframe.$(elementIdentifier);

          case 2:
            visibleOnIframeElement = _context13.sent;
            return _context13.abrupt("return", visibleOnIframeElement);

          case 4:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));

  return function getElementWithinIframe(_x29, _x30) {
    return _ref13.apply(this, arguments);
  };
}();

exports.getElementWithinIframe = getElementWithinIframe;

var getAttributeText = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(page, elementIdentifier, attribute) {
    var attributeText;
    return regeneratorRuntime.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            attributeText = page.locator(elementIdentifier).getAttribute(attribute);
            return _context14.abrupt("return", attributeText);

          case 2:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  }));

  return function getAttributeText(_x31, _x32, _x33) {
    return _ref14.apply(this, arguments);
  };
}();

exports.getAttributeText = getAttributeText;

var getElementText = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(page, elementIdentifier) {
    var elementText;
    return regeneratorRuntime.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            elementText = page.textContent(elementIdentifier);
            return _context15.abrupt("return", elementText);

          case 2:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15);
  }));

  return function getElementText(_x34, _x35) {
    return _ref15.apply(this, arguments);
  };
}();

exports.getElementText = getElementText;

var getElementTextAtIndex = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(page, elementIdentifier, index) {
    var textAtIndex;
    return regeneratorRuntime.wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            _context16.next = 2;
            return page.textContent("".concat(elementIdentifier, ">>nth=").concat(index));

          case 2:
            textAtIndex = _context16.sent;
            return _context16.abrupt("return", textAtIndex);

          case 4:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16);
  }));

  return function getElementTextAtIndex(_x36, _x37, _x38) {
    return _ref16.apply(this, arguments);
  };
}();

exports.getElementTextAtIndex = getElementTextAtIndex;

var getElementTextWithinPage = /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(page, elementIdentifier, pages, pageIndex) {
    var textWithinPage;
    return regeneratorRuntime.wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            _context17.next = 2;
            return pages[pageIndex].textContent(elementIdentifier);

          case 2:
            textWithinPage = _context17.sent;
            return _context17.abrupt("return", textWithinPage);

          case 4:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17);
  }));

  return function getElementTextWithinPage(_x39, _x40, _x41, _x42) {
    return _ref17.apply(this, arguments);
  };
}();

exports.getElementTextWithinPage = getElementTextWithinPage;

var getElementOnPage = /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(page, elementIdentifier, pages, pageIndex) {
    var elementOnPage;
    return regeneratorRuntime.wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            _context18.next = 2;
            return pages[pageIndex].$(elementIdentifier);

          case 2:
            elementOnPage = _context18.sent;
            return _context18.abrupt("return", elementOnPage);

          case 4:
          case "end":
            return _context18.stop();
        }
      }
    }, _callee18);
  }));

  return function getElementOnPage(_x43, _x44, _x45, _x46) {
    return _ref18.apply(this, arguments);
  };
}();

exports.getElementOnPage = getElementOnPage;

var getTitleWithinPage = /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(page, pages, pageIndex) {
    var titleWithinPage;
    return regeneratorRuntime.wrap(function _callee19$(_context19) {
      while (1) {
        switch (_context19.prev = _context19.next) {
          case 0:
            _context19.next = 2;
            return pages[pageIndex].title();

          case 2:
            titleWithinPage = _context19.sent;
            return _context19.abrupt("return", titleWithinPage);

          case 4:
          case "end":
            return _context19.stop();
        }
      }
    }, _callee19);
  }));

  return function getTitleWithinPage(_x47, _x48, _x49) {
    return _ref19.apply(this, arguments);
  };
}();

exports.getTitleWithinPage = getTitleWithinPage;

var getTextWithinIframeElement = /*#__PURE__*/function () {
  var _ref20 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20(elementIframe, elementIdentifier) {
    var textOnIframeElement;
    return regeneratorRuntime.wrap(function _callee20$(_context20) {
      while (1) {
        switch (_context20.prev = _context20.next) {
          case 0:
            _context20.next = 2;
            return elementIframe === null || elementIframe === void 0 ? void 0 : elementIframe.textContent(elementIdentifier);

          case 2:
            textOnIframeElement = _context20.sent;
            return _context20.abrupt("return", textOnIframeElement);

          case 4:
          case "end":
            return _context20.stop();
        }
      }
    }, _callee20);
  }));

  return function getTextWithinIframeElement(_x50, _x51) {
    return _ref20.apply(this, arguments);
  };
}();

exports.getTextWithinIframeElement = getTextWithinIframeElement;

var getIframeElement = /*#__PURE__*/function () {
  var _ref21 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21(page, iframeIdentifier) {
    var elementHandle, elementIframe;
    return regeneratorRuntime.wrap(function _callee21$(_context21) {
      while (1) {
        switch (_context21.prev = _context21.next) {
          case 0:
            _context21.next = 2;
            return page.waitForSelector(iframeIdentifier);

          case 2:
            _context21.next = 4;
            return page.$(iframeIdentifier);

          case 4:
            elementHandle = _context21.sent;
            _context21.next = 7;
            return elementHandle === null || elementHandle === void 0 ? void 0 : elementHandle.contentFrame();

          case 7:
            elementIframe = _context21.sent;
            return _context21.abrupt("return", elementIframe);

          case 9:
          case "end":
            return _context21.stop();
        }
      }
    }, _callee21);
  }));

  return function getIframeElement(_x52, _x53) {
    return _ref21.apply(this, arguments);
  };
}();

exports.getIframeElement = getIframeElement;

var inputValueOnIframe = /*#__PURE__*/function () {
  var _ref22 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22(elementIframe, elementIdentifier, inputValue) {
    return regeneratorRuntime.wrap(function _callee22$(_context22) {
      while (1) {
        switch (_context22.prev = _context22.next) {
          case 0:
            _context22.next = 2;
            return elementIframe.fill(elementIdentifier, inputValue);

          case 2:
          case "end":
            return _context22.stop();
        }
      }
    }, _callee22);
  }));

  return function inputValueOnIframe(_x54, _x55, _x56) {
    return _ref22.apply(this, arguments);
  };
}();

exports.inputValueOnIframe = inputValueOnIframe;

var inputValueOnPage = /*#__PURE__*/function () {
  var _ref23 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee23(pages, pageIndex, elementIdentifier, inputValue) {
    return regeneratorRuntime.wrap(function _callee23$(_context23) {
      while (1) {
        switch (_context23.prev = _context23.next) {
          case 0:
            _context23.next = 2;
            return pages[pageIndex].focus(elementIdentifier);

          case 2:
            _context23.next = 4;
            return pages[pageIndex].fill(elementIdentifier, inputValue);

          case 4:
          case "end":
            return _context23.stop();
        }
      }
    }, _callee23);
  }));

  return function inputValueOnPage(_x57, _x58, _x59, _x60) {
    return _ref23.apply(this, arguments);
  };
}();

exports.inputValueOnPage = inputValueOnPage;

var scrollIntoView = /*#__PURE__*/function () {
  var _ref24 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee24(page, elementIdentifier) {
    var element;
    return regeneratorRuntime.wrap(function _callee24$(_context24) {
      while (1) {
        switch (_context24.prev = _context24.next) {
          case 0:
            element = page.locator(elementIdentifier);
            _context24.next = 3;
            return element.scrollIntoViewIfNeeded();

          case 3:
          case "end":
            return _context24.stop();
        }
      }
    }, _callee24);
  }));

  return function scrollIntoView(_x61, _x62) {
    return _ref24.apply(this, arguments);
  };
}();

exports.scrollIntoView = scrollIntoView;

var getTableData = /*#__PURE__*/function () {
  var _ref25 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee25(page, elementIdentifier) {
    var table;
    return regeneratorRuntime.wrap(function _callee25$(_context25) {
      while (1) {
        switch (_context25.prev = _context25.next) {
          case 0:
            _context25.next = 2;
            return page.$$eval(elementIdentifier + " tbody tr", function (rows) {
              return rows.map(function (row) {
                var cells = row.querySelectorAll('td');
                return Array.from(cells).map(function (cell) {
                  return cell.textContent;
                });
              });
            });

          case 2:
            table = _context25.sent;
            return _context25.abrupt("return", JSON.stringify(table));

          case 4:
          case "end":
            return _context25.stop();
        }
      }
    }, _callee25);
  }));

  return function getTableData(_x63, _x64) {
    return _ref25.apply(this, arguments);
  };
}();

exports.getTableData = getTableData;