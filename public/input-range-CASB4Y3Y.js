import{a as u,b as p}from"./chunk-3E4EKIJL.js";import{f as r}from"./chunk-YTPAW67S.js";var c=0,o=class extends HTMLElement{constructor(){super();r(this,"setInputValue",t=>{let i=this.shadowRoot.querySelector(".input"),s=this.shadowRoot.querySelector(".range");if(this.isDollar){let e=p.format(t);e.includes("$")&&(e=e.split("$")[1]),i.value=e}else i.value=t;s.value=t});r(this,"render",({range:t,input:i})=>{let s=this.getAttribute("name"),e=this.getAttribute("disabled"),a=this.getAttribute("value"),n=this.getAttribute("min"),l=this.getAttribute("max"),d=this.getAttribute("step");i.setAttribute("name",s),this.setInputValue(a),t.setAttribute("value",a),n&&t.setAttribute("min",n),l&&t.setAttribute("max",l),d&&t.setAttribute("step",d),e?(i.setAttribute("disabled",""),t.setAttribute("disabled","")):(i.removeAttribute("disabled"),t.removeAttribute("disabled"))});r(this,"handleFormData",({formData:t})=>{let i=this.shadowRoot.querySelector(".input");this.disabled||t.append(i.name,i.value)});r(this,"findContainingForm",()=>{let t=this.getRootNode();return Array.from(t.querySelectorAll("form")).find(s=>s.contains(this))||null});let t=this.attachShadow({mode:"open",delegatesFocus:!0}),i=++c,s=`input-range-label-${i}`,e=`input-range-${i}`;t.innerHTML=`
      <style>
        :host {
          font-family: var(--font-family);
          font-size: 14px;
          display: flex;
        } 
        .root {
          display: flex;
          flex-direction: column;
          width: 100%;
        }
        #label {
          padding-bottom: 6px;
          color: var(--text-tertiary);
        }
        .input, .range {
          width: 100%;
        }
        .input-number {
          position: relative; 
          display: flex;
        }
        .dollar {
          position: absolute;
          top: 10px;
          right: 10px;
        }
        .input {
          border: none;
          padding: 10px;
          border-radius: 4px;
          font-size: 16px;
          background: var(--background-secondary);
          color: var(--text-primary);
        }
        .range {
          position: absolute;
          width: calc(100% - 5px);
          bottom: -2px;
          left: 0px;
        }
        input[type=range]::-webkit-slider-runnable-track {
          width: 100%;
          height: 2px;
          cursor: pointer;
          animate: 0.2s;
          border-radius: 5px;
          border: 1px solid blue;
        }
        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none;
          border: 1px solid #2497E3;
          height: 8px;
          width: 8px;
          background: #A1D0FF;
          cursor: pointer;
          margin-top: -8px;
        }
      </style>
      <div class="root">
        <label for=${e} id=${s}>
          <slot name="label"></slot>
        </label>
        <span class="input-container">
          <span class="input-number">
            <input id=${e} class="input" type="text"></input>
            <span class="dollar">$</span>
            <input aria-labelledby=${s} class="range" type="range"></input>
          </span>
        </span>
      </div>
    `}static get observedAttributes(){return["value","disabled","name","min","step","max","dollar"]}attributeChangedCallback(t,i,s){}connectedCallback(){this.classList.add("hydrated");let t=this.shadowRoot.querySelector(".range"),i=this.shadowRoot.querySelector(".input"),s=this.shadowRoot.querySelector(".dollar");this.isDollar=this.hasAttribute("dollar"),this.isDollar?s.innerHTML="$":s.innerHTML="%",this.render({range:t,input:i}),t.addEventListener("input",e=>{let a=e.target.value;this.setInputValue(a)}),i.addEventListener("keypress",e=>{let a=e.target.value;(e.which<48||e.which>57)&&e.preventDefault(),e.target.value=a}),i.addEventListener("keyup",e=>{this.isDollar&&this.setInputValue(u(e.target.value))}),this.form=this.findContainingForm(),this.form&&this.form.addEventListener("formdata",this.handleFormData)}};export{o as default};
