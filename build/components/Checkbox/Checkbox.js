import{jsxs as e,jsx as o,Fragment as c}from"react/jsx-runtime";import*as s from"react";import{c as i}from"../../index-6ea95111.js";import{s as t}from"../../style-inject.es-1f59c1d0.js";import{R as l}from"../../index.es-62933797.js";import{s as r}from"../../server-d796a789.js";import{FieldHelperText as a}from"../Form/utility/FormUtility.js";import"../../fa_icons-aa14317c.js";import{p as d}from"../../purify.es-49746c08.js";import"../../index-dd80248b.js";import"stream";import"../../utils/i18n/index.js";import"../../inherits-d3723d19.js";import"../../setPrototypeOf-c6ba02e6.js";import"../../nonIterableRest-e93b6547.js";import"../../unsupportedIterableToArray-0ca076cc.js";import"../../utils/i18n/loadLanguages.js";import"../../constants/common.js";import"../../utils/typography.js";t('@import url("https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap");:root{--modal-page-close-btn-top:32px;--modal-page-close-btn-right:32px}.styled-checkbox{font-family:Roboto,sans-serif;padding:20px 0 10px 32px;position:relative}.styled-checkbox .checkbox-label{align-items:center;display:inline-flex;font-size:14px;padding:0}.styled-checkbox .checkbox-label>i{display:block;margin-left:8px}.styled-checkbox .field-helper-text{margin-left:4px}.styled-checkbox__input{border:0;display:none;height:0;left:0;position:absolute;top:0;width:0}.styled-checkbox__icon{align-items:center;border:1px solid #b8bfcd;border-radius:2px;cursor:pointer;display:flex;height:20px;justify-content:center;left:0;position:absolute;top:20px;width:20px}.styled-checkbox__icon:hover{border-color:#687792}.styled-checkbox__icon>i{display:block;font-size:16px}.styled-checkbox__label{color:#232831;display:block;line-height:20px;margin-left:4px}.styled-checkbox.isChecked .styled-checkbox__icon{background-color:#0b6cff;border-color:#0b6cff}.styled-checkbox.isChecked .styled-checkbox__icon:hover{background-color:#4c93ff;border-color:#4c93ff}.styled-checkbox.isChecked .styled-checkbox__icon:active{background-color:#004ec3;border-color:#004ec3}.styled-checkbox.isChecked .styled-checkbox__icon>i{color:#fff}.styled-checkbox.isDisabled .icon-info,.styled-checkbox.isDisabled .styled-checkbox__label{color:#b8bfcd}.styled-checkbox.isDisabled .styled-checkbox__icon{background-color:#f5f6f8;cursor:not-allowed}.styled-checkbox.isDisabled .styled-checkbox__icon:hover{border-color:#b8bfcd}.styled-checkbox.isDisabled.isChecked .styled-checkbox__icon{background-color:#b8bfcd;border-color:#b8bfcd}');const b=({label:t,helperText:b,isChecked:n,tooltip:p,isDisabled:h,value:x,dataQa:k,dataQaProps:m,className:f,onChange:y,onClick:_})=>{const g=s.isValidElement(p)?r.renderToString(p):p;return e("div",{className:i("styled-checkbox",f,{isChecked:n,isDisabled:h}),"data-qa-id":k,"data-qa-props":m,children:[e("label",{className:"checkbox-label",children:[o("input",{className:"styled-checkbox__input",type:"checkbox",value:String(x),checked:n,disabled:h,onChange:y,onClick:_}),o("span",{className:"styled-checkbox__icon",children:n&&o("i",{className:"icon-check"})}),t&&o("span",{className:"styled-checkbox__label",children:t}),p&&e(c,{children:[o("i",{className:"icon-info","data-for":"styled-checkbox__tooltip","data-tip":g?d.sanitize(g):"","data-html":!0}),o(l,{effect:"solid",id:"styled-checkbox__tooltip"})]})]}),b&&o(a,{message:b})]})};export{b as Checkbox};
