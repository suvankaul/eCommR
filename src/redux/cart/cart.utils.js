export const addItemToCart = (cartItems, newItem) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === newItem.id);
    if(existingCartItem){
        return cartItems.map(cartItem => 
            cartItem.id === newItem.id ? {
                ...cartItem, quantity: cartItem.quantity + 1        
            } : cartItem
        )
    }
    return [...cartItems, {...newItem, quantity : 1}]
}

export const removeItemFromCart = (cartItems, newItem) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === newItem.id);
    if(existingCartItem){
        return cartItems.filter(cartItem =>  cartItem.id !== newItem.id)
    }
    return [...cartItems]
}


export const reduceCardItemQty = (cartItems, newItem) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === newItem.id);
    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem =>  cartItem.id !== newItem.id)
    }
    return cartItems.map(cartItem => 
        cartItem.id === newItem.id ? {
            ...cartItem, quantity: cartItem.quantity - 1        
        } : cartItem
    )
}