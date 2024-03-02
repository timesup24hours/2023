import{a as c}from"./chunk-CWXPBAZR.js";import{f as e}from"./chunk-YTPAW67S.js";var h="#slot { display: flex; flex: 1; } #open-navigation-button { --height: 24px; --fill: var(--text-primary); } #title { font-size: 28px; } .hide { display: none; } huanlin-nav:part(content) { justify-content: space-between; height: 100%; } .nav-content { display: flex; flex-direction: column; flex: 1; } .nav-footer { display: flex; align-items: center; justify-content: flex-end; } .nav-footer .expand-button { padding: 14px; --height: 24px; border-radius: 10px; cursor: pointer; } .nav-footer .expand-button huanlin-icon { display: flex; transform: rotate(180deg); transition: linear; transition-duration: 0.2s; transition-property: transform; } .nav-footer .expand-button:hover, .nav-footer .expand-button:focus { --fill: var(--text-primary); background: var(--color-tertiary); } huanlin-nav[collapse] .nav-footer .expand-button huanlin-icon { transform: rotate(0deg); } [slot=other-app] { height: 100vh; overflow: hidden; }";var u=`<div id="app" class="flex flex-column ">
    <header role="banner" id="banner" class="flex flex-row justify-space-between">
        <div id="banner-start" class="flex flex-row align-center justify-space-between">
            <huanlin-clock></huanlin-clock>
            <button id="open-navigation-button" aria-label="open navigation" class="flex align-center"
                aria-controls="nav" aria-pressed="false">
                <huanlin-icon name="hamburger"></huanlin-icon>
            </button>
        </div>
        <div id="banner-center" class="flex-grow-1 flex justify-center align-center">
            <h1 id="title">Huanlin Huang</h1>
        </div>
        <div id="banner-end" class="flex align-center">
            <huanlin-light-dark-mode mode="light"></huanlin-light-dark-mode>
        </div>
    </header>
    <huanlin-nav id="nav" scrim="true">
        <div class="nav-content">
            <huanlin-nav-item-group>
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
                <huanlin-nav-item name="demo-one">
                    <huanlin-icon slot="icon" name="circle" title="UI demo one" aria-label="UI demo one"></huanlin-icon>
                    UI demo one
                </huanlin-nav-item>
                <huanlin-nav-item name="demo-two">
                    <huanlin-icon slot="icon" name="circle" title="UI demo two" aria-label="UI demo two"></huanlin-icon>
                    UI demo two
                </huanlin-nav-item>
                <huanlin-nav-item name="droplist">
                    <huanlin-icon slot="icon" name="circle" title="Droplist" aria-label="droplist"></huanlin-icon>
                    Droplist 
                </huanlin-nav-item>
                <huanlin-nav-item name="playground-scroll">
                    <huanlin-icon slot="icon" name="circle" title="Virutal Scroll" aria-label="Virutal Scroll"></huanlin-icon>
                    Virutal Scroll 
                </huanlin-nav-item>
                <huanlin-nav-item name="playground-table">
                    <huanlin-icon slot="icon" name="circle" title="table" aria-label="table"></huanlin-icon>
                    Table 
                </huanlin-nav-item>
            </huanlin-nav-item-group>
        </div>
        <div class="nav-footer">
            <button id="expand-button" class="expand-button" aria-label="expand button">
                <huanlin-icon name="expand-circle-right" title="Expand or collapse"></huanlin-icon>
            </button>
        </div>
    </huanlin-nav>
    <main role="main" class="flex-grow-1 flex flex-column gap">
        <div id="main-filter" class="flex flex-row align-center">
            <huanlin-select class="me-select" style="width: 300px;">
                <div slot="trigger">Home</div>
                <huanlin-option name="home" active>Home</huanlin-option>
                <huanlin-option name="mortgage">Mortgage Calculator</huanlin-option>
                <huanlin-option name="contact">Contact info</huanlin-option>
            </huanlin-select>
        </div>
        <div id="slot">
            <huanlin-routes>
                <huanlin-route route="#home" element="huanlin-home"></huanlin-route>
                <huanlin-route route="#contact" element="huanlin-contact"></huanlin-route>
                <huanlin-route route="#mortgage" element="huanlin-mortgage"></huanlin-route>
            </huanlin-routes>
        </div>
    </main>
</div>`;var o=class extends HTMLElement{constructor(){super();e(this,"nav");e(this,"navBtn");e(this,"homePage");e(this,"contactPage");e(this,"mortgagePage");e(this,"select");e(this,"appEle");e(this,"handleSwitchPage",n=>{window.location.hash=n});e(this,"handleNavBtnClick",n=>{n.clientX===0||n.clientY===0||this.handleNavOpenClose()});e(this,"handleNavKeydown",n=>{["Enter"," "].includes(n.key)&&this.handleNavOpenClose({focus:!0})});e(this,"willLoad",()=>{var a,l,s;if(!this.querySelector("#slot"))return;this.select=this.querySelector(".me-select");let t=window.location.hash.slice(1);["home","contact","mortgage"].includes(t)&&setTimeout(()=>{this.select.setAttribute("value",t)}),this.select.addEventListener("click",i=>{let r=i.target.getAttribute("name");r&&this.handleSwitchPage(r)}),this.navBtn=this.querySelector("#open-navigation-button"),(a=this.navBtn)==null||a.addEventListener("click",this.handleNavBtnClick),(l=this.navBtn)==null||l.addEventListener("keydown",this.handleNavKeydown),this.nav=this.querySelector("huanlin-app huanlin-nav"),this.expandBtn=this.nav.querySelector("#expand-button"),(s=this.expandBtn)==null||s.addEventListener("click",this.handleNavExpandBtnOpenClose),this.nav.addEventListener("keydown",i=>{i.key==="Escape"&&this.navBtn.focus()}),this.nav.addEventListener("click",this.handleActivePage),this.nav.addEventListener("keydown",i=>{[" ","Enter"].includes(i.key)&&this.handleActivePage(i)})});e(this,"handleNavExpandBtnOpenClose",n=>{this.nav.collapse?this.nav.collapse=!1:this.nav.collapse=!0});e(this,"handleActivePage",n=>{let t=n.target.closest("huanlin-nav-item");if((t==null?void 0:t.tagName)==="HUANLIN-NAV-ITEM"){let l=t==null?void 0:t.getAttribute("name");this.handleSwitchPage(l),["ui-demo-one","ui-demo-two"].includes(t.name)||this.select.setActiveOption(l)}});e(this,"handleNavOpenClose",n=>{this.nav.open?(this.nav.open=!1,this.setAttribute("aria-pressed","false")):(this.nav.open=!0,this.setAttribute("aria-pressed","true"),n&&n.focus&&setTimeout(()=>{this.nav.handleFocusFirstItem()},100))});e(this,"render",()=>{})}connectedCallback(){this.classList.add("hydrated");let n=document.createElement("style");n.innerHTML=h,this.innerHTML=u,this.appendChild(n),this.willLoad(),this.render(),c.setElement(this.querySelector("#app"))}disconnectedCallback(){var n,t,a;this.nav&&(this.nav.open=!1),(n=this.navBtn)==null||n.removeEventListener("click",this.handleNavBtnClick),(t=this.navBtn)==null||t.removeEventListener("keydown",this.handleNavKeydown),(a=this.expandBtn)==null||a.removeEventListener("click",this.handleNavExpandBtnOpenClose)}};export{o as default};
