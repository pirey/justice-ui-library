import{jsxs as e,Fragment as t,jsx as i}from"react/jsx-runtime";import*as l from"react";import{R as o}from"../../index.es-62933797.js";import{c as r}from"../../index-6ea95111.js";import{s as a}from"../../style-inject.es-1f59c1d0.js";import{s}from"../../server-d796a789.js";import{translation as n}from"../../utils/i18n/index.js";import"../../fa_icons-aa14317c.js";import{p as d}from"../../purify.es-49746c08.js";import"../../index-dd80248b.js";import"stream";import"../../inherits-d3723d19.js";import"../../setPrototypeOf-c6ba02e6.js";import"../../nonIterableRest-e93b6547.js";import"../../unsupportedIterableToArray-0ca076cc.js";import"../../utils/i18n/loadLanguages.js";a('@import url("https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap");:root{--modal-page-close-btn-top:32px;--modal-page-close-btn-right:32px}.horizontalFieldText.row{align-items:center;display:flex;flex-direction:row;flex-wrap:wrap}.horizontalFieldText .cell-1 .label{color:#687792;font-size:16px;margin-right:5px}.horizontalFieldText .cell-1 #horizontal-field-text-label__tooltip{text-align:left}');const c=({children:a,className:c,tooltip:m,showTooltip:p,showTooltipOnFocus:f,label:u="",isLabelHidden:h=!1,isFlex:x=!0,rightCellClassName:b,isValueMultiLine:j=!1,dataQa:g,labelAlignment:w,isRequired:T=!0,optionalLabel:z=n("common.optionalFieldLabel")})=>{const y=l.useRef(null);return l.useEffect((()=>{const e=setTimeout((()=>{o.rebuild()}),100);return()=>{clearTimeout(e)}}),[]),l.useEffect((()=>{p&&f?y.current&&o.show(y.current):y.current&&o.hide(y.current)}),[p]),e("div",{className:r("horizontalFieldText",c,{"multi-line-row":j,"label-hidden":h,row:x}),children:[!h&&e("div",{className:r("cell-1",w),children:[e("span",{className:"label",children:[u,!T&&` ${z}`]}),m&&e(t,{children:[i("i",{ref:y,className:"icon-info","data-for":"horizontal-field-text-label__tooltip","data-tip":d.sanitize(l.isValidElement(m)?s.renderToString(m):m),"data-html":!0}),i(o,{effect:"solid",id:"horizontal-field-text-label__tooltip"})]})]}),i("div",{className:r("cell-2",b),"data-qa-id":g,children:a})]})};export{c as HorizontalFieldText};
