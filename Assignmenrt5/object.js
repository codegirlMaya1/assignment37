const products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

// Call  function display products

function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `<h2>${product.name}</h2><p>Price: ${product.price}</p>`;
        productList.appendChild(productDiv);
    });
}

// Call  function display products


window.addEventListener('load', function() {
    displayProducts();
});

       
    const container = document.getElementById('product-list');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.innerHTML = `<h2>${product.name}</h2><p>${product.price}</p><p>${product.description}</p>`;
        container.appendChild(productElement);
    });

  

    document.addEventListener('DOMContentLoaded', function() {
        const element = document.getElementById('product-list');
        element.style.color = 'blue'; 
        element.style.fontFamily = 'Arial, sans-serif'; 
        element.style.fontSize = '12px';
    });
   
    