class ImageFigure extends HTMLElement {
  static observedAttributes = ["img", "caption", "altImg"];

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
    // this._shadowRoot.appendChild(this._style);

    this._img = this.getAttribute("img");
    this._caption = this.getAttribute("caption");
    this._altImg = this.getAttribute("altImg");
  }

  connectedCallback() {
    console.log("callback");
    this.render();
  }

  updateStyle() {
    this._style.textContent = `
        ${this.localName} {
            display: block;
        }
        
        figure {
            max-width: 220px;
            margin: 0;
            padding: 5px;
            border: 1px #c0c0c0 solid;
            display: flex;
            flex-flow: column;
        }
  
        figure > img {
            max-width: 100%;
        }
  
        figure > figcaption {
            padding: 3px;
            background-color: #222;
            text-align: center;
            color: #fff;
            font-family: sans-serif;
            font-size: smaller;
            font-style: italic;
        }`;
  }

  render() {
    this.updateStyle();
    // ${this._style.outerHTML}  untuk menambahkan style
    this._shadowRoot.innerHTML = `
    ${this._style.outerHTML} 
        <figure>
          <img src="${this._img}" alt="${this._altImg}" />
          <figcaption>${this._caption}</figcaption>

          <slot>contoh slot</slot>
        </figure>`;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // if (oldValue !== newValue) {
    //   this[`_${name}`] = newValue;
    //   this.render();
    // }

    this.render();
  }
}

customElements.define("image-figure", ImageFigure);
