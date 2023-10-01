var Nc=Object.defineProperty;var to=Object.getOwnPropertySymbols;var Zc=Object.prototype.hasOwnProperty,Ic=Object.prototype.propertyIsEnumerable;var eo=Math.pow,Jn=(t,n,e)=>n in t?Nc(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,no=(t,n)=>{for(var e in n||(n={}))Zc.call(n,e)&&Jn(t,e,n[e]);if(to)for(var e of to(n))Ic.call(n,e)&&Jn(t,e,n[e]);return t};var K=(t,n)=>()=>(t&&(n=t(t=0)),n);var p=(t,n,e)=>(Jn(t,typeof n!="symbol"?n+"":n,e),e);var at=(t,n,e)=>new Promise((r,i)=>{var o=l=>{try{s(e.next(l))}catch(c){i(c)}},a=l=>{try{s(e.throw(l))}catch(c){i(c)}},s=l=>l.done?r(l.value):Promise.resolve(l.value).then(o,a);s((e=e.apply(t,n)).next())});var ho,Tt,rr,se,po,an,Bc,fo,Uc,Vc,mo,jc,ir,nr,gt,vt=K(()=>{ho=t=>Number(t.split(",").join("")),Tt=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}),rr=(t,n={})=>new Intl.NumberFormat("en-US",no({style:"currency",currency:"USD",minimumFractionDigits:0},n)).format(t),se=t=>t.charAt(0).toUpperCase()+t.slice(1),po=t=>(typeof t=="number"&&(t=t.toString()),~~t.replace(/[^0-9]/g,"")),an=(t,n)=>{let e=`${Number(~~t).toLocaleString("en")}`;return n?e=e+"%":e="$"+e,e},Bc=t=>(typeof t=="number"&&(t=t.toString()),t+"%"),fo=(t,n=!0)=>{let r=`${Number(~~t)}`.split("");return r.length===1?r=["0.","0",`${r[0]}`]:r.length===2?r=["0.",`${r[0]}`,`${r[1]}`]:r.length===3?r=[`${r[0]}.`,`${r[1]}`,`${r[2]}`]:r.length>=4&&(r=[r[0],r[1]+".",r[2],r[3]]),n?Bc(r.join("")):r.join("")},Uc=({loanPrincipal:t,repayment:n,interest:e})=>t-(n-e),Vc=({rate:t,loanPrincipal:n,numberOfPayments:e=12})=>{let r=parseFloat(fo(t,!1))*.01;return parseFloat(r.toFixed(4))/e*n},mo=(t,n=0,e=!0)=>{let r=[],i=[],o=[],a=[];if(t.year)for(let v=0;v<t.year*12;v++){let x=Vc({rate:t.interestRate,loanPrincipal:r.length===0?t.mortgage-t.downPayment:r[v-1].loanBalance}),q=Uc({loanPrincipal:r.length===0?t.mortgage-t.downPayment:r[v-1].loanBalance,repayment:t.monthlyPayment,interest:x});i.push(Number(x.toFixed(2))),o.push(Number((t.monthlyPayment-x).toFixed(2))),a.push(Number(q.toFixed(2))<0?0:Number(q.toFixed(2)));let g={loanBalance:Number(q.toFixed(2))<0?0:Number(q.toFixed(2)),principlePaid:Number((t.monthlyPayment-x).toFixed(2)),interestPaid:Number(x.toFixed(2)),month:v+1};r.push(g)}let s=i.reduce((v,x)=>v+x,0),l=o.reduce((v,x)=>v+x,0),c=an(s),u=an(t.mortgage-t.downPayment),h=an(t.mortgage-t.downPayment+s),d=an(Math.floor(t.monthlyPayment)),f=t.year+new Date().getFullYear();return{dollarTotalInterestPaid:c,dollarTotalPrinciplePaid:u,dollarPrincipleInterest:h,dollarPayment:d,paidOffByWhen:f,stackedBarChartData:jc(t),totalInterestPaid:s,totalPrinciplePaid:l}},jc=t=>{let n=[];if(t.year){let e=[],r=[],i=[],o=[],a=c=>{let u=e.length===0?t.mortgage-t.downPayment:e[c-1].loanBalance,h=parseFloat(fo(t.interestRate,!1))*.01;return parseFloat(h.toFixed(4))/12*u},s=(c,u)=>{let h=e.length===0?t.mortgage-t.downPayment:e[u-1].loanBalance,d=t.monthlyPayment;return h-(d-c)};for(let c=0;c<t.year*12;c++){let u=a(c),h=s(u,c);r.push(Number(u.toFixed(2))),i.push(Number((t.monthlyPayment-u).toFixed(2))),o.push(Number(h.toFixed(2))<0?0:Number(h.toFixed(2)));let d={loanBalance:Number(h.toFixed(2))<0?0:Number(h.toFixed(2)),principlePaid:Number((t.monthlyPayment-u).toFixed(2)),interestPaid:Number(u.toFixed(2)),month:c+1};e.push(d)}let l=[];return e.reduce((c,u,h)=>{let d=u.principlePaid,f=u.interestPaid;return parseFloat(u.month/12)%1===0?(l.push({year:u.month/12+new Date().getFullYear(),principle:c[c.length-1].principle+d,interest:c[c.length-1].interest+f,balance:u.loanBalance}),c.push({year:0,principle:0,interest:0,balance:0})):c.push({year:u.month/12+new Date().getFullYear(),principle:c.length?c[c.length-1].principle+d:d,interest:c.length?c[c.length-1].interest+f:f,balance:u.loanBalance}),c},n),l}},ir=t=>new Intl.DateTimeFormat("en-US").format(t),nr=class{constructor(n,e){p(this,"move",n=>{this.tooltip.style.left=n.clientX+10+"px",this.tooltip.style.top=n.clientY+10+"px"});p(this,"hide",n=>{this.tooltip.style.opacity=0,this.tooltip.style.display="none"});p(this,"show",n=>{this.tooltip.style.display="flex",this.tooltip.style.opacity=1});var r;this.tooltip=(r=document.body)==null?void 0:r.querySelector("#tooltip"),this.tooltip||(this.tooltip=document.createElement("div"),this.tooltip.setAttribute("id","tooltip"),this.tooltip.innerHTML=e||`
        <div class="year"></div>
          <div class="content">
            <div class="dot"></div>
            <div class="text"></div>
          </div> 
        </div>
      `,document.body.appendChild(this.tooltip)),n.tooltip=this.tooltip}getTooltip(){return this.tooltip}},gt=t=>new nr(t)});var bl,wl=K(()=>{bl='* { margin: 0; padding: 0; border: 0; background: transparent; box-sizing: border-box; } body { font-family: var(--font-family); } .position-relative { position: relative; } .flex { display: flex; } .justify-end { justify-content: flex-end; } .fit-content { width: -moz-fit-content; width: fit-content; } .align-center { align-items: center; } .justify-center { justify-content: center; } .flex-row { flex-direction: row; } .flex-column { flex-direction: column; } .flex-grow-1 { flex-grow: 1; } .display-block { display: block; } .justify-space-between { justify-content: space-between; } .gap { gap: 10px; } .width-100p, .w-100p { width: 100%; } .h-100p { height: 100%; } .min-height-100p { min-height: 100%; } .height-100p { height: 100%; } .text-primary { color: var(--text-primary); } .text-secondary { color: var(--text-secondary); } .text-tertiary { color: var(--text-tertiary); } .subtitle { display: block; width: -moz-fit-content; width: fit-content; font-size: 16px; margin-block-start: 0px; margin-block-end: 0px; margin-inline-start: 0px; margin-inline-end: 0px; } :host { display: flex; width: 100%; flex: 1; } .root { font-family: var(--font-family); font-size: 18px; font-weight: bold; display: grid; width: 100%; grid-template-columns: repeat(4, minmax(240px, 1fr)); grid-template-rows: 100px 1fr 1fr 500px; gap: 8px; } form.five { display: flex; flex-direction: column; box-sizing: border-box; grid-column: 1; grid-row: 2/4; } .six { grid-column: 2/4; grid-row: 2/4; } .seven { display: none; grid-column: 4; grid-row: 2/4; } .eight { grid-column: 2/4; } form label { display: flex; flex-direction: column; } .summary { display: flex; flex-direction: row; justify-content: flex-end; gap: 8px; } .left { display: flex; flex-direction: column; width: 25%; } .middle { width: 50%; } .right { width: 25%; background: var(--background-primary); border-radius: 10px; padding: 20px; box-sizing: border-box; } .main { display: flex; flex-direction: row; gap: 8px; } form input { text-align: right; } form input[type=number]::-webkit-outer-spin-button, form input[type=number]::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; } form input[type=number] { -moz-appearance: textfield; } .input { display: flex; align-items: center; } .bar-chart { height: 500px; } app-input-range, .radio-group { margin-bottom: 24px; } fieldset { color: var(--text-tertiary); margin: 0px; padding: 0px; } .radio-group { border: none; } .radio-group-container { display: flex; flex-direction: row; } .radio-group-container .radio:last-child { margin-left: 14px; } .radio-group legend { font-size: 14px; padding: 0px 0px 6px 0px; } .radio { display: flex; flex-direction: row; margin-bottom: 4px; cursor: pointer; } .radio *:hover { cursor: pointer; } .radio input { margin: 0px 4px 0px 0px; background: var(--background-primary); } .radio label { font-size: 14px; color: var(--text-secondary); } button { background: var(--color-primary); border: none; padding: 10px 20px; color: var(--background-primary); border-radius: 4px; cursor: pointer; } button:hover { background: var(--color-primary-hover); } button:active { background: var(--color-primary-active); } app-key-pair huanlin-icon { --height: 50px; --width: 50px; } app-key-pair [slot=icon] svg { display: flex; height: 50px; fill: var(--text-tertiary); } .card { border-radius: 10px; padding: 20px; width: 100%; box-sizing: border-box; background: var(--background-primary); } .toggle-group .toggle { background: transparent; padding: 0; } .toggle-group .toggle huanlin-icon { --fill: var(--text-quaternary); } .toggle-group .toggle.active huanlin-icon { --fill: var(--text-tertiary) ; } .hide { display: none; } @media only screen and (max-width: 800px) { .root { grid-template-columns: unset; grid-template-rows: unset; grid-template-areas: "five" "one" "two" "three" "four" "six" "eight"; } .one { grid-area: one; } .two { grid-area: two; } .three { grid-area: three; } .four { grid-area: four; } form.five { grid-area: five; grid-column: unset; grid-row: unset; } .six { grid-area: six; grid-column: unset; grid-row: unset; } .seven { grid-area: seven; grid-column: unset; grid-row: unset; } .eight { grid-area: eight; } }'});var Tl,kl=K(()=>{Tl=`<div class="root">
  <app-key-pair name="paid-off-by" class="one card">
    Paid off By
    <div slot="icon" class="flex align-center justify-center">
      <huanlin-icon name="calendar" style="--height: 50px;"></huanlin-icon>
    </div>
  </app-key-pair>
  <app-key-pair name="total-interest" class="two card">
    Total interest
    <div slot="icon" class="flex align-center justify-center">
      <huanlin-icon name="percent" style="--height: 50px;"></huanlin-icon>
    </div>
  </app-key-pair>
  <app-key-pair name="total-principal" class="three card">
    Mortgage amount
    <div slot="icon" class="flex align-center justify-center">
      <huanlin-icon name="home" style="--height: 50px;"></huanlin-icon>
    </div>
  </app-key-pair>
  <app-key-pair name="monthly-payment" class="four card">
    Monthly payment
    <div slot="icon" class="flex align-center justify-center">
      <huanlin-icon name="dollar" style="--height: 50px;"></huanlin-icon>
    </div>
  </app-key-pair>
  <form class="five card">
    <app-input-range name="mortgage" value="500000" min="5000" max="5000000" step="5000" dollar>
      <div slot="label">Mortgage</div>
    </app-input-range>
    <app-input-range name="down-payment" value="100000" min="5000" max="5000000" step="5000" dollar>
      <div slot="label">Down Payment</div>
    </app-input-range>
    <app-input-range name="interest-rate" value="4" step="0.01" min="" max="30">
      <div slot="label">Interest Rate</div>
    </app-input-range>
    <fieldset class="radio-group">
      <legend>Years</legend>
      <div class="radio-group-container">
        <div class="radio">
          <input id="15y" name="years" type="radio" value="15"></input>
          <label for="15y">15 years</label>
        </div>
        <div class="radio">
          <input id="30y" name="years" type="radio" value="30" checked></input>
          <label for="30y">30 years</label>
        </div>
      </div>
    </fieldset>
    <button type="submit">Calculate</button>
  </form>
  <div class="six card">
    <div class="flex flex-column justify-space-between">
      <div class="flex flex-row justify-space-between align-center width-100p">
        <h2 class="subtitle">Principle, Interest and Balance</h2>
        <div class="toggle-group">
          <button name="stacked-bar-chart" class="toggle active" aria-label="stached bar chart">
            <huanlin-icon name="stacked-bar-chart" style="--height: 24px;"></huanlin-icon>
          </button>
          <button aria-hidden="true" name="donut-chart" class="toggle" aria-label="donut chart">
            <huanlin-icon name="donut-chart" style="--height: 24px;"></huanlin-icon>
          </button>
        </div>
      </div>
      <app-stacked-bar-chart class="stacked-bar-chart"></app-stacked-bar-chart>
      <app-donut class="hide" id="total" legend legend-right no-default-event colors='["#4477CE", "#A084E8"]'></app-donut>
    </div>
  </div>
  <div class="seven card">
  </div>
  <div class="eight card">
    <h2 class="subtitle">Summary of years</h2>
    <huanlin-table></huanlin-table>
  </div>
</div>`});var r0={};var yi,bi=K(()=>{vt();wl();kl();yi=class extends HTMLElement{constructor(){super();p(this,"result");p(this,"isFirstRender",!0);p(this,"monthlyPayment",({mortgage:e,downPayment:r,interestRate:i,year:o})=>{let l=po(i,!1)/1e4/12,c=o*12,u=l*Math.pow(l+1,c),h=Math.pow(l+1,c)-1;return{monthlyPayment:(e-r)*(u/h),mortgage:e,downPayment:r,interestRate:i,year:o}});p(this,"handleLoadDonutChartData",(e,r)=>{clearTimeout(this.tdidLoadDonutData),this.tdidLoadDonutData=setTimeout(()=>{let i=[{type:"Principle",value:Math.ceil(e.totalPrinciplePaid)},{type:"Interest",value:e.totalInterestPaid}];r.setAttribute("data",JSON.stringify(i))})});p(this,"chartToggleOnClick",e=>{let r=e.currentTarget,i=r.getAttribute("name"),o=this.shadowRoot.querySelector("app-stacked-bar-chart"),a=this.shadowRoot.querySelector("#total");i==="stacked-bar-chart"?(a.classList.add("hide"),o.classList.remove("hide"),r.nextElementSibling.classList.remove("active"),r.classList.add("active")):i==="donut-chart"&&(a.classList.remove("hide"),o.classList.add("hide"),r.classList.add("active"),r.previousElementSibling.classList.remove("active"))});p(this,"handleChartToggle",()=>{this.buttonList=Array.from(this.shadowRoot.querySelectorAll(".toggle-group button")),this.buttonList.forEach(e=>{e.addEventListener("click",this.chartToggleOnClick)})});p(this,"handleTableRender",e=>{let r=this.shadowRoot.querySelector("huanlin-table"),i=Object.keys(e.stackedBarChartData[0]).map(o=>({label:se(o),name:o}));r.setAttribute("column",JSON.stringify(i)),r.data=e.stackedBarChartData});p(this,"handleFormSubmit",e=>{e.preventDefault();let r=new FormData(e.currentTarget),i={};for(let h of r)["mortgage","down-payment"].includes(h[0])?i[h[0]]=Number(h[1].split(",").join("")):i[h[0]]=Number(h[1]);if(i["down-payment"]>i.mortgage){alert("Down payment can't be bigger than mortgage");return}let o=this.monthlyPayment({mortgage:i.mortgage,interestRate:Math.floor(i["interest-rate"]*100),downPayment:i["down-payment"],year:i.years}),a=this.shadowRoot.querySelector("[name='total-interest']"),s=this.shadowRoot.querySelector("[name='total-principal']"),l=this.shadowRoot.querySelector("[name='monthly-payment']"),c=this.shadowRoot.querySelector("[name='paid-off-by']");this.result=mo(o),a.setAttribute("value",`${this.result.dollarTotalInterestPaid}`),s.setAttribute("value",`${this.result.dollarTotalPrinciplePaid}`),l.setAttribute("value",`${this.result.dollarPayment}`),c.setAttribute("value",`${this.result.paidOffByWhen}`);let u=this.result.stackedBarChartData;this.stackedBarChart.setAttribute("data",JSON.stringify(u)),!this.isFirstRender&&this.handleLoadDonutChartData(this.result,this.totalDonut),this.isFirstRender=!1,this.handleTableRender(this.result)});p(this,"willLoad",()=>{gt(this),this.form=this.shadowRoot.querySelector("form");let e=this.shadowRoot.querySelector("button");this.stackedBarChart=this.shadowRoot.querySelector("app-stacked-bar-chart"),this.totalDonut=this.shadowRoot.querySelector("#total"),this.form.addEventListener("submit",this.handleFormSubmit),this.handleChartToggle(),this.observer=new IntersectionObserver(r=>{for(let i of r)i.target===this.stackedBarChart&&i.isIntersecting?e.click():i.target===this.totalDonut&&i.isIntersecting&&this.handleLoadDonutChartData(this.result,this.totalDonut)}),this.observer.observe(this.stackedBarChart),this.observer.observe(this.totalDonut),this.totalDonut.addEventListener("app-mouseover",this.handleDonutMouseover),this.totalDonut.addEventListener("app-mouseout",this.handleDonutMouseout),this.totalDonut.addEventListener("app-mousemove",this.handleDonutMousemove)});p(this,"handleDonutMouseover",e=>{let{select:r,data:i,color:o,event:a}=e.detail;this.tooltip.style.display="flex",this.tooltip.classList.add("donut"),a.target.style.opacity=1,r(this.tooltip).transition().duration(200).style("opacity",1);let s=this.tooltip.querySelector(".year");s.innerHTML="";let l=this.tooltip.querySelector(".dot");l.style.background=o(i.data.type);let c=this.tooltip.querySelector(".text");c.innerHTML=`${i.data.type} ${Tt.format(Math.floor(i.data.value))}`});p(this,"handleDonutMouseout",e=>{let{event:r,select:i}=e.detail;r.target.style.opacity=.8,i(this.tooltip).style("opacity",0),i(this.tooltip).style("display","none"),this.tooltip.classList.remove("donut"),this.tooltip.style.display="none"});p(this,"handleDonutMousemove",e=>{let{select:r,event:i}=e.detail;r(this.tooltip).style("left",i.clientX+14+"px").style("top",i.clientY+14+"px")});p(this,"render",()=>{});let e=this.attachShadow({mode:"open"}),r=new CSSStyleSheet;r.replaceSync(bl),e.adoptedStyleSheets=[r],e.innerHTML=Tl}connectedCallback(){clearTimeout(this.otid),this.otid=setTimeout(()=>{this.willLoad(),this.render()},200)}disconnectedCallback(){var e;(e=this.buttonList)==null||e.forEach(r=>{r.removeEventListener("click",this.chartToggleOnClick)}),this.observer&&this.observer.disconnect(),this.totalDonut&&(this.totalDonut.removeEventListener("app-mouseover",this.handleDonutMouseover),this.totalDonut.removeEventListener("app-mouseout",this.handleDonutMouseout),this.totalDonut.removeEventListener("app-mousemove",this.handleDonutMousemove)),this.form&&this.form.removeEventListener("submit",this.handleFormSubmit)}};customElements.define("huanlin-mortgage",yi)});var jl,Yl=K(()=>{jl="huanlin-contact { width: 100%; }"});var Xl,Wl=K(()=>{Xl=`<div class="root conatct-info flex-center flex-column justify-center justify-center">
  <div>\uFE0F\u3294 Name: Huanlin Huang</div>
  <div>\u260E\uFE0F Phone: 415-361-9522</div>
  <div>\u{1F4E7} Email: huanlinhuang@gmail.com</div>
</div>`});var y0={};var Ni,Kl=K(()=>{Yl();Wl();Ni=class extends HTMLElement{constructor(){super();p(this,"render",()=>{})}connectedCallback(){let e=document.createElement("style");e.innerHTML=jl,this.innerHTML=Xl,this.appendChild(e),this.render();let r=document.querySelector("#banner-center #title")}};customElements.define("huanlin-contact",Ni)});var Jl,Gl=K(()=>{Jl="#contact-link-containers a.contact-link:hover svg path { fill: var(--color-primary); display: flex; justify-content: space-between; height: 100%; flex: 1; }"});var tc,Ql=K(()=>{tc=`<div id="main-content" class="flex flex-row flex-grow-1 gap">
  <div id="main-content-left" class="flex flex-column justify-space-between">
      <div>
          <h1>The Javascript Developer.</h1>
          <p id="location" class="text-tertiary">in the bay area</p>
          <br />
          <strong class="text-tertiary" id="expert">Expert:</strong> 
          <p>Typescript, React, Web-Component, Accessibility.</p>
      </div>
      <div>
          <app-carousel>
              <app-carousel-item id="carousel-item-1" aria-label="1 of 2">
                   <div slot="label" class="carousel-label">
                      Vim user
                   </div>
                  <div id="carousel-item-1-content" slot="content" class="flex flex-column justify-space-between">
                      <div style="font-size: 16px; text-align: center; color: var(--text-tertiary); padding: 0px 10px;">
                          I am a self-taught full-stack developer, since 2017
                      </div>
                      <div id="contact-link-containers" class="flex flex-row justify-center gap">
                          <a class="contact-link" href="https://www.instagram.com/jacsurfing" aria-label="instagram">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                              </svg>
                          </a>
                          <a class="contact-link" href="https://www.linkedin.com/in/huanlin-huang-4b7b9b183" aria-label="linkedin">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                              </svg>
                          </a>
                          <a class="contact-link" href="https://github.com/timesup24hours" aria-label="github">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                              </svg>
                          </a>
                      </div>
                  </div>
              </app-carousel-item>
              <app-carousel-item id="carousel-item-2" aria-label="2 of 2">
                   <!-- <div slot="label">
                      <a href="https://timesup24hours.github.io/p2018/#/">Old resume site</a>
                   </div> -->
                   <div slot="label" class="carousel-label hobbies-label">
                      Hobbies
                   </div>
                   <div slot="content" class="hobbies">
                      <ul class="hobbies">
                          <li>\u{1F6B2} Bjking</li>
                          <li>\u{1F3D4}\uFE0F Hiking</li>
                          <li>\u{1F3C4}\u200D\u2642\uFE0F Surfing</li> 
                          <li>\u{1F3C3} Running</li>
                          <li>\u{1F6F9} Skateboarding</li>
                          <li>\u32A9 Medicine Practice</li>
                      </ul>
                   </div>
              </app-carousel-item>
          </app-carousel>
      </div>
  </div>
  <div id="main-content-right" class="gap flex flex-column">
      <div id="main-content-right-top" class="flex justify-center align-center position-relative">
          <span id="experience" class="flex flex-row align-center">
              <app-load style="padding-right: 6px;"></app-load>
              <p>Experience/years</p>
          </span>
          <app-donut id="experience-donut"></app-donut>
      </div>
      <div id="main-content-right-bottom" class="gap flex flex-row">
          <div id="main-content-right-bottom-left" class="height-100p">
              <h2>Stack used in production</h2>
              <p>Typescript, React Router, ReactJS, React Hooks, History API, Redux, D3JS, Nivo, RevoGrid, Recharts, Jquery, VanillaJS, Ant Design, Material UI, esbuild, NodeJS, ExpressJS, Axios, Mongodb, Enzyme, Jest, Cypress, Puppeteer, Selenium, Git, StencilJS, Web Components, etc.</p>
          </div>
          <div id="main-content-right-bottom-right" class="height-100p gradient-animated">
              <div class="history flex flex-column height-100p">
                  <h2>Activity</h2>
                  <app-history active class="height-100p">
                      <div>Cisco - since 2019</div>
                      <p>Software engineer, focus on frontend</p>
                  </app-history>
                  <app-history class="height-100p">
                      <div>Kloudone - 2019</div>
                      <p>Fullstack developer</p>
                  </app-history>
              </div>
          </div>
      </div>
  </div>
</div>`});var w0={};var Zi,ec=K(()=>{Gl();Ql();Zi=class extends HTMLElement{constructor(){super();p(this,"render",()=>{})}connectedCallback(){let e=document.createElement("style");e.innerHTML=Jl,this.innerHTML=tc,this.appendChild(e),this.render();let r=document.querySelector("#banner-center #title");r&&(r.innerHTML="Huanlin Huang");let i=[{type:"React",value:5,enabled:!0},{type:"Redux",value:3,enabled:!0},{type:"JS",value:4,enabled:!0},{type:"HTML",value:4,enabled:!0},{type:"A11y",value:2,enabled:!0},{type:"CSS",value:4,enabled:!0},{type:"NodeJS",value:2,enabled:!0}],o=this.querySelector("app-donut");o&&o.setAttribute("data",JSON.stringify(i))}};customElements.define("huanlin-home",Zi)});var nc,rc=K(()=>{nc='* { margin: 0; padding: 0; border: 0; background: transparent; box-sizing: border-box; } body { font-family: var(--font-family); } .position-relative { position: relative; } .flex { display: flex; } .justify-end { justify-content: flex-end; } .fit-content { width: -moz-fit-content; width: fit-content; } .align-center { align-items: center; } .justify-center { justify-content: center; } .flex-row { flex-direction: row; } .flex-column { flex-direction: column; } .flex-grow-1 { flex-grow: 1; } .display-block { display: block; } .justify-space-between { justify-content: space-between; } .gap { gap: 10px; } .width-100p, .w-100p { width: 100%; } .h-100p { height: 100%; } .min-height-100p { min-height: 100%; } .height-100p { height: 100%; } .text-primary { color: var(--text-primary); } .text-secondary { color: var(--text-secondary); } .text-tertiary { color: var(--text-tertiary); } .subtitle { display: block; width: -moz-fit-content; width: fit-content; font-size: 16px; margin-block-start: 0px; margin-block-end: 0px; margin-inline-start: 0px; margin-inline-end: 0px; } :host { font-family: var(--font-family-secondary); font-weight: 100; --app-drawer-width: 300px; } .root { display: grid; height: 100vh; grid-template-columns: var(--app-drawer-width) auto; grid-template-areas: "nav main"; } .justify-between { justify-content: space-between; } huanlin-nav { grid-area: nav; --app-drawer-background: #0f3593; --app-drawer-width: 300px; height: 100%; } huanlin-nav::part(drawer) { position: relative; height: 100%; transform: translate3d(0px, 0px, 0px); transition-duration: 0; visibility: visible; display: flex; width: 100%; align-items: flex-start; justify-content: flex-start; --app-drawer-content-padding: 20px 0px; } huanlin-nav::part(nav) { position: relative; inset: unset; width: var(--app-drawer-width); display: flex; height: 100%; } huanlin-nav::part(content) { width: 100%; display: flex; justify-content: space-between; } huanlin-nav .nav-header .nav-header-icon { --height: 32px; --width: 32px; --fill: white; } huanlin-nav .nav-header .nav-header-label { margin-left: 10px; color: white; margin-block-start: 0px; margin-block-end: 0px; } huanlin-nav .nav-group { color: white; margin-block-start: 0; margin-block-end: 0; padding-inline-start: 0; margin-top: 40px; margin-bottom: 10px; } huanlin-nav .nav-group .nav-group-label { color: var(--text-light); font-size: 12px; font-weight: 800; padding-left: 8px; padding-bottom: 8px; display: block; letter-spacing: 2px; } huanlin-nav .nav-group huanlin-nav-item { --label-color: white; --hover-bg: #2c46b1; --hover-label-color: white; --hover-icon-fill: white; --icon-padding: 8px; } huanlin-nav .nav-group huanlin-nav-item::part(label) { width: 100%; } huanlin-nav .nav-group huanlin-nav-item .nav-item-group { display: flex; width: 100%; align-items: center; justify-content: space-between; } huanlin-nav .nav-group huanlin-nav-item huanlin-icon { --fill: white; } huanlin-nav .divider { width: 100%; display: block; border-color: rgba(223, 224, 246, 0.1411764706); } huanlin-nav .second-nav-group { margin-top: 20px; } huanlin-nav .footer { color: white; margin: 20px 0px; } huanlin-nav .footer .cloud .cloud-top { --fill: white; margin-bottom: 20px; } huanlin-nav .footer .cloud .cloud-top .cloud-text { margin-left: 10px; font-size: 14px; font-weight: 500; } huanlin-nav .footer .cloud .cloud-top .link { display: block; font-size: 14px; font-weight: 500; display: block; color: white; } huanlin-nav .footer .user { margin-top: 20px; } huanlin-nav .footer .user .user-icon { --fill: white; --height: 40px; --width: 40px; } huanlin-nav .footer .user .user-info { margin-left: 6px; } huanlin-nav .footer .user .user-info .user-name { font-weight: 500; font-size: 14px; } huanlin-nav .footer .user .user-info .user-email { margin-top: 2px; color: var(--text-light); font-weight: 300; font-size: 12px; } main { grid-area: main; padding: 20px 60px; background: #f5f5f7; overflow: auto; }'});var oc,ic=K(()=>{oc=`<div class="root">
    <huanlin-nav open="true" active="true">
        <div>
            <div class="nav-header flex flex-row align-center">
                <huanlin-icon class="nav-header-icon" name="circle"></huanlin-icon>
                <h2 class="nav-header-label">Huanlin UI</h2>
            </div>
            <ul aria-describedby="first-nav-group" class="nav-group first-nav-group">
                <span id="first-nav-group-label" class="nav-group-label">HUANLIN UI</span>
                <huanlin-nav-item name="customer">
                    <huanlin-icon name="customer" slot="icon"></huanlin-icon>
                    <div class="nav-item-group">
                        Customer
                        <huanlin-tag>303</huanlin-tag>
                    </div>
                </huanlin-nav-item>
                <huanlin-nav-item name="connection">
                    <huanlin-icon name="chat" slot="icon"></huanlin-icon>
                    <div class="nav-item-group">
                        Connection
                        <huanlin-tag>16</huanlin-tag>
                    </div>
                </huanlin-nav-item>
                <huanlin-nav-item name="email-auotmation">
                    <huanlin-icon name="email" slot="icon"></huanlin-icon>
                    Email Auomation
                </huanlin-nav-item>
                <huanlin-nav-item name="report">
                    <huanlin-icon name="report" slot="icon"></huanlin-icon>
                    Report
                </huanlin-nav-item>
                <huanlin-nav-item name="team-members">
                    <huanlin-icon name="team-add" slot="icon"></huanlin-icon>
                    Team members
                </huanlin-nav-item>
                <huanlin-nav-item name="admin-settings">
                    <huanlin-icon name="widget" slot="icon"></huanlin-icon>
                    Admin settings
                </huanlin-nav-item>
            </ul>
            <hr class="divider">
            <ul aria-describedby="second-nav-group" class="nav-group second-nav-group">
                <span id="second-nav-group-label" class="nav-group-label">ACCOUNT</span>
                <huanlin-nav-item name="general" description="Settings and options for your application.">
                    <huanlin-icon name="setting" slot="icon"></huanlin-icon>
                    General
                </huanlin-nav-item>
                <huanlin-nav-item name="security">
                    <huanlin-icon name="security" slot="icon"></huanlin-icon>
                    Security
                </huanlin-nav-item>
                <huanlin-nav-item name="licenses">
                    <huanlin-icon name="key" slot="icon"></huanlin-icon>
                    Licenses
                </huanlin-nav-item>
                <huanlin-nav-item name="intergrations">
                    <huanlin-icon name="intergration" slot="icon"></huanlin-icon>
                    Integrations
                </huanlin-nav-item>
                <huanlin-nav-item name="account">
                    <huanlin-icon name="account" slot="icon"></huanlin-icon>
                    Account
                </huanlin-nav-item>
                <huanlin-nav-item name="notifications">
                    <huanlin-icon name="notification" slot="icon"></huanlin-icon>
                    Notifications
                </huanlin-nav-item>
            </ul>
        </div>
        <div class="footer">
            <div class="cloud">
                <div class="cloud-top flex flex-row align-center justify-between">
                    <div class="cloud-label flex flex-row align-center">
                        <huanlin-icon name="cloud"></huanlin-icon>
                        <div class="cloud-text">Cloud storage</div>
                    </div>
                    <a class="link" href="#">Upgrade</a>
                </div>
                <div class="progress">
                    <huanlin-progress value="70" max="100">
                        <div slot="description">6.2GB of 10GB used</div>
                    </huanlin-progress>
                </div>
            </div>
            <div class="user flex flex-row align-center">
                <div class="user-icon">
                    <huanlin-icon name="account-circle"></huanlin-icon>
                </div>
                <div class="user-info flex flex-column justify-between">
                    <div class="user-name">Huanlin Huang</div>
                    <div class="user-email">huanlinhuang@gmail.com</div>
                </div>
            </div>
        </div>
    </huanlin-nav>
    <main>
        <slot>
            <huanlin-page-general></huanlin-page-general>
        </slot>
    </main>
</div>`});var T0={};var Ii,ac=K(()=>{rc();ic();Ii=class extends HTMLElement{constructor(){super();p(this,"handleNavEvent",e=>{let r=e.target.name,i=e.target.description,o={name:r,description:i};this.emitRouteChange({state:o,name:r})});p(this,"emitRouteChange",({state:e,name:r})=>{history.pushState(e,r,"");let i=new PopStateEvent("popstate",{state:e});dispatchEvent(i)});p(this,"willLoad",()=>{var e,r;this.navEle=(e=this.shadowRoot)==null?void 0:e.querySelector("huanlin-nav"),(r=this.navEle)==null||r.addEventListener("huanlin-nav-item",this.handleNavEvent),this.page=document.createElement("huanlin-page-general"),this.appendChild(this.page)});p(this,"render",()=>{});let e=this.attachShadow({mode:"open"}),r=new CSSStyleSheet;r.replaceSync(nc),e.adoptedStyleSheets=[r],e.innerHTML=oc}static get observedAttributes(){return["active"]}attributeChangedCallback(e,r,i){this.render()}connectedCallback(){this.willLoad(),this.render()}disconnectedCallback(){var e,r;(e=this.navEle)==null||e.removeEventListener("huanlin-nav-item",this.handleNavEvent),(r=this.page)==null||r.remove()}};customElements.define("huanlin-app-one",Ii)});var sc,lc=K(()=>{sc="huanlin-app-two-layout { display: flex; --background-secondary: #f6f6f9; --app-drawer-background: var(--background-secondary); --nav-width: 300px; --header-height: 80px; --color-primary: #555ed1; --text-secondary: #70728c; --box-shadow: rgba(0, 0, 0, .04) 0px 2px 4px; --border-color: #e7e8ef; } huanlin-button[type=outline]::part(button) { display: flex; align-items: center; border-radius: 4px; border: 1px solid var(--border-color); box-shadow: var(--box-shadow); } header.header { grid-area: header; border-bottom: 1px solid #e9eaf1; height: var(--header-height); padding: 0 20px; } header.header huanlin-breadcrumb { margin-left: 20px; } header.header .header-right > * { margin-left: 20px; } header.header .header-right huanlin-icon:hover { --fill: var(--text-primary); } header.header .user-dropdown huanlin-button[slot=trigger] huanlin-icon { --height: 30px; --width: 30px; --fill: var(--text-primary); margin-right: 10px; } header.header .user-dropdown huanlin-button[slot=trigger]::part(button) { display: flex; flex-direction: row; align-items: center; color: var(--text-primary); } header.header .user-dropdown huanlin-dropdown::part(popup) { padding: 0px; } header.header .user-dropdown huanlin-divider::part(hr) { margin-block-start: 0px; margin-block-end: 0px; } header.header .user-dropdown huanlin-menu huanlin-menu-item huanlin-icon { margin-right: 10px; } header.header .user-dropdown huanlin-menu huanlin-menu-item[active] huanlin-icon, header.header .user-dropdown huanlin-menu huanlin-menu-item:hover huanlin-icon { --fill: var(--text-primary); } .main { display: flex; grid-area: main; overflow-y: auto; } .main .main-top { padding: 40px 40px 0px 40px; } .main huanlin-tablist { padding-top: 20px; --padding: 0px 40px; } .main huanlin-tab-panel { padding: 20px 40px; } .card { border-radius: 8px; padding: 20px; box-shadow: var(--box-shadow); border: 1px solid var(--border-color); align-items: center; }"});var uc,cc=K(()=>{uc=`<huanlin-app-two-layout>
    <header slot="header" role="banner" class="header flex flex-row align-center justify-space-between">
        <slot name="header"></slot>
        <div class="header-left flex flex-row align-center">
            <huanlin-button type="outline" class="back-button">
                <huanlin-icon name="arrow-left"></huanlin-icon> Back
            </huanlin-button>
            <huanlin-breadcrumb>
                <huanlin-breadcrumb-item>CAMPAIGNS</huanlin-breadcrumb-item>/
                <huanlin-breadcrumb-item active>HUANLIN CAMPAIGN</huanlin-breadcrumb-item>
            </huanlin-breadcrumb>
        </div>
        <div class="header-right flex flex-row align-center">
            <huanlin-button type="text">
                <huanlin-icon name="setting"></huanlin-icon>
            </huanlin-button>
            <huanlin-button type="text">
                <huanlin-icon name="notification"></huanlin-icon>
            </huanlin-button>
            <div class="user-dropdown">
                <huanlin-dropdown>
                    <huanlin-button type="text" slot="trigger">
                        <huanlin-icon name="account-circle"></huanlin-icon> Huanlin Huang
                    </huanlin-button>
                    <huanlin-menu>
                        <huanlin-menu-item name="profile">
                            <huanlin-icon name="person"></huanlin-icon>
                            Profile</huanlin-menu-item>
                        <huanlin-divider></huanlin-divider>
                        <huanlin-menu-item name="logout">
                            <huanlin-icon name="logout"></huanlin-icon>
                            Logout</huanlin-menu-item>
                    </huanlin-menu>
                </huanlin-dropdown>
            </div>
        </div>
    </header>
    <div class="main flex flex-column width-100p">
        <div class="main-top flex flex-row align-center justify-space-between width-100p">
            <h1>Huanlin Campaign</h1>
            <huanlin-switch checked>
                <div slot="label">Start Campaign</div>
            </huanlin-switch>
        </div>
        <div class="flex flex-1">
            <huanlin-tablist class="width-100p">
                <huanlin-tab slot="nav" panel="overview" active>Overview</huanlin-tab>
                <huanlin-tab slot="nav">Recipient Activity</huanlin-tab>
                <huanlin-tab slot="nav">Intergrations</huanlin-tab>
                <huanlin-tab slot="nav">Settings</huanlin-tab>
                <huanlin-tab-panel name="overview" active>
                    <huanlin-overview-panel></huanlin-overview-panel>
                </huanlin-tab-panel>
                <huanlin-tab-panel>Recipient Activity</huanlin-tab-panel>
            </huanlin-tablist>
        </div>
    </div>
</huanlin-app-two-layout>`});var _0={};var Fi,dc=K(()=>{lc();cc();Fi=class extends HTMLElement{constructor(){super();p(this,"willLoad",()=>{let e=document.createElement("style");e.innerHTML=sc,this.innerHTML=uc,this.appendChild(e)});p(this,"render",()=>{})}static get observedAttributes(){return[]}attributeChangedCallback(e,r,i){this.render()}connectedCallback(){this.willLoad(),this.render()}disconnectedCallback(){}};customElements.define("huanlin-app-two",Fi)});var ro=".root { display: flex; height: 100%; width: 100%; }";var io=`<div class="root">
    <huanlin-routes class="routes">
        <huanlin-route route=""><huanlin-app></huanlin-app></huanlin-route>
        <huanlin-route route="#demo-one" element="huanlin-app-one"></huanlin-route>
        <huanlin-route route="#demo-two" element="huanlin-app-two"></huanlin-route>
    </huanlin-routes>
</div>`;var Gn=class extends HTMLElement{constructor(){super();p(this,"willLoad",()=>{});p(this,"render",()=>{});let e=document.createElement("style");e.innerHTML=ro,this.innerHTML=io,this.appendChild(e)}connectedCallback(){}};customElements.define("huanlin-root",Gn);var oo="* { box-sizing: border-box; } :host { font-family: var(--font-family-secondary); font-weight: 400; } huanlin-title-description.title { margin-top: 30px; margin-bottom: 40px; } huanlin-notification::part(root) { display: flex; flex-direction: row; justify-content: space-between; align-items: center; } huanlin-notification huanlin-button { --color: var(--text-secondary); } huanlin-notification huanlin-button::part(button) { display: flex; flex-direction: row; align-items: center; } huanlin-notification huanlin-button huanlin-icon { --fill: var(--text-secondary); margin-right: 10px; } .form-item { display: flex; flex-direction: row; margin-top: 40px; margin-bottom: 20px; } .form-item huanlin-title-description::part(title) { margin-bottom: 2px; } .form-item .form-item-label { display: flex; flex-direction: column; width: 500px; } .form-item .input-group { display: flex; flex-direction: column; width: 100%; } .form-item .input-group huanlin-input { width: 100%; } .form-item .input-group huanlin-input:first-child { margin-bottom: 10px; } .form-item .input-group huanlin-title-description { margin-left: 10px; } .form-item .input-group huanlin-checkbox:not(:first-child) { margin-top: 20px; }";var ao=`<huanlin-title-description class="title"></huanlin-title-description>
<huanlin-notification>
  <huanlin-title-description name="Your application is currently on the free paln"
    description="Paid plans offer higer usage limits, additional branches, and much more, Learn more <a href='#general'>here</a>"
    size="medium"></huanlin-title-description>
  <huanlin-button class="chat-button" type="outline">
    <huanlin-icon name="chat"></huanlin-icon>
    Chat to agent
  </huanlin-button>
</huanlin-notification>

<form>
  <div class="form-item">
    <div class="form-item-label">
      <huanlin-title-description 
        name="Name" 
        description="Changes will update all URLs." 
        size="medium"
      >
      </huanlin-title-description>
    </div>
    <div class="input-group">
      <huanlin-input></huanlin-input>
      <huanlin-input></huanlin-input>
    </div>
  </div>
  <huanlin-divider></huanlin-divider>
  <div class="form-item">
    <div class="form-item-label">
    <huanlin-title-description name="Default branch" description="Changes will update all URLs."
      size="medium"></huanlin-title-description>
    </div>
    <div class="input-group">
      <huanlin-input></huanlin-input>
    </div>
  </div>
  <huanlin-divider></huanlin-divider>
  <div class="form-item">
    <div class="form-item-label">
    <huanlin-title-description 
      name="Tagline" 
      description="A quick snapshot of your application."
      size="medium"
    >
    </huanlin-title-description>
    </div>
    <div class="input-group">
      <huanlin-textarea></huanlin-textarea>
    </div>
  </div>
  <huanlin-divider></huanlin-divider>
  <div class="form-item">
    <div class="form-item-label">
      <huanlin-title-description name="Tagline" size="medium"></huanlin-title-description>
      <huanlin-button type="text">Reset to default</huanlin-button>
    </div>
    <div class="input-group">
      <huanlin-checkbox>
        <huanlin-title-description 
          name="Allow administrators to invite new members"
          description="Any administrator can manage application members and send invites." 
          size="medium"
        >
        </huanlin-title-description>
      </huanlin-checkbox>
      <huanlin-checkbox>
        <huanlin-title-description 
          name="Allow administrators to change names"
          description="Any administrator can change project name and URLs." 
          size="medium"
        >
        </huanlin-title-description>
      </huanlin-checkbox>
      <huanlin-checkbox>
        <huanlin-title-description 
          name="Require administrator approval for deploy requests"
          description="A administrator must approve deploy requests before they can be deployed." 
          size="medium"
        >
        </huanlin-title-description>
      </huanlin-checkbox>
      <huanlin-checkbox>
        <huanlin-title-description 
          name="Restrict branch regions"
          description="Limit branch creation to the AWS eu-central1-region." 
          size="medium"
        >
        </huanlin-title-description>
      </huanlin-checkbox>
      <huanlin-checkbox>
        <huanlin-title-description 
          name="Allow web console access to production branches"
          description="Only non-production branches can be access with the web console." 
          size="medium"
        >
        </huanlin-title-description>
      </huanlin-checkbox>
    </div>
  </div>
</form>`;var Qn=class extends HTMLElement{constructor(){super();p(this,"willLoad",()=>{var e;this.titleEle=(e=this.shadowRoot)==null?void 0:e.querySelector("huanlin-title-description"),this.titleEle.name="General",this.titleEle.description="Settings and options for your application."});p(this,"render",()=>{});let e=this.attachShadow({mode:"open"}),r=new CSSStyleSheet;r.replaceSync(oo),e.adoptedStyleSheets=[r],e.innerHTML=ao}static get observedAttributes(){return[]}attributeChangedCallback(e,r,i){}connectedCallback(){this.willLoad(),this.render()}disconnectedCallback(){}};customElements.define("huanlin-page-general",Qn);var so='* { margin: 0; padding: 0; border: 0; background: transparent; box-sizing: border-box; } body { font-family: var(--font-family); } .position-relative { position: relative; } .flex { display: flex; } .justify-end { justify-content: flex-end; } .fit-content { width: -moz-fit-content; width: fit-content; } .align-center { align-items: center; } .justify-center { justify-content: center; } .flex-row { flex-direction: row; } .flex-column { flex-direction: column; } .flex-grow-1 { flex-grow: 1; } .display-block { display: block; } .justify-space-between { justify-content: space-between; } .gap { gap: 10px; } .width-100p, .w-100p { width: 100%; } .h-100p { height: 100%; } .min-height-100p { min-height: 100%; } .height-100p { height: 100%; } .text-primary { color: var(--text-primary); } .text-secondary { color: var(--text-secondary); } .text-tertiary { color: var(--text-tertiary); } .subtitle { display: block; width: -moz-fit-content; width: fit-content; font-size: 16px; margin-block-start: 0px; margin-block-end: 0px; margin-inline-start: 0px; margin-inline-end: 0px; } huanlin-overview-panel { width: 100%; } .overview { width: 100%; height: -moz-fit-content; height: fit-content; gap: 12px; display: grid; grid-template-rows: 100px 500px; grid-template-columns: repeat(3, minmax(220px, 1fr)); grid-template-areas: "card-one card-two card-three" "card-four card-four card-five"; } .card > div.label { height: 100%; } .card .label { color: var(--text-secondary); font-size: 14px; } .card .count { font-weight: bold; color: var(--text-primary); font-size: 24px; } .card .icon { padding: 10px; border-radius: 8px; --height: 20px; --width: 20px; } .card.one { grid-area: card-one; } .card.one .icon { background: #ebecfc; --fill: #121b89; height: -moz-fit-content; height: fit-content; } .card.two { grid-area: card-two; } .card.two .icon { background: #fdedf1; --fill: #e7305a; } .card.three { grid-area: card-three; } .card.three .icon { background: #fce5c3; --fill: #7a5024; } .card.four { grid-area: card-four; } .card.four .card-four-top { margin-bottom: 20px; } .card.four .card-four-top huanlin-tag::part(root) { --background-color: #ebecfc; --color: var(--text-primary); margin-left: 10px; --padding: 8px; } .card.five { grid-area: card-five; } .card.five .card-five-top { margin-bottom: 20px; } .bottom { margin-top: 12px; display: grid; grid-template-columns: repeat(2, minmax(300px, 1fr)); gap: 12px; grid-template-areas: "card-one card-two"; } .bottom .inner-card-one { grid-area: card-one; } .bottom .inner-card-one huanlin-tag, .bottom .inner-card-two huanlin-tag { --background-color: #ebecfc; --padding: 8px; } .bottom .inner-card-one huanlin-tag huanlin-icon, .bottom .inner-card-two huanlin-tag huanlin-icon { --fill: var(--color-primary); } .bottom .inner-card-one h3, .bottom .inner-card-two h3 { margin: 0 10px; } .bottom .inner-card-one .percent, .bottom .inner-card-two .percent { --color: var(--text-primary); } .bottom .inner-card-two { grid-area: card-two; }';var lo=`<div class="overview">
    <div class="card one flex flex-row justify-space-between">
        <div class="label flex flex-column justify-space-between">
            <h3 class="label">Video Created</h3>
            <div class="count">324</div>
        </div>
        <div class="icon flex align-center">
            <huanlin-icon name="cam"></huanlin-icon>
        </div>
    </div>
    <div class="card two flex flex-row justify-space-between">
        <div class="label flex flex-column justify-space-between">
            <h3 class="label">CTA Click Rate</h3>
            <div class="count">42.02%</div>
        </div>
        <div class="icon flex align-center">
            <huanlin-icon name="click"></huanlin-icon>
        </div>
    </div>
    <div class="card three flex flex-row justify-space-between">
        <div class="label flex flex-column justify-space-between">
            <h3 class="label">Page View Rate</h3>
            <div class="count">1.50%</div>
        </div>
        <div class="icon flex align-center">
            <huanlin-icon name="page"></huanlin-icon>
        </div>
    </div>
    <div class="card four">
        <div class="card-four-top flex flex-row align-center">
            <h3>Videos Created</h3>
            <huanlin-tag>324</huanlin-tag>
        </div>
        <huanlin-bar-chart></huanlin-bar-chart>
    </div>
    <div class="card five">
        <div class="card-five-top flex flex-row align-center">
            <h3>Requested vs Skipped</h3>
        </div>
        <huanlin-pie-chart></huanlin-pie-chart>
    </div>
</div>
<div class="bottom">
    <div class="inner-card-one card inner-card">
        <div class="inner-card-one-top flex flex-row align-center justify-space-between">
            <div class="label flex flex-row align-center">
                <huanlin-tag>
                    <huanlin-icon name="page"></huanlin-icon>
                </huanlin-tag>
                <h3 class="text-primary">Page Views 320</h3>
            </div>
            <huanlin-tag class="percent">
                43%
            </huanlin-tag>
        </div>
        <huanlin-line-chart class="page-view"></huanlin-line-chart>
    </div>
    <div class="inner-card-two card inner-card">
        <div class="inner-card-two-top flex flex-row align-center justify-space-between">
            <div class="label flex flex-row align-center">
                <huanlin-tag>
                    <huanlin-icon name="visibility"></huanlin-icon>
                </huanlin-tag>
                <h3 class="text-primary">Videos Watched 30</h3>
            </div>
            <huanlin-tag class="percent">
                21%
            </huanlin-tag>
        </div>
        <huanlin-line-chart class="video-view"></huanlin-line-chart>
        </div>
    </div>
</div>`;var tr=class extends HTMLElement{constructor(){super();p(this,"willLoad",()=>{});p(this,"render",()=>{let e=this.querySelector(".page-view"),r=this.querySelector(".video-view");r.data=[{currency:"USD",values:[{date:"2023/01/01",views:20},{date:"2023/02/01",views:26},{date:"2023/03/01",views:21},{date:"2023/04/01",views:28},{date:"2023/05/01",views:29},{date:"2023/06/01",views:27},{date:"2023/07/01",views:30},{date:"2023/08/01",views:28},{date:"2023/09/01",views:25},{date:"2023/10/01",views:26},{date:"2023/11/01",views:22},{date:"2023/12/01",views:28}]}]});let e=document.createElement("style");e.innerHTML=so,this.innerHTML=lo,this.appendChild(e)}static get observedAttributes(){return[]}attributeChangedCallback(e,r,i){this.render()}connectedCallback(){this.willLoad(),this.render()}disconnectedCallback(){}};customElements.define("huanlin-overview-panel",tr);var co="* { margin: 0; padding: 0; border: 0; background: transparent; box-sizing: border-box; } body { font-family: var(--font-family); } .position-relative { position: relative; } .flex { display: flex; } .justify-end { justify-content: flex-end; } .fit-content { width: -moz-fit-content; width: fit-content; } .align-center { align-items: center; } .justify-center { justify-content: center; } .flex-row { flex-direction: row; } .flex-column { flex-direction: column; } .flex-grow-1 { flex-grow: 1; } .display-block { display: block; } .justify-space-between { justify-content: space-between; } .gap { gap: 10px; } .width-100p, .w-100p { width: 100%; } .h-100p { height: 100%; } .min-height-100p { min-height: 100%; } .height-100p { height: 100%; } .text-primary { color: var(--text-primary); } .text-secondary { color: var(--text-secondary); } .text-tertiary { color: var(--text-tertiary); } .subtitle { display: block; width: -moz-fit-content; width: fit-content; font-size: 16px; margin-block-start: 0px; margin-block-end: 0px; margin-inline-start: 0px; margin-inline-end: 0px; } huanlin-campaigns { width: 100%; } .overview { width: 100%; display: flex; }";var uo=`<div class="campaigns">
</div>`;var er=class extends HTMLElement{constructor(){super();p(this,"willLoad",()=>{});p(this,"render",()=>{});let e=document.createElement("style");e.innerHTML=co,this.innerHTML=uo,this.appendChild(e)}static get observedAttributes(){return[]}attributeChangedCallback(e,r,i){this.render()}connectedCallback(){this.willLoad(),this.render()}disconnectedCallback(){}};customElements.define("huanlin-campaigns",er);vt();var go="* { box-sizing: border-box; } .table { width: 100%; table-layout: fixed; border-collapse: collapse; color: var(--text-secondary); } .table thead { color: var(--text-primary); } .table thead tr { display: flex; } .table thead tr th { border-bottom: 1px solid var(--text-quaternary); } .table thead tr th .th-container { display: flex; align-items: center; } .table thead tr th .th-container button { font-size: 14px; font-weight: 500; color: var(--text-primary); height: 100%; } .table tbody { display: block; overflow: auto; max-height: 400px; } .table tbody tr { display: flex; } .table tbody tr td { font-size: 14px; } .table tbody::-webkit-scrollbar { width: 4px; } .table tbody::-webkit-scrollbar-track { background-color: var(--background-secondary); border-radius: 10px; } .table tbody::-webkit-scrollbar-thumb { border-radius: 10px; background: var(--text-quaternary); } .table th, .table td { text-align: left; flex: 1; } .table .th-container, .table .cell { padding: 4px; height: 40px; display: flex; align-items: center; } .table tbody tr:nth-child(odd) { background-color: var(--background-secondary); } table.sortable th button { background: transparent; border: none; display: flex; align-items: center; right: 0; left: 0; top: 0; bottom: 0; height: 16px; width: 100%; text-align: left; padding: 0px; margin: 0px; cursor: pointer; } table.sortable th .icon-container svg { display: none; } table.sortable th .icon-container svg path { fill: var(--text-primary); } table.sortable th[aria-sort=descending] .icon-container [name=up] { display: flex; } table.sortable th[aria-sort=ascending] .icon-container [name=down] { display: flex; }";var vo=`<table class="table sortable">
  <thead>
    <tr>
      <th>
        <button>
          First Name
          <span aria-hidden="true"></span>
        </button>
      </th>
      <th aria-sort="ascending">
        <button>
          Last Name
          <span aria-hidden="true"></span>
        </button>
      </th>
      <th>
        <button>
          Company
          <span aria-hidden="true"></span>
        </button>
      </th>
      <th class="no-sort">
        Address
      </th>
      <th class="num">
        <button>
          Favorite Number
          <span aria-hidden="true"></span>
        </button>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        Fred
      </td>
      <td>
        Jackson
      </td>
      <td>
        Canary, Inc.
      </td>
      <td>
        123 Broad St.
      </td>
      <td class="num">
        56
      </td>
    </tr>
    <tr>
      <td>
        Sara
      </td>
      <td>
        James
      </td>
      <td>
        Cardinal, Inc.
      </td>
      <td>
        457 First St.
      </td>
      <td class="num">
        7
      </td>
    </tr>
    <tr>
      <td>
        Ralph
      </td>
      <td>
        Jefferson
      </td>
      <td>
        Robin, Inc.
      </td>
      <td>
        456 Main St.
      </td>
      <td class="num">
        513
      </td>
    </tr>
    <tr>
      <td>
        Nancy
      </td>
      <td>
        Jensen
      </td>
      <td>
        Eagle, Inc.
      </td>
      <td>
        2203 Logan Dr.
      </td>
      <td class="num">
        3.5
      </td>
    </tr>
  </tbody>
</table>`;vt();var or=class extends HTMLElement{constructor(){super();p(this,"column");p(this,"getProps",()=>{let e=Array.from(JSON.parse(this.getAttribute("column"))||[]),r=Array.from(JSON.parse(this.getAttribute("data"))||[]);return{column:e,data:r}});p(this,"renderHeader",({column:e,theadRow:r})=>{r.innerHTML="";let i="";e.forEach(o=>{let a=["principle","interest","balance","year"].includes(o.name)?"number":"";i+=`
        <th class=${a}>
          <div class="th-container">
            <button>${o.label}
              <div class="icon-container">
              <svg name="down" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16"><path d="M480-360 280-560h400L480-360Z"/></svg>
              <svg name="up" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16"><path d="m280-400 200-200 200 200H280Z"/></svg>
              </div>
            </button>
          <div>
        </th>
      `}),r.innerHTML=i});p(this,"renderBody",({data:e,tbody:r})=>{r.innerHTML="";let i="";e.forEach(o=>{i+="<tr>";for(let a in o){let l=(["principle","interest","balance"].includes(a)?"number":"")?Tt.format(Math.floor(o[a])):o[a];i+=`<td data-value="${o[a]}">
          <div class="cell">${l}</div>
        </td>`}i+="</tr>"}),r.innerHTML=i});p(this,"render",()=>{var s,l,c;let e=(s=this.shadowRoot)==null?void 0:s.querySelector(".table"),r=(l=this.shadowRoot)==null?void 0:l.querySelector("thead tr"),i=(c=this.shadowRoot)==null?void 0:c.querySelector("tbody"),{column:o,data:a}=this.getProps();o&&this.renderHeader({column:o,theadRow:r}),a&&this.renderBody({data:a,tbody:i}),new ar(e)});let e=this.attachShadow({mode:"open"}),r=new CSSStyleSheet;r.replaceSync(go),e.adoptedStyleSheets=[r],e.innerHTML=vo}set data(e){this.setAttribute("data",JSON.stringify(e))}get data(){return this.getAttribute("data")}static get observedAttributes(){return["column","data"]}attributeChangedCallback(e,r,i){this.render()}connectedCallback(){this.render()}disconnectedCallback(){}};customElements.define("huanlin-table",or);var ar=class{constructor(n){p(this,"tableNode");p(this,"columnHeaders");p(this,"sortColumns");this.tableNode=n,this.columnHeaders=Array.from(n.querySelectorAll("thead th")),this.sortColumns=[];for(let e=0;e<this.columnHeaders.length;e++){let i=this.columnHeaders[e].querySelector("button");i&&(this.sortColumns.push(e),i.setAttribute("data-column-index",e),i.addEventListener("click",this.handleClick.bind(this)))}this.tableNode.classList.add("show-unsorted-icon")}setColumnHeaderSort(n){typeof n=="string"&&(n=parseInt(n));for(let e=0;e<this.columnHeaders.length;e++){let r=this.columnHeaders[e],i=r.querySelector("button");e===n?r.getAttribute("aria-sort")==="descending"?(r.setAttribute("aria-sort","ascending"),this.sortColumn(n,"ascending",r.classList.contains("number"))):(r.setAttribute("aria-sort","descending"),this.sortColumn(n,"descending",r.classList.contains("number"))):r.hasAttribute("aria-sort")&&i&&r.removeAttribute("aria-sort")}}sortColumn(n,e,r){function i(u,h){return e==="ascending"?u.value===h.value?0:r?u.value-h.value:u.value<h.value?-1:1:u.value===h.value?0:r?h.value-u.value:u.value>h.value?-1:1}typeof r!="boolean"&&(r=!1);let o=this.tableNode.querySelector("tbody"),a=[],s=[],l=o.firstElementChild,c=0;for(;l;){a.push(l);let h=l.querySelectorAll("th, td")[n],d={};d.index=c,d.value=parseInt(h.getAttribute("data-value").trim()),r&&(d.value=parseFloat(h.getAttribute("data-value"))),s.push(d),l=l.nextElementSibling,c+=1}for(s.sort(i);o.firstChild;)o.removeChild(o.lastChild);for(let u=0;u<s.length;u+=1)o.appendChild(a[s[u].index])}handleClick(n){let e=n.currentTarget;this.setColumnHeaderSort(e.getAttribute("data-column-index"))}handleOptionChange(n){n.currentTarget.checked?this.tableNode.classList.add("show-unsorted-icon"):this.tableNode.classList.remove("show-unsorted-icon")}};var xo=":host svg { display: flex; height: var(--height, 20px); width: var(--width, 20px); } :host svg path { fill: var(--fill, var(--text-tertiary)); }";var sr={home:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>',calendar:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M438-226 296-368l58-58 84 84 168-168 58 58-226 226ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"/></svg>',percent:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M300-520q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm0-80q25 0 42.5-17.5T360-660q0-25-17.5-42.5T300-720q-25 0-42.5 17.5T240-660q0 25 17.5 42.5T300-600Zm360 440q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm0-80q25 0 42.5-17.5T720-300q0-25-17.5-42.5T660-360q-25 0-42.5 17.5T600-300q0 25 17.5 42.5T660-240Zm-444 80-56-56 584-584 56 56-584 584Z"/></svg>',dollar:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M444-200h70v-50q50-9 86-39t36-89q0-42-24-77t-96-61q-60-20-83-35t-23-41q0-26 18.5-41t53.5-15q32 0 50 15.5t26 38.5l64-26q-11-35-40.5-61T516-710v-50h-70v50q-50 11-78 44t-28 74q0 47 27.5 76t86.5 50q63 23 87.5 41t24.5 47q0 33-23.5 48.5T486-314q-33 0-58.5-20.5T390-396l-66 26q14 48 43.5 77.5T444-252v52Zm36 120q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>',"stacked-bar-chart":'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M160-160v-440h160v440H160Zm0-480v-160h160v160H160Zm240 480v-320h160v320H400Zm0-360v-160h160v160H400Zm240 360v-200h160v200H640Zm0-240v-160h160v160H640Z"/></svg>',"donut-chart":'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M441-82Q287-97 184-211T81-480q0-155 103-269t257-129v120q-104 14-172 93t-68 185q0 106 68 185t172 93v120Zm80 0v-120q94-12 159-78t79-160h120q-14 143-114.5 243.5T521-82Zm238-438q-14-94-79-160t-159-78v-120q143 14 243.5 114.5T879-520H759Z"/></svg> ',"arrow-down":'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>',hamburger:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>',"contact-page":'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-400q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400ZM320-240h320v-23q0-24-13-44t-36-30q-26-11-53.5-17t-57.5-6q-30 0-57.5 6T369-337q-23 10-36 30t-13 44v23ZM720-80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80Zm0-80v-446L526-800H240v640h480Zm-480 0v-640 640Z"/></svg>',calculate:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M320-240h60v-80h80v-60h-80v-80h-60v80h-80v60h80v80Zm200-30h200v-60H520v60Zm0-100h200v-60H520v60Zm44-152 56-56 56 56 42-42-56-58 56-56-42-42-56 56-56-56-42 42 56 56-56 58 42 42Zm-314-70h200v-60H250v60Zm-50 472q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>',sun:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM80-440q-17 0-28.5-11.5T40-480q0-17 11.5-28.5T80-520h80q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440H80Zm720 0q-17 0-28.5-11.5T760-480q0-17 11.5-28.5T800-520h80q17 0 28.5 11.5T920-480q0 17-11.5 28.5T880-440h-80ZM480-760q-17 0-28.5-11.5T440-800v-80q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v80q0 17-11.5 28.5T480-760Zm0 720q-17 0-28.5-11.5T440-80v-80q0-17 11.5-28.5T480-200q17 0 28.5 11.5T520-160v80q0 17-11.5 28.5T480-40ZM226-678l-43-42q-12-11-11.5-28t11.5-29q12-12 29-12t28 12l42 43q11 12 11 28t-11 28q-11 12-27.5 11.5T226-678Zm494 495-42-43q-11-12-11-28.5t11-27.5q11-12 27.5-11.5T734-282l43 42q12 11 11.5 28T777-183q-12 12-29 12t-28-12Zm-42-495q-12-11-11.5-27.5T678-734l42-43q11-12 28-11.5t29 11.5q12 12 12 29t-12 28l-43 42q-12 11-28 11t-28-11ZM183-183q-12-12-12-29t12-28l43-42q12-11 28.5-11t27.5 11q12 11 11.5 27.5T282-226l-42 43q-11 12-28 11.5T183-183Zm297-297Z"/></svg>',moon:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M380-800h-21q-10 0-19 2 57 66 88.5 147.5T460-480q0 89-31.5 170.5T340-162q9 2 19 2h21q133 0 226.5-93.5T700-480q0-133-93.5-226.5T380-800Zm0-80q83 0 156 31.5T663-763q54 54 85.5 127T780-480q0 83-31.5 156T663-197q-54 54-127 85.5T380-80q-53 0-103.5-13.5T180-134q93-54 146.5-146T380-480q0-108-53.5-200T180-826q46-27 96.5-40.5T380-880Zm80 400Z"/></svg>',"left-pancel-close":'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M660-320v-320L500-480l160 160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm120-80v-560H200v560h120Zm80 0h360v-560H400v560Zm-80 0H200h120Z"/></svg>',"expand-circle-right":'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M507-480 384-357l56 57 180-180-180-180-56 57 123 123ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>',circle:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>',customer:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z"/></svg>',email:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>',chat:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-240q-17 0-28.5-11.5T240-280v-80h520v-360h80q17 0 28.5 11.5T880-680v600L720-240H280ZM80-280v-560q0-17 11.5-28.5T120-880h520q17 0 28.5 11.5T680-840v360q0 17-11.5 28.5T640-440H240L80-280Zm520-240v-280H160v280h440Zm-440 0v-280 280Z"/></svg>',report:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-162v82h560v-350L522-280 360-442 200-282Zm0-114 160-160 158 158 242-272v-90H200v364Zm0-154v-120 272-158 274-160 162-270Zm0 154v-364 362-158 160Zm0 114v-160 162-270 350-82Z"/></svg>',"team-add":'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M500-482q29-32 44.5-73t15.5-85q0-44-15.5-85T500-798q60 8 100 53t40 105q0 60-40 105t-100 53Zm220 322v-120q0-36-16-68.5T662-406q51 18 94.5 46.5T800-280v120h-80Zm80-280v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Zm-480-40q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM0-160v-112q0-34 17.5-62.5T64-378q62-31 126-46.5T320-440q66 0 130 15.5T576-378q29 15 46.5 43.5T640-272v112H0Zm320-400q33 0 56.5-23.5T400-640q0-33-23.5-56.5T320-720q-33 0-56.5 23.5T240-640q0 33 23.5 56.5T320-560ZM80-240h480v-32q0-11-5.5-20T540-306q-54-27-109-40.5T320-360q-56 0-111 13.5T100-306q-9 5-14.5 14T80-272v32Zm240-400Zm0 400Z"/></svg>',setting:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"/></svg>',widget:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M666-440 440-666l226-226 226 226-226 226Zm-546-80v-320h320v320H120Zm400 400v-320h320v320H520Zm-400 0v-320h320v320H120Zm80-480h160v-160H200v160Zm467 48 113-113-113-113-113 113 113 113Zm-67 352h160v-160H600v160Zm-400 0h160v-160H200v160Zm160-400Zm194-65ZM360-360Zm240 0Z"/></svg>',security:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q97-30 162-118.5T718-480H480v-315l-240 90v207q0 7 2 18h238v316Z"/></svg>',key:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-400q-33 0-56.5-23.5T200-480q0-33 23.5-56.5T280-560q33 0 56.5 23.5T360-480q0 33-23.5 56.5T280-400Zm0 160q-100 0-170-70T40-480q0-100 70-170t170-70q67 0 121.5 33t86.5 87h352l120 120-180 180-80-60-80 60-85-60h-47q-32 54-86.5 87T280-240Zm0-80q56 0 98.5-34t56.5-86h125l58 41 82-61 71 55 75-75-40-40H435q-14-52-56.5-86T280-640q-66 0-113 47t-47 113q0 66 47 113t113 47Z"/></svg>',intergration:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M160-120q-50 0-85-35t-35-85q0-39 22.5-70t57.5-43v-254q-35-12-57.5-43T40-720q0-50 35-85t85-35q50 0 85 35t35 85q0 39-22.5 70T200-607v87h240v-87q-35-12-57.5-43T360-720q0-50 35-85t85-35q50 0 85 35t35 85q0 39-22.5 70T520-607v87h200q17 0 28.5-11.5T760-560v-47q-35-12-57.5-43T680-720q0-50 35-85t85-35q50 0 85 35t35 85q0 39-22.5 70T840-607v47q0 50-35 85t-85 35H520v87q35 12 57.5 43t22.5 70q0 50-35 85t-85 35q-50 0-85-35t-35-85q0-39 22.5-70t57.5-43v-87H200v87q35 12 57.5 43t22.5 70q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T200-240q0-17-11.5-28.5T160-280q-17 0-28.5 11.5T120-240q0 17 11.5 28.5T160-200Zm0-480q17 0 28.5-11.5T200-720q0-17-11.5-28.5T160-760q-17 0-28.5 11.5T120-720q0 17 11.5 28.5T160-680Zm320 480q17 0 28.5-11.5T520-240q0-17-11.5-28.5T480-280q-17 0-28.5 11.5T440-240q0 17 11.5 28.5T480-200Zm0-480q17 0 28.5-11.5T520-720q0-17-11.5-28.5T480-760q-17 0-28.5 11.5T440-720q0 17 11.5 28.5T480-680Zm320 0q17 0 28.5-11.5T840-720q0-17-11.5-28.5T800-760q-17 0-28.5 11.5T760-720q0 17 11.5 28.5T800-680ZM160-240Zm0-480Zm320 480Zm0-480Zm320 0Z"/></svg>',account:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>',notification:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M80-560q0-100 44.5-183.5T244-882l47 64q-60 44-95.5 111T160-560H80Zm720 0q0-80-35.5-147T669-818l47-64q75 55 119.5 138.5T880-560h-80ZM160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/></svg>',cloud:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q25-92 100-149t170-57q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160H260Zm0-80h480q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-80q0-83-58.5-141.5T480-720q-83 0-141.5 58.5T280-520h-20q-58 0-99 41t-41 99q0 58 41 99t99 41Zm220-240Z"/></svg>',expand:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-80 240-320l57-57 183 183 183-183 57 57L480-80ZM298-584l-58-56 240-240 240 240-58 56-182-182-182 182Z"/></svg>',"account-circle":'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg>',badge:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M160-80q-33 0-56.5-23.5T80-160v-440q0-33 23.5-56.5T160-680h200v-120q0-33 23.5-56.5T440-880h80q33 0 56.5 23.5T600-800v120h200q33 0 56.5 23.5T880-600v440q0 33-23.5 56.5T800-80H160Zm0-80h640v-440H600q0 33-23.5 56.5T520-520h-80q-33 0-56.5-23.5T360-600H160v440Zm80-80h240v-18q0-17-9.5-31.5T444-312q-20-9-40.5-13.5T360-330q-23 0-43.5 4.5T276-312q-17 8-26.5 22.5T240-258v18Zm320-60h160v-60H560v60Zm-200-60q25 0 42.5-17.5T420-420q0-25-17.5-42.5T360-480q-25 0-42.5 17.5T300-420q0 25 17.5 42.5T360-360Zm200-60h160v-60H560v60ZM440-600h80v-200h-80v200Zm40 220Z"/></svg>',phone:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>',document:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/></svg>',"arrow-left":'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>',cam:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h480q33 0 56.5 23.5T720-720v180l160-160v440L720-420v180q0 33-23.5 56.5T640-160H160Zm0-80h480v-480H160v480Zm0 0v-480 480Z"/></svg>',click:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M468-240q-96-5-162-74t-66-166q0-100 70-170t170-70q97 0 166 66t74 162l-84-25q-13-54-56-88.5T480-640q-66 0-113 47t-47 113q0 57 34.5 100t88.5 56l25 84ZM821-60 650-231 600-80 480-480l400 120-151 50 171 171-79 79Z"/></svg>',page:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h420v-140H160v140Zm500 0h140v-360H660v360ZM160-460h420v-140H160v140Z"/></svg>',play:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m380-300 280-180-280-180v360ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z"/></svg>',logout:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg>',person:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>',visibility:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>'};var lr=class extends HTMLElement{constructor(){super();p(this,"willLoad",()=>{});p(this,"render",()=>{this.shadowRoot&&(this.shadowRoot.innerHTML=sr[this.name]||"")});let e=this.attachShadow({mode:"open"}),r=new CSSStyleSheet;r.replaceSync(xo),e.adoptedStyleSheets=[r],e.innerHTML=sr[this.name]||""}set name(e){this.setAttribute("name",e)}get name(){return this.getAttribute("name")}static get observedAttributes(){return["name"]}attributeChangedCallback(e,r,i){}connectedCallback(){setTimeout(()=>{this.willLoad(),this.render()},200)}disconnectedCallback(){}};customElements.define("huanlin-icon",lr);var yo="* { margin: 0; padding: 0; border: 0; background: transparent; box-sizing: border-box; } body { font-family: var(--font-family); } .position-relative { position: relative; } .flex { display: flex; } .justify-end { justify-content: flex-end; } .fit-content { width: -moz-fit-content; width: fit-content; } .align-center { align-items: center; } .justify-center { justify-content: center; } .flex-row { flex-direction: row; } .flex-column { flex-direction: column; } .flex-grow-1 { flex-grow: 1; } .display-block { display: block; } .justify-space-between { justify-content: space-between; } .gap { gap: 10px; } .width-100p, .w-100p { width: 100%; } .h-100p { height: 100%; } .min-height-100p { min-height: 100%; } .height-100p { height: 100%; } .text-primary { color: var(--text-primary); } .text-secondary { color: var(--text-secondary); } .text-tertiary { color: var(--text-tertiary); } .subtitle { display: block; width: -moz-fit-content; width: fit-content; font-size: 16px; margin-block-start: 0px; margin-block-end: 0px; margin-inline-start: 0px; margin-inline-end: 0px; } nav { transition-duration: 200ms; touch-action: pan-y; z-index: 2030; position: fixed; z-index: 1; top: -120px; right: 0; bottom: -120px; left: 0; visibility: hidden; transition-property: visibility; text-align: start; } nav.visible { visibility: visible; } #scrim { position: absolute; top: 0; right: 0; bottom: 0; left: 0; transition-property: opacity; -webkit-transform: translateZ(0); transition-duration: 200ms; transform: translateZ(0); opacity: 0; background: var(--app-drawer-scrim-background, rgba(0, 0, 0, 0.5)); } #scrim.visible { opacity: 1; } #drawer { transition-duration: 200ms; position: absolute; top: 0; bottom: 0; left: 0; width: var(--app-drawer-width, 256px); padding: var(--app-drawer-content-padding, 120px 0); transition-property: transform; transform: translate3d(-100%, 0, 0); background-color: var(--app-drawer-background, var(--background-primary)); } #drawer.open { transform: translate3d(0, 0, 0); } #drawer.open .content { display: flex; } :host([collapse]) { --app-drawer-width: 88px ; } :host(:not([collapse])) { --app-drawer-width: 256px ; } .content { flex-direction: column; padding: 20px; box-sizing: border-box; display: none; height: 100%; }";var bo=`<nav part="nav">
  <div part="scrim" id="scrim"></div>
  <div part="drawer" id="drawer">
    <div part="content" class="content">
      <slot></slot>
    </div>
  </div>
</nav>`;var cr=class extends HTMLElement{constructor(){super();p(this,"nav");p(this,"scrimEle");p(this,"drawer");p(this,"willLoad",()=>{var e,r,i;this.setAttribute("role","navigation"),this.nav=(e=this.shadowRoot)==null?void 0:e.querySelector("nav"),this.scrimEle=(r=this.shadowRoot)==null?void 0:r.querySelector("#scrim"),this.drawer=(i=this.shadowRoot)==null?void 0:i.querySelector("#drawer"),!this.active&&window.addEventListener("keydown",o=>{o.key==="Escape"&&this.open&&(this.open=!1)}),!this.active&&this.scrimEle.addEventListener("click",o=>{this.open&&o.target===this.scrimEle&&(this.open=!1)}),!this.active&&window.addEventListener("focusin",o=>{this.contains(document.activeElement)||(this.open=!1)})});p(this,"render",()=>{var r,i,o,a,s,l,c,u,h;this.open?((r=this.nav)==null||r.classList.add("visible"),(i=this.scrimEle)==null||i.classList.add("visible"),(o=this.drawer)==null||o.classList.add("open")):((a=this.nav)==null||a.classList.remove("visible"),(s=this.scrimEle)==null||s.classList.remove("visible"),(l=this.drawer)==null||l.classList.remove("open")),this.scrim?!((c=this.nav)!=null&&c.contains(this.scrimEle))&&((u=this.nav)==null||u.prepend(this.scrimEle)):(h=this.nav)!=null&&h.contains(this.scrimEle)&&this.scrimEle.remove(),Array.from(this.querySelectorAll("huanlin-nav-item")).forEach(d=>{d.collapse=this.collapse})});p(this,"handleFocusFirstItem",()=>{let e=this.querySelector("huanlin-nav-item");e&&(e==null||e.setFocus())});let e=this.attachShadow({mode:"open"}),r=new CSSStyleSheet;r.replace(yo),e.adoptedStyleSheets=[r],e.innerHTML=bo}set open(e){this.setAttribute("open",e.toString())}get open(){return this.getAttribute("open")==="true"}set collapse(e){e?this.setAttribute("collapse",e.toString()):this.removeAttribute("collapse")}get collapse(){return this.getAttribute("collapse")==="true"}set scrim(e){this.setAttribute("scrim",e.toString())}get scrim(){return this.getAttribute("scrim")==="true"}set active(e){this.setAttribute("active",e.toString())}get active(){return this.getAttribute("active")==="true"}static get observedAttributes(){return["open","collapse","scrim","active"]}attributeChangedCallback(e,r,i){setTimeout(()=>{this.render()})}connectedCallback(){setTimeout(()=>{this.willLoad(),this.render()})}disconnectedCallback(){this.open=!1}};customElements.define("huanlin-nav",cr);var wo=".container { cursor: pointer; margin: 4px 0px; display: flex; flex-direction: row; align-items: center; justify-content: flex-start; border-radius: 8px; width: 100%; box-sizing: border-box; } .container:hover, .container:focus, .container:focus-visible { background: var(--hover-bg, var(--color-tertiary)); } .container:hover .label, .container:focus .label, .container:focus-visible .label { color: var(--hover-label-color, var(--text-primary)); } .container:hover .icon, .container:focus .icon, .container:focus-visible .icon { --fill: var(--hover-icon-fill, var(--text-primary)); background: var(--hover-bg, var(--color-tertiary)); } .icon { display: flex; flex-direction: row; align-items: center; --height: 24px; padding: var(--icon-padding, 14px); border-radius: 8px; } .label { display: flex; flex-direction: row; align-items: center; color: var(--label-color, var(--text-tertiary)); font-size: var(--label-font-size, 14px); font-weight: bold; margin-left: 10px; } :host([active]) .label { color: var(--text-primary); } :host([active]) .icon { color: var(--color-primary); } :host([collapse]) .label { display: none; }";var ko=`<div part="root" class="container" role="link" tabindex="0">
  <div part="icon" class="icon">
    <slot name="icon"></slot>
  </div>
  <div part="label" class="label">
    <slot></slot>
  </div>
</div>`;var ur=class extends HTMLElement{constructor(){super();p(this,"root");p(this,"handleClick",e=>{let r=new CustomEvent("huanlin-nav-item",{bubbles:!0});e.currentTarget.dispatchEvent(r)});p(this,"willLoad",()=>{var e;this.root=(e=this.shadowRoot)==null?void 0:e.querySelector(".container"),this.addEventListener("click",this.handleClick)});p(this,"render",()=>{});p(this,"setFocus",()=>{this.root&&this.root.focus()});p(this,"setBlur",()=>{this.root&&this.root.blur()});let e=this.attachShadow({mode:"open"}),r=new CSSStyleSheet;r.replaceSync(wo),e.adoptedStyleSheets=[r],e.innerHTML=ko}set name(e){this.setAttribute("name",e)}get name(){return this.getAttribute("name")||""}set description(e){this.setAttribute("description",e)}get description(){return this.getAttribute("description")||""}set open(e){this.setAttribute("open",e)}get open(){return this.getAttribute("open")==="true"}set active(e){this.setAttribute("active",e)}get active(){return this.getAttribute("active")==="true"}set collapse(e){e?this.setAttribute("collapse",e.toString()):this.removeAttribute("collapse")}get collapse(){return this.getAttribute("collapse")==="true"}static get observedAttributes(){return["open","active","name","description","collapse"]}attributeChangedCallback(e,r,i){this.render()}connectedCallback(){setTimeout(()=>{this.willLoad(),this.render()})}disconnectedCallback(){this.removeEventListener("click",this.handleClick)}};customElements.define("huanlin-nav-item",ur);var dr=class extends HTMLElement{constructor(){super();p(this,"getTabButton",({id:e,idx:r})=>`
      <button 
        id="carousel-tab-${r+1}" 
        type="button" 
        role="tab" 
        aria-selected=${r===0?"true":"false"}
        aria-label="slide ${r+1}"
      >
      </button> 
    `);p(this,"renderTabButton",e=>{let r=this.shadowRoot.querySelector("slot"),i=Array.from(r.assignedNodes()).filter(s=>s.nodeName==="APP-CAROUSEL-ITEM"),o=this.shadowRoot.querySelector("#tablist"),a="";i.forEach((s,l)=>{let c=s.getAttribute("id");a+=this.getTabButton({id:c,idx:l})}),o.innerHTML=a});p(this,"handleSlotChange",()=>{this.shadowRoot.querySelector("slot").addEventListener("slotchange",this.renderTabButton)});p(this,"handleTablistClick",e=>{if(e.target.getAttribute("role")!=="tab")return;let r=Array.from(e.currentTarget.querySelectorAll("[role='tab']")),i=Array.from(this.querySelectorAll("app-carousel-item"));r.forEach((o,a)=>{o===e.target?(o.setAttribute("aria-selected","true"),i[a].setAttribute("active","")):(o.setAttribute("aria-selected","false"),i[a].removeAttribute("active"))})});p(this,"setFirstItemActive",()=>{let e=this.querySelector("app-carousel-item");e&&e.setAttribute("active","")});p(this,"handleTablistKeyboard",e=>{let r=Array.from(e.currentTarget.querySelectorAll("[role='tab']")),i=Array.from(this.querySelectorAll("app-carousel-item")),o=r.indexOf(e.target);e.key==="ArrowLeft"?o-=1:e.key==="ArrowRight"&&(o+=1),!(o<0||o>=r.length)&&r.forEach((a,s)=>{s===o?(a.setAttribute("aria-selected","true"),a.setAttribute("tabindex","0"),a.focus(),i[s].setAttribute("active","")):(a.setAttribute("aria-selected","false"),a.removeAttribute("tabindex","-1"),i[s].removeAttribute("active"))})});p(this,"render",()=>{});let e=this.attachShadow({mode:"open"});e.innerHTML=`
      <style>
        :host {
          font-family: var(--font-family);
          font-size: 18px;
          font-weight: bold;
          display: inline-block;
        } 
        [role="tablist"] {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          margin-top: 10px;
          gap: 10px;
        }
        [role="tab"] {
          border: none;
          height: 6px;
          width: 40px;
          border-radius: 10px;
          cursor: pointer;
        }
        button[aria-selected="true"] {
          background-color: var(--text-primary);
        }
      </style>
      <section id="carousel" aria-roledescription="carousel" aria-label="highlighted shows">
        <div class="carousel-inner">
          <div id="carousel-items" class="carousel-items playing" aria-live="off">
            <slot></slot>
          </div>
          <div class="controls">
            <div class="tab-wrapper">
              <div id="tablist" role="tablist" aria-label="slides">
              </div>
            </div>
          </div>
        </div>
      </section>    
    `}connectedCallback(){this.render(),this.handleSlotChange(),this.renderTabButton(),this.setFirstItemActive(),this.shadowRoot.querySelector("#tablist").addEventListener("click",this.handleTablistClick),this.shadowRoot.querySelector("[role='tablist']").addEventListener("keydown",this.handleTablistKeyboard)}disconnectedCallback(){this.shadowRoot.querySelector("#tablist").removeEventListener("click",this.handleTablistClick),this.shadowRoot.querySelector("[role='tablist']").removeEventListener("keydown",this.handleTablistKeyboard)}};customElements.define("app-carousel",dr);var hr=class extends HTMLElement{constructor(){super();p(this,"render",()=>{});let e=this.attachShadow({mode:"open"});e.innerHTML=`
      <style>
        :host {
          font-family: var(--font-family);
          font-size: 18px;
          font-weight: bold;
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
    `}connectedCallback(){this.render()}};customElements.define("app-carousel-item",hr);var pr=class extends HTMLElement{constructor(){super();p(this,"render",()=>{this.shadowRoot.querySelector("time").innerHTML=new Intl.DateTimeFormat("default",{hour12:!0,hour:"numeric",minute:"numeric",second:"numeric"}).format(new Date)});let e=this.attachShadow({mode:"open"});e.innerHTML=`
      <style>
        time {
          font-family: var(--font-family);
          font-size: 18px;
          font-weight: bold;
          display: inline-block;
          max-width: min-content;
          text-align: left;
        } 
      </style>
      <time></time>
    `}connectedCallback(){this.render(),setInterval(this.render,1e3)}};customElements.define("app-clock",pr);function Pt(t,n){return t==null||n==null?NaN:t<n?-1:t>n?1:t>=n?0:NaN}function fr(t,n){return t==null||n==null?NaN:n<t?-1:n>t?1:n>=t?0:NaN}function $t(t){let n,e,r;t.length!==2?(n=Pt,e=(s,l)=>Pt(t(s),l),r=(s,l)=>t(s)-l):(n=t===Pt||t===fr?t:Kc,e=t,r=t);function i(s,l,c=0,u=s.length){if(c<u){if(n(l,l)!==0)return u;do{let h=c+u>>>1;e(s[h],l)<0?c=h+1:u=h}while(c<u)}return c}function o(s,l,c=0,u=s.length){if(c<u){if(n(l,l)!==0)return u;do{let h=c+u>>>1;e(s[h],l)<=0?c=h+1:u=h}while(c<u)}return c}function a(s,l,c=0,u=s.length){let h=i(s,l,c,u-1);return h>c&&r(s[h-1],l)>-r(s[h],l)?h-1:h}return{left:i,center:a,right:o}}function Kc(){return 0}function mr(t){return t===null?NaN:+t}var To=$t(Pt),So=To.right,Jc=To.left,Gc=$t(mr).center,gr=So;var le=class extends Map{constructor(n,e=eu){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:e}}),n!=null)for(let[r,i]of n)this.set(r,i)}get(n){return super.get(_o(this,n))}has(n){return super.has(_o(this,n))}set(n,e){return super.set(Qc(this,n),e)}delete(n){return super.delete(tu(this,n))}};function _o({_intern:t,_key:n},e){let r=n(e);return t.has(r)?t.get(r):e}function Qc({_intern:t,_key:n},e){let r=n(e);return t.has(r)?t.get(r):(t.set(r,e),e)}function tu({_intern:t,_key:n},e){let r=n(e);return t.has(r)&&(e=t.get(r),t.delete(r)),e}function eu(t){return t!==null&&typeof t=="object"?t.valueOf():t}var nu=Math.sqrt(50),ru=Math.sqrt(10),iu=Math.sqrt(2);function sn(t,n,e){let r=(n-t)/Math.max(0,e),i=Math.floor(Math.log10(r)),o=r/Math.pow(10,i),a=o>=nu?10:o>=ru?5:o>=iu?2:1,s,l,c;return i<0?(c=Math.pow(10,-i)/a,s=Math.round(t*c),l=Math.round(n*c),s/c<t&&++s,l/c>n&&--l,c=-c):(c=Math.pow(10,i)*a,s=Math.round(t/c),l=Math.round(n/c),s*c<t&&++s,l*c>n&&--l),l<s&&.5<=e&&e<2?sn(t,n,e*2):[s,l,c]}function ln(t,n,e){if(n=+n,t=+t,e=+e,!(e>0))return[];if(t===n)return[t];let r=n<t,[i,o,a]=r?sn(n,t,e):sn(t,n,e);if(!(o>=i))return[];let s=o-i+1,l=new Array(s);if(r)if(a<0)for(let c=0;c<s;++c)l[c]=(o-c)/-a;else for(let c=0;c<s;++c)l[c]=(o-c)*a;else if(a<0)for(let c=0;c<s;++c)l[c]=(i+c)/-a;else for(let c=0;c<s;++c)l[c]=(i+c)*a;return l}function Le(t,n,e){return n=+n,t=+t,e=+e,sn(t,n,e)[2]}function ce(t,n,e){n=+n,t=+t,e=+e;let r=n<t,i=r?Le(n,t,e):Le(t,n,e);return(r?-1:1)*(i<0?1/-i:i)}function G(t,n){let e;if(n===void 0)for(let r of t)r!=null&&(e<r||e===void 0&&r>=r)&&(e=r);else{let r=-1;for(let i of t)(i=n(i,++r,t))!=null&&(e<i||e===void 0&&i>=i)&&(e=i)}return e}function xt(t,n){let e;if(n===void 0)for(let r of t)r!=null&&(e>r||e===void 0&&r>=r)&&(e=r);else{let r=-1;for(let i of t)(i=n(i,++r,t))!=null&&(e>i||e===void 0&&i>=i)&&(e=i)}return e}function cn(t,n,e){t=+t,n=+n,e=(i=arguments.length)<2?(n=t,t=0,1):i<3?1:+e;for(var r=-1,i=Math.max(0,Math.ceil((n-t)/e))|0,o=new Array(i);++r<i;)o[r]=t+r*e;return o}function qo(t){return t}var vr=1,un=2,xr=3,Ee=4,Mo=1e-6;function ou(t){return"translate("+t+",0)"}function au(t){return"translate(0,"+t+")"}function su(t){return n=>+t(n)}function lu(t,n){return n=Math.max(0,t.bandwidth()-n*2)/2,t.round()&&(n=Math.round(n)),e=>+t(e)+n}function cu(){return!this.__axis}function yr(t,n){var e=[],r=null,i=null,o=6,a=6,s=3,l=typeof window!="undefined"&&window.devicePixelRatio>1?0:.5,c=t===vr||t===Ee?-1:1,u=t===Ee||t===un?"x":"y",h=t===vr||t===xr?ou:au;function d(f){var v=r==null?n.ticks?n.ticks.apply(n,e):n.domain():r,x=i==null?n.tickFormat?n.tickFormat.apply(n,e):qo:i,q=Math.max(o,0)+s,g=n.range(),T=+g[0]+l,b=+g[g.length-1]+l,M=(n.bandwidth?lu:su)(n.copy(),l),_=f.selection?f.selection():f,w=_.selectAll(".domain").data([null]),k=_.selectAll(".tick").data(v,n).order(),L=k.exit(),N=k.enter().append("g").attr("class","tick"),z=k.select("line"),C=k.select("text");w=w.merge(w.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),k=k.merge(N),z=z.merge(N.append("line").attr("stroke","currentColor").attr(u+"2",c*o)),C=C.merge(N.append("text").attr("fill","currentColor").attr(u,c*q).attr("dy",t===vr?"0em":t===xr?"0.71em":"0.32em")),f!==_&&(w=w.transition(f),k=k.transition(f),z=z.transition(f),C=C.transition(f),L=L.transition(f).attr("opacity",Mo).attr("transform",function(R){return isFinite(R=M(R))?h(R+l):this.getAttribute("transform")}),N.attr("opacity",Mo).attr("transform",function(R){var m=this.parentNode.__axis;return h((m&&isFinite(m=m(R))?m:M(R))+l)})),L.remove(),w.attr("d",t===Ee||t===un?a?"M"+c*a+","+T+"H"+l+"V"+b+"H"+c*a:"M"+l+","+T+"V"+b:a?"M"+T+","+c*a+"V"+l+"H"+b+"V"+c*a:"M"+T+","+l+"H"+b),k.attr("opacity",1).attr("transform",function(R){return h(M(R)+l)}),z.attr(u+"2",c*o),C.attr(u,c*q).text(x),_.filter(cu).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",t===un?"start":t===Ee?"end":"middle"),_.each(function(){this.__axis=M})}return d.scale=function(f){return arguments.length?(n=f,d):n},d.ticks=function(){return e=Array.from(arguments),d},d.tickArguments=function(f){return arguments.length?(e=f==null?[]:Array.from(f),d):e.slice()},d.tickValues=function(f){return arguments.length?(r=f==null?null:Array.from(f),d):r&&r.slice()},d.tickFormat=function(f){return arguments.length?(i=f,d):i},d.tickSize=function(f){return arguments.length?(o=a=+f,d):o},d.tickSizeInner=function(f){return arguments.length?(o=+f,d):o},d.tickSizeOuter=function(f){return arguments.length?(a=+f,d):a},d.tickPadding=function(f){return arguments.length?(s=+f,d):s},d.offset=function(f){return arguments.length?(l=+f,d):l},d}function br(t){return yr(un,t)}function St(t){return yr(xr,t)}function ut(t){return yr(Ee,t)}var uu={value:()=>{}};function Ao(){for(var t=0,n=arguments.length,e={},r;t<n;++t){if(!(r=arguments[t]+"")||r in e||/[\s.]/.test(r))throw new Error("illegal type: "+r);e[r]=[]}return new dn(e)}function dn(t){this._=t}function du(t,n){return t.trim().split(/^|\s+/).map(function(e){var r="",i=e.indexOf(".");if(i>=0&&(r=e.slice(i+1),e=e.slice(0,i)),e&&!n.hasOwnProperty(e))throw new Error("unknown type: "+e);return{type:e,name:r}})}dn.prototype=Ao.prototype={constructor:dn,on:function(t,n){var e=this._,r=du(t+"",e),i,o=-1,a=r.length;if(arguments.length<2){for(;++o<a;)if((i=(t=r[o]).type)&&(i=hu(e[i],t.name)))return i;return}if(n!=null&&typeof n!="function")throw new Error("invalid callback: "+n);for(;++o<a;)if(i=(t=r[o]).type)e[i]=Co(e[i],t.name,n);else if(n==null)for(i in e)e[i]=Co(e[i],t.name,null);return this},copy:function(){var t={},n=this._;for(var e in n)t[e]=n[e].slice();return new dn(t)},call:function(t,n){if((i=arguments.length-2)>0)for(var e=new Array(i),r=0,i,o;r<i;++r)e[r]=arguments[r+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=this._[t],r=0,i=o.length;r<i;++r)o[r].value.apply(n,e)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],i=0,o=r.length;i<o;++i)r[i].value.apply(n,e)}};function hu(t,n){for(var e=0,r=t.length,i;e<r;++e)if((i=t[e]).name===n)return i.value}function Co(t,n,e){for(var r=0,i=t.length;r<i;++r)if(t[r].name===n){t[r]=uu,t=t.slice(0,r).concat(t.slice(r+1));break}return e!=null&&t.push({name:n,value:e}),t}var wr=Ao;var hn="http://www.w3.org/1999/xhtml",kr={svg:"http://www.w3.org/2000/svg",xhtml:hn,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function _t(t){var n=t+="",e=n.indexOf(":");return e>=0&&(n=t.slice(0,e))!=="xmlns"&&(t=t.slice(e+1)),kr.hasOwnProperty(n)?{space:kr[n],local:t}:t}function pu(t){return function(){var n=this.ownerDocument,e=this.namespaceURI;return e===hn&&n.documentElement.namespaceURI===hn?n.createElement(t):n.createElementNS(e,t)}}function fu(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function pn(t){var n=_t(t);return(n.local?fu:pu)(n)}function mu(){}function Ot(t){return t==null?mu:function(){return this.querySelector(t)}}function Lo(t){typeof t!="function"&&(t=Ot(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o=n[i],a=o.length,s=r[i]=new Array(a),l,c,u=0;u<a;++u)(l=o[u])&&(c=t.call(l,l.__data__,u,o))&&("__data__"in l&&(c.__data__=l.__data__),s[u]=c);return new $(r,this._parents)}function Tr(t){return t==null?[]:Array.isArray(t)?t:Array.from(t)}function gu(){return[]}function He(t){return t==null?gu:function(){return this.querySelectorAll(t)}}function vu(t){return function(){return Tr(t.apply(this,arguments))}}function Eo(t){typeof t=="function"?t=vu(t):t=He(t);for(var n=this._groups,e=n.length,r=[],i=[],o=0;o<e;++o)for(var a=n[o],s=a.length,l,c=0;c<s;++c)(l=a[c])&&(r.push(t.call(l,l.__data__,c,a)),i.push(l));return new $(r,i)}function ze(t){return function(){return this.matches(t)}}function fn(t){return function(n){return n.matches(t)}}var xu=Array.prototype.find;function yu(t){return function(){return xu.call(this.children,t)}}function bu(){return this.firstElementChild}function Ho(t){return this.select(t==null?bu:yu(typeof t=="function"?t:fn(t)))}var wu=Array.prototype.filter;function ku(){return Array.from(this.children)}function Tu(t){return function(){return wu.call(this.children,t)}}function zo(t){return this.selectAll(t==null?ku:Tu(typeof t=="function"?t:fn(t)))}function Ro(t){typeof t!="function"&&(t=ze(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o=n[i],a=o.length,s=r[i]=[],l,c=0;c<a;++c)(l=o[c])&&t.call(l,l.__data__,c,o)&&s.push(l);return new $(r,this._parents)}function mn(t){return new Array(t.length)}function Do(){return new $(this._enter||this._groups.map(mn),this._parents)}function Re(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}Re.prototype={constructor:Re,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function No(t){return function(){return t}}function Su(t,n,e,r,i,o){for(var a=0,s,l=n.length,c=o.length;a<c;++a)(s=n[a])?(s.__data__=o[a],r[a]=s):e[a]=new Re(t,o[a]);for(;a<l;++a)(s=n[a])&&(i[a]=s)}function _u(t,n,e,r,i,o,a){var s,l,c=new Map,u=n.length,h=o.length,d=new Array(u),f;for(s=0;s<u;++s)(l=n[s])&&(d[s]=f=a.call(l,l.__data__,s,n)+"",c.has(f)?i[s]=l:c.set(f,l));for(s=0;s<h;++s)f=a.call(t,o[s],s,o)+"",(l=c.get(f))?(r[s]=l,l.__data__=o[s],c.delete(f)):e[s]=new Re(t,o[s]);for(s=0;s<u;++s)(l=n[s])&&c.get(d[s])===l&&(i[s]=l)}function qu(t){return t.__data__}function Zo(t,n){if(!arguments.length)return Array.from(this,qu);var e=n?_u:Su,r=this._parents,i=this._groups;typeof t!="function"&&(t=No(t));for(var o=i.length,a=new Array(o),s=new Array(o),l=new Array(o),c=0;c<o;++c){var u=r[c],h=i[c],d=h.length,f=Mu(t.call(u,u&&u.__data__,c,r)),v=f.length,x=s[c]=new Array(v),q=a[c]=new Array(v),g=l[c]=new Array(d);e(u,h,x,q,g,f,n);for(var T=0,b=0,M,_;T<v;++T)if(M=x[T]){for(T>=b&&(b=T+1);!(_=q[b])&&++b<v;);M._next=_||null}}return a=new $(a,r),a._enter=s,a._exit=l,a}function Mu(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function Io(){return new $(this._exit||this._groups.map(mn),this._parents)}function Fo(t,n,e){var r=this.enter(),i=this,o=this.exit();return typeof t=="function"?(r=t(r),r&&(r=r.selection())):r=r.append(t+""),n!=null&&(i=n(i),i&&(i=i.selection())),e==null?o.remove():e(o),r&&i?r.merge(i).order():i}function Po(t){for(var n=t.selection?t.selection():t,e=this._groups,r=n._groups,i=e.length,o=r.length,a=Math.min(i,o),s=new Array(i),l=0;l<a;++l)for(var c=e[l],u=r[l],h=c.length,d=s[l]=new Array(h),f,v=0;v<h;++v)(f=c[v]||u[v])&&(d[v]=f);for(;l<i;++l)s[l]=e[l];return new $(s,this._parents)}function $o(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r=t[n],i=r.length-1,o=r[i],a;--i>=0;)(a=r[i])&&(o&&a.compareDocumentPosition(o)^4&&o.parentNode.insertBefore(a,o),o=a);return this}function Oo(t){t||(t=Cu);function n(h,d){return h&&d?t(h.__data__,d.__data__):!h-!d}for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o){for(var a=e[o],s=a.length,l=i[o]=new Array(s),c,u=0;u<s;++u)(c=a[u])&&(l[u]=c);l.sort(n)}return new $(i,this._parents).order()}function Cu(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function Bo(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function Uo(){return Array.from(this)}function Vo(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length;i<o;++i){var a=r[i];if(a)return a}return null}function jo(){let t=0;for(let n of this)++t;return t}function Yo(){return!this.node()}function Wo(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i=n[e],o=0,a=i.length,s;o<a;++o)(s=i[o])&&t.call(s,s.__data__,o,i);return this}function Au(t){return function(){this.removeAttribute(t)}}function Lu(t){return function(){this.removeAttributeNS(t.space,t.local)}}function Eu(t,n){return function(){this.setAttribute(t,n)}}function Hu(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}function zu(t,n){return function(){var e=n.apply(this,arguments);e==null?this.removeAttribute(t):this.setAttribute(t,e)}}function Ru(t,n){return function(){var e=n.apply(this,arguments);e==null?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}function Xo(t,n){var e=_t(t);if(arguments.length<2){var r=this.node();return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((n==null?e.local?Lu:Au:typeof n=="function"?e.local?Ru:zu:e.local?Hu:Eu)(e,n))}function gn(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function Du(t){return function(){this.style.removeProperty(t)}}function Nu(t,n,e){return function(){this.style.setProperty(t,n,e)}}function Zu(t,n,e){return function(){var r=n.apply(this,arguments);r==null?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}function Ko(t,n,e){return arguments.length>1?this.each((n==null?Du:typeof n=="function"?Zu:Nu)(t,n,e==null?"":e)):Lt(this.node(),t)}function Lt(t,n){return t.style.getPropertyValue(n)||gn(t).getComputedStyle(t,null).getPropertyValue(n)}function Iu(t){return function(){delete this[t]}}function Fu(t,n){return function(){this[t]=n}}function Pu(t,n){return function(){var e=n.apply(this,arguments);e==null?delete this[t]:this[t]=e}}function Jo(t,n){return arguments.length>1?this.each((n==null?Iu:typeof n=="function"?Pu:Fu)(t,n)):this.node()[t]}function Go(t){return t.trim().split(/^|\s+/)}function Sr(t){return t.classList||new Qo(t)}function Qo(t){this._node=t,this._names=Go(t.getAttribute("class")||"")}Qo.prototype={add:function(t){var n=this._names.indexOf(t);n<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function ta(t,n){for(var e=Sr(t),r=-1,i=n.length;++r<i;)e.add(n[r])}function ea(t,n){for(var e=Sr(t),r=-1,i=n.length;++r<i;)e.remove(n[r])}function $u(t){return function(){ta(this,t)}}function Ou(t){return function(){ea(this,t)}}function Bu(t,n){return function(){(n.apply(this,arguments)?ta:ea)(this,t)}}function na(t,n){var e=Go(t+"");if(arguments.length<2){for(var r=Sr(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return!1;return!0}return this.each((typeof n=="function"?Bu:n?$u:Ou)(e,n))}function Uu(){this.textContent=""}function Vu(t){return function(){this.textContent=t}}function ju(t){return function(){var n=t.apply(this,arguments);this.textContent=n==null?"":n}}function ra(t){return arguments.length?this.each(t==null?Uu:(typeof t=="function"?ju:Vu)(t)):this.node().textContent}function Yu(){this.innerHTML=""}function Wu(t){return function(){this.innerHTML=t}}function Xu(t){return function(){var n=t.apply(this,arguments);this.innerHTML=n==null?"":n}}function ia(t){return arguments.length?this.each(t==null?Yu:(typeof t=="function"?Xu:Wu)(t)):this.node().innerHTML}function Ku(){this.nextSibling&&this.parentNode.appendChild(this)}function oa(){return this.each(Ku)}function Ju(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function aa(){return this.each(Ju)}function sa(t){var n=typeof t=="function"?t:pn(t);return this.select(function(){return this.appendChild(n.apply(this,arguments))})}function Gu(){return null}function la(t,n){var e=typeof t=="function"?t:pn(t),r=n==null?Gu:typeof n=="function"?n:Ot(n);return this.select(function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)})}function Qu(){var t=this.parentNode;t&&t.removeChild(this)}function ca(){return this.each(Qu)}function td(){var t=this.cloneNode(!1),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function ed(){var t=this.cloneNode(!0),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function ua(t){return this.select(t?ed:td)}function da(t){return arguments.length?this.property("__data__",t):this.node().__data__}function nd(t){return function(n){t.call(this,n,this.__data__)}}function rd(t){return t.trim().split(/^|\s+/).map(function(n){var e="",r=n.indexOf(".");return r>=0&&(e=n.slice(r+1),n=n.slice(0,r)),{type:n,name:e}})}function id(t){return function(){var n=this.__on;if(n){for(var e=0,r=-1,i=n.length,o;e<i;++e)o=n[e],(!t.type||o.type===t.type)&&o.name===t.name?this.removeEventListener(o.type,o.listener,o.options):n[++r]=o;++r?n.length=r:delete this.__on}}}function od(t,n,e){return function(){var r=this.__on,i,o=nd(n);if(r){for(var a=0,s=r.length;a<s;++a)if((i=r[a]).type===t.type&&i.name===t.name){this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=o,i.options=e),i.value=n;return}}this.addEventListener(t.type,o,e),i={type:t.type,name:t.name,value:n,listener:o,options:e},r?r.push(i):this.__on=[i]}}function ha(t,n,e){var r=rd(t+""),i,o=r.length,a;if(arguments.length<2){var s=this.node().__on;if(s){for(var l=0,c=s.length,u;l<c;++l)for(i=0,u=s[l];i<o;++i)if((a=r[i]).type===u.type&&a.name===u.name)return u.value}return}for(s=n?od:id,i=0;i<o;++i)this.each(s(r[i],n,e));return this}function pa(t,n,e){var r=gn(t),i=r.CustomEvent;typeof i=="function"?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}function ad(t,n){return function(){return pa(this,t,n)}}function sd(t,n){return function(){return pa(this,t,n.apply(this,arguments))}}function fa(t,n){return this.each((typeof n=="function"?sd:ad)(t,n))}function*ma(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length,a;i<o;++i)(a=r[i])&&(yield a)}var _r=[null];function $(t,n){this._groups=t,this._parents=n}function ga(){return new $([[document.documentElement]],_r)}function ld(){return this}$.prototype=ga.prototype={constructor:$,select:Lo,selectAll:Eo,selectChild:Ho,selectChildren:zo,filter:Ro,data:Zo,enter:Do,exit:Io,join:Fo,merge:Po,selection:ld,order:$o,sort:Oo,call:Bo,nodes:Uo,node:Vo,size:jo,empty:Yo,each:Wo,attr:Xo,style:Ko,property:Jo,classed:na,text:ra,html:ia,raise:oa,lower:aa,append:sa,insert:la,remove:ca,clone:ua,datum:da,on:ha,dispatch:fa,[Symbol.iterator]:ma};var qt=ga;function E(t){return typeof t=="string"?new $([[document.querySelector(t)]],[document.documentElement]):new $([[t]],_r)}function vn(t,n,e){t.prototype=n.prototype=e,e.constructor=t}function qr(t,n){var e=Object.create(t.prototype);for(var r in n)e[r]=n[r];return e}function Ze(){}var De=.7,bn=1/De,ue="\\s*([+-]?\\d+)\\s*",Ne="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",yt="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",cd=/^#([0-9a-f]{3,8})$/,ud=new RegExp(`^rgb\\(${ue},${ue},${ue}\\)$`),dd=new RegExp(`^rgb\\(${yt},${yt},${yt}\\)$`),hd=new RegExp(`^rgba\\(${ue},${ue},${ue},${Ne}\\)$`),pd=new RegExp(`^rgba\\(${yt},${yt},${yt},${Ne}\\)$`),fd=new RegExp(`^hsl\\(${Ne},${yt},${yt}\\)$`),md=new RegExp(`^hsla\\(${Ne},${yt},${yt},${Ne}\\)$`),va={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};vn(Ze,pt,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:xa,formatHex:xa,formatHex8:gd,formatHsl:vd,formatRgb:ya,toString:ya});function xa(){return this.rgb().formatHex()}function gd(){return this.rgb().formatHex8()}function vd(){return _a(this).formatHsl()}function ya(){return this.rgb().formatRgb()}function pt(t){var n,e;return t=(t+"").trim().toLowerCase(),(n=cd.exec(t))?(e=n[1].length,n=parseInt(n[1],16),e===6?ba(n):e===3?new et(n>>8&15|n>>4&240,n>>4&15|n&240,(n&15)<<4|n&15,1):e===8?xn(n>>24&255,n>>16&255,n>>8&255,(n&255)/255):e===4?xn(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|n&240,((n&15)<<4|n&15)/255):null):(n=ud.exec(t))?new et(n[1],n[2],n[3],1):(n=dd.exec(t))?new et(n[1]*255/100,n[2]*255/100,n[3]*255/100,1):(n=hd.exec(t))?xn(n[1],n[2],n[3],n[4]):(n=pd.exec(t))?xn(n[1]*255/100,n[2]*255/100,n[3]*255/100,n[4]):(n=fd.exec(t))?Ta(n[1],n[2]/100,n[3]/100,1):(n=md.exec(t))?Ta(n[1],n[2]/100,n[3]/100,n[4]):va.hasOwnProperty(t)?ba(va[t]):t==="transparent"?new et(NaN,NaN,NaN,0):null}function ba(t){return new et(t>>16&255,t>>8&255,t&255,1)}function xn(t,n,e,r){return r<=0&&(t=n=e=NaN),new et(t,n,e,r)}function xd(t){return t instanceof Ze||(t=pt(t)),t?(t=t.rgb(),new et(t.r,t.g,t.b,t.opacity)):new et}function de(t,n,e,r){return arguments.length===1?xd(t):new et(t,n,e,r==null?1:r)}function et(t,n,e,r){this.r=+t,this.g=+n,this.b=+e,this.opacity=+r}vn(et,de,qr(Ze,{brighter(t){return t=t==null?bn:Math.pow(bn,t),new et(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=t==null?De:Math.pow(De,t),new et(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new et(Ut(this.r),Ut(this.g),Ut(this.b),wn(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:wa,formatHex:wa,formatHex8:yd,formatRgb:ka,toString:ka}));function wa(){return`#${Bt(this.r)}${Bt(this.g)}${Bt(this.b)}`}function yd(){return`#${Bt(this.r)}${Bt(this.g)}${Bt(this.b)}${Bt((isNaN(this.opacity)?1:this.opacity)*255)}`}function ka(){let t=wn(this.opacity);return`${t===1?"rgb(":"rgba("}${Ut(this.r)}, ${Ut(this.g)}, ${Ut(this.b)}${t===1?")":`, ${t})`}`}function wn(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function Ut(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function Bt(t){return t=Ut(t),(t<16?"0":"")+t.toString(16)}function Ta(t,n,e,r){return r<=0?t=n=e=NaN:e<=0||e>=1?t=n=NaN:n<=0&&(t=NaN),new ht(t,n,e,r)}function _a(t){if(t instanceof ht)return new ht(t.h,t.s,t.l,t.opacity);if(t instanceof Ze||(t=pt(t)),!t)return new ht;if(t instanceof ht)return t;t=t.rgb();var n=t.r/255,e=t.g/255,r=t.b/255,i=Math.min(n,e,r),o=Math.max(n,e,r),a=NaN,s=o-i,l=(o+i)/2;return s?(n===o?a=(e-r)/s+(e<r)*6:e===o?a=(r-n)/s+2:a=(n-e)/s+4,s/=l<.5?o+i:2-o-i,a*=60):s=l>0&&l<1?0:a,new ht(a,s,l,t.opacity)}function qa(t,n,e,r){return arguments.length===1?_a(t):new ht(t,n,e,r==null?1:r)}function ht(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}vn(ht,qa,qr(Ze,{brighter(t){return t=t==null?bn:Math.pow(bn,t),new ht(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=t==null?De:Math.pow(De,t),new ht(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+(this.h<0)*360,n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*n,i=2*e-r;return new et(Mr(t>=240?t-240:t+120,i,r),Mr(t,i,r),Mr(t<120?t+240:t-120,i,r),this.opacity)},clamp(){return new ht(Sa(this.h),yn(this.s),yn(this.l),wn(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let t=wn(this.opacity);return`${t===1?"hsl(":"hsla("}${Sa(this.h)}, ${yn(this.s)*100}%, ${yn(this.l)*100}%${t===1?")":`, ${t})`}`}}));function Sa(t){return t=(t||0)%360,t<0?t+360:t}function yn(t){return Math.max(0,Math.min(1,t||0))}function Mr(t,n,e){return(t<60?n+(e-n)*t/60:t<180?e:t<240?n+(e-n)*(240-t)/60:n)*255}function Cr(t,n,e,r,i){var o=t*t,a=o*t;return((1-3*t+3*o-a)*n+(4-6*o+3*a)*e+(1+3*t+3*o-3*a)*r+a*i)/6}function Ma(t){var n=t.length-1;return function(e){var r=e<=0?e=0:e>=1?(e=1,n-1):Math.floor(e*n),i=t[r],o=t[r+1],a=r>0?t[r-1]:2*i-o,s=r<n-1?t[r+2]:2*o-i;return Cr((e-r/n)*n,a,i,o,s)}}function Ca(t){var n=t.length;return function(e){var r=Math.floor(((e%=1)<0?++e:e)*n),i=t[(r+n-1)%n],o=t[r%n],a=t[(r+1)%n],s=t[(r+2)%n];return Cr((e-r/n)*n,i,o,a,s)}}var Ie=t=>()=>t;function bd(t,n){return function(e){return t+e*n}}function wd(t,n,e){return t=Math.pow(t,e),n=Math.pow(n,e)-t,e=1/e,function(r){return Math.pow(t+r*n,e)}}function Aa(t){return(t=+t)==1?kn:function(n,e){return e-n?wd(n,e,t):Ie(isNaN(n)?e:n)}}function kn(t,n){var e=n-t;return e?bd(t,e):Ie(isNaN(t)?n:t)}var Vt=function t(n){var e=Aa(n);function r(i,o){var a=e((i=de(i)).r,(o=de(o)).r),s=e(i.g,o.g),l=e(i.b,o.b),c=kn(i.opacity,o.opacity);return function(u){return i.r=a(u),i.g=s(u),i.b=l(u),i.opacity=c(u),i+""}}return r.gamma=t,r}(1);function La(t){return function(n){var e=n.length,r=new Array(e),i=new Array(e),o=new Array(e),a,s;for(a=0;a<e;++a)s=de(n[a]),r[a]=s.r||0,i[a]=s.g||0,o[a]=s.b||0;return r=t(r),i=t(i),o=t(o),s.opacity=1,function(l){return s.r=r(l),s.g=i(l),s.b=o(l),s+""}}}var kd=La(Ma),Td=La(Ca);function Ea(t,n){n||(n=[]);var e=t?Math.min(n.length,t.length):0,r=n.slice(),i;return function(o){for(i=0;i<e;++i)r[i]=t[i]*(1-o)+n[i]*o;return r}}function Ha(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function za(t,n){var e=n?n.length:0,r=t?Math.min(e,t.length):0,i=new Array(r),o=new Array(e),a;for(a=0;a<r;++a)i[a]=jt(t[a],n[a]);for(;a<e;++a)o[a]=n[a];return function(s){for(a=0;a<r;++a)o[a]=i[a](s);return o}}function Ra(t,n){var e=new Date;return t=+t,n=+n,function(r){return e.setTime(t*(1-r)+n*r),e}}function j(t,n){return t=+t,n=+n,function(e){return t*(1-e)+n*e}}function Da(t,n){var e={},r={},i;(t===null||typeof t!="object")&&(t={}),(n===null||typeof n!="object")&&(n={});for(i in n)i in t?e[i]=jt(t[i],n[i]):r[i]=n[i];return function(o){for(i in e)r[i]=e[i](o);return r}}var Lr=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Ar=new RegExp(Lr.source,"g");function Sd(t){return function(){return t}}function _d(t){return function(n){return t(n)+""}}function Fe(t,n){var e=Lr.lastIndex=Ar.lastIndex=0,r,i,o,a=-1,s=[],l=[];for(t=t+"",n=n+"";(r=Lr.exec(t))&&(i=Ar.exec(n));)(o=i.index)>e&&(o=n.slice(e,o),s[a]?s[a]+=o:s[++a]=o),(r=r[0])===(i=i[0])?s[a]?s[a]+=i:s[++a]=i:(s[++a]=null,l.push({i:a,x:j(r,i)})),e=Ar.lastIndex;return e<n.length&&(o=n.slice(e),s[a]?s[a]+=o:s[++a]=o),s.length<2?l[0]?_d(l[0].x):Sd(n):(n=l.length,function(c){for(var u=0,h;u<n;++u)s[(h=l[u]).i]=h.x(c);return s.join("")})}function jt(t,n){var e=typeof n,r;return n==null||e==="boolean"?Ie(n):(e==="number"?j:e==="string"?(r=pt(n))?(n=r,Vt):Fe:n instanceof pt?Vt:n instanceof Date?Ra:Ha(n)?Ea:Array.isArray(n)?za:typeof n.valueOf!="function"&&typeof n.toString!="function"||isNaN(n)?Da:j)(t,n)}function Er(t,n){return t=+t,n=+n,function(e){return Math.round(t*(1-e)+n*e)}}var Na=180/Math.PI,Tn={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Hr(t,n,e,r,i,o){var a,s,l;return(a=Math.sqrt(t*t+n*n))&&(t/=a,n/=a),(l=t*e+n*r)&&(e-=t*l,r-=n*l),(s=Math.sqrt(e*e+r*r))&&(e/=s,r/=s,l/=s),t*r<n*e&&(t=-t,n=-n,l=-l,a=-a),{translateX:i,translateY:o,rotate:Math.atan2(n,t)*Na,skewX:Math.atan(l)*Na,scaleX:a,scaleY:s}}var Sn;function Za(t){let n=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(t+"");return n.isIdentity?Tn:Hr(n.a,n.b,n.c,n.d,n.e,n.f)}function Ia(t){return t==null?Tn:(Sn||(Sn=document.createElementNS("http://www.w3.org/2000/svg","g")),Sn.setAttribute("transform",t),(t=Sn.transform.baseVal.consolidate())?(t=t.matrix,Hr(t.a,t.b,t.c,t.d,t.e,t.f)):Tn)}function Fa(t,n,e,r){function i(c){return c.length?c.pop()+" ":""}function o(c,u,h,d,f,v){if(c!==h||u!==d){var x=f.push("translate(",null,n,null,e);v.push({i:x-4,x:j(c,h)},{i:x-2,x:j(u,d)})}else(h||d)&&f.push("translate("+h+n+d+e)}function a(c,u,h,d){c!==u?(c-u>180?u+=360:u-c>180&&(c+=360),d.push({i:h.push(i(h)+"rotate(",null,r)-2,x:j(c,u)})):u&&h.push(i(h)+"rotate("+u+r)}function s(c,u,h,d){c!==u?d.push({i:h.push(i(h)+"skewX(",null,r)-2,x:j(c,u)}):u&&h.push(i(h)+"skewX("+u+r)}function l(c,u,h,d,f,v){if(c!==h||u!==d){var x=f.push(i(f)+"scale(",null,",",null,")");v.push({i:x-4,x:j(c,h)},{i:x-2,x:j(u,d)})}else(h!==1||d!==1)&&f.push(i(f)+"scale("+h+","+d+")")}return function(c,u){var h=[],d=[];return c=t(c),u=t(u),o(c.translateX,c.translateY,u.translateX,u.translateY,h,d),a(c.rotate,u.rotate,h,d),s(c.skewX,u.skewX,h,d),l(c.scaleX,c.scaleY,u.scaleX,u.scaleY,h,d),c=u=null,function(f){for(var v=-1,x=d.length,q;++v<x;)h[(q=d[v]).i]=q.x(f);return h.join("")}}}var zr=Fa(Za,"px, ","px)","deg)"),Rr=Fa(Ia,", ",")",")");var he=0,$e=0,Pe=0,$a=1e3,_n,Oe,qn=0,Yt=0,Mn=0,Be=typeof performance=="object"&&performance.now?performance:Date,Oa=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function Ve(){return Yt||(Oa(qd),Yt=Be.now()+Mn)}function qd(){Yt=0}function Ue(){this._call=this._time=this._next=null}Ue.prototype=Cn.prototype={constructor:Ue,restart:function(t,n,e){if(typeof t!="function")throw new TypeError("callback is not a function");e=(e==null?Ve():+e)+(n==null?0:+n),!this._next&&Oe!==this&&(Oe?Oe._next=this:_n=this,Oe=this),this._call=t,this._time=e,Dr()},stop:function(){this._call&&(this._call=null,this._time=1/0,Dr())}};function Cn(t,n,e){var r=new Ue;return r.restart(t,n,e),r}function Ba(){Ve(),++he;for(var t=_n,n;t;)(n=Yt-t._time)>=0&&t._call.call(void 0,n),t=t._next;--he}function Pa(){Yt=(qn=Be.now())+Mn,he=$e=0;try{Ba()}finally{he=0,Cd(),Yt=0}}function Md(){var t=Be.now(),n=t-qn;n>$a&&(Mn-=n,qn=t)}function Cd(){for(var t,n=_n,e,r=1/0;n;)n._call?(r>n._time&&(r=n._time),t=n,n=n._next):(e=n._next,n._next=null,n=t?t._next=e:_n=e);Oe=t,Dr(r)}function Dr(t){if(!he){$e&&($e=clearTimeout($e));var n=t-Yt;n>24?(t<1/0&&($e=setTimeout(Pa,t-Be.now()-Mn)),Pe&&(Pe=clearInterval(Pe))):(Pe||(qn=Be.now(),Pe=setInterval(Md,$a)),he=1,Oa(Pa))}}function An(t,n,e){var r=new Ue;return n=n==null?0:+n,r.restart(i=>{r.stop(),t(i+n)},n,e),r}var Ad=wr("start","end","cancel","interrupt"),Ld=[],ja=0,Ua=1,En=2,Ln=3,Va=4,Hn=5,je=6;function Et(t,n,e,r,i,o){var a=t.__transition;if(!a)t.__transition={};else if(e in a)return;Ed(t,e,{name:n,index:r,group:i,on:Ad,tween:Ld,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:ja})}function Ye(t,n){var e=O(t,n);if(e.state>ja)throw new Error("too late; already scheduled");return e}function Y(t,n){var e=O(t,n);if(e.state>Ln)throw new Error("too late; already running");return e}function O(t,n){var e=t.__transition;if(!e||!(e=e[n]))throw new Error("transition not found");return e}function Ed(t,n,e){var r=t.__transition,i;r[n]=e,e.timer=Cn(o,0,e.time);function o(c){e.state=Ua,e.timer.restart(a,e.delay,e.time),e.delay<=c&&a(c-e.delay)}function a(c){var u,h,d,f;if(e.state!==Ua)return l();for(u in r)if(f=r[u],f.name===e.name){if(f.state===Ln)return An(a);f.state===Va?(f.state=je,f.timer.stop(),f.on.call("interrupt",t,t.__data__,f.index,f.group),delete r[u]):+u<n&&(f.state=je,f.timer.stop(),f.on.call("cancel",t,t.__data__,f.index,f.group),delete r[u])}if(An(function(){e.state===Ln&&(e.state=Va,e.timer.restart(s,e.delay,e.time),s(c))}),e.state=En,e.on.call("start",t,t.__data__,e.index,e.group),e.state===En){for(e.state=Ln,i=new Array(d=e.tween.length),u=0,h=-1;u<d;++u)(f=e.tween[u].value.call(t,t.__data__,e.index,e.group))&&(i[++h]=f);i.length=h+1}}function s(c){for(var u=c<e.duration?e.ease.call(null,c/e.duration):(e.timer.restart(l),e.state=Hn,1),h=-1,d=i.length;++h<d;)i[h].call(t,u);e.state===Hn&&(e.on.call("end",t,t.__data__,e.index,e.group),l())}function l(){e.state=je,e.timer.stop(),delete r[n];for(var c in r)return;delete t.__transition}}function zn(t,n){var e=t.__transition,r,i,o=!0,a;if(e){n=n==null?null:n+"";for(a in e){if((r=e[a]).name!==n){o=!1;continue}i=r.state>En&&r.state<Hn,r.state=je,r.timer.stop(),r.on.call(i?"interrupt":"cancel",t,t.__data__,r.index,r.group),delete e[a]}o&&delete t.__transition}}function Ya(t){return this.each(function(){zn(this,t)})}function Hd(t,n){var e,r;return function(){var i=Y(this,t),o=i.tween;if(o!==e){r=e=o;for(var a=0,s=r.length;a<s;++a)if(r[a].name===n){r=r.slice(),r.splice(a,1);break}}i.tween=r}}function zd(t,n,e){var r,i;if(typeof e!="function")throw new Error;return function(){var o=Y(this,t),a=o.tween;if(a!==r){i=(r=a).slice();for(var s={name:n,value:e},l=0,c=i.length;l<c;++l)if(i[l].name===n){i[l]=s;break}l===c&&i.push(s)}o.tween=i}}function Wa(t,n){var e=this._id;if(t+="",arguments.length<2){for(var r=O(this.node(),e).tween,i=0,o=r.length,a;i<o;++i)if((a=r[i]).name===t)return a.value;return null}return this.each((n==null?Hd:zd)(e,t,n))}function pe(t,n,e){var r=t._id;return t.each(function(){var i=Y(this,r);(i.value||(i.value={}))[n]=e.apply(this,arguments)}),function(i){return O(i,r).value[n]}}function Rn(t,n){var e;return(typeof n=="number"?j:n instanceof pt?Vt:(e=pt(n))?(n=e,Vt):Fe)(t,n)}function Rd(t){return function(){this.removeAttribute(t)}}function Dd(t){return function(){this.removeAttributeNS(t.space,t.local)}}function Nd(t,n,e){var r,i=e+"",o;return function(){var a=this.getAttribute(t);return a===i?null:a===r?o:o=n(r=a,e)}}function Zd(t,n,e){var r,i=e+"",o;return function(){var a=this.getAttributeNS(t.space,t.local);return a===i?null:a===r?o:o=n(r=a,e)}}function Id(t,n,e){var r,i,o;return function(){var a,s=e(this),l;return s==null?void this.removeAttribute(t):(a=this.getAttribute(t),l=s+"",a===l?null:a===r&&l===i?o:(i=l,o=n(r=a,s)))}}function Fd(t,n,e){var r,i,o;return function(){var a,s=e(this),l;return s==null?void this.removeAttributeNS(t.space,t.local):(a=this.getAttributeNS(t.space,t.local),l=s+"",a===l?null:a===r&&l===i?o:(i=l,o=n(r=a,s)))}}function Xa(t,n){var e=_t(t),r=e==="transform"?Rr:Rn;return this.attrTween(t,typeof n=="function"?(e.local?Fd:Id)(e,r,pe(this,"attr."+t,n)):n==null?(e.local?Dd:Rd)(e):(e.local?Zd:Nd)(e,r,n))}function Pd(t,n){return function(e){this.setAttribute(t,n.call(this,e))}}function $d(t,n){return function(e){this.setAttributeNS(t.space,t.local,n.call(this,e))}}function Od(t,n){var e,r;function i(){var o=n.apply(this,arguments);return o!==r&&(e=(r=o)&&$d(t,o)),e}return i._value=n,i}function Bd(t,n){var e,r;function i(){var o=n.apply(this,arguments);return o!==r&&(e=(r=o)&&Pd(t,o)),e}return i._value=n,i}function Ka(t,n){var e="attr."+t;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(n==null)return this.tween(e,null);if(typeof n!="function")throw new Error;var r=_t(t);return this.tween(e,(r.local?Od:Bd)(r,n))}function Ud(t,n){return function(){Ye(this,t).delay=+n.apply(this,arguments)}}function Vd(t,n){return n=+n,function(){Ye(this,t).delay=n}}function Ja(t){var n=this._id;return arguments.length?this.each((typeof t=="function"?Ud:Vd)(n,t)):O(this.node(),n).delay}function jd(t,n){return function(){Y(this,t).duration=+n.apply(this,arguments)}}function Yd(t,n){return n=+n,function(){Y(this,t).duration=n}}function Ga(t){var n=this._id;return arguments.length?this.each((typeof t=="function"?jd:Yd)(n,t)):O(this.node(),n).duration}function Wd(t,n){if(typeof n!="function")throw new Error;return function(){Y(this,t).ease=n}}function Qa(t){var n=this._id;return arguments.length?this.each(Wd(n,t)):O(this.node(),n).ease}function Xd(t,n){return function(){var e=n.apply(this,arguments);if(typeof e!="function")throw new Error;Y(this,t).ease=e}}function ts(t){if(typeof t!="function")throw new Error;return this.each(Xd(this._id,t))}function es(t){typeof t!="function"&&(t=ze(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o=n[i],a=o.length,s=r[i]=[],l,c=0;c<a;++c)(l=o[c])&&t.call(l,l.__data__,c,o)&&s.push(l);return new Q(r,this._parents,this._name,this._id)}function ns(t){if(t._id!==this._id)throw new Error;for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),a=new Array(r),s=0;s<o;++s)for(var l=n[s],c=e[s],u=l.length,h=a[s]=new Array(u),d,f=0;f<u;++f)(d=l[f]||c[f])&&(h[f]=d);for(;s<r;++s)a[s]=n[s];return new Q(a,this._parents,this._name,this._id)}function Kd(t){return(t+"").trim().split(/^|\s+/).every(function(n){var e=n.indexOf(".");return e>=0&&(n=n.slice(0,e)),!n||n==="start"})}function Jd(t,n,e){var r,i,o=Kd(n)?Ye:Y;return function(){var a=o(this,t),s=a.on;s!==r&&(i=(r=s).copy()).on(n,e),a.on=i}}function rs(t,n){var e=this._id;return arguments.length<2?O(this.node(),e).on.on(t):this.each(Jd(e,t,n))}function Gd(t){return function(){var n=this.parentNode;for(var e in this.__transition)if(+e!==t)return;n&&n.removeChild(this)}}function is(){return this.on("end.remove",Gd(this._id))}function os(t){var n=this._name,e=this._id;typeof t!="function"&&(t=Ot(t));for(var r=this._groups,i=r.length,o=new Array(i),a=0;a<i;++a)for(var s=r[a],l=s.length,c=o[a]=new Array(l),u,h,d=0;d<l;++d)(u=s[d])&&(h=t.call(u,u.__data__,d,s))&&("__data__"in u&&(h.__data__=u.__data__),c[d]=h,Et(c[d],n,e,d,c,O(u,e)));return new Q(o,this._parents,n,e)}function as(t){var n=this._name,e=this._id;typeof t!="function"&&(t=He(t));for(var r=this._groups,i=r.length,o=[],a=[],s=0;s<i;++s)for(var l=r[s],c=l.length,u,h=0;h<c;++h)if(u=l[h]){for(var d=t.call(u,u.__data__,h,l),f,v=O(u,e),x=0,q=d.length;x<q;++x)(f=d[x])&&Et(f,n,e,x,d,v);o.push(d),a.push(u)}return new Q(o,a,n,e)}var Qd=qt.prototype.constructor;function ss(){return new Qd(this._groups,this._parents)}function th(t,n){var e,r,i;return function(){var o=Lt(this,t),a=(this.style.removeProperty(t),Lt(this,t));return o===a?null:o===e&&a===r?i:i=n(e=o,r=a)}}function ls(t){return function(){this.style.removeProperty(t)}}function eh(t,n,e){var r,i=e+"",o;return function(){var a=Lt(this,t);return a===i?null:a===r?o:o=n(r=a,e)}}function nh(t,n,e){var r,i,o;return function(){var a=Lt(this,t),s=e(this),l=s+"";return s==null&&(l=s=(this.style.removeProperty(t),Lt(this,t))),a===l?null:a===r&&l===i?o:(i=l,o=n(r=a,s))}}function rh(t,n){var e,r,i,o="style."+n,a="end."+o,s;return function(){var l=Y(this,t),c=l.on,u=l.value[o]==null?s||(s=ls(n)):void 0;(c!==e||i!==u)&&(r=(e=c).copy()).on(a,i=u),l.on=r}}function cs(t,n,e){var r=(t+="")=="transform"?zr:Rn;return n==null?this.styleTween(t,th(t,r)).on("end.style."+t,ls(t)):typeof n=="function"?this.styleTween(t,nh(t,r,pe(this,"style."+t,n))).each(rh(this._id,t)):this.styleTween(t,eh(t,r,n),e).on("end.style."+t,null)}function ih(t,n,e){return function(r){this.style.setProperty(t,n.call(this,r),e)}}function oh(t,n,e){var r,i;function o(){var a=n.apply(this,arguments);return a!==i&&(r=(i=a)&&ih(t,a,e)),r}return o._value=n,o}function us(t,n,e){var r="style."+(t+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(n==null)return this.tween(r,null);if(typeof n!="function")throw new Error;return this.tween(r,oh(t,n,e==null?"":e))}function ah(t){return function(){this.textContent=t}}function sh(t){return function(){var n=t(this);this.textContent=n==null?"":n}}function ds(t){return this.tween("text",typeof t=="function"?sh(pe(this,"text",t)):ah(t==null?"":t+""))}function lh(t){return function(n){this.textContent=t.call(this,n)}}function ch(t){var n,e;function r(){var i=t.apply(this,arguments);return i!==e&&(n=(e=i)&&lh(i)),n}return r._value=t,r}function hs(t){var n="text";if(arguments.length<1)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;return this.tween(n,ch(t))}function ps(){for(var t=this._name,n=this._id,e=Dn(),r=this._groups,i=r.length,o=0;o<i;++o)for(var a=r[o],s=a.length,l,c=0;c<s;++c)if(l=a[c]){var u=O(l,n);Et(l,t,e,c,a,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new Q(r,this._parents,t,e)}function fs(){var t,n,e=this,r=e._id,i=e.size();return new Promise(function(o,a){var s={value:a},l={value:function(){--i===0&&o()}};e.each(function(){var c=Y(this,r),u=c.on;u!==t&&(n=(t=u).copy(),n._.cancel.push(s),n._.interrupt.push(s),n._.end.push(l)),c.on=n}),i===0&&o()})}var uh=0;function Q(t,n,e,r){this._groups=t,this._parents=n,this._name=e,this._id=r}function ms(t){return qt().transition(t)}function Dn(){return++uh}var Mt=qt.prototype;Q.prototype=ms.prototype={constructor:Q,select:os,selectAll:as,selectChild:Mt.selectChild,selectChildren:Mt.selectChildren,filter:es,merge:ns,selection:ss,transition:ps,call:Mt.call,nodes:Mt.nodes,node:Mt.node,size:Mt.size,empty:Mt.empty,each:Mt.each,on:rs,attr:Xa,attrTween:Ka,style:cs,styleTween:us,text:ds,textTween:hs,remove:is,tween:Wa,delay:Ja,duration:Ga,ease:Qa,easeVarying:ts,end:fs,[Symbol.iterator]:Mt[Symbol.iterator]};function Nn(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}var dh={time:null,delay:0,duration:250,ease:Nn};function hh(t,n){for(var e;!(e=t.__transition)||!(e=e[n]);)if(!(t=t.parentNode))throw new Error(`transition ${n} not found`);return e}function gs(t){var n,e;t instanceof Q?(n=t._id,t=t._name):(n=Dn(),(e=dh).time=Ve(),t=t==null?null:t+"");for(var r=this._groups,i=r.length,o=0;o<i;++o)for(var a=r[o],s=a.length,l,c=0;c<s;++c)(l=a[c])&&Et(l,t,n,c,a,e||hh(l,n));return new Q(r,this._parents,t,n)}qt.prototype.interrupt=Ya;qt.prototype.transition=gs;var{abs:ky,max:Ty,min:Sy}=Math;function vs(t){return[+t[0],+t[1]]}function ph(t){return[vs(t[0]),vs(t[1])]}var _y={name:"x",handles:["w","e"].map(Nr),input:function(t,n){return t==null?null:[[+t[0],n[0][1]],[+t[1],n[1][1]]]},output:function(t){return t&&[t[0][0],t[1][0]]}},qy={name:"y",handles:["n","s"].map(Nr),input:function(t,n){return t==null?null:[[n[0][0],+t[0]],[n[1][0],+t[1]]]},output:function(t){return t&&[t[0][1],t[1][1]]}},My={name:"xy",handles:["n","w","e","s","nw","ne","sw","se"].map(Nr),input:function(t){return t==null?null:ph(t)},output:function(t){return t}};function Nr(t){return{type:t}}var Zr=Math.PI,Ir=2*Zr,Wt=1e-6,fh=Ir-Wt;function xs(t){this._+=t[0];for(let n=1,e=t.length;n<e;++n)this._+=arguments[n]+t[n]}function mh(t){let n=Math.floor(t);if(!(n>=0))throw new Error(`invalid digits: ${t}`);if(n>15)return xs;let e=eo(10,n);return function(r){this._+=r[0];for(let i=1,o=r.length;i<o;++i)this._+=Math.round(arguments[i]*e)/e+r[i]}}var Xt=class{constructor(n){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=n==null?xs:mh(n)}moveTo(n,e){this._append`M${this._x0=this._x1=+n},${this._y0=this._y1=+e}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(n,e){this._append`L${this._x1=+n},${this._y1=+e}`}quadraticCurveTo(n,e,r,i){this._append`Q${+n},${+e},${this._x1=+r},${this._y1=+i}`}bezierCurveTo(n,e,r,i,o,a){this._append`C${+n},${+e},${+r},${+i},${this._x1=+o},${this._y1=+a}`}arcTo(n,e,r,i,o){if(n=+n,e=+e,r=+r,i=+i,o=+o,o<0)throw new Error(`negative radius: ${o}`);let a=this._x1,s=this._y1,l=r-n,c=i-e,u=a-n,h=s-e,d=u*u+h*h;if(this._x1===null)this._append`M${this._x1=n},${this._y1=e}`;else if(d>Wt)if(!(Math.abs(h*l-c*u)>Wt)||!o)this._append`L${this._x1=n},${this._y1=e}`;else{let f=r-a,v=i-s,x=l*l+c*c,q=f*f+v*v,g=Math.sqrt(x),T=Math.sqrt(d),b=o*Math.tan((Zr-Math.acos((x+d-q)/(2*g*T)))/2),M=b/T,_=b/g;Math.abs(M-1)>Wt&&this._append`L${n+M*u},${e+M*h}`,this._append`A${o},${o},0,0,${+(h*f>u*v)},${this._x1=n+_*l},${this._y1=e+_*c}`}}arc(n,e,r,i,o,a){if(n=+n,e=+e,r=+r,a=!!a,r<0)throw new Error(`negative radius: ${r}`);let s=r*Math.cos(i),l=r*Math.sin(i),c=n+s,u=e+l,h=1^a,d=a?i-o:o-i;this._x1===null?this._append`M${c},${u}`:(Math.abs(this._x1-c)>Wt||Math.abs(this._y1-u)>Wt)&&this._append`L${c},${u}`,r&&(d<0&&(d=d%Ir+Ir),d>fh?this._append`A${r},${r},0,1,${h},${n-s},${e-l}A${r},${r},0,1,${h},${this._x1=c},${this._y1=u}`:d>Wt&&this._append`A${r},${r},0,${+(d>=Zr)},${h},${this._x1=n+r*Math.cos(o)},${this._y1=e+r*Math.sin(o)}`)}rect(n,e,r,i){this._append`M${this._x0=this._x1=+n},${this._y0=this._y1=+e}h${r=+r}v${+i}h${-r}Z`}toString(){return this._}};function ys(){return new Xt}ys.prototype=Xt.prototype;function bs(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)}function Kt(t,n){if((e=(t=n?t.toExponential(n-1):t.toExponential()).indexOf("e"))<0)return null;var e,r=t.slice(0,e);return[r.length>1?r[0]+r.slice(2):r,+t.slice(e+1)]}function bt(t){return t=Kt(Math.abs(t)),t?t[1]:NaN}function ws(t,n){return function(e,r){for(var i=e.length,o=[],a=0,s=t[0],l=0;i>0&&s>0&&(l+s+1>r&&(s=Math.max(1,r-l)),o.push(e.substring(i-=s,i+s)),!((l+=s+1)>r));)s=t[a=(a+1)%t.length];return o.reverse().join(n)}}function ks(t){return function(n){return n.replace(/[0-9]/g,function(e){return t[+e]})}}var gh=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Ht(t){if(!(n=gh.exec(t)))throw new Error("invalid format: "+t);var n;return new Zn({fill:n[1],align:n[2],sign:n[3],symbol:n[4],zero:n[5],width:n[6],comma:n[7],precision:n[8]&&n[8].slice(1),trim:n[9],type:n[10]})}Ht.prototype=Zn.prototype;function Zn(t){this.fill=t.fill===void 0?" ":t.fill+"",this.align=t.align===void 0?">":t.align+"",this.sign=t.sign===void 0?"-":t.sign+"",this.symbol=t.symbol===void 0?"":t.symbol+"",this.zero=!!t.zero,this.width=t.width===void 0?void 0:+t.width,this.comma=!!t.comma,this.precision=t.precision===void 0?void 0:+t.precision,this.trim=!!t.trim,this.type=t.type===void 0?"":t.type+""}Zn.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function Ts(t){t:for(var n=t.length,e=1,r=-1,i;e<n;++e)switch(t[e]){case".":r=i=e;break;case"0":r===0&&(r=e),i=e;break;default:if(!+t[e])break t;r>0&&(r=0);break}return r>0?t.slice(0,r)+t.slice(i+1):t}var Fr;function Ss(t,n){var e=Kt(t,n);if(!e)return t+"";var r=e[0],i=e[1],o=i-(Fr=Math.max(-8,Math.min(8,Math.floor(i/3)))*3)+1,a=r.length;return o===a?r:o>a?r+new Array(o-a+1).join("0"):o>0?r.slice(0,o)+"."+r.slice(o):"0."+new Array(1-o).join("0")+Kt(t,Math.max(0,n+o-1))[0]}function Pr(t,n){var e=Kt(t,n);if(!e)return t+"";var r=e[0],i=e[1];return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")}var $r={"%":(t,n)=>(t*100).toFixed(n),b:t=>Math.round(t).toString(2),c:t=>t+"",d:bs,e:(t,n)=>t.toExponential(n),f:(t,n)=>t.toFixed(n),g:(t,n)=>t.toPrecision(n),o:t=>Math.round(t).toString(8),p:(t,n)=>Pr(t*100,n),r:Pr,s:Ss,X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function Or(t){return t}var _s=Array.prototype.map,qs=["y","z","a","f","p","n","\xB5","m","","k","M","G","T","P","E","Z","Y"];function Ms(t){var n=t.grouping===void 0||t.thousands===void 0?Or:ws(_s.call(t.grouping,Number),t.thousands+""),e=t.currency===void 0?"":t.currency[0]+"",r=t.currency===void 0?"":t.currency[1]+"",i=t.decimal===void 0?".":t.decimal+"",o=t.numerals===void 0?Or:ks(_s.call(t.numerals,String)),a=t.percent===void 0?"%":t.percent+"",s=t.minus===void 0?"\u2212":t.minus+"",l=t.nan===void 0?"NaN":t.nan+"";function c(h){h=Ht(h);var d=h.fill,f=h.align,v=h.sign,x=h.symbol,q=h.zero,g=h.width,T=h.comma,b=h.precision,M=h.trim,_=h.type;_==="n"?(T=!0,_="g"):$r[_]||(b===void 0&&(b=12),M=!0,_="g"),(q||d==="0"&&f==="=")&&(q=!0,d="0",f="=");var w=x==="$"?e:x==="#"&&/[boxX]/.test(_)?"0"+_.toLowerCase():"",k=x==="$"?r:/[%p]/.test(_)?a:"",L=$r[_],N=/[defgprs%]/.test(_);b=b===void 0?6:/[gprs]/.test(_)?Math.max(1,Math.min(21,b)):Math.max(0,Math.min(20,b));function z(C){var R=w,m=k,A,B,nt;if(_==="c")m=L(C)+m,C="";else{C=+C;var J=C<0||1/C<0;if(C=isNaN(C)?l:L(Math.abs(C),b),M&&(C=Ts(C)),J&&+C==0&&v!=="+"&&(J=!1),R=(J?v==="("?v:s:v==="-"||v==="("?"":v)+R,m=(_==="s"?qs[8+Fr/3]:"")+m+(J&&v==="("?")":""),N){for(A=-1,B=C.length;++A<B;)if(nt=C.charCodeAt(A),48>nt||nt>57){m=(nt===46?i+C.slice(A+1):C.slice(A))+m,C=C.slice(0,A);break}}}T&&!q&&(C=n(C,1/0));var rt=R.length+C.length+m.length,X=rt<g?new Array(g-rt+1).join(d):"";switch(T&&q&&(C=n(X+C,X.length?g-m.length:1/0),X=""),f){case"<":C=R+C+m+X;break;case"=":C=R+X+C+m;break;case"^":C=X.slice(0,rt=X.length>>1)+R+C+m+X.slice(rt);break;default:C=X+R+C+m;break}return o(C)}return z.toString=function(){return h+""},z}function u(h,d){var f=c((h=Ht(h),h.type="f",h)),v=Math.max(-8,Math.min(8,Math.floor(bt(d)/3)))*3,x=Math.pow(10,-v),q=qs[8+v/3];return function(g){return f(x*g)+q}}return{format:c,formatPrefix:u}}var In,Jt,Fn;Br({thousands:",",grouping:[3],currency:["$",""]});function Br(t){return In=Ms(t),Jt=In.format,Fn=In.formatPrefix,In}function Ur(t){return Math.max(0,-bt(Math.abs(t)))}function Vr(t,n){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(bt(n)/3)))*3-bt(Math.abs(t)))}function jr(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,bt(n)-bt(t))+1}function zt(t,n){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(n).domain(t);break}return this}var Yr=Symbol("implicit");function st(){var t=new le,n=[],e=[],r=Yr;function i(o){let a=t.get(o);if(a===void 0){if(r!==Yr)return r;t.set(o,a=n.push(o)-1)}return e[a%e.length]}return i.domain=function(o){if(!arguments.length)return n.slice();n=[],t=new le;for(let a of o)t.has(a)||t.set(a,n.push(a)-1);return i},i.range=function(o){return arguments.length?(e=Array.from(o),i):e.slice()},i.unknown=function(o){return arguments.length?(r=o,i):r},i.copy=function(){return st(n,e).unknown(r)},zt.apply(i,arguments),i}function Rt(){var t=st().unknown(void 0),n=t.domain,e=t.range,r=0,i=1,o,a,s=!1,l=0,c=0,u=.5;delete t.unknown;function h(){var d=n().length,f=i<r,v=f?i:r,x=f?r:i;o=(x-v)/Math.max(1,d-l+c*2),s&&(o=Math.floor(o)),v+=(x-v-o*(d-l))*u,a=o*(1-l),s&&(v=Math.round(v),a=Math.round(a));var q=cn(d).map(function(g){return v+o*g});return e(f?q.reverse():q)}return t.domain=function(d){return arguments.length?(n(d),h()):n()},t.range=function(d){return arguments.length?([r,i]=d,r=+r,i=+i,h()):[r,i]},t.rangeRound=function(d){return[r,i]=d,r=+r,i=+i,s=!0,h()},t.bandwidth=function(){return a},t.step=function(){return o},t.round=function(d){return arguments.length?(s=!!d,h()):s},t.padding=function(d){return arguments.length?(l=Math.min(1,c=+d),h()):l},t.paddingInner=function(d){return arguments.length?(l=Math.min(1,d),h()):l},t.paddingOuter=function(d){return arguments.length?(c=+d,h()):c},t.align=function(d){return arguments.length?(u=Math.max(0,Math.min(1,d)),h()):u},t.copy=function(){return Rt(n(),[r,i]).round(s).paddingInner(l).paddingOuter(c).align(u)},zt.apply(h(),arguments)}function Wr(t){return function(){return t}}function Xr(t){return+t}var Cs=[0,1];function fe(t){return t}function Kr(t,n){return(n-=t=+t)?function(e){return(e-t)/n}:Wr(isNaN(n)?NaN:.5)}function vh(t,n){var e;return t>n&&(e=t,t=n,n=e),function(r){return Math.max(t,Math.min(n,r))}}function xh(t,n,e){var r=t[0],i=t[1],o=n[0],a=n[1];return i<r?(r=Kr(i,r),o=e(a,o)):(r=Kr(r,i),o=e(o,a)),function(s){return o(r(s))}}function yh(t,n,e){var r=Math.min(t.length,n.length)-1,i=new Array(r),o=new Array(r),a=-1;for(t[r]<t[0]&&(t=t.slice().reverse(),n=n.slice().reverse());++a<r;)i[a]=Kr(t[a],t[a+1]),o[a]=e(n[a],n[a+1]);return function(s){var l=gr(t,s,1,r)-1;return o[l](i[l](s))}}function Pn(t,n){return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())}function bh(){var t=Cs,n=Cs,e=jt,r,i,o,a=fe,s,l,c;function u(){var d=Math.min(t.length,n.length);return a!==fe&&(a=vh(t[0],t[d-1])),s=d>2?yh:xh,l=c=null,h}function h(d){return d==null||isNaN(d=+d)?o:(l||(l=s(t.map(r),n,e)))(r(a(d)))}return h.invert=function(d){return a(i((c||(c=s(n,t.map(r),j)))(d)))},h.domain=function(d){return arguments.length?(t=Array.from(d,Xr),u()):t.slice()},h.range=function(d){return arguments.length?(n=Array.from(d),u()):n.slice()},h.rangeRound=function(d){return n=Array.from(d),e=Er,u()},h.clamp=function(d){return arguments.length?(a=d?!0:fe,u()):a!==fe},h.interpolate=function(d){return arguments.length?(e=d,u()):e},h.unknown=function(d){return arguments.length?(o=d,h):o},function(d,f){return r=d,i=f,u()}}function We(){return bh()(fe,fe)}function Jr(t,n,e,r){var i=ce(t,n,e),o;switch(r=Ht(r==null?",f":r),r.type){case"s":{var a=Math.max(Math.abs(t),Math.abs(n));return r.precision==null&&!isNaN(o=Vr(i,a))&&(r.precision=o),Fn(r,a)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(o=jr(i,Math.max(Math.abs(t),Math.abs(n))))&&(r.precision=o-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(o=Ur(i))&&(r.precision=o-(r.type==="%")*2);break}}return Jt(r)}function wh(t){var n=t.domain;return t.ticks=function(e){var r=n();return ln(r[0],r[r.length-1],e==null?10:e)},t.tickFormat=function(e,r){var i=n();return Jr(i[0],i[i.length-1],e==null?10:e,r)},t.nice=function(e){e==null&&(e=10);var r=n(),i=0,o=r.length-1,a=r[i],s=r[o],l,c,u=10;for(s<a&&(c=a,a=s,s=c,c=i,i=o,o=c);u-- >0;){if(c=Le(a,s,e),c===l)return r[i]=a,r[o]=s,n(r);if(c>0)a=Math.floor(a/c)*c,s=Math.ceil(s/c)*c;else if(c<0)a=Math.ceil(a*c)/c,s=Math.floor(s*c)/c;else break;l=c}return t},t}function lt(){var t=We();return t.copy=function(){return Pn(t,lt())},zt.apply(t,arguments),wh(t)}function Gr(t,n){t=t.slice();var e=0,r=t.length-1,i=t[e],o=t[r],a;return o<i&&(a=e,e=r,r=a,a=i,i=o,o=a),t[e]=n.floor(i),t[r]=n.ceil(o),t}var Qr=new Date,ti=new Date;function I(t,n,e,r){function i(o){return t(o=arguments.length===0?new Date:new Date(+o)),o}return i.floor=o=>(t(o=new Date(+o)),o),i.ceil=o=>(t(o=new Date(o-1)),n(o,1),t(o),o),i.round=o=>{let a=i(o),s=i.ceil(o);return o-a<s-o?a:s},i.offset=(o,a)=>(n(o=new Date(+o),a==null?1:Math.floor(a)),o),i.range=(o,a,s)=>{let l=[];if(o=i.ceil(o),s=s==null?1:Math.floor(s),!(o<a)||!(s>0))return l;let c;do l.push(c=new Date(+o)),n(o,s),t(o);while(c<o&&o<a);return l},i.filter=o=>I(a=>{if(a>=a)for(;t(a),!o(a);)a.setTime(a-1)},(a,s)=>{if(a>=a)if(s<0)for(;++s<=0;)for(;n(a,-1),!o(a););else for(;--s>=0;)for(;n(a,1),!o(a););}),e&&(i.count=(o,a)=>(Qr.setTime(+o),ti.setTime(+a),t(Qr),t(ti),Math.floor(e(Qr,ti))),i.every=o=>(o=Math.floor(o),!isFinite(o)||!(o>0)?null:o>1?i.filter(r?a=>r(a)%o===0:a=>i.count(0,a)%o===0):i)),i}var Xe=I(()=>{},(t,n)=>{t.setTime(+t+n)},(t,n)=>n-t);Xe.every=t=>(t=Math.floor(t),!isFinite(t)||!(t>0)?null:t>1?I(n=>{n.setTime(Math.floor(n/t)*t)},(n,e)=>{n.setTime(+n+e*t)},(n,e)=>(e-n)/t):Xe);var Jb=Xe.range;var wt=I(t=>{t.setTime(t-t.getMilliseconds())},(t,n)=>{t.setTime(+t+n*1e3)},(t,n)=>(n-t)/1e3,t=>t.getUTCSeconds()),As=wt.range;var me=I(t=>{t.setTime(t-t.getMilliseconds()-t.getSeconds()*1e3)},(t,n)=>{t.setTime(+t+n*6e4)},(t,n)=>(n-t)/6e4,t=>t.getMinutes()),kh=me.range,$n=I(t=>{t.setUTCSeconds(0,0)},(t,n)=>{t.setTime(+t+n*6e4)},(t,n)=>(n-t)/6e4,t=>t.getUTCMinutes()),Th=$n.range;var ge=I(t=>{t.setTime(t-t.getMilliseconds()-t.getSeconds()*1e3-t.getMinutes()*6e4)},(t,n)=>{t.setTime(+t+n*36e5)},(t,n)=>(n-t)/36e5,t=>t.getHours()),Sh=ge.range,On=I(t=>{t.setUTCMinutes(0,0,0)},(t,n)=>{t.setTime(+t+n*36e5)},(t,n)=>(n-t)/36e5,t=>t.getUTCHours()),_h=On.range;var Ct=I(t=>t.setHours(0,0,0,0),(t,n)=>t.setDate(t.getDate()+n),(t,n)=>(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*6e4)/864e5,t=>t.getDate()-1),qh=Ct.range,Je=I(t=>{t.setUTCHours(0,0,0,0)},(t,n)=>{t.setUTCDate(t.getUTCDate()+n)},(t,n)=>(n-t)/864e5,t=>t.getUTCDate()-1),Mh=Je.range,Bn=I(t=>{t.setUTCHours(0,0,0,0)},(t,n)=>{t.setUTCDate(t.getUTCDate()+n)},(t,n)=>(n-t)/864e5,t=>Math.floor(t/864e5)),Ch=Bn.range;function te(t){return I(n=>{n.setDate(n.getDate()-(n.getDay()+7-t)%7),n.setHours(0,0,0,0)},(n,e)=>{n.setDate(n.getDate()+e*7)},(n,e)=>(e-n-(e.getTimezoneOffset()-n.getTimezoneOffset())*6e4)/6048e5)}var At=te(0),ve=te(1),Es=te(2),Hs=te(3),Dt=te(4),zs=te(5),Rs=te(6),Ds=At.range,Ah=ve.range,Lh=Es.range,Eh=Hs.range,Hh=Dt.range,zh=zs.range,Rh=Rs.range;function ee(t){return I(n=>{n.setUTCDate(n.getUTCDate()-(n.getUTCDay()+7-t)%7),n.setUTCHours(0,0,0,0)},(n,e)=>{n.setUTCDate(n.getUTCDate()+e*7)},(n,e)=>(e-n)/6048e5)}var ne=ee(0),xe=ee(1),Ns=ee(2),Zs=ee(3),Nt=ee(4),Is=ee(5),Fs=ee(6),Ps=ne.range,Dh=xe.range,Nh=Ns.range,Zh=Zs.range,Ih=Nt.range,Fh=Is.range,Ph=Fs.range;var ye=I(t=>{t.setDate(1),t.setHours(0,0,0,0)},(t,n)=>{t.setMonth(t.getMonth()+n)},(t,n)=>n.getMonth()-t.getMonth()+(n.getFullYear()-t.getFullYear())*12,t=>t.getMonth()),$h=ye.range,Un=I(t=>{t.setUTCDate(1),t.setUTCHours(0,0,0,0)},(t,n)=>{t.setUTCMonth(t.getUTCMonth()+n)},(t,n)=>n.getUTCMonth()-t.getUTCMonth()+(n.getUTCFullYear()-t.getUTCFullYear())*12,t=>t.getUTCMonth()),Oh=Un.range;var ct=I(t=>{t.setMonth(0,1),t.setHours(0,0,0,0)},(t,n)=>{t.setFullYear(t.getFullYear()+n)},(t,n)=>n.getFullYear()-t.getFullYear(),t=>t.getFullYear());ct.every=t=>!isFinite(t=Math.floor(t))||!(t>0)?null:I(n=>{n.setFullYear(Math.floor(n.getFullYear()/t)*t),n.setMonth(0,1),n.setHours(0,0,0,0)},(n,e)=>{n.setFullYear(n.getFullYear()+e*t)});var Bh=ct.range,ft=I(t=>{t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},(t,n)=>{t.setUTCFullYear(t.getUTCFullYear()+n)},(t,n)=>n.getUTCFullYear()-t.getUTCFullYear(),t=>t.getUTCFullYear());ft.every=t=>!isFinite(t=Math.floor(t))||!(t>0)?null:I(n=>{n.setUTCFullYear(Math.floor(n.getUTCFullYear()/t)*t),n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0)},(n,e)=>{n.setUTCFullYear(n.getUTCFullYear()+e*t)});var Uh=ft.range;function Os(t,n,e,r,i,o){let a=[[wt,1,1e3],[wt,5,5*1e3],[wt,15,15*1e3],[wt,30,30*1e3],[o,1,6e4],[o,5,5*6e4],[o,15,15*6e4],[o,30,30*6e4],[i,1,36e5],[i,3,3*36e5],[i,6,6*36e5],[i,12,12*36e5],[r,1,864e5],[r,2,2*864e5],[e,1,6048e5],[n,1,2592e6],[n,3,3*2592e6],[t,1,31536e6]];function s(c,u,h){let d=u<c;d&&([c,u]=[u,c]);let f=h&&typeof h.range=="function"?h:l(c,u,h),v=f?f.range(c,+u+1):[];return d?v.reverse():v}function l(c,u,h){let d=Math.abs(u-c)/h,f=$t(([,,q])=>q).right(a,d);if(f===a.length)return t.every(ce(c/31536e6,u/31536e6,h));if(f===0)return Xe.every(Math.max(ce(c,u,h),1));let[v,x]=a[d/a[f-1][2]<a[f][2]/d?f-1:f];return v.every(x)}return[s,l]}var[jh,Yh]=Os(ft,Un,ne,Bn,On,$n),[ei,ni]=Os(ct,ye,At,Ct,ge,me);function ri(t){if(0<=t.y&&t.y<100){var n=new Date(-1,t.m,t.d,t.H,t.M,t.S,t.L);return n.setFullYear(t.y),n}return new Date(t.y,t.m,t.d,t.H,t.M,t.S,t.L)}function ii(t){if(0<=t.y&&t.y<100){var n=new Date(Date.UTC(-1,t.m,t.d,t.H,t.M,t.S,t.L));return n.setUTCFullYear(t.y),n}return new Date(Date.UTC(t.y,t.m,t.d,t.H,t.M,t.S,t.L))}function Ge(t,n,e){return{y:t,m:n,d:e,H:0,M:0,S:0,L:0}}function oi(t){var n=t.dateTime,e=t.date,r=t.time,i=t.periods,o=t.days,a=t.shortDays,s=t.months,l=t.shortMonths,c=Qe(i),u=tn(i),h=Qe(o),d=tn(o),f=Qe(a),v=tn(a),x=Qe(s),q=tn(s),g=Qe(l),T=tn(l),b={a:J,A:rt,b:X,B:ie,c:null,d:Ws,e:Ws,f:gp,g:qp,G:Cp,H:pp,I:fp,j:mp,L:Qs,m:vp,M:xp,p:oe,q:ae,Q:Js,s:Gs,S:yp,u:bp,U:wp,V:kp,w:Tp,W:Sp,x:null,X:null,y:_p,Y:Mp,Z:Ap,"%":Ks},M={a:_e,A:qe,b:dt,B:Me,c:null,d:Xs,e:Xs,f:zp,g:Bp,G:Vp,H:Lp,I:Ep,j:Hp,L:el,m:Rp,M:Dp,p:Ce,q:Ae,Q:Js,s:Gs,S:Np,u:Zp,U:Ip,V:Fp,w:Pp,W:$p,x:null,X:null,y:Op,Y:Up,Z:jp,"%":Ks},_={a:z,A:C,b:R,B:m,c:A,d:js,e:js,f:cp,g:Vs,G:Us,H:Ys,I:Ys,j:op,L:lp,m:ip,M:ap,p:N,q:rp,Q:dp,s:hp,S:sp,u:Gh,U:Qh,V:tp,w:Jh,W:ep,x:B,X:nt,y:Vs,Y:Us,Z:np,"%":up};b.x=w(e,b),b.X=w(r,b),b.c=w(n,b),M.x=w(e,M),M.X=w(r,M),M.c=w(n,M);function w(S,H){return function(D){var y=[],tt=-1,F=0,it=S.length,ot,Ft,Qi;for(D instanceof Date||(D=new Date(+D));++tt<it;)S.charCodeAt(tt)===37&&(y.push(S.slice(F,tt)),(Ft=Bs[ot=S.charAt(++tt)])!=null?ot=S.charAt(++tt):Ft=ot==="e"?" ":"0",(Qi=H[ot])&&(ot=Qi(D,Ft)),y.push(ot),F=tt+1);return y.push(S.slice(F,tt)),y.join("")}}function k(S,H){return function(D){var y=Ge(1900,void 0,1),tt=L(y,S,D+="",0),F,it;if(tt!=D.length)return null;if("Q"in y)return new Date(y.Q);if("s"in y)return new Date(y.s*1e3+("L"in y?y.L:0));if(H&&!("Z"in y)&&(y.Z=0),"p"in y&&(y.H=y.H%12+y.p*12),y.m===void 0&&(y.m="q"in y?y.q:0),"V"in y){if(y.V<1||y.V>53)return null;"w"in y||(y.w=1),"Z"in y?(F=ii(Ge(y.y,0,1)),it=F.getUTCDay(),F=it>4||it===0?xe.ceil(F):xe(F),F=Je.offset(F,(y.V-1)*7),y.y=F.getUTCFullYear(),y.m=F.getUTCMonth(),y.d=F.getUTCDate()+(y.w+6)%7):(F=ri(Ge(y.y,0,1)),it=F.getDay(),F=it>4||it===0?ve.ceil(F):ve(F),F=Ct.offset(F,(y.V-1)*7),y.y=F.getFullYear(),y.m=F.getMonth(),y.d=F.getDate()+(y.w+6)%7)}else("W"in y||"U"in y)&&("w"in y||(y.w="u"in y?y.u%7:"W"in y?1:0),it="Z"in y?ii(Ge(y.y,0,1)).getUTCDay():ri(Ge(y.y,0,1)).getDay(),y.m=0,y.d="W"in y?(y.w+6)%7+y.W*7-(it+5)%7:y.w+y.U*7-(it+6)%7);return"Z"in y?(y.H+=y.Z/100|0,y.M+=y.Z%100,ii(y)):ri(y)}}function L(S,H,D,y){for(var tt=0,F=H.length,it=D.length,ot,Ft;tt<F;){if(y>=it)return-1;if(ot=H.charCodeAt(tt++),ot===37){if(ot=H.charAt(tt++),Ft=_[ot in Bs?H.charAt(tt++):ot],!Ft||(y=Ft(S,D,y))<0)return-1}else if(ot!=D.charCodeAt(y++))return-1}return y}function N(S,H,D){var y=c.exec(H.slice(D));return y?(S.p=u.get(y[0].toLowerCase()),D+y[0].length):-1}function z(S,H,D){var y=f.exec(H.slice(D));return y?(S.w=v.get(y[0].toLowerCase()),D+y[0].length):-1}function C(S,H,D){var y=h.exec(H.slice(D));return y?(S.w=d.get(y[0].toLowerCase()),D+y[0].length):-1}function R(S,H,D){var y=g.exec(H.slice(D));return y?(S.m=T.get(y[0].toLowerCase()),D+y[0].length):-1}function m(S,H,D){var y=x.exec(H.slice(D));return y?(S.m=q.get(y[0].toLowerCase()),D+y[0].length):-1}function A(S,H,D){return L(S,n,H,D)}function B(S,H,D){return L(S,e,H,D)}function nt(S,H,D){return L(S,r,H,D)}function J(S){return a[S.getDay()]}function rt(S){return o[S.getDay()]}function X(S){return l[S.getMonth()]}function ie(S){return s[S.getMonth()]}function oe(S){return i[+(S.getHours()>=12)]}function ae(S){return 1+~~(S.getMonth()/3)}function _e(S){return a[S.getUTCDay()]}function qe(S){return o[S.getUTCDay()]}function dt(S){return l[S.getUTCMonth()]}function Me(S){return s[S.getUTCMonth()]}function Ce(S){return i[+(S.getUTCHours()>=12)]}function Ae(S){return 1+~~(S.getUTCMonth()/3)}return{format:function(S){var H=w(S+="",b);return H.toString=function(){return S},H},parse:function(S){var H=k(S+="",!1);return H.toString=function(){return S},H},utcFormat:function(S){var H=w(S+="",M);return H.toString=function(){return S},H},utcParse:function(S){var H=k(S+="",!0);return H.toString=function(){return S},H}}}var Bs={"-":"",_:" ",0:"0"},U=/^\s*\d+/,Wh=/^%/,Xh=/[\\^$*+?|[\]().{}]/g;function Z(t,n,e){var r=t<0?"-":"",i=(r?-t:t)+"",o=i.length;return r+(o<e?new Array(e-o+1).join(n)+i:i)}function Kh(t){return t.replace(Xh,"\\$&")}function Qe(t){return new RegExp("^(?:"+t.map(Kh).join("|")+")","i")}function tn(t){return new Map(t.map((n,e)=>[n.toLowerCase(),e]))}function Jh(t,n,e){var r=U.exec(n.slice(e,e+1));return r?(t.w=+r[0],e+r[0].length):-1}function Gh(t,n,e){var r=U.exec(n.slice(e,e+1));return r?(t.u=+r[0],e+r[0].length):-1}function Qh(t,n,e){var r=U.exec(n.slice(e,e+2));return r?(t.U=+r[0],e+r[0].length):-1}function tp(t,n,e){var r=U.exec(n.slice(e,e+2));return r?(t.V=+r[0],e+r[0].length):-1}function ep(t,n,e){var r=U.exec(n.slice(e,e+2));return r?(t.W=+r[0],e+r[0].length):-1}function Us(t,n,e){var r=U.exec(n.slice(e,e+4));return r?(t.y=+r[0],e+r[0].length):-1}function Vs(t,n,e){var r=U.exec(n.slice(e,e+2));return r?(t.y=+r[0]+(+r[0]>68?1900:2e3),e+r[0].length):-1}function np(t,n,e){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e,e+6));return r?(t.Z=r[1]?0:-(r[2]+(r[3]||"00")),e+r[0].length):-1}function rp(t,n,e){var r=U.exec(n.slice(e,e+1));return r?(t.q=r[0]*3-3,e+r[0].length):-1}function ip(t,n,e){var r=U.exec(n.slice(e,e+2));return r?(t.m=r[0]-1,e+r[0].length):-1}function js(t,n,e){var r=U.exec(n.slice(e,e+2));return r?(t.d=+r[0],e+r[0].length):-1}function op(t,n,e){var r=U.exec(n.slice(e,e+3));return r?(t.m=0,t.d=+r[0],e+r[0].length):-1}function Ys(t,n,e){var r=U.exec(n.slice(e,e+2));return r?(t.H=+r[0],e+r[0].length):-1}function ap(t,n,e){var r=U.exec(n.slice(e,e+2));return r?(t.M=+r[0],e+r[0].length):-1}function sp(t,n,e){var r=U.exec(n.slice(e,e+2));return r?(t.S=+r[0],e+r[0].length):-1}function lp(t,n,e){var r=U.exec(n.slice(e,e+3));return r?(t.L=+r[0],e+r[0].length):-1}function cp(t,n,e){var r=U.exec(n.slice(e,e+6));return r?(t.L=Math.floor(r[0]/1e3),e+r[0].length):-1}function up(t,n,e){var r=Wh.exec(n.slice(e,e+1));return r?e+r[0].length:-1}function dp(t,n,e){var r=U.exec(n.slice(e));return r?(t.Q=+r[0],e+r[0].length):-1}function hp(t,n,e){var r=U.exec(n.slice(e));return r?(t.s=+r[0],e+r[0].length):-1}function Ws(t,n){return Z(t.getDate(),n,2)}function pp(t,n){return Z(t.getHours(),n,2)}function fp(t,n){return Z(t.getHours()%12||12,n,2)}function mp(t,n){return Z(1+Ct.count(ct(t),t),n,3)}function Qs(t,n){return Z(t.getMilliseconds(),n,3)}function gp(t,n){return Qs(t,n)+"000"}function vp(t,n){return Z(t.getMonth()+1,n,2)}function xp(t,n){return Z(t.getMinutes(),n,2)}function yp(t,n){return Z(t.getSeconds(),n,2)}function bp(t){var n=t.getDay();return n===0?7:n}function wp(t,n){return Z(At.count(ct(t)-1,t),n,2)}function tl(t){var n=t.getDay();return n>=4||n===0?Dt(t):Dt.ceil(t)}function kp(t,n){return t=tl(t),Z(Dt.count(ct(t),t)+(ct(t).getDay()===4),n,2)}function Tp(t){return t.getDay()}function Sp(t,n){return Z(ve.count(ct(t)-1,t),n,2)}function _p(t,n){return Z(t.getFullYear()%100,n,2)}function qp(t,n){return t=tl(t),Z(t.getFullYear()%100,n,2)}function Mp(t,n){return Z(t.getFullYear()%1e4,n,4)}function Cp(t,n){var e=t.getDay();return t=e>=4||e===0?Dt(t):Dt.ceil(t),Z(t.getFullYear()%1e4,n,4)}function Ap(t){var n=t.getTimezoneOffset();return(n>0?"-":(n*=-1,"+"))+Z(n/60|0,"0",2)+Z(n%60,"0",2)}function Xs(t,n){return Z(t.getUTCDate(),n,2)}function Lp(t,n){return Z(t.getUTCHours(),n,2)}function Ep(t,n){return Z(t.getUTCHours()%12||12,n,2)}function Hp(t,n){return Z(1+Je.count(ft(t),t),n,3)}function el(t,n){return Z(t.getUTCMilliseconds(),n,3)}function zp(t,n){return el(t,n)+"000"}function Rp(t,n){return Z(t.getUTCMonth()+1,n,2)}function Dp(t,n){return Z(t.getUTCMinutes(),n,2)}function Np(t,n){return Z(t.getUTCSeconds(),n,2)}function Zp(t){var n=t.getUTCDay();return n===0?7:n}function Ip(t,n){return Z(ne.count(ft(t)-1,t),n,2)}function nl(t){var n=t.getUTCDay();return n>=4||n===0?Nt(t):Nt.ceil(t)}function Fp(t,n){return t=nl(t),Z(Nt.count(ft(t),t)+(ft(t).getUTCDay()===4),n,2)}function Pp(t){return t.getUTCDay()}function $p(t,n){return Z(xe.count(ft(t)-1,t),n,2)}function Op(t,n){return Z(t.getUTCFullYear()%100,n,2)}function Bp(t,n){return t=nl(t),Z(t.getUTCFullYear()%100,n,2)}function Up(t,n){return Z(t.getUTCFullYear()%1e4,n,4)}function Vp(t,n){var e=t.getUTCDay();return t=e>=4||e===0?Nt(t):Nt.ceil(t),Z(t.getUTCFullYear()%1e4,n,4)}function jp(){return"+0000"}function Ks(){return"%"}function Js(t){return+t}function Gs(t){return Math.floor(+t/1e3)}var be,Vn,we,rl,il;ai({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});function ai(t){return be=oi(t),Vn=be.format,we=be.parse,rl=be.utcFormat,il=be.utcParse,be}function Yp(t){return new Date(t)}function Wp(t){return t instanceof Date?+t:+new Date(+t)}function ol(t,n,e,r,i,o,a,s,l,c){var u=We(),h=u.invert,d=u.domain,f=c(".%L"),v=c(":%S"),x=c("%I:%M"),q=c("%I %p"),g=c("%a %d"),T=c("%b %d"),b=c("%B"),M=c("%Y");function _(w){return(l(w)<w?f:s(w)<w?v:a(w)<w?x:o(w)<w?q:r(w)<w?i(w)<w?g:T:e(w)<w?b:M)(w)}return u.invert=function(w){return new Date(h(w))},u.domain=function(w){return arguments.length?d(Array.from(w,Wp)):d().map(Yp)},u.ticks=function(w){var k=d();return t(k[0],k[k.length-1],w==null?10:w)},u.tickFormat=function(w,k){return k==null?_:c(k)},u.nice=function(w){var k=d();return(!w||typeof w.range!="function")&&(w=n(k[0],k[k.length-1],w==null?10:w)),w?d(Gr(k,w)):u},u.copy=function(){return Pn(u,ol(t,n,e,r,i,o,a,s,l,c))},u}function ke(){return zt.apply(ol(ei,ni,ct,ye,At,Ct,ge,me,wt,Vn).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}function P(t){return function(){return t}}var si=Math.abs,W=Math.atan2,Zt=Math.cos,al=Math.max,jn=Math.min,mt=Math.sin,re=Math.sqrt,V=1e-12,Te=Math.PI,en=Te/2,Se=2*Te;function sl(t){return t>1?0:t<-1?Te:Math.acos(t)}function li(t){return t>=1?en:t<=-1?-en:Math.asin(t)}function Yn(t){let n=3;return t.digits=function(e){if(!arguments.length)return n;if(e==null)n=null;else{let r=Math.floor(e);if(!(r>=0))throw new RangeError(`invalid digits: ${e}`);n=r}return t},()=>new Xt(n)}function Xp(t){return t.innerRadius}function Kp(t){return t.outerRadius}function Jp(t){return t.startAngle}function Gp(t){return t.endAngle}function Qp(t){return t&&t.padAngle}function t0(t,n,e,r,i,o,a,s){var l=e-t,c=r-n,u=a-i,h=s-o,d=h*l-u*c;if(!(d*d<V))return d=(u*(n-o)-h*(t-i))/d,[t+d*l,n+d*c]}function Wn(t,n,e,r,i,o,a){var s=t-e,l=n-r,c=(a?o:-o)/re(s*s+l*l),u=c*l,h=-c*s,d=t+u,f=n+h,v=e+u,x=r+h,q=(d+v)/2,g=(f+x)/2,T=v-d,b=x-f,M=T*T+b*b,_=i-o,w=d*x-v*f,k=(b<0?-1:1)*re(al(0,_*_*M-w*w)),L=(w*b-T*k)/M,N=(-w*T-b*k)/M,z=(w*b+T*k)/M,C=(-w*T+b*k)/M,R=L-q,m=N-g,A=z-q,B=C-g;return R*R+m*m>A*A+B*B&&(L=z,N=C),{cx:L,cy:N,x01:-u,y01:-h,x11:L*(i/_-1),y11:N*(i/_-1)}}function nn(){var t=Xp,n=Kp,e=P(0),r=null,i=Jp,o=Gp,a=Qp,s=null,l=Yn(c);function c(){var u,h,d=+t.apply(this,arguments),f=+n.apply(this,arguments),v=i.apply(this,arguments)-en,x=o.apply(this,arguments)-en,q=si(x-v),g=x>v;if(s||(s=u=l()),f<d&&(h=f,f=d,d=h),!(f>V))s.moveTo(0,0);else if(q>Se-V)s.moveTo(f*Zt(v),f*mt(v)),s.arc(0,0,f,v,x,!g),d>V&&(s.moveTo(d*Zt(x),d*mt(x)),s.arc(0,0,d,x,v,g));else{var T=v,b=x,M=v,_=x,w=q,k=q,L=a.apply(this,arguments)/2,N=L>V&&(r?+r.apply(this,arguments):re(d*d+f*f)),z=jn(si(f-d)/2,+e.apply(this,arguments)),C=z,R=z,m,A;if(N>V){var B=li(N/d*mt(L)),nt=li(N/f*mt(L));(w-=B*2)>V?(B*=g?1:-1,M+=B,_-=B):(w=0,M=_=(v+x)/2),(k-=nt*2)>V?(nt*=g?1:-1,T+=nt,b-=nt):(k=0,T=b=(v+x)/2)}var J=f*Zt(T),rt=f*mt(T),X=d*Zt(_),ie=d*mt(_);if(z>V){var oe=f*Zt(b),ae=f*mt(b),_e=d*Zt(M),qe=d*mt(M),dt;if(q<Te)if(dt=t0(J,rt,_e,qe,oe,ae,X,ie)){var Me=J-dt[0],Ce=rt-dt[1],Ae=oe-dt[0],S=ae-dt[1],H=1/mt(sl((Me*Ae+Ce*S)/(re(Me*Me+Ce*Ce)*re(Ae*Ae+S*S)))/2),D=re(dt[0]*dt[0]+dt[1]*dt[1]);C=jn(z,(d-D)/(H-1)),R=jn(z,(f-D)/(H+1))}else C=R=0}k>V?R>V?(m=Wn(_e,qe,J,rt,f,R,g),A=Wn(oe,ae,X,ie,f,R,g),s.moveTo(m.cx+m.x01,m.cy+m.y01),R<z?s.arc(m.cx,m.cy,R,W(m.y01,m.x01),W(A.y01,A.x01),!g):(s.arc(m.cx,m.cy,R,W(m.y01,m.x01),W(m.y11,m.x11),!g),s.arc(0,0,f,W(m.cy+m.y11,m.cx+m.x11),W(A.cy+A.y11,A.cx+A.x11),!g),s.arc(A.cx,A.cy,R,W(A.y11,A.x11),W(A.y01,A.x01),!g))):(s.moveTo(J,rt),s.arc(0,0,f,T,b,!g)):s.moveTo(J,rt),!(d>V)||!(w>V)?s.lineTo(X,ie):C>V?(m=Wn(X,ie,oe,ae,d,-C,g),A=Wn(J,rt,_e,qe,d,-C,g),s.lineTo(m.cx+m.x01,m.cy+m.y01),C<z?s.arc(m.cx,m.cy,C,W(m.y01,m.x01),W(A.y01,A.x01),!g):(s.arc(m.cx,m.cy,C,W(m.y01,m.x01),W(m.y11,m.x11),!g),s.arc(0,0,d,W(m.cy+m.y11,m.cx+m.x11),W(A.cy+A.y11,A.cx+A.x11),g),s.arc(A.cx,A.cy,C,W(A.y11,A.x11),W(A.y01,A.x01),!g))):s.arc(0,0,d,_,M,g)}if(s.closePath(),u)return s=null,u+""||null}return c.centroid=function(){var u=(+t.apply(this,arguments)+ +n.apply(this,arguments))/2,h=(+i.apply(this,arguments)+ +o.apply(this,arguments))/2-Te/2;return[Zt(h)*u,mt(h)*u]},c.innerRadius=function(u){return arguments.length?(t=typeof u=="function"?u:P(+u),c):t},c.outerRadius=function(u){return arguments.length?(n=typeof u=="function"?u:P(+u),c):n},c.cornerRadius=function(u){return arguments.length?(e=typeof u=="function"?u:P(+u),c):e},c.padRadius=function(u){return arguments.length?(r=u==null?null:typeof u=="function"?u:P(+u),c):r},c.startAngle=function(u){return arguments.length?(i=typeof u=="function"?u:P(+u),c):i},c.endAngle=function(u){return arguments.length?(o=typeof u=="function"?u:P(+u),c):o},c.padAngle=function(u){return arguments.length?(a=typeof u=="function"?u:P(+u),c):a},c.context=function(u){return arguments.length?(s=u==null?null:u,c):s},c}var iw=Array.prototype.slice;function Xn(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function ll(t){this._context=t}ll.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:this._context.lineTo(t,n);break}}};function cl(t){return new ll(t)}function ul(t){return t[0]}function dl(t){return t[1]}function rn(t,n){var e=P(!0),r=null,i=cl,o=null,a=Yn(s);t=typeof t=="function"?t:t===void 0?ul:P(t),n=typeof n=="function"?n:n===void 0?dl:P(n);function s(l){var c,u=(l=Xn(l)).length,h,d=!1,f;for(r==null&&(o=i(f=a())),c=0;c<=u;++c)!(c<u&&e(h=l[c],c,l))===d&&((d=!d)?o.lineStart():o.lineEnd()),d&&o.point(+t(h,c,l),+n(h,c,l));if(f)return o=null,f+""||null}return s.x=function(l){return arguments.length?(t=typeof l=="function"?l:P(+l),s):t},s.y=function(l){return arguments.length?(n=typeof l=="function"?l:P(+l),s):n},s.defined=function(l){return arguments.length?(e=typeof l=="function"?l:P(!!l),s):e},s.curve=function(l){return arguments.length?(i=l,r!=null&&(o=i(r)),s):i},s.context=function(l){return arguments.length?(l==null?r=o=null:o=i(r=l),s):r},s}function hl(t,n){return n<t?-1:n>t?1:n>=t?0:NaN}function pl(t){return t}function on(){var t=pl,n=hl,e=null,r=P(0),i=P(Se),o=P(0);function a(s){var l,c=(s=Xn(s)).length,u,h,d=0,f=new Array(c),v=new Array(c),x=+r.apply(this,arguments),q=Math.min(Se,Math.max(-Se,i.apply(this,arguments)-x)),g,T=Math.min(Math.abs(q)/c,o.apply(this,arguments)),b=T*(q<0?-1:1),M;for(l=0;l<c;++l)(M=v[f[l]=l]=+t(s[l],l,s))>0&&(d+=M);for(n!=null?f.sort(function(_,w){return n(v[_],v[w])}):e!=null&&f.sort(function(_,w){return e(s[_],s[w])}),l=0,h=d?(q-c*b)/d:0;l<c;++l,x=g)u=f[l],M=v[u],g=x+(M>0?M*h:0)+b,v[u]={data:s[u],index:l,value:M,startAngle:x,endAngle:g,padAngle:T};return v}return a.value=function(s){return arguments.length?(t=typeof s=="function"?s:P(+s),a):t},a.sortValues=function(s){return arguments.length?(n=s,e=null,a):n},a.sort=function(s){return arguments.length?(e=s,n=null,a):e},a.startAngle=function(s){return arguments.length?(r=typeof s=="function"?s:P(+s),a):r},a.endAngle=function(s){return arguments.length?(i=typeof s=="function"?s:P(+s),a):i},a.padAngle=function(s){return arguments.length?(o=typeof s=="function"?s:P(+s),a):o},a}function fl(t,n,e){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-n),t._y2+t._k*(t._y1-e),t._x2,t._y2)}function Kn(t,n){this._context=t,this._k=(1-n)/6}Kn.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:fl(this,this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2,this._x1=t,this._y1=n;break;case 2:this._point=3;default:fl(this,t,n);break}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var kw=function t(n){function e(r){return new Kn(r,n)}return e.tension=function(r){return t(+r)},e}(0);function e0(t,n,e){var r=t._x1,i=t._y1,o=t._x2,a=t._y2;if(t._l01_a>V){var s=2*t._l01_2a+3*t._l01_a*t._l12_a+t._l12_2a,l=3*t._l01_a*(t._l01_a+t._l12_a);r=(r*s-t._x0*t._l12_2a+t._x2*t._l01_2a)/l,i=(i*s-t._y0*t._l12_2a+t._y2*t._l01_2a)/l}if(t._l23_a>V){var c=2*t._l23_2a+3*t._l23_a*t._l12_a+t._l12_2a,u=3*t._l23_a*(t._l23_a+t._l12_a);o=(o*c+t._x1*t._l23_2a-n*t._l12_2a)/u,a=(a*c+t._y1*t._l23_2a-e*t._l12_2a)/u}t._context.bezierCurveTo(r,i,o,a,t._x2,t._y2)}function ml(t,n){this._context=t,this._alpha=n}ml.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this._x2,this._y2);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3;default:e0(this,t,n);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var ci=function t(n){function e(r){return n?new ml(r,n):new Kn(r,0)}return e.alpha=function(r){return t(+r)},e}(.5);function It(t,n,e){this.k=t,this.x=n,this.y=e}It.prototype={constructor:It,scale:function(t){return t===1?this:new It(this.k*t,this.x,this.y)},translate:function(t,n){return t===0&n===0?this:new It(this.k,this.x+this.k*t,this.y+this.k*n)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var ui=new It(1,0,0);di.prototype=It.prototype;function di(t){for(;!t.__zoom;)if(!(t=t.parentNode))return ui;return t.__zoom}var hi=class extends HTMLElement{constructor(){super();p(this,"render",()=>{var k;let e=(k=this.shadowRoot)==null?void 0:k.querySelector("#root");if(!this.shadowRoot||!e)return;e.innerHTML="";let r=~~this.getAttribute("width"),i=~~this.getAttribute("height"),o=this.hasAttribute("legend"),a=JSON.parse(this.getAttribute("colors")),s=JSON.parse(this.getAttribute("data"));if(!s)return;let l=80,c=i||400,u=r||400,h=this.hasAttribute("legend-right")?30:0,d=E(e).append("svg").attr("width",u+"px").attr("height",c+"px").attr("viewBox",`0 0 ${c} ${u}`).attr("preserveAspectRatio","xMinYMin").append("g").attr("transform",`translate(${u/2-h}, ${c/2})`),f=Math.min(u,c)/2-l,v=Array.isArray(a)?a:["#011f4b","#03396c","#005b96","#6497b1","#b3cde0","#4682A9"],x=st().domain(s).range(v),g=on().value(L=>+L.value).sort(null)(s),T=nn().innerRadius(f/2).outerRadius(f);s.forEach(function(L){L.value=+L.value,L.enabled=!0});let b=this,M=this.hasAttribute("no-default-event"),_=function(L,N){if(E(this).style("cursor","pointer"),M){let R=new CustomEvent("app-mouseover",{detail:{root:e,data:N,select:E,self:b,color:x,event:L}});b.dispatchEvent(R);return}let z=e.querySelector(".inner-circle"),C=E(z).append("g").attr("class","text-group");C.append("text").attr("class","text text-secondary type").text(`${N.data.type}`).attr("text-anchor","middle").attr("dy","-0.8em"),C.append("text").attr("class","text text-secondary years").text(`${N.data.value}y`).attr("text-anchor","middle").attr("dy","0.6em")},w=function(L,N){if(E(this).style("cursor","none"),M){let C=new CustomEvent("app-mouseout",{detail:{root:e,data:N,select:E,self:b,color:x,event:L}});b.dispatchEvent(C);return}let z=e.querySelector(".inner-circle .text-group");E(z).remove()};d.selectAll("path").data(g).join("path").attr("d",T).attr("fill",L=>x(L.data.type)).attr("stroke","var(--background-primary)").style("stroke-width","1px").on("mouseover",_).on("mouseout",w).on("mousemove",(L,N)=>{if(M){let z=new CustomEvent("app-mousemove",{detail:{root:e,data:N,select:E,self:b,color:x,event:L}});b.dispatchEvent(z);return}}),d.append("g").attr("dy","0.5em").style("font-size","16px").style("text-anchor","middle").attr("class","inner-circle"),o&&this.renderLegends({svg:d,data:s,color:x,height:c,margin:l})});p(this,"renderLegends",({svg:e,data:r,color:i,height:o,margin:a})=>{let s=e.selectAll(".legend").data(r).enter().append("g").attr("class","legend"),l,c;this.hasAttribute("legend-right")?(l=a*1.5+20,c=(u,h)=>h*20):(l=-a/2,c=(u,h)=>150+h*20),s.append("circle").attr("cx",()=>l+20).attr("cy",c).attr("r",5).attr("fill",u=>i(u.type)),s.append("text").attr("x",()=>l+30).attr("y",c).attr("dy",".35em").style("text-anchor","start").style("fill","var(--text-tertiary)").style("font-size","10px").text(u=>u.type)});let e=this.attachShadow({mode:"open"});e.innerHTML=`
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
          font-weight: bold;
          fill: var(--text-tertiary);
        }
        .years {
          font-size: 50px;
          font-weight: bold;
          fill: var(--text-tertiary);
        }
      </style>
      <div id="root"></div>
    `}connectedCallback(){this.render()}static get observedAttributes(){return["data","height","width","no-default-event","legend","colors","legend-right"]}attributeChangedCallback(e,r,i){this.render()}};customElements.define("app-donut",hi);var pi=class extends HTMLElement{constructor(){super();p(this,"render",()=>{let e={top:40,right:20,bottom:50,left:40},r=550,i=450,o=450-e.left-e.right,a=350-e.top-e.bottom,s=this.shadowRoot.querySelector(".root"),l=E(s).append("svg").attr("width","100%").attr("height","100%").attr("viewBox",`0 0 ${r} ${i}`).attr("preserveAspectRatio","xMinYMin").append("g").attr("transform",`translate(${e.left}, ${e.top})`),c=[{month:1,interest:900,principle:500},{month:2,interest:900,principle:200},{month:3,interest:900,principle:300},{month:4,interest:900,principle:300},{month:5,interest:900,principle:300},{month:6,interest:900,principle:300},{month:7,interest:900,principle:300},{month:8,interest:900,principle:300},{month:9,interest:900,principle:300},{month:10,interest:900,principle:300},{month:11,interest:900,principle:300},{month:12,interest:900,principle:300}],u=c.map(k=>[k.month,[["principle",k.principle],["interest",k.interest]]]),h=Array.from(u).map(k=>k[0]),d=Array.from(Array.from(u)[0][1]).map(k=>k[0]),f=Rt().domain(h).range([0,o]).padding(.2);l.append("g").attr("class","x-scale").attr("transform",`translate(0,${a})`).call(St(f).tickSize(0).tickPadding(8));let v=Jt(".1s"),x=lt().domain([0,G(c.map(k=>k.principle>k.interest?k.principle:k.interest))]).range([a,0]);l.append("g").attr("class","y-scale").call(ut(x).ticks(4).tickSize(0).tickPadding(12).tickFormat(v)).call(k=>k.select(".domain").remove());let q=Rt().domain(d).range([0,f.bandwidth()]).padding([.05]),g=st().domain(d).range(["#18375F","#0072BC"]),T=()=>ut().scale(x);l.append("g").attr("class","grid").call(T().ticks(3).tickSize(-o,0,0).tickFormat(""));let b=E("body").append("div").attr("id","chart").attr("class","tooltip"),M=function(k){b.style("opacity",.8),E(this).style("opacity",.5)},_=function(k,L){let N=Jt(",");b.html(N(L[1])).style("position","absolute").style("top",k.y-10+"px").style("left",k.x+10+"px")},w=function(k){b.style("opacity",0),E(this).style("opacity",1)};l.append("g").selectAll("g").data(u).join("g").attr("transform",k=>"translate("+f(k[0])+", 0)").selectAll("rect").data(k=>k[1]).join("rect").attr("x",k=>q(k[0])).attr("y",k=>x(k[1])).attr("width",q.bandwidth()).attr("height",k=>a-x(k[1])).attr("fill",k=>g(k[0])).on("mouseover",M).on("mousemove",_).on("mouseleave",w),l.append("text").attr("class","chart-title").attr("x",-e.left*.6).attr("y",-e.top/1.5).attr("text-anchor","start").text(""),l.append("rect").attr("x",-e.left*.6).attr("y",a+e.bottom).attr("width",13).attr("height",13).style("fill","#18375F"),l.append("text").attr("class","legend").attr("x",-e.left*.6+20).attr("y",a+e.bottom+10).text("Principle"),l.append("rect").attr("x",60).attr("y",a+e.bottom).attr("width",13).attr("height",13).style("fill","#0072BC"),l.append("text").attr("class","legend").attr("x",80).attr("y",a+e.bottom+10).text("Interest")});let e=this.attachShadow({mode:"open"});e.innerHTML=`
      <style>
        :host {
          display: flex;
        }
        .root {
          font-family: var(--font-family);
          font-size: 18px;
          font-weight: bold;
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
          font-weight: bold;
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
    `}connectedCallback(){this.render()}};customElements.define("app-group-bar-chart",pi);vt();var gl=t=>{let n=t;return t/1e3>=1&&(n=Math.floor(t/1e3)+"K"),n},fi=class extends HTMLElement{constructor(){super();p(this,"tooltip");p(this,"renderLine",({svg:e,line:r,data:i,xScale:o,yScale:a,parseDate:s})=>{e.append("path").datum(i).attr("class","line").attr("d",r),e.selectAll(".dot").data(i).enter().append("circle").attr("class","dot").attr("cx",l=>o(s(l.year))).attr("cy",l=>a(l.balance)).attr("r",3).on("mouseover",(l,c)=>{l.target.style.strokeWidth="3px",this.tooltip.style.display="flex",E(this.tooltip).transition().duration(200).style("opacity",1);let u=this.tooltip.querySelector(".year");u.innerHTML=c.year;let h=this.tooltip.querySelector(".dot");h.style.background="blue";let d=this.tooltip.querySelector(".text");d.innerHTML=`Balance ${Tt.format(Math.floor(c.balance))}`}).on("mouseout",l=>{l.target.style.strokeWidth="1px",E(this.tooltip).style("opacity",0)}).on("mousemove",l=>{E(this.tooltip).style("left",l.clientX+10+"px").style("top",l.clientY+10+"px")})});p(this,"render",()=>{let e=this,r=this.closest("div");if(!r||!this.shadowRoot)return;let{width:i}=r.getBoundingClientRect(),o=this.shadowRoot.querySelector("#root");if(!o)return;o.innerHTML="";let a={top:10,right:20,bottom:50,left:40},s=i-a.left-a.right,l=400-a.top-a.bottom,c=10,u=we("%Y"),h=ke().range([0,s-a.left]),d=lt().range([l,a.top]),f=lt().range([l,a.top]),v=st().range(["#4477CE","#A084E8"]),x=this.getAttribute("data");if(x)x=JSON.parse(x);else return;if(Array.isArray(x)&&(x!=null&&x.length)){let q=St(h).tickSize(0).offset(0).tickPadding(10).tickSizeOuter(0),g=br(d).tickSize(0).tickPadding(-20).ticks(4).tickFormat(gl),T=G(x,m=>m.balance);f.domain([0,T]);let b=ut(f).tickSize(0).tickPadding(10).ticks(2).tickValues([0,T]).tickFormat(gl),M=Object.keys(x[0]).filter(function(m){if(m!=="year"&&m!=="balance")return m});x.forEach(function(m){let A=0;m.components=M.map(B=>({key:B,y1:A,y0:A+=m[B],data:m[B],year:m.year}))});let _=xt(x,m=>m.principle>m.interest?m.interest:m.principle),w=G(x,m=>m.principle+m.interest),k=xt(x,m=>u(m.year)),L=G(x,m=>u(m.year));h.domain([k,L]),d.domain([0,w*1.5]),v.domain(M);let N=rn().x(m=>h(u(m.year))).y(m=>f(m.balance)),z=E(o).append("svg").attr("width",s+a.left+a.right).attr("height",l+a.top+a.bottom).append("g").attr("transform","translate("+a.left+","+a.top+")");z.append("g").attr("class","x axis").attr("transform",`translate(${c/2}, ${l})`).call(q).call(m=>m.select(".domain").remove()),z.append("g").attr("class","y axis").attr("transform",`translate(${s}, 0)`).call(g).call(m=>m.select(".domain").remove()),z.append("g").attr("class","y axis").call(b).call(m=>m.select(".domain").remove()),z.selectAll(".entry").data(x).enter().append("g").attr("class","g").attr("transform",m=>"translate("+h(u(m.year))+", 0)").selectAll("rect").data(m=>m.components).enter().append("rect").attr("width",c).attr("y",m=>d(m.y0)).attr("height",m=>Math.abs(d(m.y0)-d(m.y1))).style("opacity","0.8").style("cursor","pointer").style("fill",m=>v(m.key)).on("mouseover",(m,A)=>{m.target.style.opacity=1,this.tooltipInstance.show();let B=this.tooltip.querySelector(".year");B.innerHTML=A.year;let nt=this.tooltip.querySelector(".dot");nt.style.background=v(A.key);let J=this.tooltip.querySelector(".text");J.innerHTML=`${A.key} ${Tt.format(Math.floor(A.data))}`}).on("mouseout",m=>{m.target.style.opacity=.8,this.tooltipInstance.hide(m)}).on("mousemove",this.tooltipInstance.move),this.renderLine({svg:z,line:N,data:x,xScale:h,yScale:f,parseDate:u});let R=z.selectAll(".legend").data(v.domain()).enter().append("g").attr("class","legend");R.append("rect").attr("x",(m,A)=>A*80).attr("y",l+a.bottom-15).attr("width",18).attr("height",8).style("fill",v),R.append("text").attr("x",(m,A)=>A*80+24).attr("y",l+a.bottom-11).attr("dy",".35em").style("text-anchor","start").style("fill","var(--text-tertiary)").text(m=>se(m))}});let e=this.attachShadow({mode:"open"});e.innerHTML=`
      <style>
        :host {
          font-family: var(--font-family);
          font-size: 14px;
          font-weight: bold;
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
    `}static get observedAttributes(){return["data"]}connectedCallback(){this.tooltipInstance=gt(this),this.render(),window.addEventListener("resize",e=>{this.render()}),this.addEventListener("mouseout",e=>{this.tooltip.style.display="none"})}disconnectedCallback(){}attributeChangedCallback(e,r,i){this.render()}};customElements.define("app-stacked-bar-chart",fi);var mi=class extends HTMLElement{constructor(){super();p(this,"render",()=>{});let e=this.attachShadow({mode:"open"});e.innerHTML=`
      <style>
        time {
          font-family: var(--font-family);
          font-size: 18px;
          font-weight: bold;
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
    `}connectedCallback(){this.render()}};customElements.define("app-history",mi);var vl="* { margin: 0; padding: 0; border: 0; background: transparent; box-sizing: border-box; font-family: var(--font-family); } #dropdown { position: relative; display: inline-block; width: 100%; } #trigger { cursor: pointer; width: 100%; color: var(--text-primary); display: flex; flex-direction: row; align-items: center; justify-content: space-between; } #icon { display: none; height: 40px; width: 40px; justify-content: center; align-items: center; } #icon huanlin-icon { --fill: var(--text-primary); --height: 24px; } #popup { display: none; position: absolute; top: 40px; left: 0px; flex-direction: column; background: var(--background-primary); box-shadow: var(--popover-shadow); padding: 10px; width: 100%; border-radius: 4px; gap: 6px; z-index: 1; } #popup.active { display: flex; } :host([arrow]) #icon { display: flex; }";var gi=class extends HTMLElement{constructor(){super();p(this,"handleDropdownOpenClose",e=>{let r=this.shadowRoot.querySelector("#popup");r.classList.contains("active")?r.classList.remove("active"):r.classList.add("active");let o=e.target.closest("huanlin-menu-item");o&&(this.setActiveItem(o.name),this.focusTrigger())});p(this,"willLoad",()=>{var e;this.popup=(e=this.shadowRoot)==null?void 0:e.querySelector("#popup"),this.shadowRoot.querySelector("#dropdown").addEventListener("click",this.handleDropdownOpenClose),this.shadowRoot.querySelector("#trigger").addEventListener("keydown",this.handleKeyboard),this.shadowRoot.querySelector("#popup").addEventListener("keydown",this.handleMenuArrow),this.addEventListener("keydown",this.handleCloseKeyboard),document.body.addEventListener("click",this.handleClickOutside)});p(this,"render",()=>{});p(this,"setActiveItem",e=>{Array.from(this.querySelectorAll("huanlin-menu-item")).forEach(i=>{i.name===e?i.setAttribute("active",""):i.removeAttribute("active")})});p(this,"handleMenuArrow",e=>{if(e.key==="ArrowDown"){let r=this.getItems(),o=r.indexOf(e.target)+1;if(o<0||o>=r.length)return;r[o].setFocus()}else if(e.key==="ArrowUp"){let r=this.getItems(),o=r.indexOf(e.target)-1;if(o<0||o>=r.length)return;r[o].setFocus()}else e.key==="Enter"&&(this.setActiveItem(e.target.name),this.hide(),setTimeout(()=>{this.focusTrigger()}))});p(this,"getItems",()=>Array.from(this.querySelectorAll("huanlin-menu-item")));p(this,"handleCloseKeyboard",e=>{e.key==="Escape"?(this.hide(),this.focusTrigger()):(e.key==="Tab"||e.shiftKey&&e.key==="Tab")&&this.hide()});p(this,"focusTrigger",()=>at(this,null,function*(){yield this.querySelector("[slot='trigger']").setFocus()}));p(this,"handleKeyboard",e=>{if(["ArrowDown"," ","Enter"].includes(e.key)){this.show();let r=this.getItems();r.length&&r[0].setFocus()}});p(this,"handleClickOutside",e=>{this.contains(e.target)||this.hide()});p(this,"isOpen",()=>this.popup.classList.contains("active"));p(this,"show",()=>{this.popup.classList.add("active")});p(this,"hide",()=>{this.popup.classList.remove("active")});let e=this.attachShadow({mode:"open"}),r=new CSSStyleSheet;r.replaceSync(vl),e.adoptedStyleSheets=[r],e.innerHTML=`
      <div part="root" id="dropdown">
        <div part="trigger" id="trigger" aria-labelledby="label" aria-control="popup">
          <span part="label" id="label">
            <slot name="trigger"></slot>
          </span>
          <span part="icon" id="icon">
            <huanlin-icon name="arrow-down"></huanlin-icon>
          </span>
        </div>
        <div part="popup" id="popup">
          <slot></slot>
        </div>
      </div>
    `}set arrow(e){this.setAttribute("arrow",e)}get arrow(){return!!(this.getAttribute("arrow")==="true"||this.hasAttribute("arrow"))}static get observedAttributes(){return["arrow"]}connectedCallback(){this.willLoad(),this.render()}disconnectedCallback(){document.body.removeEventListener("click",this.handleClickOutside),this.removeEventListener("keydown",this.handleCloseKeyboard),this.shadowRoot.querySelector("#popup").removeEventListener("keydown",this.handleMenuArrow),this.shadowRoot.querySelector("#dropdown").removeEventListener("click",this.handleDropdownOpenClose),this.shadowRoot.querySelector("#trigger").removeEventListener("keydown",this.handleKeyboard)}};customElements.define("huanlin-dropdown",gi);var xl="* { margin: 0; padding: 0; border: 0; background: transparent; box-sizing: border-box; } body { font-family: var(--font-family); } .position-relative { position: relative; } .flex { display: flex; } .justify-end { justify-content: flex-end; } .fit-content { width: -moz-fit-content; width: fit-content; } .align-center { align-items: center; } .justify-center { justify-content: center; } .flex-row { flex-direction: row; } .flex-column { flex-direction: column; } .flex-grow-1 { flex-grow: 1; } .display-block { display: block; } .justify-space-between { justify-content: space-between; } .gap { gap: 10px; } .width-100p, .w-100p { width: 100%; } .h-100p { height: 100%; } .min-height-100p { min-height: 100%; } .height-100p { height: 100%; } .text-primary { color: var(--text-primary); } .text-secondary { color: var(--text-secondary); } .text-tertiary { color: var(--text-tertiary); } .subtitle { display: block; width: -moz-fit-content; width: fit-content; font-size: 16px; margin-block-start: 0px; margin-block-end: 0px; margin-inline-start: 0px; margin-inline-end: 0px; } .root { display: flex; flex-direction: column; }";var vi=class extends HTMLElement{constructor(){super();let n=this.attachShadow({mode:"open"}),e=new CSSStyleSheet;e.replaceSync(xl),n.adoptedStyleSheets=[e],n.innerHTML=`
      <menu part="menu" id="menu" class="root">
        <slot></slot>
      </menu>
    `}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(n,e,r){}};customElements.define("huanlin-menu",vi);var yl="* { margin: 0; padding: 0; border: 0; background: transparent; box-sizing: border-box; } body { font-family: var(--font-family); } .position-relative { position: relative; } .flex { display: flex; } .justify-end { justify-content: flex-end; } .fit-content { width: -moz-fit-content; width: fit-content; } .align-center { align-items: center; } .justify-center { justify-content: center; } .flex-row { flex-direction: row; } .flex-column { flex-direction: column; } .flex-grow-1 { flex-grow: 1; } .display-block { display: block; } .justify-space-between { justify-content: space-between; } .gap { gap: 10px; } .width-100p, .w-100p { width: 100%; } .h-100p { height: 100%; } .min-height-100p { min-height: 100%; } .height-100p { height: 100%; } .text-primary { color: var(--text-primary); } .text-secondary { color: var(--text-secondary); } .text-tertiary { color: var(--text-tertiary); } .subtitle { display: block; width: -moz-fit-content; width: fit-content; font-size: 16px; margin-block-start: 0px; margin-block-end: 0px; margin-inline-start: 0px; margin-inline-end: 0px; } .menu-item { font-size: 14px; cursor: pointer; padding: 10px 0px; width: 100%; border-radius: 10px; padding: 10px; color: var(--text-tertiary); display: flex; flex-direction: row; align-items: center; } .menu-item:hover { color: var(--text-primary); } :host([active]) .menu-item { color: var(--text-primary); font-weight: bold; }";var xi=class extends HTMLElement{constructor(){super();p(this,"handleBlur",e=>{this.removeAttribute("tabindex")});let e=this.attachShadow({mode:"open"}),r=new CSSStyleSheet;r.replaceSync(yl),e.adoptedStyleSheets=[r],e.innerHTML=`
      <menuitem part="menuitem" class="menu-item">
        <slot></slot>
      </menuitem>
    `}set name(e){this.setAttribute("name",e)}get name(){return this.getAttribute("name")}set active(e){this.setAttribute("active",e)}get active(){return!!(this.getAttribute("active")==="true"||this.hasAttribute("active"))}static get observedAttributes(){return["active","name"]}setFocus(){this.setAttribute("tabindex","0"),this.focus()}connectedCallback(){this.addEventListener("blur",this.handleBlur)}disconnectedCallback(){this.removeEventListener("blur",this.handleBlur)}attributeChangedCallback(e,r,i){}};customElements.define("huanlin-menu-item",xi);bi();var wi=class extends HTMLElement{constructor(){super();p(this,"render",()=>{let e=this.getAttribute("value"),r=this.shadowRoot.querySelector(".value");r.innerHTML=e});let e=this.attachShadow({mode:"open"});e.innerHTML=`
      <style>
        :host {
          font-family: var(--font-family);
          font-size: 18px;
          font-weight: bold;
          background: var(--background-primary);
          padding: 20px;
          box-sizing: border-box;
          border-radius: 10px;
          height: 100px;
        } 
        .root {
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
        .left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 3;
        }
        .right {
          flex: 1; 
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .value {
          font-size: 34px;
        }
        .text {
          font-size: 14px;
          color: var(--text-tertiary);
        }
      </style>
      <div class="root">
        <div class="left">
          <span class="value"></span>
          <span class="text">
            <slot></slot>
          </span>
        </div>
        <div class="right">
          <div><slot name="icon"></slot></div>
        </div>
      </div>
    `}static get observedAttributes(){return["value"]}connectedCallback(){this.render()}attributeChangedCallback(e,r,i){this.render()}};customElements.define("app-key-pair",wi);vt();var i0=0,ki=class extends HTMLElement{constructor(){super();p(this,"setInputValue",e=>{let r=this.shadowRoot.querySelector(".input"),i=this.shadowRoot.querySelector(".range");if(this.isDollar){let o=Tt.format(e);o.includes("$")&&(o=o.split("$")[1]),r.value=o}else r.value=e;i.value=e});p(this,"render",({range:e,input:r})=>{let i=this.getAttribute("name"),o=this.getAttribute("disabled"),a=this.getAttribute("value"),s=this.getAttribute("min"),l=this.getAttribute("max"),c=this.getAttribute("step");r.setAttribute("name",i),this.setInputValue(a),e.setAttribute("value",a),s&&e.setAttribute("min",s),l&&e.setAttribute("max",l),c&&e.setAttribute("step",c),o?(r.setAttribute("disabled",""),e.setAttribute("disabled","")):(r.removeAttribute("disabled"),e.removeAttribute("disabled"))});p(this,"handleFormData",({formData:e})=>{let r=this.shadowRoot.querySelector(".input");this.disabled||e.append(r.name,r.value)});p(this,"findContainingForm",()=>{let e=this.getRootNode();return Array.from(e.querySelectorAll("form")).find(i=>i.contains(this))||null});let e=this.attachShadow({mode:"open",delegatesFocus:!0}),r=++i0,i=`input-range-label-${r}`,o=`input-range-${r}`;e.innerHTML=`
      <style>
        :host {
          font-family: var(--font-family);
          font-size: 14px;
          display: flex;
        } 
        .root {
          display: flex;
          flex-direction: column;
          width: 100%;
        }
        #label {
          padding-bottom: 6px;
          color: var(--text-tertiary);
        }
        .input, .range {
          width: 100%;
        }
        .input-number {
          position: relative; 
          display: flex;
        }
        .dollar {
          position: absolute;
          top: 10px;
          right: 10px;
        }
        .input {
          border: none;
          padding: 10px;
          border-radius: 4px;
          font-size: 16px;
          background: var(--background-secondary);
          color: var(--text-primary);
        }
        .range {
          position: absolute;
          width: calc(100% - 5px);
          bottom: -2px;
          left: 0px;
        }
        input[type=range]::-webkit-slider-runnable-track {
          width: 100%;
          height: 2px;
          cursor: pointer;
          animate: 0.2s;
          border-radius: 5px;
          border: 1px solid blue;
        }
        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none;
          border: 1px solid #2497E3;
          height: 8px;
          width: 8px;
          background: #A1D0FF;
          cursor: pointer;
          margin-top: -8px;
        }
      </style>
      <div class="root">
        <label for=${o} id=${i}>
          <slot name="label"></slot>
        </label>
        <span class="input-container">
          <span class="input-number">
            <input id=${o} class="input" type="text"></input>
            <span class="dollar">$</span>
            <input aria-labelledby=${i} class="range" type="range"></input>
          </span>
        </span>
      </div>
    `}static get observedAttributes(){return["value","disabled","name","min","step","max","dollar"]}attributeChangedCallback(e,r,i){}connectedCallback(){let e=this.shadowRoot.querySelector(".range"),r=this.shadowRoot.querySelector(".input"),i=this.shadowRoot.querySelector(".dollar");this.isDollar=this.hasAttribute("dollar"),this.isDollar?i.innerHTML="$":i.innerHTML="%",this.render({range:e,input:r}),e.addEventListener("input",o=>{let a=o.target.value;this.setInputValue(a)}),r.addEventListener("keypress",o=>{let a=o.target.value;(o.which<48||o.which>57)&&o.preventDefault(),o.target.value=a}),r.addEventListener("keyup",o=>{this.isDollar&&this.setInputValue(ho(o.target.value))}),this.form=this.findContainingForm(),this.form&&this.form.addEventListener("formdata",this.handleFormData)}};customElements.define("app-input-range",ki);var Ti=class extends HTMLElement{constructor(){super();p(this,"handleModeChange",e=>{let r=this.getAttribute("mode"),i=document.body.querySelector("huanlin-app #app");r==="light"?(this.setAttribute("mode","dark"),i.classList.add("dark")):(this.setAttribute("mode","light"),i.classList.remove("dark"))});let e=this.attachShadow({mode:"open"});e.innerHTML=`
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
    `}static get observedAttributes(){return["mode"]}connectedCallback(){this.render(),this.shadowRoot.querySelector("button").addEventListener("click",this.handleModeChange)}disconnectedCallback(){this.shadowRoot.querySelector("button").removeEventListener("click",this.handleModeChange)}attributeChangedCallback(e,r,i){this.render()}setMode(e){this.shadowRoot.querySelector("#light-dark-mode-text").innerHTML=e==="light"?"Light Mode":"Dark Mode",e==="light"?(this.shadowRoot.querySelector("#light").classList.add("active"),this.shadowRoot.querySelector("#dark").classList.remove("active")):(this.shadowRoot.querySelector("#dark").classList.add("active"),this.shadowRoot.querySelector("#light").classList.remove("active"))}render(){let e=this.getAttribute("mode")||"light";this.setMode(e)}};customElements.define("app-light-dark-mode",Ti);var Si=class extends HTMLElement{constructor(){super();p(this,"render",()=>{});let e=this.attachShadow({mode:"open"});e.innerHTML=`
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
    `}connectedCallback(){this.render()}};customElements.define("app-load",Si);var _i=class extends HTMLElement{constructor(){super();p(this,"handleBlur",e=>{this.removeAttribute("tabindex")});let e=this.attachShadow({mode:"open"});e.innerHTML=`
      <style>
        #option {
          font-family: var(--font-family);
          font-size: 14px;
          font-weight: bold;
          cursor: pointer;
          padding: 10px 0px;
          width: 100%;
          border-radius: 10px;
          padding: 10px;
          background-color: var(--background-primary);
          box-sizing: border-box;
        } 
        :host([active]) #option {
          background-color: var(--color-primary);
          color: white;
        }
      </style>
      <div id="option">
        <slot></slot>
      </div>
    `}set name(e){this.setAttribute("name",e)}get name(){return this.getAttribute("name")}static get observedAttributes(){return["active","name"]}setFocus(){this.setAttribute("tabindex","0"),this.focus()}connectedCallback(){this.setAttribute("role","option"),this.addEventListener("blur",this.handleBlur)}disconnectedCallback(){this.removeEventListener("blur",this.handleBlur)}attributeChangedCallback(e,r,i){}};customElements.define("app-option",_i);var Sl="* { margin: 0; padding: 0; border: 0; background: transparent; box-sizing: border-box; font-family: var(--font-family); } .select { position: relative; display: inline-block; width: 100%; } .trigger { cursor: pointer; background: var(--background-secondary); width: 100%; height: 60px; color: var(--text-primary); border-radius: 500px; display: flex; flex-direction: row; align-items: center; justify-content: space-between; padding: 20px; -webkit-user-select: none; -moz-user-select: none; user-select: none; } .icon { height: 40px; width: 40px; border-radius: 500px; background: var(--background-primary); display: flex; justify-content: center; align-items: center; } .icon huanlin-icon { --fill: var(--text-primary); --height: 24px; } .popup { display: none; position: absolute; top: 64px; left: 0px; flex-direction: column; background: var(--background-secondary); box-shadow: var(--popover-shadow); padding: 10px; width: 100%; border-radius: 20px; gap: 6px; z-index: 1; } .popup.active { display: flex; }";var _l=0,qi=class extends HTMLElement{constructor(){super();p(this,"handleTriggerClick",e=>{let r=this.shadowRoot.querySelector(".popup");r.classList.contains("active")?r.classList.remove("active"):r.classList.add("active")});p(this,"handlePopoverClick",e=>{let r=e.target.closest("app-option");r&&this.setActiveOption(r.name),this.focusTrigger(),this.hide()});p(this,"willLoad",()=>{var e,r,i,o;this.triggerEle=this.shadowRoot.querySelector(".trigger"),(e=this.triggerEle)==null||e.addEventListener("click",this.handleTriggerClick),this.popoverEle=this.shadowRoot.querySelector(".popup"),(r=this.popoverEle)==null||r.addEventListener("click",this.handlePopoverClick),(i=this.triggerEle)==null||i.addEventListener("keydown",this.handleKeyboard),(o=this.popoverEle)==null||o.addEventListener("keydown",this.handleOptionArrow),this.labelEle=this.shadowRoot.querySelector(".label"),this.addEventListener("keydown",this.handleCloseKeyboard),document.addEventListener("click",this.handleClickOutside)});p(this,"setActiveOption",e=>{let r=Array.from(this.querySelectorAll("app-option")),i;r.forEach(o=>{o.name===e?(i=o,o.setAttribute("active","")):o.removeAttribute("active")}),this.setLabel(i.innerHTML)});p(this,"setLabel",e=>at(this,null,function*(){this.labelEle&&(this.labelEle.innerHTML=e)}));p(this,"handleOptionArrow",e=>{if(e.key==="ArrowDown"){let r=this.getOptions(),o=r.indexOf(e.target)+1;if(o<0||o>=r.length)return;r[o].setFocus()}else if(e.key==="ArrowUp"){let r=this.getOptions(),o=r.indexOf(e.target)-1;if(o<0||o>=r.length)return;r[o].setFocus()}else e.key==="Enter"&&(this.setActiveOption(e.target.name),e.target.click(),this.hide(),this.focusTrigger())});p(this,"getOptions",()=>Array.from(this.querySelectorAll("app-option")));p(this,"handleCloseKeyboard",e=>{e.key==="Escape"?(this.hide(),this.focusTrigger()):(e.key==="Tab"||e.shiftKey&&e.key==="Tab")&&this.hide()});p(this,"focusTrigger",()=>{this.triggerEle.focus()});p(this,"handleKeyboard",e=>{if(["ArrowDown"," ","Enter"].includes(e.key)){this.show();let r=this.getOptions();r.length&&r[0].setFocus()}});p(this,"handleClickOutside",e=>{e.composedPath().includes(this)||this.popoverEle.classList.remove("active")});p(this,"show",()=>{let e=this.popoverEle;this.triggerEle.setAttribute("aria-expanded",!0),e.classList.add("active")});p(this,"hide",()=>{let e=this.popoverEle;this.triggerEle.setAttribute("aria-expanded",!1),e.classList.remove("active")});let e=this.attachShadow({mode:"open"}),r=new CSSStyleSheet;r.replaceSync(Sl),e.adoptedStyleSheets=[r];let i=`select-listbox-${++_l}`,o=`select-listbox-${++_l}`;e.innerHTML=`
      <div class="select">
        <div 
          class="trigger" 
          tabindex="0" 
          role="combobox" 
          aria-haspopup="listbox"
          aria-expanded="false"
          aria-labelledby=${o}
          aria-controls=${i}
        >
          <span class="label" id=${o}>
            <slot name="trigger">about me</slot>
          </span>
          <span class="icon">
            <huanlin-icon name="arrow-down"></huanlin-icon>
          </span>
        </div>
        <div class="popup" role="listbox" id="${i}">
          <slot></slot>
        </div>
      </div>
    `}connectedCallback(){setTimeout(()=>{this.willLoad()})}disconnectedCallback(){var e,r,i;(e=this.triggerEle)==null||e.removeEventListener("click",this.handleTriggerClick),(r=this.popoverEle)==null||r.removeEventListener("click",this.handlePopoverClick),document.removeEventListener("click",this.handleClickOutside),this.removeEventListener("keydown",this.handleCloseKeyboard),(i=this.popoverEle)==null||i.removeEventListener("keydown",this.handleOptionArrow)}};customElements.define("app-select",qi);var ql="* { box-sizing: border-box; } :host { font-family: var(--font-family-secondary); font-weight: 400; display: flex; } h1 { margin-block-start: 0px; margin-block-end: 10px; } .description { color: var(--text-tertiary); margin-block-start: 0px; margin-block-end: 0px; } :host([size=medium]) h1 { font-size: 16px; } :host([size=medium]) .description { font-size: 14px; }";var Ml=`<div part="root" class="root">
  <h1 part="title"></h1>
  <p part="description" class="description"></p>
</div>`;vt();var Mi=class extends HTMLElement{constructor(){super();p(this,"willLoad",()=>{var e,r;this.h1Ele=(e=this.shadowRoot)==null?void 0:e.querySelector("h1"),this.pEle=(r=this.shadowRoot)==null?void 0:r.querySelector("p")});p(this,"render",()=>{this.h1Ele&&(this.h1Ele.innerHTML=se(this.name)),this.pEle&&(this.pEle.innerHTML=this.description)});let e=this.attachShadow({mode:"open"}),r=new CSSStyleSheet;r.replaceSync(ql),e.adoptedStyleSheets=[r],e.innerHTML=Ml}set name(e){this.setAttribute("name",e)}get name(){return this.getAttribute("name")||""}set description(e){this.setAttribute("description",e)}get description(){return this.getAttribute("description")||""}set size(e){this.setAttribute("size",e)}get size(){return this.getAttribute("size")||""}static get observedAttributes(){return["name","description","size"]}attributeChangedCallback(e,r,i){}connectedCallback(){setTimeout(()=>{this.willLoad(),this.render()})}disconnectedCallback(){}};customElements.define("huanlin-title-description",Mi);var Cl=".root { border-radius: 10px; background: white; padding: 20px; border: 2px solid var(--color-tertiary); }";var Al=`<div part="root" class="root">
  <slot></slot>
</div>`;var Ci=class extends HTMLElement{constructor(){super();p(this,"willLoad",()=>{});p(this,"render",()=>{});let e=this.attachShadow({mode:"open"}),r=new CSSStyleSheet;r.replaceSync(Cl),e.adoptedStyleSheets=[r],e.innerHTML=Al}static get observedAttributes(){return[]}attributeChangedCallback(e,r,i){}connectedCallback(){this.willLoad(),this.render()}disconnectedCallback(){}};customElements.define("huanlin-notification",Ci);var Ll="* { box-sizing: border-box; font-family: var(--font-family-secondary); } input { border: 1.6px solid var(--color-tertiary); padding: 10px; border-radius: 8px; font-size: 16px; background: var(--background-primary); color: var(--text-primary); width: 100%; }";var El='<input part="input" />';var Ai=class extends HTMLElement{constructor(){super();p(this,"willLoad",()=>{var e;this.inputEle=(e=this.shadowRoot)==null?void 0:e.querySelector("input")});p(this,"render",()=>{});let e=this.attachShadow({mode:"open"}),r=new CSSStyleSheet;r.replaceSync(Ll),e.adoptedStyleSheets=[r],e.innerHTML=El}set value(e){this.inputEle.value=e,this.setAttribute("value",e)}get value(){return this.getAttribute("value")||""}static get observedAttributes(){return["type","value"]}attributeChangedCallback(e,r,i){}connectedCallback(){this.willLoad(),this.render()}disconnectedCallback(){}};customElements.define("huanlin-input",Ai);var Hl="* { box-sizing: border-box; font-family: var(--font-family-secondary); } textarea { border: 1.6px solid var(--color-tertiary); padding: 10px; border-radius: 8px; font-size: 16px; background: var(--background-primary); color: var(--text-primary); height: var(--height, 140px); width: 100%; }";var zl='<textarea part="textarea" />';var Li=class extends HTMLElement{constructor(){super();p(this,"willLoad",()=>{var e;this.textareaEle=(e=this.shadowRoot)==null?void 0:e.querySelector("textarea")});p(this,"render",()=>{});let e=this.attachShadow({mode:"open"}),r=new CSSStyleSheet;r.replaceSync(Hl),e.adoptedStyleSheets=[r],e.innerHTML=zl}static get observedAttributes(){return[]}attributeChangedCallback(e,r,i){}connectedCallback(){this.willLoad(),this.render()}disconnectedCallback(){}};customElements.define("huanlin-textarea",Li);var Rl="* { box-sizing: border-box; } :host { display: flex; width: 100%; } hr { width: 100%; display: block; border-color: rgba(161, 171, 213, 0.0509803922); }";var Dl='<hr part="hr" class="root">';var Ei=class extends HTMLElement{constructor(){super();p(this,"willLoad",()=>{});p(this,"render",()=>{});let e=this.attachShadow({mode:"open"}),r=new CSSStyleSheet;r.replaceSync(Rl),e.adoptedStyleSheets=[r],e.innerHTML=Dl}static get observedAttributes(){return[]}attributeChangedCallback(e,r,i){}connectedCallback(){this.willLoad(),this.render()}disconnectedCallback(){}};customElements.define("huanlin-divider",Ei);var Nl="* { box-sizing: border-box; font-family: var(--font-family-secondary); } button { background: var(--background, var(--color-primary)); border: var(--border, none); padding: var(--padding, 10px 20px); color: var(--background-primary); border-radius: var(--border-radius, 4px); cursor: pointer; } button:hover { background: var(--hover-background, var(--color-primary-hover)); } button:active { background: var(--active-background, var(--color-primary-active)); } :host([type=text]) button { background: var(--background, transparent); color: var(--color-primary); font-weight: bold; padding: var(--padding, 0px); } :host([type=text]) button:hover { background: var(--hover-background, transparent); } :host([type=text]) button:active { background: var(--active-background, transparent); } :host([type=outline]) button { background: var(--background, transparent); color: var(--color, var(--color-secondary)); font-weight: bold; padding: var(--padding, 8px 14px); border-radius: var(--border-radius, 8px); border: var(--border, 1px solid var(--border-color)); } :host([type=outline]) button:hover { background: var(--hover-background, transparent); } :host([type=outline]) button:active { background: var(--active-background, transparent); }";var Zl='<button part="button"><slot></slot></button>';var Hi=class extends HTMLElement{constructor(){super();p(this,"willLoad",()=>{var e;this.buttonEle=(e=this.shadowRoot)==null?void 0:e.querySelector("button")});p(this,"render",()=>{});let e=this.attachShadow({mode:"open"}),r=new CSSStyleSheet;r.replaceSync(Nl),e.adoptedStyleSheets=[r],e.innerHTML=Zl}set type(e){this.setAttribute("type",e)}get type(){return this.getAttribute("type")||""}static get observedAttributes(){return["type"]}attributeChangedCallback(e,r,i){}setFocus(){return at(this,null,function*(){var e,r;(r=(e=this.shadowRoot)==null?void 0:e.querySelector("button"))==null||r.focus()})}connectedCallback(){this.willLoad(),this.render()}disconnectedCallback(){}};customElements.define("huanlin-button",Hi);var Il="* { box-sizing: border-box; font-family: var(--font-family-secondary); } :host { display: flex; } .root { cursor: pointer; display: flex; flex-direction: row; align-items: flex-start; } input { cursor: pointer; }";var Fl=`<div part="root" class="root">
  <input part="input" type="checkbox" />
  <div part="description" class="description">
    <slot></slot>
  </div>
</div>`;var h0=0,zi=class extends HTMLElement{constructor(){super();p(this,"willLoad",()=>{var r,i;this.checkboxEle=(r=this.shadowRoot)==null?void 0:r.querySelector("input"),this.descriptionEle=(i=this.shadowRoot)==null?void 0:i.querySelector(".description");let e=++h0;this.descriptionEle.setAttribute("id",e),this.checkboxEle.setAttribute("aria-labelledby",e)});p(this,"render",()=>{});let e=this.attachShadow({mode:"open"}),r=new CSSStyleSheet;r.replaceSync(Il),e.adoptedStyleSheets=[r],e.innerHTML=Fl}static get observedAttributes(){return["type"]}attributeChangedCallback(e,r,i){}connectedCallback(){this.willLoad(),this.render()}disconnectedCallback(){}};customElements.define("huanlin-checkbox",zi);var Pl="* { box-sizing: border-box; font-family: var(--font-family-secondary); } .root { padding: var(--padding, 4px 10px); border-radius: 6px; background-color: var(--background-color, #2c46b1); color: var(--color, white); font-size: var(--font-size, 12px); }";var $l='<div part="root" class="root"><slot></slot></div>';var Ri=class extends HTMLElement{constructor(){super();p(this,"willLoad",()=>{});p(this,"render",()=>{});let e=this.attachShadow({mode:"open"}),r=new CSSStyleSheet;r.replaceSync(Pl),e.adoptedStyleSheets=[r],e.innerHTML=$l}static get observedAttributes(){return[]}attributeChangedCallback(e,r,i){}connectedCallback(){this.willLoad(),this.render()}disconnectedCallback(){}};customElements.define("huanlin-tag",Ri);var Ol="* { box-sizing: border-box; font-family: var(--font-family-secondary); } :host { display: flex; flex-direction: column; } .description { margin-top: 10px; color: var(--text-light); font-size: 12px; font-weight: 400; } progress { border: none; height: 8px; width: 100%; } progress::-webkit-progress-bar { background-color: var(--track-color, #2c46b1); border-radius: 8px; } progress::-webkit-progress-value { background-color: var(--value-color, white); border-radius: 8px; }";var Bl=`<label part="label" slot="label"></label>
<progress part="progress"><slot></slot></progress>
<div part="description" class="description"><slot name="description"></slot></div>`;var m0=0,g0=0,Di=class extends HTMLElement{constructor(){super();p(this,"willLoad",()=>{var i,o,a;this.labelEle=(i=this.shadowRoot)==null?void 0:i.querySelector("label"),this.progressEle=(o=this.shadowRoot)==null?void 0:o.querySelector("progress"),this.descriptionEle=(a=this.shadowRoot)==null?void 0:a.querySelector("div");let e=`progress-label-${++m0}`,r=`progress-description-${++g0}`;this.progressEle.setAttribute("id",e),this.progressEle.setAttribute("aria-describedby",r),this.labelEle.setAttribute("for",e),this.descriptionEle.setAttribute("id",r)});p(this,"render",()=>{var e,r;this.max&&((e=this.progressEle)==null||e.setAttribute("max",this.max)),this.value&&((r=this.progressEle)==null||r.setAttribute("value",this.value))});let e=this.attachShadow({mode:"open"}),r=new CSSStyleSheet;r.replaceSync(Ol),e.adoptedStyleSheets=[r],e.innerHTML=Bl}set value(e){this.setAttribute("value",e),this.progressEle.setAttribute("value",e)}get value(){return this.getAttribute("value")||""}set max(e){this.setAttribute("max",e),this.progressEle.setAttribute("max",e)}get max(){return this.getAttribute("max")||""}static get observedAttributes(){return["value","max"]}attributeChangedCallback(e,r,i){this.render()}connectedCallback(){this.willLoad(),this.render()}disconnectedCallback(){}};customElements.define("huanlin-progress",Di);var Ul=":host { display: none; width: 100%; } :host([active]) { display: flex; } .root { height: 100%; width: 100%; } [data-container] { display: none; }";var Vl=`<div class="root">
  <slot></slot>
  <div data-container></div>
</div>`;var Pi=class extends HTMLElement{constructor(){super();p(this,"willLoad",()=>{var e;this.rootEle=(e=this.shadowRoot)==null?void 0:e.querySelector(".root")});p(this,"initElement",()=>at(this,null,function*(){let e=this.getAttribute("element");if(e&&customElements.get(e)===void 0){let r=window.location.hash.slice(1);yield{contact:()=>at(this,null,function*(){return yield Promise.resolve().then(()=>(Kl(),y0))}),mortgage:()=>at(this,null,function*(){return yield Promise.resolve().then(()=>(bi(),r0))}),"":()=>at(this,null,function*(){return yield Promise.resolve().then(()=>(ec(),w0))}),"demo-one":()=>at(this,null,function*(){return yield Promise.resolve().then(()=>(ac(),T0))}),"demo-two":()=>at(this,null,function*(){return yield Promise.resolve().then(()=>(dc(),_0))})}[r]()}this.element=document.createElement(e),this.appendChild(this.element)}));p(this,"render",()=>{this.setAttribute("active",""),this.initElement();let e=this.closest("huanlin-routes").closest("huanlin-route");e&&e.render()});p(this,"getElement",()=>this.element);p(this,"dispose",()=>{var e;this.removeAttribute("active"),(e=this.element)==null||e.remove()});let e=this.attachShadow({mode:"open"}),r=new CSSStyleSheet;r.replaceSync(Ul),e.adoptedStyleSheets=[r],e.innerHTML=Vl}set route(e){}get route(){return this.getAttribute("route")||""}static get observedAttributes(){return["element","route"]}attributeChangedCallback(e,r,i){}connectedCallback(){this.willLoad()}disconnectedCallback(){var e;(e=this.element)==null||e.remove()}};customElements.define("huanlin-route",Pi);var hc=":host, .root { display: flex; width: 100%; }";var pc=`<div class="root">
  <slot>
  </slot>
</div>`;var $i=class extends HTMLElement{constructor(){super();p(this,"willLoad",()=>{window.addEventListener("popstate",this.render)});p(this,"render",()=>{let e=window.location.hash;Array.from(this.children).reverse().forEach(i=>{i.getAttribute("route")===e?i.render():i.dispose()})});let e=this.attachShadow({mode:"open"}),r=new CSSStyleSheet;r.replaceSync(hc),e.adoptedStyleSheets=[r],e.innerHTML=pc}static get observedAttributes(){return[]}attributeChangedCallback(e,r,i){}connectedCallback(){setTimeout(()=>{this.willLoad(),this.render()})}disconnectedCallback(){window.removeEventListener("popstate",this.render)}};customElements.define("huanlin-routes",$i);var fc="ol { list-style-type: none; margin-block-start: 0em; margin-block-end: 0em; margin-inline-start: 0px; margin-inline-end: 0px; padding-inline-start: 0px; display: flex; flex-direction: row; }";var mc=`<nav part="nav" class="nav" aria-label="breadcrumb">
  <ol part="ol" class="ol"><slot></slot></ol>
</nav>`;var Oi=class extends HTMLElement{constructor(){super();p(this,"willLoad",()=>{});p(this,"render",()=>{});let e=this.attachShadow({mode:"open"}),r=new CSSStyleSheet;r.replaceSync(fc),e.adoptedStyleSheets=[r],e.innerHTML=mc}static get observedAttributes(){return[]}attributeChangedCallback(e,r,i){}connectedCallback(){setTimeout(()=>{this.willLoad(),this.render()},200)}disconnectedCallback(){}};customElements.define("huanlin-breadcrumb",Oi);var gc=":host([active]) .root { cursor: default; color: var(--text-primary); } .root { padding: 4px; font-weight: bold; font-size: 12px; cursor: pointer; color: var(--text-tertiary); } .root:hover { color: var(--text-primary); }";var vc='<li part="root" class="root"><slot></slot></li>';var Bi=class extends HTMLElement{constructor(){super();p(this,"willLoad",()=>{var e;this.rootEle=(e=this.shadowRoot)==null?void 0:e.querySelector(".root")});p(this,"render",()=>{var e,r,i,o;this.active?((e=this.rootEle)==null||e.setAttribute("aria-current","page"),(r=this.rootEle)==null||r.removeAttribute("tabindex")):((i=this.rootEle)==null||i.removeAttribute("aria-current"),(o=this.rootEle)==null||o.setAttribute("tabindex","0"))});let e=this.attachShadow({mode:"open"}),r=new CSSStyleSheet;r.replaceSync(gc),e.adoptedStyleSheets=[r],e.innerHTML=vc}set active(e){this.setAttribute("active",e)}get active(){return!!(this.getAttribute("active")==="true"||this.hasAttribute("active"))}static get observedAttributes(){return["active"]}attributeChangedCallback(e,r,i){setTimeout(()=>{this.render()})}connectedCallback(){setTimeout(()=>{this.willLoad(),this.render()},200)}disconnectedCallback(){}};customElements.define("huanlin-breadcrumb-item",Bi);var xc='* { margin: 0; padding: 0; border: 0; background: transparent; box-sizing: border-box; } body { font-family: var(--font-family); } .position-relative { position: relative; } .flex { display: flex; } .justify-end { justify-content: flex-end; } .fit-content { width: -moz-fit-content; width: fit-content; } .align-center { align-items: center; } .justify-center { justify-content: center; } .flex-row { flex-direction: row; } .flex-column { flex-direction: column; } .flex-grow-1 { flex-grow: 1; } .display-block { display: block; } .justify-space-between { justify-content: space-between; } .gap { gap: 10px; } .width-100p, .w-100p { width: 100%; } .h-100p { height: 100%; } .min-height-100p { min-height: 100%; } .height-100p { height: 100%; } .text-primary { color: var(--text-primary); } .text-secondary { color: var(--text-secondary); } .text-tertiary { color: var(--text-tertiary); } .subtitle { display: block; width: -moz-fit-content; width: fit-content; font-size: 16px; margin-block-start: 0px; margin-block-end: 0px; margin-inline-start: 0px; margin-inline-end: 0px; } :host { display: flex; --app-drawer-background: #f6f6f9; --nav-width: 300px; --header-height: 80px; width: 100%; } .root { display: grid; height: 100vh; width: 100%; grid-template-rows: 80px 1fr; grid-template-columns: var(--nav-width) 1fr; grid-template-areas: "nav header" "nav main" "nav main"; } huanlin-nav { --app-drawer-width: var(--nav-width); grid-area: nav; height: 100%; } huanlin-nav::part(drawer) { position: relative; height: 100%; transform: translate3d(0px, 0px, 0px); transition-duration: 0; visibility: visible; display: flex; width: 100%; align-items: flex-start; justify-content: flex-start; --app-drawer-content-padding: 20px 0px 0px 0px; } huanlin-nav::part(nav) { position: relative; inset: unset; width: var(--app-drawer-width); display: flex; height: 100%; } huanlin-nav::part(content) { width: 100%; display: flex; justify-content: space-between; } huanlin-nav .nav-header { margin-bottom: 40px; } huanlin-nav .nav-header .nav-header-icon { --height: 32px; --width: 32px; --fill: #545ed1; } huanlin-nav .nav-header .nav-header-label { margin-left: 10px; color: #545ed1; margin-block-start: 0px; margin-block-end: 0px; } huanlin-nav .nav-group { margin-bottom: 20px; } huanlin-nav .nav-group huanlin-nav-item { --label-color: #70728c; --hover-bg: white; --hover-label-color: #050306; --hover-icon-fill: #545ed1; --icon-padding: 8px; --nav-item-active-shadow: rgba(0, 0, 0, .04) 0px 2px 4px; } huanlin-nav .nav-group huanlin-nav-item::part(label) { width: 100%; font-size: 16px; } huanlin-nav .nav-group huanlin-nav-item .nav-item-group { display: flex; width: 100%; align-items: center; justify-content: space-between; } huanlin-nav .nav-group huanlin-nav-item huanlin-icon { --fill: #70728c; padding: 4px; } huanlin-nav .nav-group huanlin-nav-item:hover::part(root), huanlin-nav .nav-group huanlin-nav-item[active]::part(root) { box-shadow: var(--nav-item-active-shadow); background: var(--hover-bg); } huanlin-nav .nav-group huanlin-nav-item:hover huanlin-icon, huanlin-nav .nav-group huanlin-nav-item[active] huanlin-icon { --fill: var(--hover-icon-fill); } huanlin-nav .divider { width: 100%; display: block; border: 1px solid #e9eaf1; } huanlin-nav .second-nav-group { margin-top: 20px; } huanlin-nav .footer { color: white; margin: 0px; } huanlin-button[type=outline]::part(button) { display: flex; align-items: center; border-radius: 4px; border: 1px solid #e7e8ef; box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 4px; } header.header { grid-area: header; border-bottom: 1px solid #e9eaf1; height: var(--header-height); padding: 0 20px; } header.header huanlin-breadcrumb { margin-left: 20px; } header.header .header-right > * { margin-left: 20px; } header.header .header-right huanlin-icon:hover { --fill: var(--text-primary); } main { display: flex; grid-area: main; overflow-y: auto; } .card { border-radius: 8px; padding: 20px; box-shadow: var(--box-shadow); border: 1px solid var(--border-color); align-items: center; background: var(--background-primary); } .card .top .icon { --fill: var(--text-secondary); cursor: pointer; } .card .top .icon:hover { --fill: var(--text-primary); } .card .top .title { font-size: 14px; } .card .top .title h3 { margin: 2px 0px 10px 0px; } .card huanlin-divider { margin: 10px 0px; } .card .middle .label { font-size: 14px; margin-left: 10px; } .card .middle .label span { font-size: 12px; margin-left: 4px; } .card .middle huanlin-progress { margin-top: 10px; --track-color: var(--border-color); --value-color: var(--color-primary); } .card .bottom .label { margin: 10px 0px; } .card .bottom .label .text { font-size: 12px; font-weight: bold; margin-left: 10px; } .card .bottom huanlin-button::part(button) { width: 100%; display: flex; justify-content: center; }';var yc=`<div class="root">
    <huanlin-nav open="true" active="true">
        <div>
            <div class="nav-header flex flex-row align-center">
                <huanlin-icon class="nav-header-icon" name="circle"></huanlin-icon>
                <h2 class="nav-header-label">Huanlin UI</h2>
            </div>
            <ul aria-describedby="first-nav-group" class="nav-group first-nav-group">
                <huanlin-nav-item name="customer" active>
                    <huanlin-icon name="customer" slot="icon"></huanlin-icon>
                    <div class="nav-item-group">
                        Customer
                    </div>
                </huanlin-nav-item>
                <huanlin-nav-item name="connection">
                    <huanlin-icon name="chat" slot="icon"></huanlin-icon>
                    <div class="nav-item-group">
                        Connection
                    </div>
                </huanlin-nav-item>
                <huanlin-nav-item name="email-auotmation">
                    <huanlin-icon name="email" slot="icon"></huanlin-icon>
                    Email Auomation
                </huanlin-nav-item>
                <huanlin-nav-item name="report">
                    <huanlin-icon name="report" slot="icon"></huanlin-icon>
                    Report
                </huanlin-nav-item>
                <huanlin-nav-item name="team-members">
                    <huanlin-icon name="team-add" slot="icon"></huanlin-icon>
                    Team members
                </huanlin-nav-item>
                <huanlin-nav-item name="admin-settings">
                    <huanlin-icon name="widget" slot="icon"></huanlin-icon>
                    Admin settings
                </huanlin-nav-item>
            </ul>
            <hr class="divider">
            <ul aria-describedby="second-nav-group" class="nav-group second-nav-group">
                <huanlin-nav-item name="documentation">
                    <huanlin-icon name="document" slot="icon"></huanlin-icon>
                    Documentation 
                </huanlin-nav-item>
            </ul>
        </div>
        <div class="footer">
            <div class="card video-usage">
                <div class="top flex flex-column">
                    <div class="icon w-100p flex justify-end">
                        <huanlin-icon name="setting"></huanlin-icon>
                    </div>
                    <div class="title flex flex-column">
                        <h3 class="text-primary">Video Usage</h3>
                        <span class="text-secondary">Manage usage limit in settings</span>
                    </div>
                </div>
                <huanlin-divider></huanlin-divider>
                <div class="middle video-usage-count flex flex-column">
                    <div class="flex flex-row align-center">
                        <huanlin-icon name="play" class="icon"></huanlin-icon>
                        <div class="flex flex-row align-center label">
                            <div class="text-primary strong">124 / 500</div>
                            <span class="text-secondary">Basic Videos</span>
                        </div>
                    </div>
                    <huanlin-progress value="30" max="100"></huanlin-progress>
                </div>
                <div class="bottom flex flex-column">
                    <div class="label flex flex-row align-center">
                        <huanlin-icon name="account-circle"></huanlin-icon>
                        <div class="text text-primary">No Custom Videos</div>
                    </div>
                    <huanlin-button type="outline" class="text-primary">Upgrade Plan</huanlin-button>
                </div>
            </div>
        </div>
    </huanlin-nav>
    <slot name="header"></slot>
    <main>
        <slot></slot>
    </main>
</div>`;var Ui=class extends HTMLElement{constructor(){super();p(this,"willLoad",()=>{});p(this,"render",()=>{});let e=this.attachShadow({mode:"open"}),r=new CSSStyleSheet;r.replaceSync(xc),e.adoptedStyleSheets=[r],e.innerHTML=yc}static get observedAttributes(){return[]}attributeChangedCallback(e,r,i){this.render()}connectedCallback(){this.willLoad(),this.render()}disconnectedCallback(){}};customElements.define("huanlin-app-two-layout",Ui);var bc="* { margin: 0; padding: 0; border: 0; background: transparent; box-sizing: border-box; } body { font-family: var(--font-family); } .position-relative { position: relative; } .flex { display: flex; } .justify-end { justify-content: flex-end; } .fit-content { width: -moz-fit-content; width: fit-content; } .align-center { align-items: center; } .justify-center { justify-content: center; } .flex-row { flex-direction: row; } .flex-column { flex-direction: column; } .flex-grow-1 { flex-grow: 1; } .display-block { display: block; } .justify-space-between { justify-content: space-between; } .gap { gap: 10px; } .width-100p, .w-100p { width: 100%; } .h-100p { height: 100%; } .min-height-100p { min-height: 100%; } .height-100p { height: 100%; } .text-primary { color: var(--text-primary); } .text-secondary { color: var(--text-secondary); } .text-tertiary { color: var(--text-tertiary); } .subtitle { display: block; width: -moz-fit-content; width: fit-content; font-size: 16px; margin-block-start: 0px; margin-block-end: 0px; margin-inline-start: 0px; margin-inline-end: 0px; } .root { cursor: pointer; } .root .label { display: inline-block; color: var(--text-secondary); margin-right: 10px; font-size: 14px; } .root .switch { position: relative; border-radius: 12px; height: 20px; width: 40px; background: var(--text-tertiary); } .root .switch span { position: absolute; top: 2px; left: 2px; display: inline-block; border-radius: 8px; height: 16px; width: 16px; background: white; } :host([checked]) .label { color: var(--text-primary); } :host([checked]) .switch { background: var(--color-primary); } :host([checked]) .switch span { left: 22px; }";var wc=`<div part="root" class="root flex align-center" role="switch" aria-checked="false" tabindex="0">
  <span part="label" class="label">
    <slot name="label"></slot>
  </span>
  <span part="switch" class="switch flex">
    <span part="dot"></span>
  </span>
</div>`;var Vi=class extends HTMLElement{constructor(){super();p(this,"handleClick",e=>{this.toggleStatus()});p(this,"handleKeydown",e=>{[" ","Enter"].includes(e.key)&&(e.preventDefault(),this.toggleStatus())});p(this,"toggleStatus",()=>{var i;let e=this.switchEle.getAttribute("aria-checked")==="true",r=String(!e);(i=this.switchEle)==null||i.setAttribute("aria-checked",r),this.checked=!e});p(this,"willLoad",()=>{var e;this.switchEle=(e=this.shadowRoot)==null?void 0:e.querySelector(".switch"),this.addEventListener("click",this.handleClick),this.addEventListener("keydown",this.handleKeydown)});p(this,"render",()=>{var e;(e=this.switchEle)==null||e.setAttribute("aria-checked",this.checked.toString())});let e=this.attachShadow({mode:"open"}),r=new CSSStyleSheet;r.replaceSync(bc),e.adoptedStyleSheets=[r],e.innerHTML=wc}set name(e){this.setAttribute("name",e)}get name(){return this.getAttribute("name")||""}set checked(e){e?this.setAttribute("checked",""):this.removeAttribute("checked")}get checked(){return!!(this.getAttribute("checked")==="true"||this.hasAttribute("checked"))}static get observedAttributes(){return["checked","name"]}attributeChangedCallback(e,r,i){setTimeout(()=>{this.render()})}connectedCallback(){this.willLoad(),this.render()}disconnectedCallback(){this.removeEventListener("click",this.handleClick),this.removeEventListener("keydown",this.handleKeydown)}};customElements.define("huanlin-switch",Vi);var kc="* { margin: 0; padding: 0; border: 0; background: transparent; box-sizing: border-box; } body { font-family: var(--font-family); } .position-relative { position: relative; } .flex { display: flex; } .justify-end { justify-content: flex-end; } .fit-content { width: -moz-fit-content; width: fit-content; } .align-center { align-items: center; } .justify-center { justify-content: center; } .flex-row { flex-direction: row; } .flex-column { flex-direction: column; } .flex-grow-1 { flex-grow: 1; } .display-block { display: block; } .justify-space-between { justify-content: space-between; } .gap { gap: 10px; } .width-100p, .w-100p { width: 100%; } .h-100p { height: 100%; } .min-height-100p { min-height: 100%; } .height-100p { height: 100%; } .text-primary { color: var(--text-primary); } .text-secondary { color: var(--text-secondary); } .text-tertiary { color: var(--text-tertiary); } .subtitle { display: block; width: -moz-fit-content; width: fit-content; font-size: 16px; margin-block-start: 0px; margin-block-end: 0px; margin-inline-start: 0px; margin-inline-end: 0px; } :host { display: flex; } .tablist { display: flex; flex-direction: column; width: 100%; position: relative; } .nav { padding: var(--padding); } .divider { display: flex; border-bottom: 1px solid var(--border-color) !important; }";var Tc=`<div part="tablist" role="tablist" class="tablist">
  <div part="nav" class="nav flex flex-row">
    <slot name="nav"></slot>
  </div>
  <div part="divider" class="divider"></div>
  <slot></slot>
</div>`;var ji=class extends HTMLElement{constructor(){super();p(this,"willLoad",()=>{});p(this,"render",()=>{});let e=this.attachShadow({mode:"open"}),r=new CSSStyleSheet;r.replaceSync(kc),e.adoptedStyleSheets=[r],e.innerHTML=Tc}static get observedAttributes(){return[]}attributeChangedCallback(e,r,i){}connectedCallback(){this.willLoad(),this.render()}disconnectedCallback(){}};customElements.define("huanlin-tablist",ji);var Sc="button { color: var(--text-secondary); -webkit-appearance: none; -moz-appearance: none; appearance: none; border: none; background: transparent; padding: 10px 0px; margin-right: 20px; cursor: pointer; position: relative; } button:hover { color: var(--text-primary); } :host([active]) button { color: var(--text-primary); } :host([active]) .indicator { position: absolute; bottom: -1px; left: 0; right: 0; height: 3px; border-radius: 4px; background: var(--color-primary); display: block; }";var _c=`<button type="button" role="tab" aria-selected="false" aria-controls="">
  <slot></slot>
  <span class="indicator"></span>
</button>`;var Yi=class extends HTMLElement{constructor(){super();p(this,"willLoad",()=>{var e;this.tabEle=(e=this.shadowRoot)==null?void 0:e.querySelector("button")});p(this,"render",()=>{this.tabEle.setAttribute("aria-selected",this.active)});let e=this.attachShadow({mode:"open"}),r=new CSSStyleSheet;r.replaceSync(Sc),e.adoptedStyleSheets=[r],e.innerHTML=_c}set panel(e){this.setAttribute("panel",e)}get panel(){return this.getAttribute("panel")||""}set active(e){e?this.setAttribute("active",""):this.removeAttribute("active")}get active(){return!!(this.getAttribute("active")==="true"||this.hasAttribute("active"))}static get observedAttributes(){return["active","panel"]}attributeChangedCallback(e,r,i){}connectedCallback(){this.willLoad(),this.render()}disconnectedCallback(){}};customElements.define("huanlin-tab",Yi);var qc="* { margin: 0; padding: 0; border: 0; background: transparent; box-sizing: border-box; } body { font-family: var(--font-family); } .position-relative { position: relative; } .flex { display: flex; } .justify-end { justify-content: flex-end; } .fit-content { width: -moz-fit-content; width: fit-content; } .align-center { align-items: center; } .justify-center { justify-content: center; } .flex-row { flex-direction: row; } .flex-column { flex-direction: column; } .flex-grow-1 { flex-grow: 1; } .display-block { display: block; } .justify-space-between { justify-content: space-between; } .gap { gap: 10px; } .width-100p, .w-100p { width: 100%; } .h-100p { height: 100%; } .min-height-100p { min-height: 100%; } .height-100p { height: 100%; } .text-primary { color: var(--text-primary); } .text-secondary { color: var(--text-secondary); } .text-tertiary { color: var(--text-tertiary); } .subtitle { display: block; width: -moz-fit-content; width: fit-content; font-size: 16px; margin-block-start: 0px; margin-block-end: 0px; margin-inline-start: 0px; margin-inline-end: 0px; } .root { display: none; } :host([active]) .root { display: flex; }";var Mc=`<div class="root" id="" role="tabpanel" tabindex="-1" aria-labelledby="">
  <slot></slot>
</div>`;var Wi=class extends HTMLElement{constructor(){super();p(this,"willLoad",()=>{var e;this.tabPanelEle=(e=this.shadowRoot)==null?void 0:e.querySelector(".root")});p(this,"render",()=>{var e;(e=this.tabPanelEle)==null||e.setAttribute("tabindex",this.active?"0":"-1")});let e=this.attachShadow({mode:"open"}),r=new CSSStyleSheet;r.replaceSync(qc),e.adoptedStyleSheets=[r],e.innerHTML=Mc}set name(e){this.setAttribute("name",e)}get name(){return this.getAttribute("name")||""}set active(e){e?this.setAttribute("active",""):this.removeAttribute("active")}get active(){return!!(this.getAttribute("active")==="true"||this.hasAttribute("active"))}static get observedAttributes(){return["active","name"]}attributeChangedCallback(e,r,i){this.render()}connectedCallback(){this.willLoad(),this.render()}disconnectedCallback(){}};customElements.define("huanlin-tab-panel",Wi);var Cc=":host { display: flex; width: 100%; } .tick text { fill: var(--text-secondary); }";var Ac='<div part="root" class="root"></div>';vt();var Xi=class extends HTMLElement{constructor(){super();p(this,"willLoad",()=>{});p(this,"render",()=>{var q;let e=this.parentElement;if(!e||!this.shadowRoot)return;let{width:r}=e.getBoundingClientRect();if(this.rootEle=(q=this.shadowRoot)==null?void 0:q.querySelector(".root"),!this.rootEle||r===0)return;this.rootEle.innerHTML="";let i=40,o={top:20,right:20,bottom:30,left:40},a=r-o.left-o.right-i,s=400-o.top-o.bottom,l=Rt().range([0,a]).padding(.1),c=lt().range([s,0]),u=ut(c).tickSize(0).tickPadding(10).ticks(2).tickFormat(g=>rr(g,{notation:"compact"})),h=St(l).tickSize(0).offset(0).tickPadding(10).tickSizeOuter(0),d=E(this.rootEle).append("svg").attr("width",a+o.left+o.right).attr("height",s+o.top+o.bottom).append("g").attr("transform","translate("+o.left+","+o.top+")"),f=[{month:3,view:2e4},{month:6,view:1e4},{month:9,view:13e3},{month:12,view:13e3},{month:15,view:8e3},{month:18,view:4e3},{month:21,view:16e3},{month:24,view:4e3},{month:27,view:8e3},{month:31,view:8e3}];f.forEach(g=>{g.view=+g.view}),l.domain(f.map(g=>g.month)),c.domain([0,G(f,g=>g.view)]);function v(){return ut(c).ticks(5)}d.append("g").attr("class","y grid").call(v().tickSize(-a).tickFormat("")).call(g=>g.selectAll(".tick line").attr("class","y-axis-grid").attr("stroke-dasharray","5").attr("stroke","var(--text-quaternary)")).call(g=>g.select(".domain").remove());function x(g,T){let b=T/1.8,M=10,_=s-c(g.view)-b;return`M${l(g.month)+l.bandwidth()/2-M/2},${c(g.view)+b} a ${b},${b} 0 0 1 ${b},-${b} h${M-2*b}a ${b},${b} 0 0 1 ${b},${b} v${_} h${-M}z`}d.selectAll(".bar").data(f).enter().append("path").attr("class","bar").style("cursor","pointer").attr("width",10).attr("d",g=>x(g,10)).style("fill",g=>"var(--color-primary)").on("mouseover",(g,T)=>{this.tooltip.style.display="flex",E(this.tooltip).transition().duration(200).style("opacity",1);let b=this.tooltip.querySelector(".dot");b.style.background="#555ed1";let M=this.tooltip.querySelector(".text");M.innerHTML=`${T.month} days - ${rr(T.view,{notation:"compact"})} views`}).on("mouseout",g=>{E(this.tooltip).style("opacity",0),this.tooltip.style.display="none"}).on("mousemove",g=>{E(this.tooltip).style("left",g.clientX+10+"px").style("top",g.clientY+10+"px")}),d.append("g").attr("class","x axis").attr("transform","translate(0,"+s+")").call(h).call(g=>g.select(".domain").remove()),d.append("g").attr("class","y axis").call(u).call(g=>g.select(".domain").remove())});let e=this.attachShadow({mode:"open"}),r=new CSSStyleSheet;r.replaceSync(Cc),e.adoptedStyleSheets=[r],e.innerHTML=Ac}static get observedAttributes(){return["data"]}attributeChangedCallback(e,r,i){this.render()}connectedCallback(){gt(this),setTimeout(()=>{this.willLoad(),this.render(),window.addEventListener("resize",e=>{this.render()})})}disconnectedCallback(){}};customElements.define("huanlin-bar-chart",Xi);var Lc="* { margin: 0; padding: 0; border: 0; background: transparent; box-sizing: border-box; } body { font-family: var(--font-family); } .position-relative { position: relative; } .flex { display: flex; } .justify-end { justify-content: flex-end; } .fit-content { width: -moz-fit-content; width: fit-content; } .align-center { align-items: center; } .justify-center { justify-content: center; } .flex-row { flex-direction: row; } .flex-column { flex-direction: column; } .flex-grow-1 { flex-grow: 1; } .display-block { display: block; } .justify-space-between { justify-content: space-between; } .gap { gap: 10px; } .width-100p, .w-100p { width: 100%; } .h-100p { height: 100%; } .min-height-100p { min-height: 100%; } .height-100p { height: 100%; } .text-primary { color: var(--text-primary); } .text-secondary { color: var(--text-secondary); } .text-tertiary { color: var(--text-tertiary); } .subtitle { display: block; width: -moz-fit-content; width: fit-content; font-size: 16px; margin-block-start: 0px; margin-block-end: 0px; margin-inline-start: 0px; margin-inline-end: 0px; } :host, .root { width: 100%; display: flex; flex-direction: column; width: 100%; height: 100%; align-items: center; } .legend { display: flex; flex-direction: column; justify-content: space-between; font-size: 14px; height: 50px; width: 100%; } .legend .symbol-wrapper { display: flex; flex-direction: row; align-items: center; } .legend .symbol-wrapper .symbol-label { color: var(--text-secondary); } .legend .key { display: flex; flex-direction: row; justify-content: space-between; }";var Ec='<div part="root" class="root"></div>';vt();var Ki=class extends HTMLElement{constructor(){super();p(this,"willLoad",()=>{var e;this.rootEle=(e=this.shadowRoot)==null?void 0:e.querySelector(".root")});p(this,"handlePieResize",()=>{this.render()});p(this,"render",()=>{let e=this.closest("div");if(!e||!this.shadowRoot)return;let{width:r,height:i}=e.getBoundingClientRect();if(!this.rootEle)return;this.rootEle.innerHTML="";let o=[{name:"Videos Requested",value:65},{name:"Videos Skipped",value:35}],a=r*.8,s=i*.6,l=10,c=1,u=1,h=Math.min(a-l,s-l)/3,d=st(["#555ed1","#eb4d75"]),v=E(this.rootEle).append("svg").attr("class","pie").attr("width",a).attr("height",s).append("g").attr("transform","translate("+a/2+","+s/2+")"),x=nn().innerRadius(0).outerRadius(h),q=on().value(_=>_.value).sort(null),g=v.selectAll("path").data(q(o)).enter().append("g").append("path").attr("d",x).attr("fill",(_,w)=>d(w)).style("opacity",c).style("cursor","pointer").style("stroke","white").on("mouseover",(_,w)=>{var N,z;if(!this.tooltip)return;this.tooltip.style.display="flex",_.target.style.opacity=u,E(this.tooltip).transition().duration(200).style("opacity",1);let k=(N=this.tooltip)==null?void 0:N.querySelector(".dot");k.style.background=d(w.index);let L=(z=this.tooltip)==null?void 0:z.querySelector(".text");L.innerHTML=`${w.data.name} ${w.data.value}`}).on("mouseout",_=>{_.target.style.opacity=c,E(this.tooltip).style("opacity",0),this.tooltip.style.display="none"}).on("mousemove",_=>{E(this.tooltip).style("left",_.clientX+10+"px").style("top",_.clientY+10+"px")}),b=E(this.rootEle).append("div").attr("class","legend").style("margin-top","30px").selectAll(".key").data(o).enter().append("div").attr("class","key").style("display","flex").style("align-items","center").style("margin-right","20px"),M=b.append("div").attr("class","symbol-wrapper");M.append("div").attr("class","symbol").style("height","10px").style("width","10px").style("margin","5px 5px").style("background-color",(_,w)=>d(w)),M.append("div").attr("class","symbol-label").text(_=>`${_.name}`),b.append("div").attr("class","name").text(_=>`${_.value}%`),b.exit().remove()});let e=this.attachShadow({mode:"open"}),r=new CSSStyleSheet;r.replaceSync(Lc),e.adoptedStyleSheets=[r],e.innerHTML=Ec}set data(e){this.setAttribute("data",JSON.stringify(e))}get data(){let e=this.getAttribute("data")||[];return JSON.parse(e)}static get observedAttributes(){return[]}attributeChangedCallback(e,r,i){}connectedCallback(){gt(this),setTimeout(()=>{this.willLoad(),this.render(),this.addEventListener("mouseout",e=>{this.tooltip&&(this.tooltip.style.display="none")}),window.addEventListener("resize",this.handlePieResize)})}disconnectedCallback(){window.removeEventListener("resize",this.handlePieResize)}};customElements.define("huanlin-pie-chart",Ki);var Hc="* { margin: 0; padding: 0; border: 0; background: transparent; box-sizing: border-box; } body { font-family: var(--font-family); } .position-relative { position: relative; } .flex { display: flex; } .justify-end { justify-content: flex-end; } .fit-content { width: -moz-fit-content; width: fit-content; } .align-center { align-items: center; } .justify-center { justify-content: center; } .flex-row { flex-direction: row; } .flex-column { flex-direction: column; } .flex-grow-1 { flex-grow: 1; } .display-block { display: block; } .justify-space-between { justify-content: space-between; } .gap { gap: 10px; } .width-100p, .w-100p { width: 100%; } .h-100p { height: 100%; } .min-height-100p { min-height: 100%; } .height-100p { height: 100%; } .text-primary { color: var(--text-primary); } .text-secondary { color: var(--text-secondary); } .text-tertiary { color: var(--text-tertiary); } .subtitle { display: block; width: -moz-fit-content; width: fit-content; font-size: 16px; margin-block-start: 0px; margin-block-end: 0px; margin-inline-start: 0px; margin-inline-end: 0px; } :host, .root { width: 100%; display: flex; flex-direction: column; width: 100%; height: 100%; align-items: center; } .tick text { fill: var(--text-secondary); }";var zc='<div part="root" class="root"></div>';vt();var Ji=class extends HTMLElement{constructor(){super();p(this,"willLoad",()=>{var e;this.rootEle=(e=this.shadowRoot)==null?void 0:e.querySelector(".root")});p(this,"render",()=>{let e=this.closest("div");if(!e||!this.shadowRoot)return;let{width:r,height:i}=e.getBoundingClientRect();if(!this.rootEle)return;this.rootEle.innerHTML="";let o=this.data||[{currency:"USD",values:[{date:"2023/01/01",views:230},{date:"2023/02/01",views:269},{date:"2023/03/01",views:234},{date:"2023/04/01",views:282},{date:"2023/05/01",views:231},{date:"2023/06/01",views:240},{date:"2023/07/01",views:200},{date:"2023/08/01",views:320},{date:"2023/09/01",views:253},{date:"2023/10/01",views:264},{date:"2023/11/01",views:272},{date:"2023/12/01",views:290}]}],a={top:30,bottom:20,left:50,right:30},s=r-a.left-a.right,l=300-a.top-a.bottom,c=g=>{let T=g.select("defs").append("linearGradient").attr("id","gradient").attr("x1","0%").attr("y1","100%").attr("x2","0%").attr("y2","0%");T.append("stop").attr("offset","0%").attr("style","stop-color:#777dcf;stop-opacity:0.05"),T.append("stop").attr("offset","100%").attr("style","stop-color:#777dcf;stop-opacity:.5")},u=g=>{let T=g.select("defs").append("filter").attr("id","glow");T.append("feGaussianBlur").attr("stdDeviation","4").attr("result","coloredBlur");let b=T.append("feMerge");b.append("feMergeNode").attr("in","coloredBlur"),b.append("feMergeNode").attr("in","SourceGraphic")},h=E(this.rootEle).append("svg").attr("width",s+a.left+a.right).attr("height",l+a.top+a.bottom).append("g").attr("transform","translate("+a.left+","+a.top+")");h.append("defs"),h.call(c),h.call(u);let d=we("%Y/%m/%d"),f=o==null?void 0:o.map(g=>({ticker:g.ticker,values:g.values.map(T=>({views:T.views,date:d(T.date)}))})),v=ke().domain([xt(f,g=>xt(g.values,T=>T.date)),G(f,g=>G(g.values,T=>T.date))]).range([0,s]),x=lt().domain([xt(f,g=>xt(g.values,T=>T.views)),G(f,g=>G(g.values,T=>T.views))]).range([l,0]),q=rn().x(g=>v(g.date)).y(g=>x(g.views)).curve(ci.alpha(.5));this.renderYGridLine({svg:h,height:l,width:s}),this.renderArea({svg:h,parsedData:f,line:q,height:l}),this.renderLine({svg:h,parsedData:f,line:q}),this.renderDotCircle({svg:h,height:l,xScale:v,width:s,yScale:x,parsedData:f}),this.renderYAxis({svg:h,yScale:x,parsedData:f})});p(this,"renderArea",({svg:e,parsedData:r,line:i,height:o})=>{e.selectAll(".line").data(r).enter().append("path").attr("d",a=>{let s=i(a.values).slice(1),l=s.split(",");return`M0,${o},${s},l0,${o-l[l.length-1]}`}).style("fill","url(#gradient)")});p(this,"renderLine",({svg:e,parsedData:r,line:i})=>{e.selectAll(".line").data(r).enter().append("path").attr("d",o=>i(o.values)).attr("stroke-width","2").style("fill","none").style("filter","url(#glow)").attr("stroke","#555ed1")});p(this,"renderDotCircle",({svg:e,height:r,xScale:i,width:o,yScale:a,parsedData:s})=>{function l(h,d){h.style("opacity",d)}let c=e.append("g").attr("class","tick-circle-group").attr("transform",`translate(0, ${r})`).call(St(i).tickSize(0)).call(h=>h.select(".domain").remove()).selectAll(".tick").call(h=>h.select("text").remove()).style("transition",".2s");c.selectAll("rect").data(s).enter().append("rect").attr("width",`${o/12+10}px`).attr("x",`-${o/24+5}px`).attr("y",`-${r}px`).attr("height",`${r}px`).style("cursor","pointer").style("opacity","0").style("fill","#777dcf"),c.append("circle").attr("r","8px").style("opacity","0").style("fill","white").style("filter","drop-shadow(var(--popover-shadow))").attr("cy",(h,d)=>-r+a(s[0].values[d].views)).call(a),c.append("circle").attr("r","4px").style("opacity","0").style("fill","#555ed1").attr("cy",(h,d)=>-r+a(s[0].values[d].views)).call(a);let u=this;c.on("mouseout",function(h,d){l(E(h.target),0),l(E(h.currentTarget).selectAll("circle"),0),E(u.tooltip).style("opacity",0),u.tooltip.style.display="none"}).on("mouseover",function(h,d,f){u.tooltip.style.display="flex",E(u.tooltip).transition().duration(200).style("opacity",1);let v=u.tooltip.querySelector(".dot");v.style.background="#555ed1";let x=u.tooltip.querySelector(".text"),q=ir(d),g=s[0].values.find(T=>ir(T.date)===q);x.innerHTML=`${q} - ${g.views} views`,l(E(h.target),.2),l(E(h.currentTarget).selectAll("circle"),1)}).on("mousemove",h=>{E(u.tooltip).style("left",h.clientX+10+"px").style("top",h.clientY+10+"px")})});p(this,"renderYGridLine",({svg:e,height:r,width:i})=>{e.append("g").attr("class","y-grid").call(ut(lt().range([r,0])).ticks(4).tickSize(-i).tickPadding(100)).call(o=>o.selectAll(".tick line").attr("class","y-axis-grid").attr("stroke-dasharray","5").attr("stroke","var(--text-quaternary)")).call(o=>o.select(".domain").remove())});p(this,"renderYAxis",({svg:e,yScale:r,parsedData:i})=>{let o=ut(r).tickSize(0).tickPadding(10).ticks(4);e.append("g").attr("class","y axis").call(o).call(a=>a.select(".domain").remove())});let e=this.attachShadow({mode:"open"}),r=new CSSStyleSheet;r.replaceSync(Hc),e.adoptedStyleSheets=[r],e.innerHTML=zc}static get observedAttributes(){return[]}attributeChangedCallback(e,r,i){this.render()}connectedCallback(){gt(this),setTimeout(()=>{this.willLoad(),this.render(),this.addEventListener("mouseout",e=>{this.tooltip&&(this.tooltip.style.display="none")}),window.addEventListener("resize",e=>{this.render()})})}disconnectedCallback(){}};customElements.define("huanlin-line-chart",Ji);var Rc="#slot { display: flex; flex: 1; } #open-navigation-button { --height: 24px; --fill: var(--text-primary); } #title { font-size: 28px; } .hide { display: none; } huanlin-nav:part(content) { justify-content: space-between; height: 100%; } .nav-content { display: flex; flex-direction: column; flex: 1; } .nav-footer { display: flex; align-items: center; justify-content: flex-end; } .nav-footer .expand-button { padding: 14px; --height: 24px; border-radius: 10px; cursor: pointer; } .nav-footer .expand-button huanlin-icon { display: flex; transform: rotate(180deg); transition: linear; transition-duration: 0.2s; transition-property: transform; } .nav-footer .expand-button:hover, .nav-footer .expand-button:focus { --fill: var(--text-primary); background: var(--color-tertiary); } huanlin-nav[collapse] .nav-footer .expand-button huanlin-icon { transform: rotate(0deg); } [slot=other-app] { height: 100vh; overflow: hidden; }";var Dc=`<div id="app" class="flex flex-column ">
    <header role="banner" id="banner" class="flex flex-row justify-space-between">
        <div id="banner-start" class="flex flex-row align-center justify-space-between">
            <app-clock></app-clock>
            <button id="open-navigation-button" aria-label="open navigation" class="flex align-center"
                aria-controls="nav" aria-pressed="false">
                <huanlin-icon name="hamburger"></huanlin-icon>
            </button>
        </div>
        <div id="banner-center" class="flex-grow-1 flex justify-center align-center">
            <h1 id="title">Huanlin Huang</h1>
        </div>
        <div id="banner-end" class="flex align-center">
            <app-light-dark-mode mode="light"></app-light-dark-mode>
        </div>
    </header>
    <huanlin-nav id="nav" scrim="true">
        <div class="nav-content">
            <huanlin-nav-item name="home">
                <huanlin-icon slot="icon" name="home" title="home" aria-label="Home"></huanlin-icon>
                Home
            </huanlin-nav-item>
            <huanlin-nav-item name="mortgage">
                <huanlin-icon slot="icon" name="calculate" title="Mortgage Calculator"
                    aria-label="Mortgage Calculator"></huanlin-icon>
                Mortgage Calculator
            </huanlin-nav-item>
            <huanlin-nav-item name="contact">
                <huanlin-icon slot="icon" name="contact-page" title="Contact Info"
                    aria-label="Contact Info"></huanlin-icon>
                Contact Info
            </huanlin-nav-item>
            <huanlin-nav-item name="ui-demo-one">
                <huanlin-icon slot="icon" name="circle" title="UI demo one" aria-label="UI demo one"></huanlin-icon>
                UI demo one
            </huanlin-nav-item>
            <huanlin-nav-item name="ui-demo-two">
                <huanlin-icon slot="icon" name="circle" title="UI demo two" aria-label="UI demo two"></huanlin-icon>
                UI demo two
            </huanlin-nav-item>
        </div>
        <div class="nav-footer">
            <button id="expand-button" class="expand-button" aria-label="expand button">
                <huanlin-icon name="expand-circle-right" title="Expand or collapse"></huanlin-icon>
            </button>
        </div>
    </huanlin-nav>
    <main role="main" class="flex-grow-1 flex flex-column gap">
        <div id="main-filter" class="flex flex-row align-center">
            <app-select class="me-select" style="width: 300px;">
                <div slot="trigger">Home</div>
                <app-option name="home" active>Home</app-option>
                <app-option name="mortgage">Mortgage Calculator</app-option>
                <app-option name="contact">Contact info</app-option>
            </app-select>
        </div>
        <div id="slot">
            <huanlin-routes>
                <huanlin-route route="" element="huanlin-home"></huanlin-route>
                <huanlin-route route="#contact" element="huanlin-contact"></huanlin-route>
                <huanlin-route route="#mortgage" element="huanlin-mortgage"></huanlin-route>
            </huanlin-routes>
        </div>
    </main>
</div>
<!-- <div id="other-app" slot="other-app" class="hide">
    <huanlin-app-one>
    </huanlin-app-one>
</div>
<div id="app-two" slot="app-two" class="hide">
    <huanlin-app-two>
    </huanlin-app-two>
</div> -->`;var Gi=class extends HTMLElement{constructor(){super();p(this,"nav");p(this,"navBtn");p(this,"homePage");p(this,"contactPage");p(this,"mortgagePage");p(this,"select");p(this,"appEle");p(this,"handleSwitchPage",e=>{e==="contact"?window.location.hash="contact":e==="home"?window.location.hash="":e==="mortgage"?window.location.hash="mortgage":e==="ui-demo-one"?window.location.hash="demo-one":e==="ui-demo-two"&&(window.location.hash="demo-two")});p(this,"handleNavBtnClick",e=>{e.clientX===0||e.clientY===0||this.handleNavOpenClose()});p(this,"handleNavKeydown",e=>{["Enter"," "].includes(e.key)&&this.handleNavOpenClose({focus:!0})});p(this,"willLoad",()=>{var i,o,a;if(!this.querySelector("#slot"))return;this.select=this.querySelector(".me-select");let r=window.location.hash.slice(1);["home","contact","mortgage"].includes(r)&&setTimeout(()=>{this.select.setActiveOption(r)}),this.select.addEventListener("click",s=>{let l=s.target.getAttribute("name");l&&this.handleSwitchPage(l)}),this.navBtn=this.querySelector("#open-navigation-button"),(i=this.navBtn)==null||i.addEventListener("click",this.handleNavBtnClick),(o=this.navBtn)==null||o.addEventListener("keydown",this.handleNavKeydown),this.nav=this.querySelector("huanlin-app huanlin-nav"),this.expandBtn=this.nav.querySelector("#expand-button"),(a=this.expandBtn)==null||a.addEventListener("click",this.handleNavExpandBtnOpenClose),this.nav.addEventListener("keydown",s=>{s.key==="Escape"&&this.navBtn.focus()}),this.nav.addEventListener("click",this.handleActivePage),this.nav.addEventListener("keydown",s=>{[" ","Enter"].includes(s.key)&&this.handleActivePage(s)})});p(this,"handleNavExpandBtnOpenClose",e=>{this.nav.collapse?this.nav.collapse=!1:this.nav.collapse=!0});p(this,"handleActivePage",e=>{let r=e.target.closest("huanlin-nav-item");if((r==null?void 0:r.tagName)==="HUANLIN-NAV-ITEM"){let o=r==null?void 0:r.getAttribute("name");this.handleSwitchPage(o),["ui-demo-one","ui-demo-two"].includes(r.name)||this.select.setActiveOption(o)}});p(this,"handleNavOpenClose",e=>{this.nav.open?(this.nav.open=!1,this.setAttribute("aria-pressed","false")):(this.nav.open=!0,this.setAttribute("aria-pressed","true"),e&&e.focus&&setTimeout(()=>{this.nav.handleFocusFirstItem()},100))});p(this,"render",()=>{})}connectedCallback(){let e=document.createElement("style");e.innerHTML=Rc,this.innerHTML=Dc,this.appendChild(e),this.willLoad(),this.render()}disconnectedCallback(){var e,r,i;this.nav&&(this.nav.open=!1),(e=this.navBtn)==null||e.removeEventListener("click",this.handleNavBtnClick),(r=this.navBtn)==null||r.removeEventListener("keydown",this.handleNavKeydown),(i=this.expandBtn)==null||i.removeEventListener("click",this.handleNavExpandBtnOpenClose)}};customElements.define("huanlin-app",Gi);
