class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <style>
         
        </style>
        <footer>
        Footer Code Here
        


        </footer>
      `;
  }
}

customElements.define('footer-component', Footer);