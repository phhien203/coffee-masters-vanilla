const Router = {
  init: () => {
    // enhance the navigation links
    document.querySelectorAll("a.navlink").forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        const url = e.target.getAttribute("href");
        Router.go(url);
      });
    });

    // listen to and handle URL changes
    window.addEventListener("popstate", (e) => {
      Router.go(e.state.route, false);
    });

    Router.go(location.pathname);
  },
  go: (route, addToHistory = true) => {
    if (addToHistory) {
      history.pushState({ route }, "", route);
    }

    let pageElement = null;

    switch (route) {
      case "/":
        pageElement = document.createElement("menu-page");
        break;
      case "/order":
        pageElement = document.createElement("order-page");
        break;
      default:
        if (route.startsWith("/product-")) {
          pageElement = document.createElement("details-page");
          pageElement.dataset.productId = route.substring(
            route.lastIndexOf("-") + 1
          );
        }
    }

    if (pageElement) {
      const cache = document.querySelector("main");
      cache.innerHTML = "";
      cache.appendChild(pageElement);
      window.scrollX = 0;
      window.scrollY = 0;
    }
  },
};

export default Router;
