import { useContext, useState } from 'react';
import { ShoppingCartContext } from '../../Context';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { InputNumber } from 'primereact/inputnumber';
import './styles.css';
import 'primeicons/primeicons.css';

export default function OrderCard ({ id, title, imageUrl, price, quantity, ordered }) {
    const { cartProducts, setCartProducts, deleteProductOfCart } = useContext(ShoppingCartContext);

    const modifyQuantity = (value) => {
        const modifiedProduct = cartProducts.map(product =>
            product.id === id ? { ...product, quantity: value } : product
        );
        setCartProducts(modifiedProduct);
    }

    return (
        <div className={`flex justify-center items-center ${ordered && 'w-[100%] rounded-lg border border-spacing-1 border-gray-200'}`}>
            <div className='flex items-center justify-between'>
                <figure className={!ordered ? 'w-20 h-20' : 'w-28 h-28'}>
                    <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
                </figure>
                <p className={!ordered ? 'text-sm w-20 font-light line-clamp-3 px-2' : 'text-sm w-32 font-light line-clamp-3 px-3'} >{title}</p>
            </div>
            <div className='flex items-center h-full gap-2'>
                {!ordered && <p className='text-md font-medium w-[50px]'>${price * quantity}</p>}
                    <div className="card flex flex-col justify-content-center">
                        {!ordered  ? <InputNumber value={quantity} onValueChange={(e) => modifyQuantity(e.value)} showButtons min={1} max={50} buttonLayout="vertical" style={{ width: '35px' }} 
                            decrementButtonClassName="p-button-secondary " incrementButtonClassName="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
                            :
                            <div className='flex flex-row flex-wrap w-40 gap-1'>
                                <p className='flex text-sm font-light'>Price: <div className='font-medium px-1'>${price}</div></p>
                                <p className='flex text-sm font-light'>Quantity: <div className='font-medium px-1'>{quantity}</div></p>
                                <p className='flex text-sm font-light'>Total: <div className='font-medium px-1'>${price * quantity}</div></p>
                            </div>
                        }
                    </div>            
                    {!ordered &&   <button onClick={() => deleteProductOfCart(id)}>
                                        <XMarkIcon className='size-5 cursor-pointer'></XMarkIcon>
                                    </button>}
                
            </div>
        </div>
    )
}