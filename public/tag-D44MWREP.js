import{f as o}from"./chunk-YTPAW67S.js";var a="* { box-sizing: border-box; font-family: var(--font-family-secondary); } .root { padding: var(--padding, 4px 10px); border-radius: 6px; background-color: var(--background-color, #2c46b1); color: var(--color, white); font-size: var(--font-size, 12px); }";var d='<div part="root" class="root"><slot></slot></div>';var r=class extends HTMLElement{constructor(){super();o(this,"willLoad",()=>{});o(this,"render",()=>{});let e=this.attachShadow({mode:"open"}),t=new CSSStyleSheet;t.replaceSync(a),e.adoptedStyleSheets=[t],e.innerHTML=d}static get observedAttributes(){return[]}attributeChangedCallback(e,t,c){}connectedCallback(){this.classList.add("hydrated"),this.willLoad(),this.render()}disconnectedCallback(){}};export{r as default};
