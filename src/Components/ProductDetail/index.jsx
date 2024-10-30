import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import './styles.css';
import { Galleria } from 'primereact/galleria';
import { XCircleIcon } from '@heroicons/react/24/solid';

function ProductDetail () {
    const { closeProductDetail, isProductDetailOpen, productToShow } = useContext(ShoppingCartContext);
    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 3
        },
        {
            breakpoint: '767px',
            numVisible: 2
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    const itemTemplate = (item) => {
        return <img className='rounded-lg' src={item} alt={productToShow.title} style={{ width: '100%' }} />
    }

    const thumbnailTemplate = (item) => {
        return <img className='rounded-lg' src={item} alt={productToShow.title} />
    }
    return (
        <aside className={`${isProductDetailOpen ? 'flex' : 'hidden'} product-detail  flex-col fixed right-0 border border-black rounded-lg bg-white p-3`}>
            <div className='flex justify-between items-center p-3'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <button>
                   <XCircleIcon className='size-6 cursor-pointer' onClick={() => closeProductDetail()}></XCircleIcon>
                </button>
            </div>
            <figure className='p-3'>
                <Galleria value={productToShow.images} responsiveOptions={responsiveOptions} numVisible={3} style={{ maxWidth: '640px' }} 
                item={itemTemplate} thumbnail={thumbnailTemplate} circular autoPlay transitionInterval={2000}/>
            </figure>
            <p className='flex flex-col p-6 gap-1'>
                <span className='font-medium text-2xl mb-1'>${productToShow.price}</span>
                <span className='font-medium text-md'>{productToShow.title}</span>
                <span className='font-light text-sm'>{productToShow.description}</span>
            </p>
        </aside>
    );
}

export default ProductDetail;