import{jsx as e,jsxs as t}from"react/jsx-runtime";import s from"react";import{R as l}from"../../index.es-62933797.js";import{getDomScrollWidthByRef as r}from"../../utils/dom.js";import{c as i}from"../../index-4bd03571.esm-38a23a83.js";import"../../unitless.esm-d94354fa.js";import"../../index-db82829b.js";import"../../index-dd80248b.js";const o=()=>e("i",{className:"icon-chevron-down"}),a=({...t})=>{const s=Array.isArray(t.selectProps.value)?t.selectProps.value.find((e=>e.label===t.children)):t.selectProps.value,{children:l}=t,r={...t,children:"string"==typeof l&&l.length>25?`${l.slice(0,25)}...`:l};return s?.isUnremovable?e("div",{className:"styled-atlaskit-select__multi-value-unremovable",children:e(i.MultiValueLabel,{...r})}):e(i.MultiValueLabel,{...r})},n=o=>{const a=s.useRef(null),[n,c]=s.useState(!1),{label:d,tooltip:u}=o.data,m=n?{"data-tip":u||d,"data-place":"right","data-for":"select-tooltip"}:{};return s.useEffect((()=>{if(!a?.current)return;const e=r(a.current,".styled-atlaskit-select__option");c(e>a.current.offsetWidth)}),[]),s.useEffect((()=>{setTimeout((()=>{l.rebuild()}),100)}),[]),t("div",{ref:a,...m,className:"optionLabel",children:[e(i.Option,{...o}),e(l,{effect:"solid",id:"select-tooltip"})]})};export{o as DropdownIndicator,a as MultiValueLabel,n as Option};
