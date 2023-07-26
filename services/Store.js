const store = {
  menu: null,
  cart: [],
};

const proxyStore = new Proxy(store, {
  set(target, property, value) {
    target[property] = value;

    if (property === "menu") {
      window.dispatchEvent(new Event("appMenuChange"));
    }

    if (property === "cart") {
      window.dispatchEvent(new Event("appCartChange"));
    }

    return true;
  },
});

export default proxyStore;
