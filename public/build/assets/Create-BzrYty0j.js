import{T as b,q as v,w as c,o as i,b as o,a as p,u as n,j as _,d as w,e as g,g as l,v as r,G as y,c as m,s as S,F as V,t as x}from"./app-BmX5tQBm.js";import{_ as k}from"./AppLayout-Ie_SHdCK.js";import{s as q}from"./luha-0Ml7VY30.js";const C={class:"navbar shadow-sm bg-body-tertiary"},B={class:"container-fluid"},D={class:"left-bar"},N={class:"navbar-brand mb-0 h1 py-0"},T={class:"container py-3"},U={class:"row g-2 mb-3"},I={class:"col-6"},M={class:"form-group"},h={class:"col-6"},A={class:"form-group"},E={class:"form-group mb-3"},F=["value"],j={class:"row mb-3"},G={class:"col-6"},L={class:"form-group mb-3"},H={__name:"Create",props:{contacts:Array},setup(d){const u=d,e=b({invoice_no:"",invoice_date:new Date().toISOString().substring(0,10),contact:u.contacts[0].id,amount:0}),f=()=>{e.post(route("sales.store"),{onError:a=>{for(let t in a)q(a[t])}})};return(a,t)=>(i(),v(k,{title:"Create Sale"},{default:c(()=>[o("nav",C,[o("div",B,[o("div",D,[o("span",N,[p(n(_),{href:a.route("sales.index"),class:"btn btn-link"},{default:c(()=>t[4]||(t[4]=[o("i",{class:"bi bi-arrow-left"},null,-1)])),_:1},8,["href"]),t[5]||(t[5]=w("Create Sale"))])])])]),o("div",T,[o("form",{onSubmit:g(f,["prevent"])},[o("div",U,[o("div",I,[o("div",M,[t[6]||(t[6]=o("label",{for:"invoice_no",class:"form-label"},"Invoice No",-1)),l(o("input",{type:"text",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=s=>n(e).invoice_no=s),required:""},null,512),[[r,n(e).invoice_no]])])]),o("div",h,[o("div",A,[t[7]||(t[7]=o("label",{for:"invoice_no",class:"form-label"},"Invoice Date",-1)),l(o("input",{type:"date",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=s=>n(e).invoice_date=s),required:""},null,512),[[r,n(e).invoice_date]])])])]),o("div",E,[t[8]||(t[8]=o("label",{for:"contact",class:"form-label"},"Contact",-1)),l(o("select",{name:"contact",id:"contact",class:"form-select","onUpdate:modelValue":t[2]||(t[2]=s=>n(e).contact=s),required:""},[(i(!0),m(V,null,S(d.contacts,s=>(i(),m("option",{value:s.id},x(s.name),9,F))),256))],512),[[y,n(e).contact]])]),o("div",j,[o("div",G,[o("div",L,[t[9]||(t[9]=o("label",{for:"amount",class:"form-label"},"Amount",-1)),l(o("input",{type:"number",class:"form-control","onUpdate:modelValue":t[3]||(t[3]=s=>n(e).amount=s),required:""},null,512),[[r,n(e).amount]])])])]),t[10]||(t[10]=o("button",{class:"btn btn-primary fw-bold w-100"},"Submit",-1))],32)])]),_:1}))}};export{H as default};