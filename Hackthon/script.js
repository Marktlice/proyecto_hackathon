document.addEventListener("DOMContentLoaded", function () {
    const productList = document.getElementById('productList');
    const messageDiv = document.getElementById('message');
    const modal = document.getElementById("modal");
   const closeModal = document.getElementsByClassName("close")[0];

    // Productos simulados
    const products = [
        { id: '001', name: 'Producto A', price: 1 },
        { id: '002', name: 'Producto B', price: 2 },
        { id: '003', name: 'Producto C', price: 3 },
        { id: '004', name: 'Producto D', price: 4 },
        { id: '005', name: 'Producto E', price: 5 },
        { id: '006', name: 'Producto F', price: 6 },
        { id: '007', name: 'Producto G', price: 7 },
        { id: '008', name: 'Producto H', price: 8 },
    ];

    // Cargar los productos en el DOM
    function loadProducts() {
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('item-card');
            productCard.innerHTML = `
                <h3>${product.name}</h3>
                <p>Precio: ${product.price} </p>
                <button onclick="buyProduct('${product.name}', ${product.price})">Comprar</button>
            `;
            productList.appendChild(productCard);
        });
    }

    // Función de compra simulada
   // Función de compra simulada
   window.buyProduct = function (productName, productPrice) {
    // Muestra el modal con el mensaje de confirmación de compra
    modal.style.display = "flex"; // Mostrar el modal como flexbox
};

// Cerrar el modal al hacer clic en la "X"
closeModal.onclick = function() {
    modal.style.display = "none";
};

// Cerrar el modal al hacer clic fuera del contenido
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
    loadProducts();
});