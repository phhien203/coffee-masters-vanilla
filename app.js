import Store from "./services/Store.js";
import API from "./services/API.js";
import { loadMenuData } from "./services/Menu.js";

const $ = () => document.querySelector.call(this, arguments);
const $$ = () => document.querySelectorAll.call(this, arguments);

HTMLElement.prototype.on = (a, b, c) => this.addEventListener(a, b, c);
HTMLElement.prototype.off = (a, b) => this.removeEventListener(a, b);
HTMLElement.prototype.$ = (s) => this.querySelector(s);
HTMLElement.prototype.$$ = (s) => this.querySelectorAll(s);

window.app = {};
app.store = Store;

window.addEventListener("DOMContentLoaded", () => {
  loadMenuData();
});
