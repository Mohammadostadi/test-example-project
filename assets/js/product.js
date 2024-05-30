import {fetchFunction } from "./fetchAPI.js";
const loc = localStorage.getItem('product')
const productContainer = document.querySelector('#product-item')
const data = fetchFunction(`products/${loc}`)
data.then(data =>{
    console.log(data);
    productContainer.innerHTML = '';
    const html = `<div class="col-lg-6">
    <div class="my-3 text-center slide-plus" id="z-index-1">
    <img width="650px" height="453px" class=" w-100 image-css rounded active-image mySlides" id="image-product-1" src="${data.images[0]}" alt="">
    <img width="650px" height="453px" class=" w-100 image-css rounded non-active-image mySlides" id="image-product-2" src="${data.images[1]}" alt="">
    <img width="650px" height="453px" class=" w-100 image-css rounded non-active-image mySlides" id="image-product-3" src="${data.images[2]}" alt="">
    <img width="650px" height="453px" class=" w-100 image-css rounded non-active-image mySlides" id="image-product-4" src="${data.images[3]}" alt="">  
    <a class="prev rounded-circle"><svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg></a>
    <a class="next rounded-circle"><svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg></a>
    </div>
    <div class="d-flex justify-content-center gap-2 w-none-mobile">
    <img width="90px" height="90px" class="image-css rounded img-hover-opacity rounded active-item" id="image-product-1-thumbnail" src="${data.images[0]}" alt="">
    <img width="90px" height="90px" class="image-css rounded img-hover-opacity rounded" id="image-product-2-thumbnail" src="${data.images[1]}" alt="">
    <img width="90px" height="90px" class="image-css rounded img-hover-opacity rounded" id="image-product-3-thumbnail" src="${data.images[2]}" alt="">
    <img width="90px" height="90px" class="image-css rounded img-hover-opacity rounded" id="image-product-4-thumbnail" src="${data.images[3]}" alt="">
    </div>
</div>
<div class="col-lg-6 box-info">
    <div class="info-company my-4">
    <span class="color-primary font-bold">
        ${data.title}
    </span>
    <h1 class="font-bold">
        ${data.category}
    </h1>
    <p class="color-dark-grayish-blue">
        ${data.description}
    </p>
    
    <div class="row">
        <div class="col-lg-12 col-sm-8 col-8">
        <p class="font-bold h2">
            $${(data.price * data.discountPercentage).toFixed()}
            <span class="h5 color-primary bg-color-third p-1 rounded">
            ${data.discountPercentage}%
            </span>
        </p>
        </div>
        <div class="col-lg-12 col-sm-4 col-4">
        <span class="color-dark-grayish-blue after-value-off">
            $${data.price}
        </span>
        </div>
    </div>
    <div class="container-fluid">
        <div class="my-5 row">
        <div class="col-lg-6 col-md-6">
            <div class="px-3 py-2 bg-color-light-grayish-blue rounded d-flex justify-content-center my-2">
            <button class="btn" id="minus"><svg width="12" height="4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" id="a"/></defs><use fill="#fff" fill-rule="nonzero" xlink:href="#a"/></svg></button>
            <input class="bg-color-light-grayish-blue text-center border-0 max-w-input-80"  value="0" id="productCount"/>
            <button class="btn" id="plus"><svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" id="b"/></defs><use fill="#fff" fill-rule="nonzero" xlink:href="#b"/></svg></button>
            </div>
        </div>
        <div class=" col-lg-6 col-md-6">
            <div id="success" class="d-flex px-3 py-3 img-hover-opacity rounded bg-color-primary justify-content-center my-2 link-cursor">
            <a href="" id="product${data.id}" class="color-white font-bold rounded">
                <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#fff" fill-rule="nonzero"/></svg>
                <span class="px-2">Add to cart</span>
            </a>
            </div>
        </div>
    </div>
    </div>
    </div>
</div>`
productContainer.insertAdjacentHTML("afterbegin", html)
productAttribute()
document.querySelector(`#product${data.id}`).addEventListener('click', (e)=>{
    e.preventDefault();
    setCardValue(data.id)
})
})

