import './styles.css';
import { XCircleIcon } from '@heroicons/react/24/solid'

function ProductDetail () {
    return (
        <aside className='product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white'>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <button>
                   <XCircleIcon className='size-6' ></XCircleIcon>
                </button>
            </div>
        </aside>
    );
}

export default ProductDetail;