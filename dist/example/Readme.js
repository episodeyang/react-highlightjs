"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Readme;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactMarkdownit = require("react-markdownit");

var _reactMarkdownit2 = _interopRequireDefault(_reactMarkdownit);

var _reactHighlight = require("react-highlight");

var _reactHighlight2 = _interopRequireDefault(_reactHighlight);

var _reactComponentPropsTable = require("react-component-props-table");

var _reactComponentPropsTable2 = _interopRequireDefault(_reactComponentPropsTable);

var _HappySandwichMaker = require("../HappySandwichMaker.example");

var _HappySandwichMaker2 = _interopRequireDefault(_HappySandwichMaker);

var _HappySandwichMaker3 = require("!!raw!../HappySandwichMaker.example");

var _HappySandwichMaker4 = _interopRequireDefault(_HappySandwichMaker3);

var _HappySandwichMaker5 = require("!!react-docgen!../HappySandwichMaker");

var _HappySandwichMaker6 = _interopRequireDefault(_HappySandwichMaker5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); } /**
                                                                                                                   * Created by ge on 6/24/16.
                                                                                                                   */


function Readme(_ref) {
  _objectDestructuringEmpty(_ref);

  return _react2.default.createElement(
    _reactMarkdownit2.default,
    { stripIndent: true, __self: this
    },
    "\n      # React ES6 Component Template\n\n      [![github](https://img.shields.io/github/downloads/episodeyang/react-highlightjs/total.svg?style=flat-square&maxAge=2592000)]()\n\n      A template repo for react components written with es6 syntax.\n      ## Usage\n\n      ~~~shell\n      git clone https://github.com/episodeyang/react-highlightjs\n      ~~~\n\n      After cloning from gitHub, you can run the example by doing\n      ~~~shell\n      npm run serve-docs\n      ~~~\n\n      And then open your browser at [http://localhost:5000](http://localhost:5000).\n\n      This one calls webpack (you should look at the `package.json` source) and uses the\n      webpack-dev-server to serve from `./src/example/` with hot module reloading.\n\n      ### How is this README written:\n      This readme is written with react and markdown. It includes:\n      1. a **live react component demo**\n      2. a table of the component's props that is generated automatically\n      3. **source** of the example component\n\n      ## Example Component: `HappySandwichMaker`\n      This component makes you a delicious Subway sandwich.\n      ",
    _react2.default.createElement(_HappySandwichMaker2.default, {
      __self: this
    }),
    "### Props",
    "This table below is generated automatically",
    _react2.default.createElement(
      "div",
      { className: "table-container horizontal-scroll flex-column center", __self: this
      },
      _react2.default.createElement(_reactComponentPropsTable2.default, { propMetaData: _HappySandwichMaker6.default.props, __self: this
      })
    ),
    "\n      ### Usage Example\n\n      The source code below of the example above is loaded using the webpack raw loader.",
    _react2.default.createElement(
      _reactHighlight2.default,
      {
        __self: this
      },
      _HappySandwichMaker4.default
    )
  );
}
