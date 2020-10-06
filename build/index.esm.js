var ReactComponentLibrary=(function(exports,React){'use strict';React=React&&Object.prototype.hasOwnProperty.call(React,'default')?React['default']:React;function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}var css_248z = ".test-component {\n  background-color: #e0e0e0;\n  border: 1px solid #131111;\n  padding: 16px;\n  width: 360px;\n  text-align: center; }\n  .test-component .heading {\n    font-family: \"Avenir Next\", Helvetica, Arial, sans-serif;\n    font-size: 40px;\n    font-weight: bold; }\n  .test-component.test-component-secondary {\n    background-color: #131111;\n    color: #e0e0e0; }\n";
styleInject(css_248z);var TestComponent = function (_a) {
    var theme = _a.theme;
    return (React.createElement("div", { "data-testid": "test-component", className: "test-component test-component-" + theme },
        React.createElement("h1", { className: "heading" }, "I'm the test component"),
        React.createElement("h2", null, "Made with love by Harvey")));
};var css_248z$1 = "table.table-component {\n  border-collapse: collapse;\n  text-align: center;\n  table-layout: auto;\n  width: 100%; }\n  table.table-component thead {\n    color: white;\n    background-color: #b7adff; }\n  table.table-component th {\n    padding: 1rem .7rem;\n    text-align: center; }\n  table.table-component tr {\n    box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.2); }\n  table.table-component td {\n    padding: 1rem 0.7rem;\n    text-align: center; }\n";
styleInject(css_248z$1);// Generated with util/create-component.js
var TableComponent = function (_a) {
    var items = _a.items;
    return (React.createElement("table", { className: "table-component" },
        React.createElement("thead", null,
            React.createElement("tr", null,
                React.createElement("th", null, "Name"),
                React.createElement("th", null, "Age"),
                React.createElement("th", null, "Occupation"))),
        React.createElement("tbody", null,
            !items.length &&
                React.createElement("tr", { "v-if": "!items.length" },
                    React.createElement("td", { colSpan: 3 }, "Nothing to display")),
            items.map(function (item) {
                return React.createElement("tr", null,
                    React.createElement("td", null, item),
                    React.createElement("td", null, "a"),
                    React.createElement("td", null, "3"));
            }))));
};exports.TableComponent=TableComponent;exports.TestComponent=TestComponent;return exports;}({},React));
