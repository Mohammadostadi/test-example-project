import {fetchFunction} from "./fetchAPI.js";
// import {productItem} from "./product.js";
// console.log(productItem);
export const arrayLinkId = []
export let link;
const productsContainer = document.querySelector("#productsContainer");
const data = fetchFunction('products');
data.then(data =>{
    productsContainer.innerHTML = "";
      data.products.forEach((el) => {
        const html = `<div class="col-lg-3 col-md-6">
              <div class="product-div">
                  <div>
                      <img src="${el.thumbnail}" class="image-css w-100 img-thumbnail" alt="${el.title}">
                  </div>
                  <div>
                      <p class="my-2">Title: ${el.title}</p>
                      <div class="d-flex justify-content-between mobile-flex-column my-2">
                          <span>Price: ${el.price}$</span>
                          <span>Rating: ${el.rating}</span>
                      </div>
                      <p>Brand: ${el.brand}</p>
                      <div class="w-100 text-center my-3">
                          <a href="" id="product${el.id}">read more</a>
                      </div>
                  </div>
              </div>
          </div>`;
        productsContainer.insertAdjacentHTML("afterbegin", html);
        arrayLinkId.push(document.querySelector(`#product${el.id}`))
        // arrayIds.push(document.querySelector(`#product${el.id}`));
        // arrayProduct.push(el)
    })
    arrayLinkId.forEach(item =>{
        // console.log(arrayLinkId);
        item.addEventListener('click', (e) =>{
            e.preventDefault();
            link = item.id.slice(7)
            const product = fetchFunction(`products/${link}`)
            product.then(data => {
                console.log(data);
            })
            // window.location.href = "product.html";
        })
    })
})
// console.log(arrayLinkId);
// const productItem = document.querySelector("#product-item");
// const arrayIds = []
// const arrayProduct = []
// fetch(`https://dummyjson.com/products`)
//   .then((res) => res.json())
//   .then((data) => {

//       productsContainer.innerHTML = "";
//       data.products.forEach((el) => {
//         const html = `<div class="col-lg-3 col-md-6">
//               <div class="product-div">
//                   <div>
//                       <img src="${el.thumbnail}" class="image-css w-100 img-thumbnail" alt="${el.title}">
//                   </div>
//                   <div>
//                       <p class="my-2">Title: ${el.title}</p>
//                       <div class="d-flex justify-content-between mobile-flex-column my-2">
//                           <span>Price: ${el.price}$</span>
//                           <span>Rating: ${el.rating}</span>
//                       </div>
//                       <p>Brand: ${el.brand}</p>
//                       <div class="w-100 text-center my-3">
//                           <a href="products.html" id="product${el.id}">read more</a>
//                       </div>
//                   </div>
//               </div>
//           </div>`;
//         productsContainer.insertAdjacentHTML("afterbegin", html);
//         arrayIds.push(document.querySelector(`#product${el.id}`));
//         arrayProduct.push(el)
//     })
//     arrayIds.forEach(item =>{
//         item.addEventListener('click', e =>{
//             e.preventDefault();
//             // console.log(Number(item.id.slice(7)));
//             arrayProduct.forEach(el =>{
//                 if(Number(item.id.slice(7)) === el.id){
//                         productsContainer.innerHTML = ''
//                 const htmlPro =`<div class="col-lg-6">
//                             <div class="my-3 text-center slide-plus" id="z-index-1">
//                             <img width="650px" height="453px" class=" w-100 image-css rounded active-image mySlides" id="image-product-1" src="${el.images[0]}" alt="">
//                             <img width="650px" height="453px" class=" w-100 image-css rounded non-active-image mySlides" id="image-product-2" src="${el.images[1]}" alt="">
//                             <img width="650px" height="453px" class=" w-100 image-css rounded non-active-image mySlides" id="image-product-3" src="${el.images[2]}" alt="">
//                             <img width="650px" height="453px" class=" w-100 image-css rounded non-active-image mySlides" id="image-product-4" src="${el.images[3]}" alt="">  
//                             <a class="prev rounded-circle" onclick="plusSlides(-1)"><svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg></a>
//                             <a class="next rounded-circle"  onclick="plusSlides(1)"><svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg></a>
//                             </div>
//                             <div class="d-flex justify-content-around w-none-mobile">
//                             <img width="90px" height="90px" class="image-css rounded img-hover-opacity rounded active-item" id="image-product-1-thumbnail" src="${el.images[0]}" alt="" onclick="showImageProduct1()">
//                             <img width="90px" height="90px" class="image-css rounded img-hover-opacity rounel id="image-product-2-thumbnail" src="${el.images[1]}" alt="" onclick="showImageProduct2()">
//                             <img width="90px" height="90px" class="image-css rounded img-hover-opacity rounded" id="image-product-3-thumbnail" src="${el.images[2]}" alt="" onclick="showImageProduct3()">
//                             <img width="90px" height="90px" class="image-css rounded img-hover-opacity rounded" id="image-product-4-thumbnail" src="${el.images[3]}" alt="" onclick="showImageProduct4()">
//                             </div>
//                         </div>
//                         <div class="col-lg-6 box-info">
//                             <div class="info-sneakers-company my-4">
//                             <span class="color-primary font-bold">
//                                 ${el.brand}
//                             </span>
//                             <h1 class="font-bold">
//                                 ${el.title}
//                             </h1>
//                             <p class="color-dark-grayish-blue">
//                                 ${el.description}
//                             </p>
                            
//                             <div class="row">
//                                 <div class="col-lg-12 col-sm-8 col-8">
//                                 <p class="font-bold h2">
//                                     $${el.price}
//                                     <span class="h5 color-primary bg-color-third p-1 rounded">
//                                     ${el.discountPercentage}
//                                     </span>
//                                 </p>
//                                 </div>
//                                 <div class="col-lg-12 col-sm-4 col-4">
//                                 <span class="color-dark-grayish-blue after-value-off">
//                                     $${(el.price * el.discountPercentage).toFixed()}
//                                 </span>
//                                 </div>
//                             </div>
//                             <div class="container-fluid">
//                                 <div class="my-5 row">
//                                 <div class="col-lg-6 col-md-6">
//                                     <div class="px-3 py-2 bg-color-light-grayish-blue rounded d-flex justify-content-center my-2">
//                                     <button class="btn" id="minus"><svg width="12" height="4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" id="a"/></defs><use fill="#818FB4" fill-rule="nonzero" xlink:href="#a"/></svg></button>
//                                     <input class="bg-color-light-grayish-blue text-center border-0 max-w-input-80"  value="0" id="input"/>
//                                     <button class="btn" id="plus"><svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" id="b"/></defs><use fill="#818FB4" fill-rule="nonzero" xlink:href="#b"/></svg></button>
//                                     </div>
//                                 </div>
//                                 <div class=" col-lg-6 col-md-6">
//                                     <div id="success" class="d-flex px-3 py-3 img-hover-opacity rounded bg-color-primary justify-content-center my-2 link-cursor">
//                                     <a href="#" class=" color-white font-bold rounded">
//                                         <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#fff" fill-rule="nonzero"/></svg>
//                                         <span class="px-2">Add to cart</span>
//                                     </a>
//                                     </div>
//                                 </div>
//                             </div>
//                             </div>
//                             </div>
//                         </div>
//                         <script src="assets/js/product.js"></script>`
//             productsContainer.insertAdjacentHTML('afterbegin', htmlPro)
//                 }
//             })
//         })
//     })
// })