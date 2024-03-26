document.addEventListener('DOMContentLoaded', () => {
    const cartContainer = document.getElementById('cart-container');

    fetchCartData()
        .then(renderCart)
        .catch(handleError);

    function fetchCartData() {
        return fetch('https://dummyjson.com/carts')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            });
    }

    function renderCart(data) {
        const carts = data.carts;
        for (const cart of carts) {
            for (const product of cart.products) {
                const productDiv = createProductElement(product);
                cartContainer.appendChild(productDiv);
            }
        }
    }

    function createProductElement(product) {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const titleParagraph = document.createElement('p');
        titleParagraph.innerHTML = `ID:${product.id} - ${product.title}`;

        const priceParagraph = document.createElement('p');
        priceParagraph.textContent = `${product.price}$`;

        const image = document.createElement('img');
        image.src = product.thumbnail;
        image.alt = product.title;

        productDiv.append(titleParagraph, priceParagraph, image);
        return productDiv;
    }

    function handleError(error) {
        console.error('Error fetching cart data:', error.message);
    }
});
