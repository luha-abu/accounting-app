import{Q as _,T as v,p as y,q as g,w as m,o as n,b as e,a as w,u as t,j as h,d as C,e as k,g as T,v as x,n as c,t as l,c as i,f as p,s as E,F as N}from"./app-DEG2fIWE.js";import{_ as V}from"./AppLayout-XjNkS1Zv.js";import{s as A,t as B}from"./luha-BYdl1bA2.js";import"./moment-C5S46NFB.js";const S={class:"navbar shadow-sm bg-body-tertiary"},D={class:"container-fluid"},M={class:"left-bar"},U={class:"navbar-brand mb-0 h1 py-0"},$={class:"container py-3"},F={class:"form-group mb-3"},I={class:"d-flex align-items-center"},L={key:0,class:"fw-bold text-danger"},P={class:"list-group"},j=["onClick"],H={__name:"Index",props:{paymentTypes:Array},setup(u){const d=_(),s=v({id:"",name:""}),f=()=>{if(s.id){s.put(route("paymentTypes.update",s.id),{onSuccess:()=>{s.reset()}});return}s.post(route("paymentTypes.store"),{onSuccess:()=>{s.reset()}})},b=r=>{s.id=r.id,s.name=r.name};return y(()=>{d.props.flash.message&&A(d.props.flash.message)}),(r,o)=>(n(),g(V,{title:"Create Contact"},{default:m(()=>[e("nav",S,[e("div",D,[e("div",M,[e("span",U,[w(t(h),{href:r.route("dashboard"),class:"btn btn-link"},{default:m(()=>o[3]||(o[3]=[e("i",{class:"bi bi-chevron-left"},null,-1)])),_:1},8,["href"]),o[4]||(o[4]=C("Payment Types"))])])])]),e("div",$,[e("form",{onSubmit:k(f,["prevent"]),class:"w-100"},[e("div",F,[o[5]||(o[5]=e("label",{for:"name",class:"form-label"},"Name",-1)),e("div",I,[T(e("input",{type:"text",class:c(["form-control fw-bold me-2",t(s).errors.name&&"is-invalid"]),"onUpdate:modelValue":o[0]||(o[0]=a=>t(s).name=a),onInput:o[1]||(o[1]=a=>t(B)(t(s),"name",a))},null,34),[[x,t(s).name]]),e("button",{class:c(["btn btn-primary fw-bold",t(s).id&&"btn-success"])},l(t(s).id?"UPDATE":"CREATE"),3),t(s).id?(n(),i("button",{key:0,class:"btn btn-secondary fw-bold ms-2",onClick:o[2]||(o[2]=a=>{t(s).reset(),t(s).clearErrors()})},"CANCEL")):p("",!0)]),t(s).errors.name?(n(),i("small",L,l(t(s).errors.name),1)):p("",!0)])],32),e("div",P,[(n(!0),i(N,null,E(u.paymentTypes,a=>(n(),i("button",{class:"list-group-item list-group-item-action fw-bold",onClick:q=>b(a)},l(a.name),9,j))),256))])])]),_:1}))}};export{H as default};