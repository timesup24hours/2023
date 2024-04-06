import{h as s}from"./chunk-O7IMYJUU.js";var l=class extends HTMLElement{constructor(){super();s(this,"getTabButton",({id:t,idx:r})=>`
      <button 
        id="carousel-tab-${r+1}" 
        type="button" 
        role="tab" 
        aria-selected=${r===0?"true":"false"}
        aria-label="slide ${r+1}"
      >
      </button> 
    `);s(this,"renderTabButton",t=>{let r=Array.from(this.querySelectorAll("huanlin-carousel-item")),o=this.shadowRoot.querySelector("#tablist"),e="";r.forEach((i,a)=>{let n=i.getAttribute("id");e+=this.getTabButton({id:n,idx:a})}),o.innerHTML=e});s(this,"handleSlotChange",()=>{this.shadowRoot.querySelector("slot").addEventListener("slotchange",this.renderTabButton)});s(this,"handleTablistClick",t=>{if(t.target.getAttribute("role")!=="tab")return;let r=Array.from(t.currentTarget.querySelectorAll("[role='tab']")),o=Array.from(this.querySelectorAll("huanlin-carousel-item"));r.forEach((e,i)=>{e===t.target?(e.setAttribute("aria-selected","true"),o[i].setAttribute("active","")):(e.setAttribute("aria-selected","false"),o[i].removeAttribute("active"))})});s(this,"setFirstItemActive",()=>{let t=this.querySelector("huanlin-carousel-item");t&&t.setAttribute("active","")});s(this,"handleTablistKeyboard",t=>{let r=Array.from(t.currentTarget.querySelectorAll("[role='tab']")),o=Array.from(this.querySelectorAll("huanlin-carousel-item")),e=r.indexOf(t.target);t.key==="ArrowLeft"?e-=1:t.key==="ArrowRight"&&(e+=1),!(e<0||e>=r.length)&&r.forEach((i,a)=>{a===e?(i.setAttribute("aria-selected","true"),i.setAttribute("tabindex","0"),i.focus(),o[a].setAttribute("active","")):(i.setAttribute("aria-selected","false"),i.removeAttribute("tabindex","-1"),o[a].removeAttribute("active"))})});s(this,"render",()=>{});let t=this.attachShadow({mode:"open"});t.innerHTML=`
      <style>
        :host {
          font-family: var(--font-family);
          font-size: 18px;
          display: inline-block;
        } 
        [role="tablist"] {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          margin-top: 10px;
          gap: 10px;
        }
        [role="tab"] {
          border: none;
          height: 6px;
          width: 40px;
          border-radius: 10px;
          cursor: pointer;
          background: var(--background-secondary);
        }
        button[aria-selected="true"] {
          background-color: var(--text-primary);
        }
      </style>
      <section id="carousel" aria-roledescription="carousel" aria-label="highlighted shows">
        <div class="carousel-inner">
          <div id="carousel-items" class="carousel-items playing" aria-live="off">
            <slot></slot>
          </div>
          <div class="controls">
            <div class="tab-wrapper">
              <div id="tablist" role="tablist" aria-label="slides">
              </div>
            </div>
          </div>
        </div>
      </section>    
    `}connectedCallback(){this.classList.add("hydrated"),this.render(),this.handleSlotChange(),this.renderTabButton(),this.setFirstItemActive(),this.shadowRoot.querySelector("#tablist").addEventListener("click",this.handleTablistClick),this.shadowRoot.querySelector("[role='tablist']").addEventListener("keydown",this.handleTablistKeyboard)}disconnectedCallback(){this.shadowRoot.querySelector("#tablist").removeEventListener("click",this.handleTablistClick),this.shadowRoot.querySelector("[role='tablist']").removeEventListener("keydown",this.handleTablistKeyboard),this.shadowRoot.querySelector("slot").removeEventListener("slotchange",this.renderTabButton)}};export{l as default};
//# sourceMappingURL=carousel-W5BLS7OP.js.map
