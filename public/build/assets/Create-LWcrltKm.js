import{T as p,q as f,w as m,o as u,b as o,a as b,u as s,j as y,d as v,e as w,g as r,v as a}from"./app-DEG2fIWE.js";import{_ as x}from"./AppLayout-XjNkS1Zv.js";import{t as i,s as C}from"./luha-BYdl1bA2.js";import"./moment-C5S46NFB.js";const V={class:"navbar shadow-sm bg-body-tertiary"},g={class:"container-fluid"},T={class:"left-bar"},U={class:"navbar-brand mb-0 h1 py-0"},k={class:"container py-3"},I={class:"form-group mb-3"},N={class:"form-group mb-3"},B={class:"form-group mb-3"},E={class:"form-group mb-3"},A={__name:"Create",setup(c){const e=p({name:"",city:"",state:"",phone:""}),d=()=>{e.post(route("contacts.store"),{onError:l=>{for(let t in l)C(l[t])}})};return(l,t)=>(u(),f(x,{title:"Create Contact"},{default:m(()=>[o("nav",V,[o("div",g,[o("div",T,[o("span",U,[b(s(y),{href:l.route("contacts.index"),class:"btn btn-link"},{default:m(()=>t[8]||(t[8]=[o("i",{class:"bi bi-chevron-left"},null,-1)])),_:1},8,["href"]),t[9]||(t[9]=v("Create Contact"))])])])]),o("div",k,[o("form",{onSubmit:w(d,["prevent"]),class:"w-100"},[o("div",I,[t[10]||(t[10]=o("label",{for:"name",class:"form-label"},"Name",-1)),r(o("input",{type:"text",class:"form-control fw-bold","onUpdate:modelValue":t[0]||(t[0]=n=>s(e).name=n),onInput:t[1]||(t[1]=n=>s(i)(s(e),"name",n))},null,544),[[a,s(e).name]])]),o("div",N,[t[11]||(t[11]=o("label",{for:"city",class:"form-label"},"City",-1)),r(o("input",{type:"text",class:"form-control fw-bold","onUpdate:modelValue":t[2]||(t[2]=n=>s(e).city=n),onInput:t[3]||(t[3]=n=>s(i)(s(e),"city",n))},null,544),[[a,s(e).city]])]),o("div",B,[t[12]||(t[12]=o("label",{for:"state",class:"form-label"},"State",-1)),r(o("input",{type:"text",class:"form-control fw-bold","onUpdate:modelValue":t[4]||(t[4]=n=>s(e).state=n),onInput:t[5]||(t[5]=n=>s(i)(s(e),"state",n))},null,544),[[a,s(e).state]])]),o("div",E,[t[13]||(t[13]=o("label",{for:"phone",class:"form-label"},"Phone",-1)),r(o("input",{type:"number",class:"form-control fw-bold","onUpdate:modelValue":t[6]||(t[6]=n=>s(e).phone=n),onInput:t[7]||(t[7]=n=>s(i)(s(e),"phone",n))},null,544),[[a,s(e).phone]])]),t[14]||(t[14]=o("button",{class:"btn btn-primary w-100 mt-2 fw-bold"},"CREATE",-1))],32)])]),_:1}))}};export{A as default};
