import{g as c,l as i,o as s,c as a,b as d,t as u,m,r as p,p as _}from"./app-DEG2fIWE.js";const f={class:"text-sm text-red-600"},k={__name:"InputError",props:{message:String},setup(e){return(o,t)=>c((s(),a("div",null,[d("p",f,u(e.message),1)],512)),[[i,e.message]])}},g={class:"block font-medium text-sm text-gray-700"},v={key:0},h={key:1},y={__name:"InputLabel",props:{value:String},setup(e){return(o,t)=>(s(),a("label",g,[e.value?(s(),a("span",v,u(e.value),1)):(s(),a("span",h,[m(o.$slots,"default")]))]))}},b=["value"],S={__name:"TextInput",props:{modelValue:String},emits:["update:modelValue"],setup(e,{expose:o}){const t=p(null);return _(()=>{t.value.hasAttribute("autofocus")&&t.value.focus()}),o({focus:()=>t.value.focus()}),(r,n)=>(s(),a("input",{ref_key:"input",ref:t,class:"border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",value:e.modelValue,onInput:n[0]||(n[0]=l=>r.$emit("update:modelValue",l.target.value))},null,40,b))}};export{y as _,S as a,k as b};