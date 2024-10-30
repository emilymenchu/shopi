import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    // Shopping Cart . Increment quantity
    const [count, setCount] = useState(0);

    // Shopping Cart . Add products to cart
    const [cartProducts, setCartProducts] = useState([]);

    const addProductToCart = (product) => {
        setCartProducts([...cartProducts, product]);
        console.log([...cartProducts, product])
    }

    // Checkout-side-menu . state
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);

    // Product Detail . Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => {
        setIsProductDetailOpen(true);
        closeCheckoutSideMenu();
    };
    const closeProductDetail = () => setIsProductDetailOpen(false);

    // Product Detail . Show Product
    const [productToShow, setProductToShow] = useState({});

    // Checkout-side-menu . Open/Close
    const openCheckoutSideMenu = () => {
        setIsCheckoutSideMenuOpen(true);
        closeProductDetail();
    };
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);


    return (
        <ShoppingCartContext.Provider value = {{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            addProductToCart,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}