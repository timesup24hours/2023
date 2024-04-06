import{h as t}from"./chunk-O7IMYJUU.js";var e=class extends HTMLElement{constructor(){super();t(this,"render",()=>{this.shadowRoot.querySelector("time").innerHTML=new Intl.DateTimeFormat("default",{hour12:!0,hour:"numeric",minute:"numeric",second:"numeric"}).format(new Date)});let n=this.attachShadow({mode:"open"});n.innerHTML=`
      <style>
        time {
          font-family: var(--font-family);
          font-size: 18px;
          display: inline-block;
          max-width: min-content;
          text-align: left;
        } 
      </style>
      <time></time>
    `}connectedCallback(){this.classList.add("hydrated"),this.render(),setInterval(this.render,1e3)}};export{e as default};
//# sourceMappingURL=clock-I3ICJEK7.js.map
