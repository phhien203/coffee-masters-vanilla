import API from "./API.js";

export async function loadMenuData() {
  app.store.menu = await API.fetchMenu();
}
