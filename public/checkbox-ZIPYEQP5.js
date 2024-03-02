import{f as i}from"./chunk-YTPAW67S.js";var r="* { box-sizing: border-box; font-family: var(--font-family-secondary); } :host { display: flex; } .root { cursor: pointer; display: flex; flex-direction: row; align-items: flex-start; } input { cursor: pointer; }";var l=`<div part="root" class="root">
  <input part="input" type="checkbox" />
  <div part="description" class="description">
    <slot></slot>
  </div>
</div>`;var d=0,s=class extends HTMLElement{constructor(){super();i(this,"willLoad",()=>{var e,o;this.checkboxEle=(e=this.shadowRoot)==null?void 0:e.querySelector("input"),this.descriptionEle=(o=this.shadowRoot)==null?void 0:o.querySelector(".description");let t=++d;this.descriptionEle.setAttribute("id",t),this.checkboxEle.setAttribute("aria-labelledby",t)});i(this,"render",()=>{});let t=this.attachShadow({mode:"open"}),e=new CSSStyleSheet;e.replaceSync(r),t.adoptedStyleSheets=[e],t.innerHTML=l}static get observedAttributes(){return["type"]}attributeChangedCallback(t,e,o){}connectedCallback(){this.classList.add("hydrated"),this.willLoad(),this.render()}disconnectedCallback(){}};export{s as default};
