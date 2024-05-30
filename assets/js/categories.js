import { fetchFunction } from "./fetchAPI.js";

const listCategory = [];
const menuContainer = document.querySelector("#categoryContainer");
const productsContainer = document.querySelector("#productsContainer");
const spinner = document.querySelector("#spinner");
const data = fetchFunction("products/categories");
data.then((data) => {
  const arrayCategories = [];
  menuContainer.innerHTML = "";
//  plz update i\d with index !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  data.forEach((el, index) => {
    el.id = String(index)
    console.log(el, 'el');
    const html = `<li class="non-active-products" id="${el.id}"><a href="#">${
      el.name
    }</a></li>`;
    menuContainer.insertAdjacentHTML("beforeend", html);
    arrayCategories.push(document.getElementById(`${el.id}`));
   console.log(arrayCategories, 'arrayCategories');
  });
  showProducts(arrayCategories[0].id);
  arrayCategories[0].classList.remove("non-active-products");
  arrayCategories[0].classList.add("active-products");
  arrayCategories.forEach((el, i) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      el.classList.remove("non-active-products");
      el.classList.add("active-products");
      showProducts(el.id);
      const rest = arrayCategories.filter((e) => e != el);
      rest.forEach((el) => {
        el.classList.add("non-active-products");
        el.classList.remove("active-products");
      });
    });
  });
});

const showProducts = function (product) {
  const data = fetchFunction(`products/category/${product}`);
  data.then((data) => {
    productsContainer.innerHTML = "";
    console.log(data);
    if(data.total == 0){
      const html =`<div class="col-lg-4 col-md-6">
      <div class="div-text">
                <h1>404</h1>
                <h3>Page Not Found</h3>
                <p>We couldn't find the page you are looking for.</p>
            </div>
            <div>
                <img width="800px" height="500px" class="image-css w-100" src="public/images/contact/404 Error-amico.png" alt="">
            </div>
            <a class="rounded page-link-404" href="index.html">Back To Home</a>
  </div>
      `
      productsContainer.insertAdjacentHTML('afterbegin', html)
    }else{
      data.products.forEach((el) => {
        const html = `<div class="w-100">
              <div class="product-card">
                  <div>
                      <img src="${el.thumbnail}" class="image-css w-100 img-thumbnail" alt="${el.title}">
                  </div>
                  <div>
                      <h3 class="my-2">Title: ${el.title}</h3>
                      <div class="d-flex justify-content-between mobile-flex-column my-2">
                          <span>Price: ${el.price}$</span>
                          <span>Rating: ${el.rating}</span>
                      </div>
                      <p>Brand: ${el.brand}</p>
                      <p>Description: ${el.description}</p>
                      <a class="w-100 d-block text-center my-2" href="#">read more</a>
                  </div>
              </div>
          </div>`;
        productsContainer.insertAdjacentHTML("afterbegin", html);
      });
    }
  });
};
