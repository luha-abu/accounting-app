import{I as b,J as w}from"./app-DbjRQGOc.js";var m={exports:{}};/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */(function(d){(function(p,i){d.exports?d.exports=i():p.Toastify=i()})(b,function(p){var i=function(t){return new i.lib.init(t)},v="1.12.0";i.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},i.lib=i.prototype={toastify:v,constructor:i,init:function(t){return t||(t={}),this.options={},this.toastElement=null,this.options.text=t.text||i.defaults.text,this.options.node=t.node||i.defaults.node,this.options.duration=t.duration===0?0:t.duration||i.defaults.duration,this.options.selector=t.selector||i.defaults.selector,this.options.callback=t.callback||i.defaults.callback,this.options.destination=t.destination||i.defaults.destination,this.options.newWindow=t.newWindow||i.defaults.newWindow,this.options.close=t.close||i.defaults.close,this.options.gravity=t.gravity==="bottom"?"toastify-bottom":i.defaults.gravity,this.options.positionLeft=t.positionLeft||i.defaults.positionLeft,this.options.position=t.position||i.defaults.position,this.options.backgroundColor=t.backgroundColor||i.defaults.backgroundColor,this.options.avatar=t.avatar||i.defaults.avatar,this.options.className=t.className||i.defaults.className,this.options.stopOnFocus=t.stopOnFocus===void 0?i.defaults.stopOnFocus:t.stopOnFocus,this.options.onClick=t.onClick||i.defaults.onClick,this.options.offset=t.offset||i.defaults.offset,this.options.escapeMarkup=t.escapeMarkup!==void 0?t.escapeMarkup:i.defaults.escapeMarkup,this.options.ariaLive=t.ariaLive||i.defaults.ariaLive,this.options.style=t.style||i.defaults.style,t.backgroundColor&&(this.options.style.background=t.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var t=document.createElement("div");t.className="toastify on "+this.options.className,this.options.position?t.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(t.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):t.className+=" toastify-right",t.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var o in this.options.style)t.style[o]=this.options.style[o];if(this.options.ariaLive&&t.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)t.appendChild(this.options.node);else if(this.options.escapeMarkup?t.innerText=this.options.text:t.innerHTML=this.options.text,this.options.avatar!==""){var a=document.createElement("img");a.src=this.options.avatar,a.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?t.appendChild(a):t.insertAdjacentElement("afterbegin",a)}if(this.options.close===!0){var s=document.createElement("button");s.type="button",s.setAttribute("aria-label","Close"),s.className="toast-close",s.innerHTML="&#10006;",s.addEventListener("click",(function(f){f.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}).bind(this));var e=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&e>360?t.insertAdjacentElement("afterbegin",s):t.appendChild(s)}if(this.options.stopOnFocus&&this.options.duration>0){var n=this;t.addEventListener("mouseover",function(f){window.clearTimeout(t.timeOutValue)}),t.addEventListener("mouseleave",function(){t.timeOutValue=window.setTimeout(function(){n.removeElement(t)},n.options.duration)})}if(typeof this.options.destination<"u"&&t.addEventListener("click",(function(f){f.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}).bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&t.addEventListener("click",(function(f){f.stopPropagation(),this.options.onClick()}).bind(this)),typeof this.options.offset=="object"){var r=c("x",this.options),l=c("y",this.options),u=this.options.position=="left"?r:"-"+r,y=this.options.gravity=="toastify-top"?l:"-"+l;t.style.transform="translate("+u+","+y+")"}return t},showToast:function(){this.toastElement=this.buildToast();var t;if(typeof this.options.selector=="string"?t=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?t=this.options.selector:t=document.body,!t)throw"Root element is not defined";var o=i.defaults.oldestFirst?t.firstChild:t.lastChild;return t.insertBefore(this.toastElement,o),i.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout((function(){this.removeElement(this.toastElement)}).bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(t){t.className=t.className.replace(" on",""),window.setTimeout((function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),t.parentNode&&t.parentNode.removeChild(t),this.options.callback.call(t),i.reposition()}).bind(this),400)}},i.reposition=function(){for(var t={top:15,bottom:15},o={top:15,bottom:15},a={top:15,bottom:15},s=document.getElementsByClassName("toastify"),e,n=0;n<s.length;n++){h(s[n],"toastify-top")===!0?e="toastify-top":e="toastify-bottom";var r=s[n].offsetHeight;e=e.substr(9,e.length-1);var l=15,u=window.innerWidth>0?window.innerWidth:screen.width;u<=360?(s[n].style[e]=a[e]+"px",a[e]+=r+l):h(s[n],"toastify-left")===!0?(s[n].style[e]=t[e]+"px",t[e]+=r+l):(s[n].style[e]=o[e]+"px",o[e]+=r+l)}return this};function c(t,o){return o.offset[t]?isNaN(o.offset[t])?o.offset[t]:o.offset[t]+"px":"0px"}function h(t,o){return!t||typeof o!="string"?!1:!!(t.className&&t.className.trim().split(/\s+/gi).indexOf(o)>-1)}return i.lib.init.prototype=i.lib,i})})(m);var g=m.exports;const k=w(g);function T(d){k({text:d,gravity:"top",position:"center",duration:3e3,style:{background:"linear-gradient(to right, #95ccf0, #95ccf0)",borderRadius:"16px",color:"#010152"}}).showToast()}export{T as s};
