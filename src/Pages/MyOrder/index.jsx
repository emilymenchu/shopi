import { useContext } from "react"
import Layout from "../../Components/Layout"
import { ShoppingCartContext } from "../../Context"
import OrderCard from "../../Components/OrderCard"

function MyOrder() {
  const { order } = useContext(ShoppingCartContext)
  console.log(order?.slice(-1)[0])
  let products = order?.slice(-1)[0] != undefined ?  order.slice(-1)[0].products : [];
    return (
      <Layout>
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
  
  export default MyOrder