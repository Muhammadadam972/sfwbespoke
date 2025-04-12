var menu = document.getElementById("menu"); 
function closeMenu(){
    menu.style.top = '-100vh';
    
}
function openMenu(){
    menu.style.top = '17%';
}
function addToList(name,price,image){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({name,price,image});
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = 'list.html';
}
function loadCart(){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
            const cartDiv = document.getElementById('cart');
            cartDiv.innerHTML = '';

            if (cart.length === 0) {
                cartDiv.innerHTML = '<p>Your cart is empty.</p>';
                return;
            }

            cart.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'cart-item';
                itemDiv.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div>
                        <h2>${item.name}</h2>
                        <p>Price: ${item.price}</p>
                    </div>
                `;
                cartDiv.appendChild(itemDiv);
            });
        }

        function clearCart() {
            localStorage.removeItem('cart');
            loadCart();
        }
        window.onload = loadCart;

document.addEventListener("DOMContentLoaded", function(){
    const elements = document.querySelectorAll('.animate-text');
    const observer = new IntersectionObserver((entries) =>{
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateX(0)';
            }
    });
});
elements.forEach(element=>{
    observer.observe(element);
});
});
document.addEventListener("scroll", function () {
    let elements = document.querySelectorAll(".text");
    elements.forEach((element) => {
        let position = element.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            element.classList.add("visible");
        }
    });
});

