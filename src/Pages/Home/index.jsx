import { useState, useEffect, useContext } from 'react';
import { urlApi } from '../../Api';
import Layout from '../../Components/Layout';
import Card from '../../Components/Card';
import ProductDetail from '../../Components/ProductDetail';
import CheckoutSideMenu from '../../Components/CheckoutSideMenu';
import { ShoppingCartContext } from '../../Context';
import { Toast } from 'primereact/toast';

function Home() {
    const [items, setItems] = useState(null);

    const { toast } = useContext(ShoppingCartContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(urlApi(0, 70));
                const data = await response.json();
                setItems(data);
            } catch (e) {
                console.error('Ha ocurrido un error al obtener los productos: ' + e);
            }
        }

        fetchData();
    }, [])
    

    return (
        <Layout>
            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg mb-6'>
                {
                    items?.map(item => (
                        <Card key={item.id} data={item} />
                    ))
                }
            </div>
            <ProductDetail />
            <CheckoutSideMenu />
            <Toast ref={toast} position="bottom-center" />
        </Layout>
  )
}

export default Home;
