import { useContext } from 'react';
import Layout from '../../Components/Layout';
import Card from '../../Components/Card';
import ProductDetail from '../../Components/ProductDetail';
import CheckoutSideMenu from '../../Components/CheckoutSideMenu';
import { ShoppingCartContext } from '../../Context';
import { Toast } from 'primereact/toast';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

function Home() {

    const { toast, items, search, query, filteredItems, category } = useContext(ShoppingCartContext);


    const renderView = () => {
        const itemsToRender = query?.length > 0 || category?.length > 0 ? filteredItems : items;
        
        if (itemsToRender?.length > 0) {
            return (<div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg mb-6'>
                        {
                            itemsToRender.map(item => (
                                <Card key={item.id} data={item} />
                            ))
                        }
                    </div>)
        } else {
             return<p className='w-[80%] self-center mt-[10%] text-center'>No results</p>
        }
    }

    return (
        <Layout>
            <div className='flex m-4 w-96 h-12 justify-center items-center gap-3'>
                <MagnifyingGlassIcon className='size-7'></MagnifyingGlassIcon>
                <input 
                className='border border-gray-500 rounded-lg w-80 h-full p-4 focus:outline-none'
                type='text' 
                placeholder='Search'
                onChange={search}
                />
            </div>
            
                {
                    renderView()
                }
            <ProductDetail />
            <CheckoutSideMenu />
            <Toast ref={toast} position='bottom-center' />
        </Layout>
  )
}

export default Home;
