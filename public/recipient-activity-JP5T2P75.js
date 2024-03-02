import{f as e}from"./chunk-YTPAW67S.js";var a="huanlin-recipient-activity { width: 100%; } huanlin-step huanlin-icon { margin-right: 8px; --fill: var(--color-primary); } huanlin-step-content::part(root) { justify-content: space-between; } huanlin-step-content huanlin-button:first-child { margin-right: 10px; } huanlin-step-content huanlin-button::part(button) { padding: 10px 20px; } huanlin-step-content .text-primary { font-size: 14px; } huanlin-step-content .text-secondary { margin-top: 10px; font-size: 12px; } .send-icon { border: 2px solid var(--border-color); border-radius: 50%; padding: 8px; margin-right: 14px; background-color: white; } .send-icon huanlin-icon { --fill: var(--color-primary); transform: rotate(320deg); } .section-main { margin-top: 28px; } .section-main .header-right *:not(:last-child) { margin-right: 10px; } .section-main .header-right huanlin-button::part(button) { padding: 12px 20px; } .section-main-body { margin-top: 20px; } .section-main-body huanlin-table huanlin-tag::part(root) { --background-color: var(--background-secondary); --color: var(--text-secondary); padding: 4px 12px 4px 8px; border-radius: 30px; }";var t=`<div>
    <huanlin-stepper>
        <huanlin-step slot="step" content="step1">
            <huanlin-icon name="check-fill"></huanlin-icon>
            CREATE CAMPAIN
        </huanlin-step>
        <huanlin-step slot="step" content="step2">
            <huanlin-icon name="check-fill"></huanlin-icon>
            SETUP SOURCE INTERGRATION OR ADD RECIPIENT 
        </huanlin-step>
        <huanlin-step slot="step" content="step3" active>
            <huanlin-icon name="check-fill"></huanlin-icon>
            SETUP DESTINATION INTERGRATION
        </huanlin-step>
        <huanlin-step-content name="step1"></huanlin-step-content>
        <huanlin-step-content name="step2"></huanlin-step-content>
        <huanlin-step-content name="step3">
            <div class="flex flex-row align-center">
                <div class="send-icon flex align-center justify-center">
                    <huanlin-icon name="send"></huanlin-icon>
                </div>
                <div class="flex flex-column">
                    <h2 class="text-primary">Setup Destination</h2>
                    <p class="text-secondary">Setup destination intergration to send out your videos.</p>
                </div>
            </div>
            <div class="flex flex-row align-center">
                <huanlin-button>Automate Delivery</huanlin-button>
                <huanlin-button type="outline">Skip This Step</huanlin-button>
            </div>
        </huanlin-step-content>
    </huanlin-stepper>
    <div class="flex flex-column section-main">
        <div class="flex flex-row align-center justify-space-between w-100p section-main-header">
            <h2>Recipient list</h2>
            <div class="flex flex-row header-right">
                <huanlin-button type="outline">Download CSV</huanlin-button>
                <huanlin-button type="outline">Add Recipients</huanlin-button>
                <huanlin-input placeholder="Search Recipients">
                    <huanlin-icon name="search" slot="prefix"></huanlin-icon>
                </huanlin-input>
            </div>
        </div>
        <div class="section-main-body">
            <huanlin-table></huanlin-table>
        </div>
    </div>
</div>`;var i=class extends HTMLElement{constructor(){super();e(this,"willLoad",()=>{});e(this,"render",()=>{let n=this.querySelector("huanlin-table");n.column=[{label:"RECIPIENTS",name:"recipients"},{label:"EMAIL ADDRESS",name:"emailAddress"},{label:"VIDEO STATUS",name:"videoStatus"},{label:"ACTIONS",name:"actions"}],n.data=[{recipients:"Dianne Russell",emailAddress:"tanya.hill@example.com",videoStatus:"<huanlin-tag><div class='flex flex-row align-center'><huanlin-icon name='pause-fill'></huanlin-icon> Paused</div></huanlin-tag>",actions:"<huanlin-icon style='cursor: pointer;' name='more-horiz'></huanlin-icon>"},{recipients:"Kathryn Murphy",emailAddress:"nevaeh.simmons@example.com",videoStatus:"<huanlin-tag><div class='flex flex-row align-center'><huanlin-icon name='pause-fill'></huanlin-icon> Paused</div></huanlin-tag>",actions:"<huanlin-icon style='cursor: pointer;' name='more-horiz'></huanlin-icon>"},{recipients:"Darrell Steward",emailAddress:"debbie.baker@example.com",videoStatus:"<huanlin-tag><div class='flex flex-row align-center'><huanlin-icon name='pause-fill'></huanlin-icon> Paused</div></huanlin-tag>",actions:"<huanlin-icon style='cursor: pointer;' name='more-horiz'></huanlin-icon>"},{recipients:"Cody Fisher",emailAddress:"kenzi.lawson@example.com",videoStatus:"<huanlin-tag><div class='flex flex-row align-center'><huanlin-icon name='pause-fill'></huanlin-icon> Paused</div></huanlin-tag>",actions:"<huanlin-icon style='cursor: pointer;' name='more-horiz'></huanlin-icon>"},{recipients:"Brooklyn Simmons",emailAddress:"bill.sanders@example.com",videoStatus:"<huanlin-tag><div class='flex flex-row align-center'><huanlin-icon name='pause-fill'></huanlin-icon> Paused</div></huanlin-tag>",actions:"<huanlin-icon style='cursor: pointer;' name='more-horiz'></huanlin-icon>"},{recipients:"Dianne Russell",emailAddress:"sara.cruz@example.com",videoStatus:"<huanlin-tag><div class='flex flex-row align-center'><huanlin-icon name='pause-fill'></huanlin-icon> Paused</div></huanlin-tag>",actions:"<huanlin-icon style='cursor: pointer;' name='more-horiz'></huanlin-icon>"},{recipients:"Eleanor Pena",emailAddress:"alma.lawson@example.com",videoStatus:"<huanlin-tag><div class='flex flex-row align-center'><huanlin-icon name='pause-fill'></huanlin-icon> Paused</div></huanlin-tag>",actions:"<huanlin-icon style='cursor: pointer;' name='more-horiz'></huanlin-icon>"},{recipients:"Ralph Edwards",emailAddress:"georgia.young@example.com",videoStatus:"<huanlin-tag><div class='flex flex-row align-center'><huanlin-icon name='pause-fill'></huanlin-icon> Paused</div></huanlin-tag>",actions:"<huanlin-icon style='cursor: pointer;' name='more-horiz'></huanlin-icon>"},{recipients:"Bessie Cooper",emailAddress:"nathan.roberts@example.com",videoStatus:"<huanlin-tag><div class='flex flex-row align-center'><huanlin-icon name='pause-fill'></huanlin-icon> Paused</div></huanlin-tag>",actions:"<huanlin-icon style='cursor: pointer;' name='more-horiz'></huanlin-icon>"}]});let n=document.createElement("style");n.innerHTML=a,this.innerHTML=t,this.appendChild(n)}static get observedAttributes(){return[]}attributeChangedCallback(n,r,c){this.render()}connectedCallback(){this.classList.add("hydrated"),this.willLoad(),this.render()}disconnectedCallback(){}};export{i as default};
