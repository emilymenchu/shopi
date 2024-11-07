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
    /**
     * This function calculates the total price and total items of the products in cart.
     */
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const setTotalItemsAndPrice = () => {
        let totalPriceCal = 0;
        let totalItemsCal = 0;
        cartProducts.forEach(product => {
            totalPriceCal += (product.price * product.quantity);
            totalItemsCal += product.quantity;
        }); 
        setTotalPrice(totalPriceCal);
        setTotalItems(totalItemsCal);
    };

    // Shopping Cart . Order
    const [order, setOrder] = useState([]);

    // Shopping Cart . Checkout
    const handleCheckout = () => {
        if (cartProducts.length > 0) {
            const orderToAdd = {
                date: parseDate(new Date()),
                products: cartProducts,
                totalProducts: totalItems,
                totalPrice: totalPrice
            }
            setOrder([...order, orderToAdd])
            setCartProducts([]);
            setCount(0);
        }
    }

    //Save DateTime function
    const parseDate = (date) => {
        const dateString = date.toLocaleDateString('es-ES', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric'
        });
        
        const timeString = date.toLocaleTimeString('es-ES', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });

        return `${dateString} ${timeString}`;
    }

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
            toast,
            totalPrice,
            totalItems,
            setTotalItemsAndPrice,
            handleCheckout,
            order
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}