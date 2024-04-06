import{h as r}from"./chunk-O7IMYJUU.js";var e=class extends HTMLElement{constructor(){super();r(this,"handleBlur",t=>{this.removeAttribute("tabindex")});let t=this.attachShadow({mode:"open"});t.innerHTML=`
      <style>
        #option {
          font-family: var(--font-family);
          font-size: 14px;
          cursor: pointer;
          padding: 10px 0px;
          width: 100%;
          border-radius: 10px;
          padding: 10px;
          background-color: var(--background-primary);
          box-sizing: border-box;
        } 
        :host([active]) #option {
          background-color: var(--color-primary);
          color: white;
        }
      </style>
      <div id="option">
        <slot></slot>
      </div>
    `}set name(t){this.setAttribute("name",t)}get name(){return this.getAttribute("name")}static get observedAttributes(){return["active","name"]}setFocus(){this.setAttribute("tabindex","0"),this.focus()}connectedCallback(){this.classList.add("hydrated"),this.setAttribute("role","option"),this.addEventListener("blur",this.handleBlur)}disconnectedCallback(){this.removeEventListener("blur",this.handleBlur)}attributeChangedCallback(t,a,s){}};export{e as default};
//# sourceMappingURL=option-SAJWHHYU.js.map
