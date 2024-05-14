// import {fetch} from 'fetchAPI.js'

const listCategory = [];
const menuContainer = document.querySelector("#categoryContainer");
const productsContainer = document.querySelector("#productsContainer");
const spinner = document.querySelector("#spinner");

fetch("https://dummyjson.com/products/categories")
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    const arrayCategories = [];
    menuContainer.innerHTML = "";
    data.forEach((el) => {
      const html = `<li class="non-active-products" id="${el}"><a href="#">${
        el[0].toUpperCase() + el.slice(1)
      }</a></li>`;
      menuContainer.insertAdjacentHTML("beforeend", html);
      arrayCategories.push(document.getElementById(`${el}`));
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
  fetch(`https://dummyjson.com/products/category/${product}`)
    .then((res) => res.json())
    .then((data) => {
      // productsContainer.addEventListener('load', () => spinner.classList.remove('spinner'))
      productsContainer.innerHTML = "";
      data.products.forEach((el) => {
        const html = `<div class="col-lg-4 col-md-6">
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
    });
};
