import{f as s,h as L,o as M,q as k}from"./chunk-4T34IBCY.js";import{h as m}from"./chunk-O7IMYJUU.js";var b=class extends HTMLElement{constructor(){super();m(this,"render",()=>{var _;let e=(_=this.shadowRoot)==null?void 0:_.querySelector("#root");if(!this.shadowRoot||!e)return;e.innerHTML="";let p=~~this.getAttribute("width"),f=~~this.getAttribute("height"),w=this.hasAttribute("legend"),h=JSON.parse(this.getAttribute("colors")),o=JSON.parse(this.getAttribute("data"));if(!o)return;let l=80,n=f||400,a=p||400,u=this.hasAttribute("legend-right")?30:0,g=s(e).append("svg").attr("width",a+"px").attr("height",n+"px").attr("viewBox",`0 0 ${n} ${a}`).attr("preserveAspectRatio","xMinYMin").append("g").attr("transform",`translate(${a/2-u}, ${n/2})`),A=Math.min(a,n)/2-l,C=Array.isArray(h)?h:["#011f4b","#03396c","#005b96","#6497b1","#b3cde0","#4682A9"],d=L().domain(o).range(C),z=k().value(t=>+t.value).sort(null)(o),R=M().innerRadius(A/2).outerRadius(A);o.forEach(function(t){t.value=+t.value,t.enabled=!0});let i=this,v=this.hasAttribute("no-default-event"),E=function(t,r){if(t.target.classList.remove("focus"),y(t,r),s(this).style("cursor","pointer"),v){let S=new CustomEvent("app-mouseover",{detail:{root:e,data:r,select:s,self:i,color:d,event:t}});i.dispatchEvent(S);return}let c=e.querySelector(".inner-circle"),x=s(c).append("g").attr("class","text-group");x.append("text").attr("class","text text-secondary type").text(`${r.data.type}`).attr("text-anchor","middle").attr("dy","-0.8em"),x.append("text").attr("class","text text-secondary years").text(`${r.data.value}y`).attr("text-anchor","middle").attr("dy","0.6em")},y=function(t,r){if(s(this).style("cursor","none"),v){let x=new CustomEvent("app-mouseout",{detail:{root:e,data:r,select:s,self:i,color:d,event:t}});i.dispatchEvent(x);return}let c=e.querySelector(".inner-circle .text-group");s(c).remove()};g.selectAll("path").data(z).join("path").attr("d",R).attr("tabindex","0").attr("fill",t=>d(t.data.type)).attr("stroke","var(--background-primary)").style("stroke-width","1px").on("mouseover",E).on("mouseout",y).on("mousemove",(t,r)=>{if(v){let c=new CustomEvent("app-mousemove",{detail:{root:e,data:r,select:s,self:i,color:d,event:t}});i.dispatchEvent(c);return}}).on("focus",(t,r)=>{if(t.target.style.outline="none",t.target.classList.add("focus"),E(t,r),v){let c=new CustomEvent("app-mousemove",{detail:{root:e,data:r,select:s,self:i,color:d,event:t}});i.dispatchEvent(c);return}}).on("blur",y),g.append("g").attr("dy","0.5em").style("font-size","16px").style("text-anchor","middle").attr("class","inner-circle"),w&&this.renderLegends({svg:g,data:o,color:d,height:n,margin:l})});m(this,"renderLegends",({svg:e,data:p,color:f,height:w,margin:h})=>{let o=e.selectAll(".legend").data(p).enter().append("g").attr("class","legend"),l,n;this.hasAttribute("legend-right")?(l=h*1.5+20,n=(a,u)=>u*20):(l=-h/2,n=(a,u)=>150+u*20),o.append("circle").attr("cx",()=>l+20).attr("cy",n).attr("r",5).attr("fill",a=>f(a.type)),o.append("text").attr("x",()=>l+30).attr("y",n).attr("dy",".35em").style("text-anchor","start").style("fill","var(--text-tertiary)").style("font-size","10px").text(a=>a.type)});let e=this.attachShadow({mode:"open"});e.innerHTML=`
      <style>
        :host {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 400px;
        }
        path:focus {
          stroke: blue; 
          stroke-width: 3px !important; 
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
    `}connectedCallback(){this.classList.add("hydrated"),this.render()}static get observedAttributes(){return["data","height","width","no-default-event","legend","colors","legend-right"]}attributeChangedCallback(e,p,f){this.render()}};export{b as default};
//# sourceMappingURL=donut-XDQQDKMN.js.map
