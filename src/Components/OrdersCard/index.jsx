import { ChevronRightIcon, ShoppingBagIcon, CalendarDaysIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid';
import './styles.css';
import 'primeicons/primeicons.css';

export default function OrdersCard ({date, totalPrice, totalProducts, images}) {
    return (
        <div className='flex px-2 justify-center items-center rounded-lg border border-spacing-1 border-gray-100'>
            <div className='flex items-center w-full'>
                <figure className='relative w-28 h-28 mr-6'>
                    {images.length >= 2 ?
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
                <p className='flex text-sm w-28 font-light line-clamp-3 px-1 gap-1' >
                    <CalendarDaysIcon className='size-8'></CalendarDaysIcon>
                    {date}
                </p>
                    <div className="card flex flex-col justify-content-center">
                        
                        <p className='flex text-sm font-light gap-1'>
                            <ShoppingBagIcon className='size-5'></ShoppingBagIcon>
                            Quantity: 
                            <div className='font-medium px-1'>{totalProducts}</div></p>
                        <p className='flex text-sm font-light'>
                            <CurrencyDollarIcon className='size-5'></CurrencyDollarIcon>
                            Total: 
                            <div className='font-medium px-1'>${totalPrice}</div></p>
                    </div>            
                <button className='p-3'>
                   <ChevronRightIcon className='size-5 cursor-pointer'></ChevronRightIcon>
                </button>
            </div>
        </div>
    )
}