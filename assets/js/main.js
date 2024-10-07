document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartTotal = document.querySelector('.cart-total');
    const cartItemsList = document.querySelector('.cart-items');

    
    const addToCart = (id, name, price) => {
        const item = cart.find(i => i.id === id);
        if (item) {
            item.quantity += 1;
        } else {
            cart.push({ id, name, price, quantity: 1 });
        }
        updateCart();
    };

 
    const updateCart = () => {
        cartItemsList.innerHTML = cart.map(item => 
            `<li>${item.name} - $${item.price} x ${item.quantity}</li>`).join('');
        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        cartTotal.innerText = total;
    };

    
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const productCard = button.closest('.product-card');
            const id = productCard.dataset.id;
            const name = productCard.querySelector('h3').innerText;
            const price = parseInt(productCard.dataset.price, 10);
            addToCart(id, name, price);
        });
    });
});
