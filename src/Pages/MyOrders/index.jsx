import { useContext } from 'react';
import Layout from '../../Components/Layout';
import { ShoppingCartContext } from '../../Context';
import OrdersCard from '../../Components/OrdersCard';

function MyOrders() {
  const { order } = useContext(ShoppingCartContext)

    return (
      <Layout>
          My Orders
          <div className='flex flex-col gap-2'>
              {
                order.length > 0 &&
                order.map((order) => {
                  let images = order.products.map(prod => prod.images[0]);
                  return (<OrdersCard date={order.date} totalProducts={order.totalProducts} totalPrice={order.totalPrice} images={images}/>)
                })
              }
          </div>
      </Layout>
    )
  }
  
  export default MyOrders