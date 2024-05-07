const productsContainer = document.querySelector('#productsContainer');

    fetch(`https://dummyjson.com/products`)
    .then(res => res.json())
    .then(data =>{
        productsContainer.innerHTML =''
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