import{f as l}from"./chunk-YTPAW67S.js";var i='* { margin: 0; padding: 0; box-sizing: border-box; font-family: "Poppins", sans-serif; } body { display: flex; align-items: center; justify-content: center; min-height: 100vh; background: #595DB8; } .left, .right { height: 1000px; display: flex; flex: 1; } .left { border: 4px solid red; } .right { border: 4px solid green; }';var n=`<div class="flex flex-row root-list">
  <!-- <huanlin-sync-scroll>
    <div class="left">a</div>
    <div class="right">b</div>
  </huanlin-sync-scroll>
  <huanlin-sync-scroll>
    <div class="left">a</div>
    <div class="right">b</div>
  </huanlin-sync-scroll> -->
  <huanlin-v-scroll>
  </huanlin-v-scroll>
</div>
`;var t=class extends HTMLElement{constructor(){super();l(this,"willLoad",()=>{let e=document.createElement("style");e.innerHTML=i,this.innerHTML=n,this.appendChild(e)});l(this,"render",()=>{})}static get observedAttributes(){return[]}attributeChangedCallback(e,r,s){this.render()}connectedCallback(){this.classList.add("hydrated"),this.willLoad(),this.render(),this.addEventListener("huanlin-scroll",e=>{this.querySelectorAll("huanlin-sync-scroll").forEach(s=>{let a=e.detail.event.deltaY;s.scrollTop+=a})})}disconnectedCallback(){}};export{t as default};
