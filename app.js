import store from "./services/Store.js";
import { loadMenuData } from "./services/Menu.js";
import Router from "./services/Router.js";

import MenuPage from "./components/MenuPage.js";
import OrderPage from "./components/OrderPage.js";
import DetailsPage from "./components/DetailsPage.js";
import ProductItem from "./components/ProductItem.js";
import CartItem from "./components/CartItem.js";

window.app = {};
app.store = store;
app.router = Router;

window.addEventListener("DOMContentLoaded", () => {
  loadMenuData();
  app.router.init();
});

window.addEventListener("appCartChange", () => {
  const badge = document.getElementById("badge");
  const qty = app.store.cart.reduce((acc, item) => acc + item.quantity, 0);
  badge.textContent = qty;
  badge.hidden = qty == 0;
});
