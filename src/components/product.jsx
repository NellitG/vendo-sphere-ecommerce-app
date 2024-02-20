import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Tooltip,
    IconButton,
} from "@material-tailwind/react";
import {
    StarIcon,
    HeartIcon,
} from "@heroicons/react/24/solid";

import PropTypes from 'prop-types'
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";


export default function Product({ product }) {
    const {setCartProducts} = useContext(CartContext)

    const handleAddToCart = () => {
        setCartProducts(cartProducts => {
            cartProducts.push(product)
            return cartProducts;
        })

    }

    return (
        <Card className="w-full max-w-[26rem] shadow-2xl fade-in">
            <CardHeader className="relative group" floated={false} color="blue-gray">
                <div className="absolute w-full h-full bg-black/60 group-hover:bg-gray-100/10 group-hover:transition-all z-10 group-hover:duration-500"></div>
                <img
                    src={product.base_image.medium_image_url}
                    className="aspect-square object-cover  block w-full h-full max-w-full group-hover:scale-150 group-hover:transition-all  group-hover:duration-500 "
                    alt="ui/ux review check"
                />
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                <IconButton
                    size="sm"
                    color="red"
                    variant="text"
                    className="!absolute top-4 right-4 rounded-full z-20"
                >
                    <HeartIcon className="h-6 w-6" />
                </IconButton>
            </CardHeader>
            <CardBody>
                <div className="mb-3 flex items-center justify-between">
                    <Tooltip content={product.name} animate={{
                        mount: { scale: 1, y: 0 },
                        unmount: { scale: 0, y: 25 },
                    }}>


                        <Typography variant="h5" color="blue-gray" className="font-medium truncate cursor-pointer">
                            {product.name}
                        </Typography>
                    </Tooltip>
                    <Tooltip content={product.avg_ratings + ' reviews'} animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                }} className='w-fit' >
                    <Typography
                        color="blue-gray"
                        className="flex items-center gap-1.5 font-normal cursor-pointer"
                    >
                        <StarIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
                        {product.avg_ratings}{" "}

                    </Typography>
                    </Tooltip>
                </div>
                <Tooltip content={product.description} animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                }} className='w-96' >
                    <Typography color="gray" className='clamp cursor-pointer'>
                        {product.description}
                    </Typography>
                </Tooltip>
                <Typography color="gray" className='cursor-default  font-medium text-xl text-right pt-1 text-[var(--primary-color)]'>
                        {" "}
                        {product.min_price}
                    </Typography>

            </CardBody>
            <CardFooter className="pt-3">
                <Button size="lg" variant="text" style={{color:'var(--primary-color)'}} fullWidth={true} onClick={handleAddToCart}>
                    Add to cart
                </Button>
            </CardFooter>
        </Card>
    );
}

Product.propTypes = {
    product: PropTypes.object.isRequired
}

