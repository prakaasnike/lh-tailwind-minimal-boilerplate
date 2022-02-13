class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <style>
        
        </style>
        <header>
        
        Navbar Code Here

        </header>
      `;
  }
}

customElements.define('header-component', Header);