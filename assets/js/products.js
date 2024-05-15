import { fetchFunction } from "./fetchAPI.js";
const productsContainer = document.querySelector("#productsContainer");
const data = fetchFunction("products");
function locationProduct(loc){
  localStorage.setItem('product', loc)
}
data.then((data) => {
  productsContainer.innerHTML = "";
  data.products.forEach((el) => {
    const html = `<div class="col-lg-3 col-md-6">
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
                      <a class="w-100 d-block text-center my-2" href="" id="product${el.id}">read more</a>
                  </div>
              </div>
          </div>`;
    productsContainer.insertAdjacentHTML("afterbegin", html);
    localStorage.setItem(`product${el.id}`, el.id)
    document.querySelector(`#product${el.id}`).addEventListener('click', (e)=>{
      e.preventDefault()
      const loc = localStorage.getItem(`product${el.id}`)
      locationProduct(loc);
      window.location.href = "product.html";
    })
  });
});


document.querySelector('.search').addEventListener('click', ()=>{
  const search = document.querySelector('#search').value
  document.querySelector('#search').value = ''
  if(search){
    fetch(`https://dummyjson.com/products/search?q=${search}`)
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      if(!data.total){
        productsContainer.innerHTML = ''
        const html =`<main class="main-page container">
        <div class="frm-width text-center">
        <div class="div-text">
        <h1>404</h1>
        <h3>Page Not Found</h3>
        <p>We couldn't find the page you are looking for.</p>
        </div>
        <div>
        <img width="800px" height="500px" class="image-css w-100" src="public/images/contact/404 Error-amico.png" alt="">
        </div>
        <a class="rounded page-link-404" href="products.html">Back To Products</a>
        </div>
        </main>`
        productsContainer.insertAdjacentHTML('afterbegin', html)
      }else{
        productsContainer.innerHTML = ''
        data.products.forEach((el) =>{
          const html = `<div class="col-lg-3 col-md-6">
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
          <a class="w-100 d-block text-center my-2" href="" id="product${el.id}">read more</a>
          </div>
          </div>
          </div>`
          productsContainer.insertAdjacentHTML('afterbegin', html)
        })
      }
    });
  }
})
