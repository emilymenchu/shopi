import { useContext } from 'react';
import OrderCard from '../OrderCard';
import { ShoppingCartContext } from '../../Context';
import './styles.css';
import { XCircleIcon } from '@heroicons/react/24/solid';

function CheckoutSideMenu () {
    const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts} = useContext(ShoppingCartContext);

    return (
        <aside className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu  flex-col fixed right-0 border border-black rounded-lg bg-white m-2 gap-1`}>
            <div className='flex justify-between items-center p-3'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <button>
                   <XCircleIcon className='size-6 cursor-pointer' onClick={() => closeCheckoutSideMenu()}></XCircleIcon>
                </button>
            </div>
            <div className='py-3 flex flex-col gap-3 overflow-y-scroll'>
                {
                    cartProducts.map(product => (
                        <OrderCard key={product.id} id={product.id} title={product.title} imageUrl={product.images} price={product.price} quantity={product.quantity}/>
                    ))
                }
            </div>
        </aside>
    );
}

export default CheckoutSideMenu;