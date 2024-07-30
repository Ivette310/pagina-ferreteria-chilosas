document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    const errorMessage = document.getElementById('error-message');
    const products = document.querySelectorAll('.product');

    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.toLowerCase();
        let found = false;

        products.forEach(product => {
            const productName = product.getAttribute('data-name').toLowerCase();
            if (productName.includes(searchTerm)) {
                product.style.display = 'block';
                found = true;
            } else {
                product.style.display = 'none';
            }
        });

        if (!found) {
            errorMessage.textContent = 'No se encontraron productos que coincidan con su búsqueda.';
        } else {
            errorMessage.textContent = '';
        }
    });
});
