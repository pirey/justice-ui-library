import{jsxs as e,jsx as s}from"react/jsx-runtime";import{c as t}from"../../index-6ea95111.js";import{FieldLabel as i,FieldErrorMessage as o,FieldHelperText as r}from"../Form/utility/index.js";import{s as a}from"../../style-inject.es-1f59c1d0.js";import{CreatableSelect as p}from"../CreatableSelect/index.js";import"react";import"../../index.es-62933797.js";import"../../server-d796a789.js";import"../../index-dd80248b.js";import"stream";import"../../utils/i18n/index.js";import"../../inherits-d3723d19.js";import"../../setPrototypeOf-c6ba02e6.js";import"../../nonIterableRest-e93b6547.js";import"../../unsupportedIterableToArray-0ca076cc.js";import"../../utils/i18n/loadLanguages.js";import"../../fa_icons-aa14317c.js";import"../../purify.es-49746c08.js";import"../../constants/common.js";import"../../utils/typography.js";import"../../stateManager-845a3300.esm-b4e021da.js";import"../../memoize-one.esm-8827f1ac.js";import"../../unitless.esm-d94354fa.js";import"../../index-3f17275b.js";import"../../createSelect-dfa42dfe.js";import"../../objectWithoutPropertiesLoose-982ef579.js";import"../../objectWithoutProperties-90b89624.js";import"../../index-72b69d08.js";import"../../_commonjsHelpers-6e998e78.js";import"../../core.esm-a8712816.js";import"../../inheritsLoose-6fd5c6e3.js";a('@import url("https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap");.valid-select-input .field-label{font-size:14px;padding-bottom:4px}');const m=({label:a,placeholder:m,options:l=[],name:n,value:d,onChange:c,errMessage:j,optionalLabel:b,isInvalid:u,isDisabled:f=!1,isRequired:x=!0,isClearable:g,tooltip:h,selectDataQa:y,isMulti:v=!1,className:C,helperText:L,...M})=>e("div",{className:t("valid-select-input",C),children:[!!a&&s(i,{label:a,optionalLabel:b,isRequired:x,tooltip:h}),s(p,{...M,options:l,placeholder:m,name:n,value:d,onChange:c,isDisabled:f,isClearable:g,isMulti:v,dataQa:y}),u&&s(o,{message:j}),L&&s(r,{message:L})]});export{m as ValidCreatableSelect};
