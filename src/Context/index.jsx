import { createContext, useRef, useState, useEffect } from 'react';
import { urlApi } from '../Api';
import { parseDate } from '../Utils';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => { 
    
    // Get Products
    const [items, setItems] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(urlApi(0, 70));
                const data = await response.json();
                setItems(data);
            } catch (e) {
                console.error('Ha ocurrido un error al obtener los productos: ' + e);
            }
        }

        fetchData();
    }, []);
    
     //Get Products by search
    const [filteredItems, setFilteredItems] = useState(null);
    
    const [query, setQuery] = useState(null);

     const search = (event) => {
         setQuery(event.target.value);
     }

    //  const filterItemsBySearch = (items, query) => {
    //     return items?.filter(item => item.title.toLowerCase().includes(query?.toLowerCase()));
    //  }

    
    //  Get Products by Category
    const [category, setCategory] = useState(null);
    console.log(category)

    // const filterItemsByCategory = (items, category) => {
    //     return items?.filter(item => item.category.name.toLowerCase().includes(category?.toLowerCase()));
    // }

    const filterBy = (items, category, query) => {
        // console.log('Items', items)
        let toFilter;
        if (query !== null) {
            toFilter = items?.filter(item => item.title.toLowerCase().includes(query?.toLowerCase()));
            // console.log('1. Filtered By Query ', toFilter)
        }

        console.log('Category ',  category)

        if (category !== null && category !== undefined) {
            if (query === null){
                toFilter = items?.filter(item => item.category.name.toLowerCase().includes(category?.toLowerCase()));
                // console.log('Without Query: ', toFilter)
            } else {
                toFilter = toFilter?.filter(item => item.category.name.toLowerCase().includes(category?.toLowerCase()));
            }
            // console.log('Filtered By Category: ',  toFilter)
        }
        console.log('2. ', toFilter);
        setFilteredItems(toFilter  ? toFilter : null);
    };


     useEffect(() => {
        if (query || category) filterBy(items, category, query);
     }, [items, query, category])


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
                id: crypto.randomUUID(),
                date: parseDate(new Date()),
                products: cartProducts,
                totalProducts: totalItems,
                totalPrice: totalPrice
            }
            setOrder([...order, orderToAdd])
            setCartProducts([]);
            setCount(0);
            show('succes', 'Success', 'Purchased Order');
        }
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
            order,
            items,
            setItems,
            search,
            query,
            setQuery,
            filteredItems,
            setCategory,
            category
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}