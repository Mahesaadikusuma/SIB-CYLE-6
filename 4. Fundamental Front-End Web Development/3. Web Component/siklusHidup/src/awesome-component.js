class AwesomeComponent extends HTMLElement {
  static get observedAttributes() {
    return ["color", "size"];
  }

  constructor() {
    super();
    console.log("constructor");
    this.innerHTML = "Aku adalah konten yang akan tampil";
  }

  connectedCallback() {
    console.log("connectedCallback Custom element ditambahkan ke halaman");
  }

  disconnectedCallback() {
    console.log("disconnectedCallback Custom element ditambahkan ke halaman");
  }

  adoptedCallback() {
    console.log("adoptedCallback Custom element ditambahkan ke halaman");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // console.log("Attribute", name, oldValue, newValue);
    console.log(`Attribute ${name} changed from ${oldValue} to ${newValue}`);
  }
}

customElements.define("awesome-component", AwesomeComponent);
