import{f as a}from"./chunk-YTPAW67S.js";var i=class extends HTMLElement{constructor(){super();a(this,"render",()=>{});let e=this.attachShadow({mode:"open"});e.innerHTML=`
      <style>
        .root {
          position: relative;
          --size: 5px;
          height: calc(var(--size) * 3);
          width: calc(var(--size) * 3);
        }
        @keyframes aniRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      
        .piece {
          position: absolute;
          background-color: rgba(87, 45, 125, 0.8);
          height: var(--size);
          width: var(--size);
          border-radius: 4px;
        }
        // first row
        .piece:nth-child(1) {
          top: 0;
          left: 0;
          animation: aniColor 1s linear 0.1s infinite forwards;
        }
        .piece:nth-child(2) {
          top: 0px;
          left: var(--size);
          animation: aniColor 1s linear 0.2s infinite forwards;
        }
        .piece:nth-child(3) {
          top: 0px;
          left: calc(var(--size) * 2);
          animation: aniColor 1s linear 0.3s infinite forwards;
        }
      
        // second row
        .piece:nth-child(4) {
          top: var(--size);
          left: 0px;
          animation: aniColor 1s linear 0.4s infinite forwards;
        }
        .piece:nth-child(5) {
          top: var(--size);
          left: var(--size);
          animation: aniColor 1s linear 0.5s infinite forwards;
        }
        .piece:nth-child(6) {
          top: var(--size);
          left: calc(var(--size) * 2);
          animation: aniColor 1s linear 0.6s infinite forwards;
        }
      
        // third row
        .piece:nth-child(7) {
          top: calc(var(--size) * 2);
          left: 0px;
          animation: aniColor 1s linear 0.7s infinite forwards;
        }
        .piece:nth-child(8) {
          top: calc(var(--size) * 2);
          left: var(--size);
          animation: aniColor 1s linear 0.8s infinite forwards;
        }
        .piece:nth-child(9) {
          top: calc(var(--size) * 2);
          left: calc(var(--size) * 2);
          animation: aniColor 1s linear 0.9s infinite forwards;
        }
      
        .piece:nth-child(10) {
          top: calc(var(--size) * 2);
          left: 0px;
          background-color: rgba(87, 45, 125, 1);
          animation: aniColor 1s linear 1s infinite forwards;
        }
      
        @keyframes aniColor {
          from {
            background-color: rgba(87, 45, 125, 0.2);
          }
          to {
            background-color: rgba(87, 45, 125, 1);
          }
        }
      </style>
      <div class="root">
        <span class="piece"></span>
        <span class="piece"></span>
        <span class="piece"></span>
        <span class="piece"></span>
        <span class="piece"></span>
        <span class="piece"></span>
        <span class="piece"></span>
        <span class="piece"></span>
        <span class="piece"></span>
        <span class="piece"></span>
      </div>
    `}connectedCallback(){this.classList.add("hydrated"),this.render()}};export{i as default};
