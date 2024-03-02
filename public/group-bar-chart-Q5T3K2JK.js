import{a as u,d as v,e as c,f as a,g as p,h as b,i as d,j as k}from"./chunk-X46VMDJ4.js";import{f as y}from"./chunk-YTPAW67S.js";var h=class extends HTMLElement{constructor(){super();y(this,"render",()=>{let e={top:40,right:20,bottom:50,left:40},w=550,z=450,m=450-e.left-e.right,o=350-e.top-e.bottom,S=this.shadowRoot.querySelector(".root"),i=a(S).append("svg").attr("width","100%").attr("height","100%").attr("viewBox",`0 0 ${w} ${z}`).attr("preserveAspectRatio","xMinYMin").append("g").attr("transform",`translate(${e.left}, ${e.top})`),f=[{month:1,interest:900,principle:500},{month:2,interest:900,principle:200},{month:3,interest:900,principle:300},{month:4,interest:900,principle:300},{month:5,interest:900,principle:300},{month:6,interest:900,principle:300},{month:7,interest:900,principle:300},{month:8,interest:900,principle:300},{month:9,interest:900,principle:300},{month:10,interest:900,principle:300},{month:11,interest:900,principle:300},{month:12,interest:900,principle:300}],n=f.map(t=>[t.month,[["principle",t.principle],["interest",t.interest]]]),L=Array.from(n).map(t=>t[0]),x=Array.from(Array.from(n)[0][1]).map(t=>t[0]),s=d().domain(L).range([0,m]).padding(.2);i.append("g").attr("class","x-scale").attr("transform",`translate(0,${o})`).call(v(s).tickSize(0).tickPadding(8));let A=p(".1s"),r=k().domain([0,u(f.map(t=>t.principle>t.interest?t.principle:t.interest))]).range([o,0]);i.append("g").attr("class","y-scale").call(c(r).ticks(4).tickSize(0).tickPadding(12).tickFormat(A)).call(t=>t.select(".domain").remove());let g=d().domain(x).range([0,s.bandwidth()]).padding([.05]),B=b().domain(x).range(["#18375F","#0072BC"]),$=()=>c().scale(r);i.append("g").attr("class","grid").call($().ticks(3).tickSize(-m,0,0).tickFormat(""));let l=a("body").append("div").attr("id","chart").attr("class","tooltip"),C=function(t){l.style("opacity",.8),a(this).style("opacity",.5)},E=function(t,M){let P=p(",");l.html(P(M[1])).style("position","absolute").style("top",t.y-10+"px").style("left",t.x+10+"px")},F=function(t){l.style("opacity",0),a(this).style("opacity",1)};i.append("g").selectAll("g").data(n).join("g").attr("transform",t=>"translate("+s(t[0])+", 0)").selectAll("rect").data(t=>t[1]).join("rect").attr("x",t=>g(t[0])).attr("y",t=>r(t[1])).attr("width",g.bandwidth()).attr("height",t=>o-r(t[1])).attr("fill",t=>B(t[0])).on("mouseover",C).on("mousemove",E).on("mouseleave",F),i.append("text").attr("class","chart-title").attr("x",-e.left*.6).attr("y",-e.top/1.5).attr("text-anchor","start").text(""),i.append("rect").attr("x",-e.left*.6).attr("y",o+e.bottom).attr("width",13).attr("height",13).style("fill","#18375F"),i.append("text").attr("class","legend").attr("x",-e.left*.6+20).attr("y",o+e.bottom+10).text("Principle"),i.append("rect").attr("x",60).attr("y",o+e.bottom).attr("width",13).attr("height",13).style("fill","#0072BC"),i.append("text").attr("class","legend").attr("x",80).attr("y",o+e.bottom+10).text("Interest")});let e=this.attachShadow({mode:"open"});e.innerHTML=`
      <style>
        :host {
          display: flex;
        }
        .root {
          font-family: var(--font-family);
          font-size: 18px;
          display: inline-block;
          height: 100%;
          width: 100%;
          text-align: left;
        } 
        svg {
          width: 100%;
          height: 100%;
          position: relative;
        }
        .bar {
          fill: #0072BC;
        }
        text {
          font-family: lato;
          font-size: 10px;
          fill: #333333;
        }
        .grid path {
          stroke-width: 0;
          stroke: #333333;
        }
        .grid .tick line {
          stroke: #333333;
          stroke-width: 0.3px;
          stroke-opacity: 0.3;
        }
        text.chart-title {
          font-size: 14px;
          fill:#222222
        }
        text.chart-label {
          font-size: 10px;
          font-weight: 400;
          fill: #999999;
        }
        text.chart-source {
          font-size: 8px;
          fill: #999999;
        }
        text.copyright {
          font-size: 8px;
          fill: #999999;
        }
        .tooltip {
          background-color: #ffffff;
          font-family: lato;
          font-size: 11px;
          padding: 4px;
          color: #666666;
          border: none;
          box-shadow: 0px 0px 3px 0px #E6E6E6;
        }
        .legend{
          font-size: 10px;
          fill: var(--text-tertiary);
        }
        .x-scale text, .y-scale text {
          fill: var(--text-tertiary);
        }
      </style>
      <div class="root"></div>
    `}connectedCallback(){this.classList.add("hydrated"),this.render()}};export{h as default};
