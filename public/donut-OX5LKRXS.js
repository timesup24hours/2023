import{f as a,h as E,m as _,o as M}from"./chunk-X46VMDJ4.js";import{f as v}from"./chunk-YTPAW67S.js";var m=class extends HTMLElement{constructor(){super();v(this,"render",()=>{var A;let t=(A=this.shadowRoot)==null?void 0:A.querySelector("#root");if(!this.shadowRoot||!t)return;t.innerHTML="";let u=~~this.getAttribute("width"),f=~~this.getAttribute("height"),b=this.hasAttribute("legend"),c=JSON.parse(this.getAttribute("colors")),s=JSON.parse(this.getAttribute("data"));if(!s)return;let o=80,r=f||400,n=u||400,d=this.hasAttribute("legend-right")?30:0,y=a(t).append("svg").attr("width",n+"px").attr("height",r+"px").attr("viewBox",`0 0 ${r} ${n}`).attr("preserveAspectRatio","xMinYMin").append("g").attr("transform",`translate(${n/2-d}, ${r/2})`),w=Math.min(n,r)/2-o,z=Array.isArray(c)?c:["#011f4b","#03396c","#005b96","#6497b1","#b3cde0","#4682A9"],h=E().domain(s).range(z),C=M().value(e=>+e.value).sort(null)(s),L=_().innerRadius(w/2).outerRadius(w);s.forEach(function(e){e.value=+e.value,e.enabled=!0});let l=this,g=this.hasAttribute("no-default-event"),R=function(e,i){if(a(this).style("cursor","pointer"),g){let $=new CustomEvent("app-mouseover",{detail:{root:t,data:i,select:a,self:l,color:h,event:e}});l.dispatchEvent($);return}let p=t.querySelector(".inner-circle"),x=a(p).append("g").attr("class","text-group");x.append("text").attr("class","text text-secondary type").text(`${i.data.type}`).attr("text-anchor","middle").attr("dy","-0.8em"),x.append("text").attr("class","text text-secondary years").text(`${i.data.value}y`).attr("text-anchor","middle").attr("dy","0.6em")},S=function(e,i){if(a(this).style("cursor","none"),g){let x=new CustomEvent("app-mouseout",{detail:{root:t,data:i,select:a,self:l,color:h,event:e}});l.dispatchEvent(x);return}let p=t.querySelector(".inner-circle .text-group");a(p).remove()};y.selectAll("path").data(C).join("path").attr("d",L).attr("fill",e=>h(e.data.type)).attr("stroke","var(--background-primary)").style("stroke-width","1px").on("mouseover",R).on("mouseout",S).on("mousemove",(e,i)=>{if(g){let p=new CustomEvent("app-mousemove",{detail:{root:t,data:i,select:a,self:l,color:h,event:e}});l.dispatchEvent(p);return}}),y.append("g").attr("dy","0.5em").style("font-size","16px").style("text-anchor","middle").attr("class","inner-circle"),b&&this.renderLegends({svg:y,data:s,color:h,height:r,margin:o})});v(this,"renderLegends",({svg:t,data:u,color:f,height:b,margin:c})=>{let s=t.selectAll(".legend").data(u).enter().append("g").attr("class","legend"),o,r;this.hasAttribute("legend-right")?(o=c*1.5+20,r=(n,d)=>d*20):(o=-c/2,r=(n,d)=>150+d*20),s.append("circle").attr("cx",()=>o+20).attr("cy",r).attr("r",5).attr("fill",n=>f(n.type)),s.append("text").attr("x",()=>o+30).attr("y",r).attr("dy",".35em").style("text-anchor","start").style("fill","var(--text-tertiary)").style("font-size","10px").text(n=>n.type)});let t=this.attachShadow({mode:"open"});t.innerHTML=`
      <style>
        :host {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 400px;
        }
        svg {
          width: 100%;
          height: 100%;
        }
        text {
          font-family: var(--font-family);
          font-size: 10px;
          fill: var(--text-secondary);
        }
        #root {
          width: fit-content;
          height: fit-content;
          display: flex;
        }
        .inner-circle {
          fill: var(--text-primary);
        }
        .text-anchor {
          font-size: 16px;
          font-weight: 500;
          fill: #ffffff;
        }
        .type {
          font-size: 20px;
          fill: var(--text-tertiary);
        }
        .years {
          font-size: 50px;
          fill: var(--text-tertiary);
        }
      </style>
      <div id="root"></div>
    `}connectedCallback(){this.classList.add("hydrated"),this.render()}static get observedAttributes(){return["data","height","width","no-default-event","legend","colors","legend-right"]}attributeChangedCallback(t,u,f){this.render()}};export{m as default};
