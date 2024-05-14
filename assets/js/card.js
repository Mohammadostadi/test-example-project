import {fetchFunction } from "./fetchAPI.js";

const cardContainer = document.querySelector('#cardContainer')
const totalCard = document.querySelector('#totalCard')
const count = localStorage.getItem("count")
const loc = localStorage.getItem('product')
console.log(loc);

const data = fetchFunction(`carts/20`)
data.then(data =>{
    cardContainer.innerHTML='';
    const htmlFirst = `<h5 class="mb-3"><a href="products.html" class="text-body"><i
    class="fas fa-long-arrow-alt-left me-2"></i>Continue shopping</a></h5>
<hr>

<div class="d-flex justify-content-between align-items-center mb-4">
<div>
  <p class="mb-1">Shopping cart</p>
  <p class="mb-0">You have ${data.products.length} items in your cart</p>
</div>
<div>
  <p class="mb-0"><span class="text-muted">Sort by:</span> <a href="#!"
      class="text-body">price <i class="fa fa-angle-down mt-1"></i></a></p>
</div>
</div>`
    cardContainer.insertAdjacentHTML('afterbegin', htmlFirst)
    data.products.forEach(el => {
        const html = `
        <div class="card mb-3">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <div class="d-flex flex-row align-items-center">
              <div>
                <img width="65px" height ="65px"
                  src="${el.thumbnail}"
                  class="image-css rounded-3" alt="Shopping item">
              </div>
              <div class="ms-3">
                <h5>${el.title}</h5>
                <p class="small mb-0">$${el.price}</p>
              </div>
            </div>
            <div class="d-flex flex-row align-items-center">
              <div style="width: 50px;">
                <h5 class="fw-normal mb-0">${el.quantity}</h5>
              </div>
              <div style="width: 80px;">
                <h5 class="mb-0">$${el.total}</h5>
              </div>
              <a href="#!" style="color: #cecece;"><i class="fa fa-trash"></i></a>
            </div>
          </div>
        </div>
      </div>`
      cardContainer.insertAdjacentHTML('beforeend', html)
    });
    const htmlTotal = `<div class="d-flex justify-content-between">
    <p class="mb-2">Subtotal</p>
    <p class="mb-2">$${data.total}</p>
  </div>

  <div class="d-flex justify-content-between">
    <p class="mb-2">Shipping</p>
    <p class="mb-2">$${data.total - data.discountedTotal}</p>
  </div>

  <div class="d-flex justify-content-between mb-4">
    <p class="mb-2">Total(Incl. taxes)</p>
    <p class="mb-2">$${data.discountedTotal}</p>
  </div>

  <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-info btn-block btn-lg">
    <div class="d-flex justify-content-between">
      <span>$${data.discountedTotal}</span>
      <span>Checkout <i class="fa fa-long-arrow-alt-right ms-2"></i></span>
    </div>
  </button>`
  totalCard.insertAdjacentHTML('beforeend', htmlTotal)
})