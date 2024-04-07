class MyElement extends HTMLElement {
  constructor() {
    super();
  }
  render() {
    return `
        <div>Lorem ipsum dolor amet.</div>
      `;
  }
}

customElements.define("my-element", MyElement);
