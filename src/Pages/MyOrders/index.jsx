import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';
import Layout from '../../Components/Layout';
import OrdersCard from '../../Components/OrdersCard';

function MyOrders() {
  const { order } = useContext(ShoppingCartContext);

    return (
      <Layout>
          <h1 className='text-2xl font-medium mb-5'>
            My Orders
          </h1>
          <div className='flex flex-col gap-2'>
              {
                order.length > 0 &&
                order.map((order) => {
                  let images = order.products.map(prod => prod.images[0]);
                  return (
                    <Link key={order.id} to={`/my-orders/${order.id}`}>
                      <OrdersCard date={order.date} totalProducts={order.totalProducts} totalPrice={order.totalPrice} images={images}/>
                    </Link>
                )
                })
              }
          </div>
      </Layout>
    )
  }
  
  export default MyOrders