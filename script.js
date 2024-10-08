document.querySelector('.search-bar input').addEventListener('keyup', function(e) {
    const searchQuery = e.target.value.toLowerCase();
    const products = document.querySelectorAll('.product-card');
    
    products.forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(searchQuery)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});
