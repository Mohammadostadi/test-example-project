const listCategory = []
const menuContainer = document.querySelector('#categoryContainer');
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data =>{

    const product = data.products
    product.forEach((el) => {
        listCategory.push(el.category)
    });
}).then(() =>{
    const setListCategory = new Set(listCategory)
    setListCategory.forEach(el =>{
        const html = `<li class="px-2 non-active-products"><a href="#" id="${el}">${el}</a></li>`
        menuContainer.insertAdjacentHTML('beforeend', html)
    })
}
);