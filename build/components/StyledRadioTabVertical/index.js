import{createElement as i}from"react";import{jsxs as a,jsx as r}from"react/jsx-runtime";import{c as e}from"../../index-6ea95111.js";import{s as o}from"../../style-inject.es-1f59c1d0.js";import{FieldLabel as t,FieldErrorMessage as d}from"../Form/utility/index.js";import{addLineBreaks as l}from"../../utils/typography.js";import"../../index.es-62933797.js";import"../../server-d796a789.js";import"../../index-dd80248b.js";import"stream";import"../../utils/i18n/index.js";import"../../inherits-d3723d19.js";import"../../setPrototypeOf-c6ba02e6.js";import"../../nonIterableRest-e93b6547.js";import"../../unsupportedIterableToArray-0ca076cc.js";import"../../utils/i18n/loadLanguages.js";import"../../fa_icons-aa14317c.js";import"../../purify.es-49746c08.js";import"../../constants/common.js";o('@import url("https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap");.styled-radio-tab-vertical{display:flex;flex-flow:column}.styled-radio-tab-vertical>div:hover{background-color:#fff!important}.styled-radio-tab-vertical .radio-container:not(:first-child){margin-top:20px}.styled-radio-tab-vertical .radio-container .render-content{margin-left:30px}.styled-radio-tab-vertical .radio-container .radio-item{cursor:pointer;margin-right:20px}.styled-radio-tab-vertical .radio-container .radio-item:hover{background-color:transparent}.styled-radio-tab-vertical .radio-container .radio-item:hover .radio-icon{border-color:#7b89a1}.styled-radio-tab-vertical .radio-container .radio-item .radio-helper{color:#687792;display:block;margin-left:30px;margin-top:8px}.styled-radio-tab-vertical .radio-container .radio-item.disabled{cursor:not-allowed}.styled-radio-tab-vertical .radio-container .radio-item.disabled .radio-label{color:#b8bfcd}.styled-radio-tab-vertical .radio-container .radio-item.disabled .radio-icon:hover,.styled-radio-tab-vertical .radio-container .radio-item.disabled.selected .radio-icon,.styled-radio-tab-vertical .radio-container .radio-item.disabled.selected .radio-icon:active,.styled-radio-tab-vertical .radio-container .radio-item.disabled.selected .radio-icon:hover{border-color:#b8bfcd}.styled-radio-tab-vertical .radio-container .radio-item .radio-icon{border:1px solid #b8bfcd;border-radius:50%;box-sizing:border-box;display:inline-block;height:20px!important;margin-right:10px;position:relative;vertical-align:middle;width:20px!important}.styled-radio-tab-vertical .radio-container .radio-item.selected .radio-icon{border:5px solid #0b6cff}.styled-radio-tab-vertical .radio-container .radio-item.selected .radio-icon:hover{border-color:#4c93ff}.styled-radio-tab-vertical .radio-container .radio-item.selected .radio-icon:active{border-color:#004ec3}.styled-radio-tab-vertical .radio-container .radio-item.selected .radio-icon:before{display:none!important}.styled-radio-tab-vertical .radio-container .radio-item .radio-label{color:#232831;vertical-align:bottom}');const s=({label:o,options:s=[],selectedRadio:c,onChange:n,errMessage:m,isInvalid:p,disabled:b=!1,isRequired:v=!1,tooltip:y,className:f,dataQa:h=null})=>a("div",{className:f,children:[!!o&&r(t,{label:o,tooltip:y}),r("div",{className:e(["styled-radio-tab-vertical"]),"data-qa-id":h,children:s.map((o=>a("div",{className:"radio-container",children:[i("div",{className:e("radio-item",{disabled:b,selected:o.value===c}),"data-qa-props":o.dataQaProps,...!b&&o.value!==c&&{onClick:n.bind(null,o)},key:String(o.value)},r("span",{className:"radio-icon"}),r("span",{className:"radio-label",children:o.label}),o.value===c&&!!o.helper&&r("span",{className:"radio-helper",children:l(o.helper)})),o.value===c&&!!o.render&&r("div",{className:"render-content",children:o.render()})]},`radio-tab-vertical-${o.value}`)))}),v&&p&&m&&r(d,{message:m})]});export{s as StyledRadioTabVertical};
