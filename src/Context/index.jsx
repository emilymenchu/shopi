import { createContext, useRef, useState } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {   

    // Shopping Cart . Add or Eliminate cart products
    const [cartProducts, setCartProducts] = useState([]);

    const addProductToCart = (product) => {
        setCartProducts([...cartProducts, product]);
        console.log([...cartProducts, product]);
        setCount(count + 1); 
        show('success', 'Success', 'Product added to the cart');
    }
    
    const deleteProductOfCart = (id) => {
        const updatedProducts = cartProducts.filter(product => product.id !== id);
        setCartProducts(updatedProducts);
        console.log(updatedProducts);
        setCount(count - 1); 
        show('info', 'Info', 'Product removed from the cart');
    }

    // Shopping Cart . Increment quantity
    const [count, setCount] = useState(cartProducts.length);

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

    // Toast for messages ref
    const toast = useRef(null);
    // Function show to display toast
    const show = (severity, summary, detail) => {
        toast.current.show({ severity, summary, detail, life: 3000});    
    };

    // Total items and price 
    const totalItemsAndPrice = () => {
        let totalPrice = 0;
        let totalItems = 0;
        cartProducts.forEach(product => {
            totalPrice += (product.price * product.quantity);
            totalItems += product.quantity;
        })
        return { totalPrice, totalItems };
    }

    console.log(totalItemsAndPrice());

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
            setCartProducts,
            addProductToCart,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            deleteProductOfCart,
            toast
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}