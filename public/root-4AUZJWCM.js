import{f as a}from"./chunk-YTPAW67S.js";var i="huanlin-app-two-layout { display: flex; --background-secondary: #f6f6f9; --app-drawer-background: var(--background-secondary); --nav-width: 300px; --header-height: 80px; --color-primary: #555ed1; --text-secondary: #70728c; --box-shadow: rgba(0, 0, 0, .04) 0px 2px 4px; --border-color: #e7e8ef; } huanlin-button[type=outline]::part(button) { display: flex; align-items: center; border-radius: 4px; border: 1px solid var(--border-color); box-shadow: var(--box-shadow); } header.header { grid-area: header; border-bottom: 1px solid #e9eaf1; height: var(--header-height); padding: 0 20px; } header.header huanlin-breadcrumb { margin-left: 20px; } header.header .header-right > * { margin-left: 20px; } header.header .header-right huanlin-icon:hover { --fill: var(--text-primary); } header.header .user-dropdown huanlin-button[slot=trigger] huanlin-icon { --height: 30px; --width: 30px; --fill: var(--text-primary); margin-right: 10px; } header.header .user-dropdown huanlin-button[slot=trigger]::part(button) { display: flex; flex-direction: row; align-items: center; color: var(--text-primary); } header.header .user-dropdown huanlin-dropdown::part(popup) { padding: 0px; } header.header .user-dropdown huanlin-divider::part(hr) { margin-block-start: 0px; margin-block-end: 0px; } header.header .user-dropdown huanlin-menu huanlin-menu-item huanlin-icon { margin-right: 10px; } header.header .user-dropdown huanlin-menu huanlin-menu-item[active] huanlin-icon, header.header .user-dropdown huanlin-menu huanlin-menu-item:hover huanlin-icon { --fill: var(--text-primary); } .main { display: flex; grid-area: main; overflow-y: auto; } .main .main-top { padding: 40px 40px 0px 40px; } .main huanlin-tablist { padding-top: 20px; --padding: 0px 40px; } .main huanlin-tab-panel { padding: 20px 40px; } .card { border-radius: 8px; padding: 20px; box-shadow: var(--box-shadow); border: 1px solid var(--border-color); align-items: center; }";var t=`<huanlin-app-two-layout>
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
                <huanlin-tab slot="nav" panel="recipient-activity">Recipient Activity</huanlin-tab>
                <huanlin-tab slot="nav" panel="intergrations">Intergrations</huanlin-tab>
                <huanlin-tab slot="nav" panel="settings">Settings</huanlin-tab>
                <huanlin-tab-panel name="overview" active>
                    <huanlin-overview-panel></huanlin-overview-panel>
                </huanlin-tab-panel>
                <huanlin-tab-panel name="recipient-activity">
                    <huanlin-recipient-activity></huanlin-recipient-activity>
                </huanlin-tab-panel>
                <huanlin-tab-panel name="intergrations">Intergrations</huanlin-tab-panel>
                <huanlin-tab-panel name="settings">Settings</huanlin-tab-panel>
            </huanlin-tablist>
        </div>
    </div>
</huanlin-app-two-layout>`;var e=class extends HTMLElement{constructor(){super();a(this,"willLoad",()=>{let n=document.createElement("style");n.innerHTML=i,this.innerHTML=t,this.appendChild(n)});a(this,"render",()=>{})}static get observedAttributes(){return[]}attributeChangedCallback(n,d,h){this.render()}connectedCallback(){this.classList.add("hydrated"),this.willLoad(),this.render()}disconnectedCallback(){}};export{e as default};
