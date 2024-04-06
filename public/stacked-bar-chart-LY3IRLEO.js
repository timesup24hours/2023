import{b as w,d as H,h as z}from"./chunk-4WU2W3SI.js";import{a as v,b as S,c as C,d as R,e as $,f as x,h as I,j as A,k as O,l as P,p as W}from"./chunk-4T34IBCY.js";import{h as k}from"./chunk-O7IMYJUU.js";var F=g=>{let L=g;return g/1e3>=1&&(L=Math.floor(g/1e3)+"K"),L},M=class extends HTMLElement{constructor(){super();k(this,"tooltip");k(this,"renderLine",({svg:n,line:p,data:d,xScale:y,yScale:e,parseDate:h})=>{n.append("path").datum(d).attr("class","line").attr("d",p),n.selectAll(".dot").data(d).enter().append("circle").attr("class","dot").attr("cx",a=>y(h(a.year))).attr("cy",a=>e(a.balance)).attr("r",3).on("mouseover",(a,m)=>{a.target.style.strokeWidth="3px",this.tooltip.style.display="flex",x(this.tooltip).transition().duration(200).style("opacity",1);let i=this.tooltip.querySelector(".year");i.innerHTML=m.year;let s=this.tooltip.querySelector(".dot");s.style.background="blue";let l=this.tooltip.querySelector(".text");l.innerHTML=`Balance ${w.format(Math.floor(m.balance))}`}).on("mouseout",a=>{a.target.style.strokeWidth="1px",x(this.tooltip).style("opacity",0)}).on("mousemove",a=>{x(this.tooltip).style("left",a.clientX+10+"px").style("top",a.clientY+10+"px")})});k(this,"render",()=>{let n=this,p=this.closest("div");if(!p||!this.shadowRoot)return;let{width:d}=p.getBoundingClientRect(),y=this.shadowRoot.querySelector("#root");if(!y)return;y.innerHTML="";let e={top:10,right:20,bottom:50,left:40},h=d-e.left-e.right,a=400-e.top-e.bottom,m=10,i=O("%Y"),s=P().range([0,h-e.left]),l=A().range([a,e.top]),b=A().range([a,e.top]),f=I().range(["#4477CE","#A084E8"]),r=this.getAttribute("data");if(r)r=JSON.parse(r);else return;if(Array.isArray(r)&&(r!=null&&r.length)){let V=R(s).tickSize(0).offset(0).tickPadding(10).tickSizeOuter(0),_=C(l).tickSize(0).tickPadding(-20).ticks(4).tickFormat(F),T=v(r,t=>t.balance);b.domain([0,T]);let B=$(b).tickSize(0).tickPadding(10).ticks(2).tickValues([0,T]).tickFormat(F),E=Object.keys(r[0]).filter(function(t){if(t!=="year"&&t!=="balance")return t});r.forEach(function(t){let o=0;t.components=E.map(u=>({key:u,y1:o,y0:o+=t[u],data:t[u],year:t.year}))});let U=S(r,t=>t.principle>t.interest?t.interest:t.principle),D=v(r,t=>t.principle+t.interest),K=S(r,t=>i(t.year)),Y=v(r,t=>i(t.year));s.domain([K,Y]),l.domain([0,D*1.5]),f.domain(E);let j=W().x(t=>s(i(t.year))).y(t=>b(t.balance)),c=x(y).append("svg").attr("width",h+e.left+e.right).attr("height",a+e.top+e.bottom).append("g").attr("transform","translate("+e.left+","+e.top+")");c.append("g").attr("class","x axis").attr("transform",`translate(${m/2}, ${a})`).call(V).call(t=>t.select(".domain").remove()),c.append("g").attr("class","y axis").attr("transform",`translate(${h}, 0)`).call(_).call(t=>t.select(".domain").remove()),c.append("g").attr("class","y axis").call(B).call(t=>t.select(".domain").remove()),c.selectAll(".entry").data(r).enter().append("g").attr("class","g").attr("transform",t=>"translate("+s(i(t.year))+", 0)").selectAll("rect").data(t=>t.components).enter().append("rect").attr("width",m).attr("y",t=>l(t.y0)).attr("height",t=>Math.abs(l(t.y0)-l(t.y1))).style("opacity","0.8").style("cursor","pointer").style("fill",t=>f(t.key)).on("mouseover",(t,o)=>{t.target.style.opacity=1,this.tooltipInstance.show();let u=this.tooltip.querySelector(".year");u.innerHTML=o.year;let J=this.tooltip.querySelector(".dot");J.style.background=f(o.key);let N=this.tooltip.querySelector(".text");N.innerHTML=`${o.key} ${w.format(Math.floor(o.data))}`}).on("mouseout",t=>{t.target.style.opacity=.8,this.tooltipInstance.hide(t)}).on("mousemove",t=>this.tooltipInstance.move(t)),this.renderLine({svg:c,line:j,data:r,xScale:s,yScale:b,parseDate:i});let q=c.selectAll(".legend").data(f.domain()).enter().append("g").attr("class","legend");q.append("rect").attr("x",(t,o)=>o*80).attr("y",a+e.bottom-15).attr("width",18).attr("height",8).style("fill",f),q.append("text").attr("x",(t,o)=>o*80+24).attr("y",a+e.bottom-11).attr("dy",".35em").style("text-anchor","start").style("fill","var(--text-tertiary)").text(t=>H(t))}});let n=this.attachShadow({mode:"open"});n.innerHTML=`
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
    `}static get observedAttributes(){return["data"]}connectedCallback(){this.classList.add("hydrated"),this.tooltipInstance=z(this),this.render(),window.addEventListener("resize",n=>{this.render()}),this.addEventListener("mouseout",n=>{this.tooltip.style.display="none"})}disconnectedCallback(){}attributeChangedCallback(n,p,d){this.render()}};export{M as default};
//# sourceMappingURL=stacked-bar-chart-LY3IRLEO.js.map
