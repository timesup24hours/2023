import{b,d as E,h as R}from"./chunk-RZRYSU2O.js";import{a as L,b as q,c as I,d as z,e as W,f as y,h as B,j as A,k as O,l as P,p as F}from"./chunk-4T34IBCY.js";import{h as v}from"./chunk-O7IMYJUU.js";var V=k=>{let S=k;return k/1e3>=1&&(S=Math.floor(k/1e3)+"K"),S},T=class extends HTMLElement{constructor(){super();v(this,"tooltip");v(this,"renderLine",({svg:l,line:m,data:f,xScale:x,yScale:o,parseDate:g})=>{l.append("path").datum(f).attr("class","line").attr("d",m),l.selectAll(".dot").data(f).enter().append("circle").attr("tabindex","0").attr("class","dot").attr("cx",e=>x(g(e.year))).attr("cy",e=>o(e.balance)).attr("r",3).on("mouseover",(e,c)=>{e.target.style.strokeWidth="3px",this.tooltip.style.display="flex",y(this.tooltip).transition().duration(200).style("opacity",1);let i=this.tooltip.querySelector(".year");i.innerHTML=c.year;let n=this.tooltip.querySelector(".dot");n.style.background="blue";let s=this.tooltip.querySelector(".text");s.innerHTML=`Balance ${b.format(Math.floor(c.balance))}`}).on("mouseout",e=>{e.target.style.strokeWidth="1px",y(this.tooltip).style("opacity",0)}).on("mousemove",e=>{y(this.tooltip).style("left",e.clientX+10+"px").style("top",e.clientY+10+"px")}).on("focus",(e,c)=>{e.target.style.strokeWidth="3px",this.tooltip.style.display="flex",y(this.tooltip).transition().duration(200).style("opacity",1);let i=this.tooltip.querySelector(".year");i.innerHTML=c.year;let n=this.tooltip.querySelector(".dot");n.style.background="blue";let s=this.tooltip.querySelector(".text");s.innerHTML=`Balance ${b.format(Math.floor(c.balance))}`;let{x:h,y:p}=e.target.getBoundingClientRect();y(this.tooltip).style("left",h+10+"px").style("top",p+10+"px")}).on("blur",e=>{e.target.style.strokeWidth="1px",y(this.tooltip).style("opacity",0)})});v(this,"render",()=>{let l=this,m=this.closest("div");if(!m||!this.shadowRoot)return;let{width:f}=m.getBoundingClientRect(),x=this.shadowRoot.querySelector("#root");if(!x)return;x.innerHTML="";let o={top:10,right:20,bottom:50,left:40},g=f-o.left-o.right,e=400-o.top-o.bottom,c=10,i=O("%Y"),n=P().range([0,g-o.left]),s=A().range([e,o.top]),h=A().range([e,o.top]),p=B().range(["#4477CE","#A084E8"]),a=this.getAttribute("data");if(a)a=JSON.parse(a);else return;if(Array.isArray(a)&&(a!=null&&a.length)){let _=z(n).tickSize(0).offset(0).tickPadding(10).tickSizeOuter(0),D=I(s).tickSize(0).tickPadding(-20).ticks(4).tickFormat(V),H=L(a,t=>t.balance);h.domain([0,H]);let K=W(h).tickSize(0).tickPadding(10).ticks(2).tickValues([0,H]).tickFormat(V),$=Object.keys(a[0]).filter(function(t){if(t!=="year"&&t!=="balance")return t});a.forEach(function(t){let r=0;t.components=$.map(d=>({key:d,y1:r,y0:r+=t[d],data:t[d],year:t.year}))});let G=q(a,t=>t.principle>t.interest?t.interest:t.principle),Y=L(a,t=>t.principle+t.interest),j=q(a,t=>i(t.year)),J=L(a,t=>i(t.year));n.domain([j,J]),s.domain([0,Y*1.5]),p.domain($);let N=F().x(t=>n(i(t.year))).y(t=>h(t.balance)),u=y(x).append("svg").attr("width",g+o.left+o.right).attr("height",e+o.top+o.bottom).append("g").attr("transform","translate("+o.left+","+o.top+")");u.append("g").attr("class","x axis").attr("transform",`translate(${c/2}, ${e})`).call(_).call(t=>t.select(".domain").remove()),u.append("g").attr("class","y axis").attr("transform",`translate(${g}, 0)`).call(D).call(t=>t.select(".domain").remove()),u.append("g").attr("class","y axis").call(K).call(t=>t.select(".domain").remove()),u.selectAll(".entry").data(a).enter().append("g").attr("class","g").attr("transform",t=>"translate("+n(i(t.year))+", 0)").selectAll("rect").data(t=>t.components).enter().append("rect").attr("width",c).attr("tabindex","0").attr("y",t=>s(t.y0)).attr("height",t=>Math.abs(s(t.y0)-s(t.y1))).style("opacity","0.8").style("cursor","pointer").style("fill",t=>p(t.key)).on("mouseover",(t,r)=>{t.target.style.opacity=1,this.tooltipInstance.show();let d=this.tooltip.querySelector(".year");d.innerHTML=r.year;let M=this.tooltip.querySelector(".dot");M.style.background=p(r.key);let w=this.tooltip.querySelector(".text");w.innerHTML=`${r.key} ${b.format(Math.floor(r.data))}`}).on("mouseout",t=>{t.target.style.opacity=.8,this.tooltipInstance.hide(t)}).on("mousemove",t=>this.tooltipInstance.move(t)).on("focus",(t,r)=>{t.target.style.opacity=1,this.tooltipInstance.show();let d=this.tooltip.querySelector(".year");d.innerHTML=r.year;let M=this.tooltip.querySelector(".dot");M.style.background=p(r.key);let w=this.tooltip.querySelector(".text");w.innerHTML=`${r.key} ${b.format(Math.floor(r.data))}`;let{x:U,y:X}=t.target.getBoundingClientRect();this.tooltipInstance.kbMove({x:U+20+"px",y:X+"px"})}).on("blur",t=>{t.target.style.opacity=.8,this.tooltipInstance.hide(t)}),this.renderLine({svg:u,line:N,data:a,xScale:n,yScale:h,parseDate:i});let C=u.selectAll(".legend").data(p.domain()).enter().append("g").attr("class","legend");C.append("rect").attr("x",(t,r)=>r*80).attr("y",e+o.bottom-15).attr("width",18).attr("height",8).style("fill",p),C.append("text").attr("x",(t,r)=>r*80+24).attr("y",e+o.bottom-11).attr("dy",".35em").style("text-anchor","start").style("fill","var(--text-tertiary)").text(t=>E(t))}});let l=this.attachShadow({mode:"open"});l.innerHTML=`
      <style>
        :host {
          font-family: var(--font-family);
          font-size: 14px;
          display: flex;
          width: 100%;
        }
        .title {
          font: 15px sans-serif;
        }
        .legend {
          font: 10px sans-serif;
        }
        .axis path,
        .axis line {
          fill: none;
          stroke: #000;
          shape-rendering: crispEdges;
        }
        
        .x.axis.path {
          display: none;
        }
        
        .line {
          fill: none;
          stroke: #77a4f0;
          stroke-width: 2px;
        } 
        .y.axis {
          fill: var(--text-tertiary);
        }
        .tick text {
          color: var(--text-tertiary);
        }
        .dot {
          fill: var(--background-primary);
          stroke: #4477CE;
          cursor: pointer;
        }
      </style>
      <div id="root"></div>
    `}static get observedAttributes(){return["data"]}connectedCallback(){this.classList.add("hydrated"),this.tooltipInstance=R(this),this.render(),window.addEventListener("resize",l=>{this.render()}),this.addEventListener("mouseout",l=>{this.tooltip.style.display="none"})}disconnectedCallback(){}attributeChangedCallback(l,m,f){this.render()}};export{T as default};
//# sourceMappingURL=stacked-bar-chart-YPTSZ7YL.js.map
