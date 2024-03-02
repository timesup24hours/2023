import{a as t}from"./chunk-CWXPBAZR.js";import{f as o}from"./chunk-YTPAW67S.js";var i=class extends HTMLElement{constructor(){super();o(this,"handleModeChange",e=>{this.getAttribute("mode")==="light"?(this.setAttribute("mode","dark"),t.setColorScheme("dark")):(this.setAttribute("mode","light"),t.setColorScheme("light"))});let e=this.attachShadow({mode:"open"});e.innerHTML=`
      <style>
        * { 
          margin: 0;
          padding: 0;
          border: 0;
          background: transparent;
          box-sizing: border-box;
          font-family: var(--font-family);
        }
        button {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-end;
          gap: 8px;
          cursor: pointer;
        }
        #toggle {
          height: 40px;
          width: 100px;
          background-color: var(--background-primary);
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-radius: 500px;
          padding: 0px 10px;
        }
        #light-dark-mode-text {
          font-size: 14px;
          font-weight: 400;
          display: inline-block;
          max-width: min-content;
          text-align: left;
          color: var(--text-primary);
        }
        .container {
          border-radius: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 30px;
          width: 30px;
          --fill: var(--text-primary);
        }
        .active {
          background-color: var(--text-primary);
          --fill: var(--background-primary);
        }
      </style>
      <button aria-labelledby="light-dark-mode-text">
        <span id="toggle">
          <span id="light" class="container active">
            <huanlin-icon name="sun"></huanlin-icon>
          </span>
          <span id="dark" class="container">
            <huanlin-icon name="moon"></huanlin-icon>
          </span>
        </span>
        <span id="light-dark-mode-text">Light mode</span>
      </button>
    `}static get observedAttributes(){return["mode"]}connectedCallback(){this.classList.add("hydrated"),this.render(),this.shadowRoot.querySelector("button").addEventListener("click",this.handleModeChange)}disconnectedCallback(){this.shadowRoot.querySelector("button").removeEventListener("click",this.handleModeChange)}attributeChangedCallback(e,a,s){this.render()}setMode(e){this.shadowRoot.querySelector("#light-dark-mode-text").innerHTML=e==="light"?"Light Mode":"Dark Mode",e==="light"?(this.shadowRoot.querySelector("#light").classList.add("active"),this.shadowRoot.querySelector("#dark").classList.remove("active")):(this.shadowRoot.querySelector("#dark").classList.add("active"),this.shadowRoot.querySelector("#light").classList.remove("active"))}render(){let e=this.getAttribute("mode")||"light";this.setMode(e)}};export{i as default};