function productAttribute (){
    const minusButton = document.getElementById('minus');
    const plusButton = document.getElementById('plus');
    const inputField = document.getElementById('productCount');
    
    minusButton.addEventListener('click', event => {
        if (inputField.value > 0 ){
            event.preventDefault();
            const currentValue = Number(inputField.value) || 0;
            inputField.value = currentValue - 1;
        }
    });
    
    plusButton.addEventListener('click', event => {
        event.preventDefault();
        const currentValue = Number(inputField.value) || 0;
        inputField.value = currentValue + 1;
    });
    
    const ImageProduct1 = document.getElementById('image-product-1')
    const ImageProduct2 = document.getElementById('image-product-2')
    const ImageProduct3 = document.getElementById('image-product-3')
    const ImageProduct4 = document.getElementById('image-product-4')
    const ImageProductThumbnail1 = document.getElementById('image-product-1-thumbnail')
    const ImageProductThumbnail2 = document.getElementById('image-product-2-thumbnail')
    const ImageProductThumbnail3 = document.getElementById('image-product-3-thumbnail')
    const ImageProductThumbnail4 = document.getElementById('image-product-4-thumbnail')
    let slideIndex = 1;

    ImageProductThumbnail1.addEventListener('click', ()=>{
        slideIndex = 1;
        showImageProduct1()
    })

    ImageProductThumbnail2.addEventListener('click', ()=>{
        slideIndex = 2;
        showImageProduct2()
    })

    ImageProductThumbnail3.addEventListener('click', ()=>{
        slideIndex = 3;
        showImageProduct3()
    })
    
    ImageProductThumbnail4.addEventListener('click', ()=>{
        slideIndex = 4;
        showImageProduct4()
    })
    const prev = document.querySelector('.prev')
    const next = document.querySelector('.next')

    prev.addEventListener('click', ()=>{
        plusSlides(-1)
    })
    next.addEventListener('click', ()=>{
        plusSlides(1)
    })
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }



    function showSlides(n) {
        let slides = document.getElementsByClassName("mySlides");
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        if (slideIndex == 1){
            showImageProduct1()
        }else if (slideIndex == 2){
            showImageProduct2()
        }else if (slideIndex == 3){
            showImageProduct3()
        }else if (slideIndex == 4){
            showImageProduct4()
        }
        
    }
    function showImageProduct1(){
        ImageProduct1.classList.add("active-image")
        ImageProduct2.classList.remove("active-image")
        ImageProduct3.classList.remove("active-image")
        ImageProduct4.classList.remove("active-image")
        ImageProduct1.classList.remove("non-active-image")
        ImageProduct2.classList.add("non-active-image")
        ImageProduct3.classList.add("non-active-image")
        ImageProduct4.classList.add("non-active-image")
        ImageProductThumbnail1.classList.add('active-item')
        ImageProductThumbnail2.classList.remove('active-item')
        ImageProductThumbnail3.classList.remove('active-item')
        ImageProductThumbnail4.classList.remove('active-item')
    }
    
    function showImageProduct2(){
        ImageProduct2.classList.add("active-image")
        ImageProduct1.classList.remove("active-image")
        ImageProduct3.classList.remove("active-image")
        ImageProduct4.classList.remove("active-image")
        ImageProduct2.classList.remove("non-active-image")
        ImageProduct1.classList.add("non-active-image")
        ImageProduct3.classList.add("non-active-image")
        ImageProduct4.classList.add("non-active-image")
        ImageProductThumbnail2.classList.add('active-item')
        ImageProductThumbnail1.classList.remove('active-item')
        ImageProductThumbnail3.classList.remove('active-item')
        ImageProductThumbnail4.classList.remove('active-item')
    }
    
    function showImageProduct3(){
        ImageProduct3.classList.add('active-image')
        ImageProduct2.classList.remove('active-image')
        ImageProduct1.classList.remove('active-image')
        ImageProduct4.classList.remove('active-image')
        ImageProduct3.classList.remove('non-active-image')
        ImageProduct2.classList.add('non-active-image')
        ImageProduct1.classList.add('non-active-image')
        ImageProduct4.classList.add('non-active-image')
        ImageProductThumbnail3.classList.add('active-item')
        ImageProductThumbnail2.classList.remove('active-item')
        ImageProductThumbnail1.classList.remove('active-item')
        ImageProductThumbnail4.classList.remove('active-item')
    }
    
    function showImageProduct4(){
        ImageProduct4.classList.add("active-image")
        ImageProduct2.classList.remove("active-image")
        ImageProduct3.classList.remove("active-image")
        ImageProduct1.classList.remove("active-image")
        ImageProduct4.classList.remove("non-active-image")
        ImageProduct2.classList.add("non-active-image")
        ImageProduct3.classList.add("non-active-image")
        ImageProduct1.classList.add("non-active-image")
        ImageProductThumbnail4.classList.add('active-item')
        ImageProductThumbnail2.classList.remove('active-item')
        ImageProductThumbnail3.classList.remove('active-item')
        ImageProductThumbnail1.classList.remove('active-item')
    }
}

function setCardValue(id){
    const productCount = document.querySelector('#productCount').value;
    localStorage.setItem('count', productCount)
    localStorage.setItem('product', id)
}





