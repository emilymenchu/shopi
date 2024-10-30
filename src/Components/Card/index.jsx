import { useContext, useRef } from 'react';
import { Toast } from 'primereact/toast';
import { ShoppingCartContext } from '../../Context';
import { PlusCircleIcon } from '@heroicons/react/24/outline';

function Card ({ data }) {
    const { count, setCount, openProductDetail, setProductToShow, addProductToCart, openCheckoutSideMenu } = useContext(ShoppingCartContext);

    const setProduct = (product) => {
        setProductToShow(product);
        openProductDetail();
    };

    const addProduct = (event) => {
        event.stopPropagation(); addProductToCart(data); setCount(count + 1); openCheckoutSideMenu(); show();
    }

    const toast = useRef(null);

    const show = () => {
        toast.current.show({severity:'success', summary: 'Success', detail:'The Product was added to the cart', life: 3000});    
    };

    return (
        <div className='bg-white cursor-pointer w-60 h-72 rounded-lg shadow-lg' onClick={() => setProduct(data)}>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.category.name}</span>
                <img className='w-full h-full object-cover rounded-lg' src={data.images[2]} alt={data.title} />
                <Toast ref={toast} position="top-center" />
                <button className='absolute top-0 right-0 flex justify-center text-center w-7 h-7 rounded-full m-2'
                onClick={(event) => addProduct(event)}>
                    <PlusCircleIcon className='size-7 text-white'></PlusCircleIcon>
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