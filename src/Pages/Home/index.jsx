import { useState, useEffect } from "react"
import { urlApi } from '../../Api'
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"

function Home() {
    const [items, setItems] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(urlApi(0, 20));
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
            Home
            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg mb-6'>
                {
                    items?.map(item => (
                        <Card key={item.id} data={item} />
                    ))
                }
            </div>
        </Layout>
  )
}

export default Home
