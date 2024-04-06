import{h as t}from"./chunk-O7IMYJUU.js";var e=class extends HTMLElement{constructor(){super();t(this,"render",()=>{});let s=this.attachShadow({mode:"open"});s.innerHTML=`
      <style>
        :host {
          font-family: var(--font-family);
          font-size: 18px;
          display: none;
        } 
        .carousel-item {
          background-color: var(--background-secondary);
          height: fit-content;
          min-height: 200px;
          width: 200px;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
        }
        :host([active]) {
          display: inline-block;
        }
        .carousel-caption {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .carousel-content {
          display: flex;
          justify-content: center;
          height: 100%;
          flex: 1;
        }
        @media only screen and (max-width: 800px) {
          .carousel-item {
            padding: 10px;
          }
        }
      </style>
      <div class="carousel-item" id="" role="tabpanel" aria-roledescription="slide">
        <div class="carousel-image">
          <slot></slot>
        </div>
        <div class="carousel-caption">
          <slot name="label"></slot>
        </div>
        <div class="carousel-content">
          <slot name="content"></slot>
        </div>
      </div>
    `}connectedCallback(){this.classList.add("hydrated"),this.render()}};export{e as default};
//# sourceMappingURL=carousel-item-HXECRAPL.js.map
