import { ShoppingCartContext } from '../../Context';
import { XMarkIcon } from '@heroicons/react/24/solid';
import './styles.css';
import 'primeicons/primeicons.css';

export default function OrdersCard ({date, totalPrice, totalProducts, images}) {
    // const { cartProducts, setCartProducts, deleteProductOfCart } = useContext(ShoppingCartContext);
    return (
        <div className='flex px-2 justify-center items-center rounded-lg border border-spacing-1 border-gray-100'>
            <div className='flex items-center w-full'>
                <figure className='relative w-24 h-24 mr-6'>
                    {images.length >= 3 ?
                        images.slice(0, 3).map((img, index) => (
                            <img
                                key={index}
                                className={`absolute w-full h-full rounded-lg object-cover transition-transform duration-300
                                ${index === 0 ? '-rotate-6 -translate-x-4 z-10' : ''}
                                ${index === 1 ? 'rotate-0 translate-x-0 z-20' : ''}
                                ${index === 2 ? 'rotate-6 translate-x-4 z-30' : ''}`}
                                src={img}
                                alt={`img${index}`}
                            />
                        ))
                        :
                        <img
                                className={`absolute w-full h-full rounded-lg object-cover transition-transform duration-300`}
                                src={images[0]}
                                alt={`img`}
                            />
                }
                </figure>
            </div>
            <div className='flex items-center h-full gap-2'>
                 <p className='text-sm w-24 font-light line-clamp-3 px-2' >{date}</p>
                    <div className="card flex flex-col justify-content-center">
                        
                        <p className='flex text-sm font-light'>Quantity: <div className='font-medium px-1'>{totalProducts}</div></p>
                        <p className='flex text-sm font-light'>Total: <div className='font-medium px-1'>${totalPrice}</div></p>
                    </div>            
                <button>
                   <XMarkIcon className='size-5 cursor-pointer'></XMarkIcon>
                </button>
            </div>
        </div>
    )
}