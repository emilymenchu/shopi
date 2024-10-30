import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import './styles.css';
import { XCircleIcon } from '@heroicons/react/24/solid';

function CheckoutSideMenu () {
    const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts} = useContext(ShoppingCartContext);

    return (
        <aside className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu  flex-col fixed right-0 border border-black rounded-lg bg-white p-3`}>
            <div className='flex justify-between items-center p-3'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <button>
                   <XCircleIcon className='size-6 cursor-pointer' onClick={() => closeCheckoutSideMenu()}></XCircleIcon>
                </button>
            </div>
            <figure className='p-3'>
                
            </figure>
            <p className='flex flex-col p-6 gap-1'>
            
            </p>
        </aside>
    );
}

export default CheckoutSideMenu;