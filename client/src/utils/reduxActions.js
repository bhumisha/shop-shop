
export const UPDATE_PRODUCTS = (products) => {
    return {
        type: "UPDATE_PRODUCTS",
        products: [products]
        }
};
export const UPDATE_CATEGORIES = (categories) => {
    return {
        type: "UPDATE_CATEGORIES",
        categories
    }
};
export const UPDATE_CURRENT_CATEGORY = (currentCategory) => {
    return {
        type: "UPDATE_CURRENT_CATEGORY",
        currentCategory
    }
};
export const ADD_TO_CART = (cartOpen, cart) => {
    return {
        type: 'ADD_TO_CART',
        cartOpen,
        cart: [cart],
    }
};
export const ADD_MULTIPLE_TO_CART = (cart) => {
    return {
        type: 'ADD_MULTIPLE_TO_CART',
        cart: [cart]
    }
};
export const REMOVE_FROM_CART = (cartOpen, cart) => {
    return {
        type: 'REMOVE_FROM_CART',
        cartOpen,
        cart
    }
};
export const UPDATE_CART_QUANTITY = (cartOpen, cart) => {
    return {
        type: 'UPDATE_CART_QUANTITY',
        cartOpen,
        cart
    }
};
export const CLEAR_CART = (cartOpen, cart) => {
    return {
        type: 'CLEAR_CART',
        cartOpen,
        cart
    }
};
export const TOGGLE_CART = (cartOpen) => {
    return {
        type: 'TOGGLE_CART',
        cartOpen
    }
};