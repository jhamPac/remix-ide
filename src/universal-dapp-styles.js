var csjs = require('csjs-inject')
var styleGuide = require('./app/ui/styles-guide/theme-chooser')
var styles = styleGuide.chooser()

var css = csjs`
  .instanceTitleContainer {
    display: flex;
    align-items: center;
  }
  .title {
    ${styles.rightPanel.runTab.titlebox_RunTab}
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 11px;
    height: 30px;
    width: 97%;
    overflow: hidden;
    word-break: break-word;
    line-height: initial;
    overflow: visible;
    margin-bottom: 10px;
  }
  .titleLine {
    display: flex;
    align-items: baseline;
  }
  .titleText {
    margin-right: 1em;
    word-break: break-word;
    min-width: 230px;
  }

  .title .copy {
    color: ${styles.rightPanel.runTab.icon_AltColor_Instance_CopyToClipboard};
  }
  .instance {
    min-width: 310px;
    display: flex;
    flex-direction: column;
  }
  .instance .title:before {
    content: "\\25BE";
    margin-right: 5%;
  }
  .instance.hidesub .title:before {
    content: "\\25B8";
    margin-right: 5%;
  }
  .instance.hidesub > * {
      display: none;
  }
  .instance.hidesub .title {
      display: flex;
  }
  .instance.hidesub .udappClose {
      display: flex;
  }
  .methCaret {
    margin-right: 5px;
    cursor: pointer;
    font-size: 12px;
    padding-top: 5px;
    vertical-align: top;
  }
  .group:after {
    content: "";
    display: table;
    clear: both;
  }
  .buttonsContainer {
    margin-top: 2%;
    display: flex;
    overflow: hidden;
  }
  .contractActions {
  }
  .instanceButton {}
  .closeIcon {
    font-size: 12px;
    cursor: pointer;
    margin-left: 5px;
  }
  .udappClose {
    display: flex;
    justify-content: flex-end;
  }
  .contractProperty {
    overflow: auto;
    margin-bottom: 0.4em;
    width:100%;
  }
  .contractProperty.hasArgs input {
    min-width: 200px;
    padding: .36em;
    border-radius: 5px;
    width: 70%;
  }
  .contractProperty button {
    ${styles.rightPanel.runTab.button_Create}
    min-width: 100px;
    width: 100px;
    font-size: 10px;
    margin:0;
    word-break: inherit;
  }
  .contractProperty button:disabled {
    cursor: not-allowed;
    background-color: white;
    border-color: lightgray;
  }
  .contractProperty.constant button {
    ${styles.rightPanel.runTab.button_Constant}
    min-width: 100px;
    width: 100px;
    font-size: 10px;
    margin:0;
    word-break: inherit;
    outline: none;
  }
  .contractProperty input {
    width: 75%
  }
  .contractProperty > .value {
    box-sizing: border-box;
    float: left;
    align-self: center;
    color: ${styles.appProperties.mainText_Color};
    margin-left: 4px;
  }
  .contractActionsContainer {
    display: flex;
    width: 98%;
  }
  .contractActionsContainerSingle {
    display: flex;
    width: 100%;
  }
  .contractActionsContainerMulti {
    display:none;
    width: 100%;
  }
  .contractActionsContainerMultiInner {
    margin-bottom: 10px;
    border-bottom: 1px solid ${styles.appProperties.solidBorderBox_BorderColor};
    padding: 0px 5px 5px 0px;
    background-color: ${styles.appProperties.primary_BackgroundColor};
    width: 100%;
  }
  .multiHeader {
    text-align: left;
    font-size: 10px;
    margin-bottom: 5px;
    font-weight: bold;
  }
  .multiTitle {
    ${styles.rightPanel.runTab.button_Create}
    border-radius: 3px;
    display: inline-block;
    width: 95%;
    font-size: 10px;
    height: 25px;
    padding-left: 20px;
    font-weight: normal;
    line-height: 25px;
    cursor: default;
  }
  .contractProperty.constant .multiTitle {
    ${styles.rightPanel.runTab.button_Constant}
    border-radius: 3px;
    display: inline-block;
    width: 95%;
    font-size: 10px;
    height: 25px;
    padding-left: 20px;
    font-weight: normal;
    line-height: 25px;
    cursor: default;
  }
  .multiArg {
    margin-bottom: 8px;
  }
  .multiArg input{
    padding: 5px;
  }

  .multiArg label {
      float: left;
      margin-right: 6px;
      font-size: 10px;
      width: 20%;
  }
  .multiArg button {
    border-radius: 3px;
    float: right;
    margin-right: 5%;
    font-size: 10px;
    border-width: 1px;
    width: inherit;
  }
  .multiHeader button {
    display: inline-block;
    width: 94%;
  }
  .hasArgs .multiArg input {
    border-left: 1px solid #dddddd;
  }
  .hasArgs input {
    display: block;
    border: 1px solid #dddddd;
    padding: .36em;
    border-left: none;
    padding: 8px 8px 8px 10px;
    font-size: 10px;
    height: 25px;
  }
  .hasArgs button {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 0;
  }
`

module.exports = css
