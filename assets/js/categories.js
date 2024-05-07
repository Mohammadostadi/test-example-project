const listCategory = []
const menuContainer = document.querySelector('#categoryContainer');
const productsContainer = document.querySelector('#productsContainer');
const spinner = document.querySelector('#spinner')


fetch('https://dummyjson.com/products/categories')
.then(res => res.json())
.then(data =>{
    // console.log(data);
    const arrayCategories = []
    menuContainer.innerHTML = ''
    data.forEach(el =>{
        const html = `<li class="px-2 non-active-products" id="${el}"><a href="#">${el[0].toUpperCase()+el.slice(1)}</a></li>`
        menuContainer.insertAdjacentHTML('beforeend', html)
        arrayCategories.push(document.getElementById(`${el}`))
    });
    showProducts(arrayCategories[0].id);
    arrayCategories[0].classList.remove('non-active-products')
    arrayCategories[0].classList.add('active-products')
    arrayCategories.forEach((el, i) =>{
        el.addEventListener('click', (e)=>{
            e.preventDefault();
            el.classList.remove('non-active-products')
            el.classList.add('active-products')
            showProducts(el.id)
            const rest = arrayCategories.filter(e => e != el)
            rest.forEach(el =>{
                el.classList.add('non-active-products')
                el.classList.remove('active-products')
            })
        })
    })
});

const showProducts = function(product){
    fetch(`https://dummyjson.com/products/category/${product}`)
    .then(res => res.json())
    .then(data =>{
        // productsContainer.addEventListener('load', () => spinner.classList.remove('spinner'))
        productsContainer.innerHTML = ''
        data.products.forEach(el =>{
            const html = `<div class="col-lg-4 col-md-6">
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
                        <a href="#">read more</a>
                    </div>
                </div>
            </div>
        </div>`
        productsContainer.insertAdjacentHTML('afterbegin', html)
    })
    });
}