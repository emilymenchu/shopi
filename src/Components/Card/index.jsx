import { useContext, useRef } from 'react';
import { ShoppingCartContext } from '../../Context';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const renderIcon = (id, cartProducts) => {
    const isInCart = cartProducts.some(product => product.id == id);

    if (isInCart) {
        return(
            <CheckCircleIcon className='size-7 text-white'></CheckCircleIcon>
        );
    } else {
        return(
            <PlusCircleIcon className='size-7 text-white'></PlusCircleIcon>
        );
    }
};

function Card ({ data }) {
    const { count, setCount, openProductDetail, setProductToShow, addProductToCart, openCheckoutSideMenu, deleteProductOfCart, cartProducts, toast } = useContext(ShoppingCartContext);

    const setProduct = (product) => {
        setProductToShow(product);
        openProductDetail();
    };

    const addRemoveProduct = (event) => {
        event.stopPropagation(); 
        const isInCart = cartProducts.some(product => product.id == data.id);

        if (isInCart) {
            deleteProductOfCart(data.id);
        } else {
            data.quantity = 1; 
            addProductToCart(data); 
            openCheckoutSideMenu(); 
        }
    }


    return (
        <div className='bg-white cursor-pointer w-60 h-72 rounded-lg shadow-lg' onClick={() => setProduct(data)}>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.category.name}</span>
                <img className='w-full h-full object-cover rounded-lg' src={data.images[0]} alt={data.title} />
                <button className='absolute top-0 right-0 flex justify-center text-center w-7 h-7 rounded-full m-2'
                onClick={(event) => addRemoveProduct(event)}>
                    {renderIcon(data.id, cartProducts)}
                </button>
            </figure>
            <p className='flex justify-between px-2 py-1'>
                <span className='text-sm font-light'>{data.title}</span>
                <span className='text-lg font-medium'>${data.price}</span>
            </p>
        </div>
    )
}

export default Card;