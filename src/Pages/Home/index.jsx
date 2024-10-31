import { useState, useEffect } from 'react';
import { urlApi } from '../../Api';
import Layout from '../../Components/Layout';
import Card from '../../Components/Card';
import ProductDetail from '../../Components/ProductDetail';
import CheckoutSideMenu from '../../Components/CheckoutSideMenu';

function Home() {
    const [items, setItems] = useState(null);

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
        </Layout>
  )
}

export default Home;
