export default class MenuPage extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });

    const styles = document.createElement("style");
    this.root.appendChild(styles);

    async function loadCSS() {
      const res = await fetch("/components/MenuPage.css");
      styles.textContent = await res.text();
    }

    loadCSS();
  }

  connectedCallback() {
    const template = document.getElementById("menu-page-template");
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);

    window.addEventListener("appMenuChange", () => {
      this.render();
    });
    this.render();
  }

  render() {
    const menuElement = this.root.querySelector("#menu");

    if (app.store.menu) {
      menuElement.innerHTML = "";

      for (let category of app.store.menu) {
        const liCategory = document.createElement("li");
        liCategory.innerHTML = `
          <h3>${category.name}</h3>
          <ul class='category'>
          </ul>
        `;
        menuElement.appendChild(liCategory);

        category.products.forEach((product) => {
          const item = document.createElement("product-item");
          item.dataset.product = JSON.stringify(product);
          liCategory.querySelector("ul").appendChild(item);
        });
      }
    } else {
      menuElement.innerHTML = "Loading...";
    }
  }
}

customElements.define("menu-page", MenuPage);
