import { useContext, useState } from 'react';
import { ShoppingCartContext } from '../../Context';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { InputNumber } from 'primereact/inputnumber';
import './styles.css';
import 'primeicons/primeicons.css';

export default function OrderCard ({ id, title, imageUrl, price, quantity }) {
    const { cartProducts, setCartProducts, deleteProductOfCart } = useContext(ShoppingCartContext);

    const modifyQuantity = (value) => {
        const modifiedProduct = cartProducts.map(product =>
            product.id === id ? { ...product, quantity: value } : product
        );
        setCartProducts(modifiedProduct);
    }

    return (
        <div className='flex justify-center items-center'>
            <div className='flex items-center justify-between'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
                </figure>
                <p className='text-sm w-20 font-light line-clamp-3 px-2' >{title}</p>
            </div>
            <div className='flex items-center h-full gap-2'>
                <p className='text-md font-medium w-[50px]'>${price * quantity}</p>
                    <div className="card flex flex-col justify-content-center">
                        <InputNumber value={quantity} onValueChange={(e) => modifyQuantity(e.value)} showButtons min={1} max={50} buttonLayout="vertical" style={{ width: '35px' }} 
                            decrementButtonClassName="p-button-secondary " incrementButtonClassName="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
                    </div>            
                <button onClick={() => deleteProductOfCart(id)}>
                   <XMarkIcon className='size-5 cursor-pointer'></XMarkIcon>
                </button>
            </div>
        </div>
    )
}