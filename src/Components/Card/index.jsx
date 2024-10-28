import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { PlusCircleIcon } from '@heroicons/react/24/outline';

function Card ({ data }) {
    const { count, setCount} = useContext(ShoppingCartContext);
    return (
        <div className='bg-white cursor-pointer w-60 h-72 rounded-lg shadow-lg'>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.category.name}</span>
                <img className='w-full h-full object-cover rounded-lg' src={data.images[1]} alt={data.title} />
                <button className='absolute top-0 right-0 flex justify-center text-center w-7 h-7 rounded-full m-2 '
                onClick={() => setCount(count + 1)}>
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