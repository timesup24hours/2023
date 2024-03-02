import{f as o}from"./chunk-YTPAW67S.js";var s="";var l=`<div class="root">
  <slot>
  </slot>
</div>`;var a=class extends HTMLElement{constructor(){super();o(this,"willLoad",()=>{});o(this,"render",()=>{});let e=this.attachShadow({mode:"open"}),t=new CSSStyleSheet;t.replaceSync(s),e.adoptedStyleSheets=[t],e.innerHTML=l}static get observedAttributes(){return[]}attributeChangedCallback(e,t,c){}connectedCallback(){this.classList.add("hydrated"),setTimeout(()=>{this.willLoad(),this.render()})}disconnectedCallback(){}};export{a as default};
