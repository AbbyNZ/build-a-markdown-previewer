var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var UserInput = function (_React$Component) {_inherits(UserInput, _React$Component);
  function UserInput() {_classCallCheck(this, UserInput);var _this = _possibleConstructorReturn(this, (UserInput.__proto__ || Object.getPrototypeOf(UserInput)).call(this));

    _this.state = {
      markdown: markdownInput };

    _this.handleChange = _this.handleChange.bind(_this);return _this;
  }_createClass(UserInput, [{ key: "handleChange", value: function handleChange(

    event) {
      this.setState({
        markdown: event.target.value });

    } }, { key: "render", value: function render()

    {
      return (
        React.createElement("div", null,
          React.createElement("div", { className: "left" },
            React.createElement("textarea", { id: "editor",
              value: this.state.markdown,
              onChange: this.handleChange,
              type: "text",
              className: "markdown-input" })),

          React.createElement("div", { className: "right" },
            React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: marked(this.state.markdown) } }))));



    } }]);return UserInput;}(React.Component);
;

/*const MarkdownPreviewer = () => {
    return (
      <div id="preview" dangerouslySetInnerHTML={{__html:marked(this.props.markdown)}}></div>
    );
  };*/var

MarkdownApp = function (_React$Component2) {_inherits(MarkdownApp, _React$Component2);function MarkdownApp() {_classCallCheck(this, MarkdownApp);return _possibleConstructorReturn(this, (MarkdownApp.__proto__ || Object.getPrototypeOf(MarkdownApp)).apply(this, arguments));}_createClass(MarkdownApp, [{ key: "render", value: function render()
    {
      return (
        React.createElement("div", { className: "container" },
          React.createElement("div", { className: "col-xs-12" },
            React.createElement("h1", { className: "title text-center" }, "Markdown Previewer")),

          React.createElement("div", null,
            React.createElement(UserInput, null))));



    } }]);return MarkdownApp;}(React.Component);
;

var markdownInput = "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n  \nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n  \nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n";














































ReactDOM.render(React.createElement(MarkdownApp, null), document.getElementById('app'));