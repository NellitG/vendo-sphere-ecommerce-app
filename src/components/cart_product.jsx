
import PropTypes from 'prop-types'

const Cart_product = ({title,brand,price,total,img}) => {
    
    return (
        <div className="flex flex-wrap md:flex-nowrap gap-3 justify-center items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div className="flex flex-col gap-3 items-center justify-center  md:flex-row md:items-start md:gap-0  md:justify-normal w-full md:w-2/5">
                <div className="w-full  flex items-center justify-center md:block md:w-20">
                    <img src={img}></img>
                </div>
                <div className="flex flex-col items-center md:items-start justify-between ml-4 flex-grow">
                    <span className="font-bold text-sm">{title}</span>
                    <span className="text-red-500 text-xs">{brand}</span>
                    <p
                        className="font-semibold hover:text-red-500 text-gray-500 cursor-pointer text-xs"
                    >
                        Remove
                    </p>
                </div>
            </div>
            <div className="flex justify-center w-1/5">
                <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
                <input
                    className="mx-2 border text-center w-8"
                    type="text"
                
                />
                <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
            </div>
            <span className="text-center w-1/5 font-semibold text-sm">${price}</span>
            <span className="text-center w-1/5 font-semibold text-sm">${total}</span>
        </div>
    )
}

Cart_product.propTypes = {
    title: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,

}

export default Cart_product

