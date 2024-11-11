import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import Layout from '../../Components/Layout'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../../Components/OrderCard'
import { ChevronLeftIcon } from '@heroicons/react/24/solid';

function MyOrder() {
  const { order } = useContext(ShoppingCartContext);

  const { orderId } = useParams();
  console.log(orderId);

  let products = [];

  if (orderId === 'last') {
    products = order?.slice(-1)[0] != undefined ?  order.slice(-1)[0].products : [];
  } else {
    console.log(order)
    let thisOrder = order.find(obj => obj.id === orderId)
    products = thisOrder?.products ? thisOrder.products  : [];
  }

  //let products = order?.slice(-1)[0] != undefined ?  order.slice(-1)[0].products : [];

  // const currentPath = window.location.pathname;
  // console.log(currentPath)

    return (
      <Layout>
        <div className='flex justify-center items-center relative mb-5 w-80'>
          <Link to={'/my-orders'} className='absolute left-0'>
          <ChevronLeftIcon className='size-7 cursor-pointer'></ChevronLeftIcon>
          </Link>
          <h1 className='text-2xl font-medium'>
            My Order
          </h1>
        </div>
          <div className='flex flex-col gap-2'>
                {
                    products.length > 0 ? (
                      products.map(product => (
                            <OrderCard key={product.id} id={product.id} title={product.title} imageUrl={product.images} price={product.price} quantity={product.quantity} ordered={true}/>
                        ))
                     ) : ( <p className='w-[80%] self-center mt-[100%] text-center'>The Cart is empty. Add a product with de + sign.</p>)
                }
            </div>
      </Layout>
    )
  }
  
  export default MyOrder;