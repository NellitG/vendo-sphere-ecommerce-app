import { useEffect, useState } from "react"
import Product from "./product"
import {

   ArrowPathIcon
 

} from "@heroicons/react/24/outline";
import PropTypes from 'prop-types'

const Products = ({title}) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
       
        fetch('http://localhost:8000/api/products')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setLoading(false)
                setProducts(data.data)
                console.log(data.data)
            }).catch(err =>
                console.log(err),
                setLoading(false)
            )
    }, [])
  

    return (


        <div className="flex flex-col w-full items-center  self-center p-2 py-3 justify-center">
            <h1 className="font-bold text-xl my-3 md:text-3xl text-[var(--primary-color)]">{title}</h1>
            {
                !loading ? <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 place-items-center">
                    {
                        products && products.map(product => <Product key={product.id} product={product} />)
                    }
                </div>
                    :
                    <div className="flex flex-col items-center justify-center ">
                        <ArrowPathIcon className="animate-spin w-28"/>
                        <h1 className="font-bold text-xl text-center ml-3 my-3 md:text-3xl">Loading...</h1>
                        
                    </div>
            }
        </div>

    )
}

Products.propTypes = {
    title: PropTypes.string.isRequired
}

export default Products
