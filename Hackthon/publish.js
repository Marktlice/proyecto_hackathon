document.addEventListener("DOMContentLoaded", function () {
    const productForm = document.getElementById('productForm');

    // Obtener los productos guardados en localStorage o inicializar una lista vacía
    let products = JSON.parse(localStorage.getItem('products')) || [];

    // Función para agregar un nuevo producto al almacenamiento local
    function addNewProduct(name, price) {
        const newProduct = {
            id: (products.length + 1).toString().padStart(3, '0'), // Genera un ID único
            name: name,
            price: parseFloat(price) // Convierte el precio a número flotante
        };
        products.push(newProduct); // Añadir el producto al arreglo
        localStorage.setItem('products', JSON.stringify(products)); // Guardar en localStorage
        alert("Producto publicado exitosamente");
    }

    // Manejar el evento de envío del formulario
    productForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar comportamiento por defecto del formulario

        // Obtener los valores del formulario
        const productName = document.getElementById('productName').value;
        const productPrice = document.getElementById('productPrice').value;

        // Validar y agregar el nuevo producto
        if (productName && productPrice) {
            addNewProduct(productName, productPrice);
            productForm.reset(); // Limpiar el formulario
        } else {
            alert("Por favor, complete todos los campos.");
        }
    });
});