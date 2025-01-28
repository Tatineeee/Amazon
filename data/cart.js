export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
    cart = [
        {
            productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
            quantity: 1,
            deliveryOptionsId: '1',
        },
        {
            productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
            quantity: 1,
            deliveryOptionsId: '2',
        },
    ];
}

export function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId) {
    let matchingItem;

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });
    if (matchingItem) {
        matchingItem.quantity++;
    } else {
        cart.push({
            productId,
            quantity: 1,
            deliveryOptionsId: '1',
        });
    }
    saveToStorage();
    // console.log(cart);
}

export function removeItem(productId) {
    const newCart = [];
    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    });
    cart = newCart;
    saveToStorage();
}

export function updateDeliveryOptions(productId, deliveryOptionId) {
    let matchingItem;

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });

    matchingItem.deliveryOptionId = deliveryOptionId;
    saveToStorage();
}
