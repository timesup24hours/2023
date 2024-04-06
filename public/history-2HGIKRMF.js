import{h as e}from"./chunk-O7IMYJUU.js";var t=class extends HTMLElement{constructor(){super();e(this,"render",()=>{});let a=this.attachShadow({mode:"open"});a.innerHTML=`
      <style>
        time {
          font-family: var(--font-family);
          font-size: 18px;
          display: inline-block;
          max-width: min-content;
          text-align: left;
        } 
        .root {
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: row;
        }
        .line {
          display: flex;
          flex-direction: column;
          height: 100%;
          width: fit-content;
          align-items: center;
        }
        .line-top {
          height: 20px;
          width: 3px;
          background: white;
        }
        .dot {
          background: transparent;
          border: 3px solid white;
          height: 9px;
          width: 9px;
          border-radius: 50%;
        }
        .line-bottom {
          flex-grow: 1;
          width: 3px;
          background: white;
        }
        .content {
          padding: 18px;
        }

        :host([active]) .dot {
          box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
          transform: scale(1);
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
          }
        
          70% {
            transform: scale(1);
            box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
          }
        
          100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
          }
        }
      </style>
      <div class="root">
        <div class="line">
          <span class="line-top"></span>
          <span class="dot"></span>
          <span class="line-bottom"></span>
        </div>
        <div class="content"><slot></div>
      </div>
    `}connectedCallback(){this.classList.add("hydrated"),this.render()}};export{t as default};
//# sourceMappingURL=history-2HGIKRMF.js.map
