import{f as a}from"./chunk-YTPAW67S.js";var e=class extends HTMLElement{constructor(){super();a(this,"render",()=>{let t=this.getAttribute("value"),s=this.shadowRoot.querySelector(".value");s.innerHTML=t});let t=this.attachShadow({mode:"open"});t.innerHTML=`
      <style>
        :host {
          font-family: var(--font-family);
          font-size: 18px;
          background: var(--background-primary);
          padding: 20px;
          box-sizing: border-box;
          border-radius: 10px;
          height: 100px;
        } 
        .root {
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
        .left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 3;
        }
        .right {
          flex: 1; 
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .value {
          font-size: 34px;
        }
        .text {
          font-size: 14px;
          color: var(--text-tertiary);
        }
      </style>
      <div class="root">
        <div class="left">
          <span class="value"></span>
          <span class="text">
            <slot></slot>
          </span>
        </div>
        <div class="right">
          <div><slot name="icon"></slot></div>
        </div>
      </div>
    `}static get observedAttributes(){return["value"]}connectedCallback(){this.classList.add("hydrated"),this.render()}attributeChangedCallback(t,s,i){this.render()}};export{e as default};
