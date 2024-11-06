import { useContext } from "react"
import Layout from "../../Components/Layout"
import { ShoppingCartContext } from "../../Context"

function MyOrder() {
  const { order } = useContext(ShoppingCartContext)
    return (
      <Layout>
          <div className='py-3 flex flex-col gap-3 overflow-y-scroll flex-1'>
                {
                    order.length > 0 ? (
                        order?.slice(-1).map(product => (
                            <OrderCard key={product.id} id={product.id} title={product.title} imageUrl={product.images} price={product.price} quantity={product.quantity}/>
                        ))
                     ) : ( <p className='w-[80%] self-center mt-[100%] text-center'>The Cart is empty. Add a product with de + sign.</p>)
                }
                
            </div>
      </Layout>
    )
  }
  
  export default MyOrder