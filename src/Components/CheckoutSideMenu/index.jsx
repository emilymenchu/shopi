import { useContext } from 'react';
import { Link } from 'react-router-dom';
import OrderCard from '../OrderCard';
import { ShoppingCartContext } from '../../Context';
import './styles.css';
import { XCircleIcon } from '@heroicons/react/24/solid';

function CheckoutSideMenu () {
    const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts, totalPrice, totalItems, setTotalItemsAndPrice, handleCheckout} = useContext(ShoppingCartContext);
    
    setTotalItemsAndPrice();

    return (
        <aside className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu  flex-col fixed right-0 border border-black rounded-lg bg-white m-2 gap-1`}>
            <div className='flex justify-between items-center p-3'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <button>
                   <XCircleIcon className='size-6 cursor-pointer' onClick={() => closeCheckoutSideMenu()}></XCircleIcon>
                </button>
            </div>
            <div className='py-3 flex flex-col gap-3 overflow-y-scroll flex-1'>
                {
                    cartProducts.length > 0 ? (
                        cartProducts.map(product => (
                            <OrderCard key={product.id} id={product.id} title={product.title} imageUrl={product.images} price={product.price} quantity={product.quantity}/>
                        ))
                     ) : ( <p className='w-[80%] self-center mt-[100%] text-center'>The Cart is empty. Add a product with de + sign.</p>)
                }
                
            </div>
            <div className='px-6 flex flex-col gap-4 justify-between p-3 border-t border-gray-300'>
                <p className='flex justify-between items-center'>
                    <span className='font-light'>Total Price:</span>
                    <span className='font-medium text-xl'>${totalPrice}</span>
                </p>
                <p className='flex justify-between items-center'>
                    <span className='font-light'>Total Items:</span>
                    <span className='font-medium text-xl'>{totalItems}</span>
                </p>
                { cartProducts.length > 0 ? 
                    (<Link to='/my-orders/last'><button className='w-full bg-black py-3 text-white rounded-lg'  onClick={() => handleCheckout()}>Checkout</button></Link> ) : null
                }
            </div>
        </aside>
    );
}

export default CheckoutSideMenu;