class FooterBar extends HTMLElement {
  _shadowRoot = null;
  _style = null;
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
  }

  updateStyle() {
    this._style.texContent = `
      :host {
        display: block;
      }
      div {
        padding: 24px 20px;
 
        text-align: center;
      }`;
  }
  _emptyContent() {
    this._shadowRoot.innerHTML = "";
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.updateStyle();
    this._emptyContent();

    this._shadowRoot.append(this._style);
    const footer = `
      <div>
        Club Finder &copy; 2023
      </div>`;

    this._shadowRoot.innerHTML += footer;
  }
}

customElements.define("footer-bar", FooterBar);
