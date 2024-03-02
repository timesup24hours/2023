import{f as t}from"./chunk-YTPAW67S.js";var a="* { box-sizing: border-box; } :host { font-family: var(--font-family-secondary); font-weight: 400; } huanlin-title-description.title { margin-top: 30px; margin-bottom: 40px; } huanlin-notification::part(root) { display: flex; flex-direction: row; justify-content: space-between; align-items: center; } huanlin-notification huanlin-button { --color: var(--text-secondary); } huanlin-notification huanlin-button::part(button) { display: flex; flex-direction: row; align-items: center; } huanlin-notification huanlin-button huanlin-icon { --fill: var(--text-secondary); margin-right: 10px; } .form-item { display: flex; flex-direction: row; margin-top: 40px; margin-bottom: 20px; } .form-item huanlin-title-description::part(title) { margin-bottom: 2px; } .form-item .form-item-label { display: flex; flex-direction: column; width: 500px; } .form-item .input-group { display: flex; flex-direction: column; width: 100%; } .form-item .input-group huanlin-input { width: 100%; } .form-item .input-group huanlin-input:first-child { margin-bottom: 10px; } .form-item .input-group huanlin-title-description { margin-left: 10px; } .form-item .input-group huanlin-checkbox:not(:first-child) { margin-top: 20px; }";var l=`<huanlin-title-description class="title"></huanlin-title-description>
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
</form>`;var e=class extends HTMLElement{constructor(){super();t(this,"willLoad",()=>{var i;this.titleEle=(i=this.shadowRoot)==null?void 0:i.querySelector("huanlin-title-description"),this.titleEle.name="General",this.titleEle.description="Settings and options for your application."});t(this,"render",()=>{});let i=this.attachShadow({mode:"open"}),n=new CSSStyleSheet;n.replaceSync(a),i.adoptedStyleSheets=[n],i.innerHTML=l}static get observedAttributes(){return[]}attributeChangedCallback(i,n,c){}connectedCallback(){this.classList.add("hydrated"),this.willLoad(),this.render()}disconnectedCallback(){}};export{e as default};
