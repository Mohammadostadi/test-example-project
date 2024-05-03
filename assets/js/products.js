
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data =>{

    const product = data.products
    product.forEach((el) => {
            console.log(el.category);
    });
});