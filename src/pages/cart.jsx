import Cart_product from "../components/cart_product"
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const Cart = () => {

    const { cartProducts } = useContext(CartContext)

    

    const total = cartProducts.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const items = cartProducts.length
    return (
        <div className="container mx-auto mt-28">
            <div className="flex flex-col-reverse p-4 md:p-0 md:flex-row shadow-md my-10">
                <div className="w-full md:w-3/4 bg-white px-10 py-10">
                    <div className="flex flex-col md:flex-row gap-2 items-center justify-between border-b pb-8">
                        <h1 className="font-semibold text-2xl text-[var(--primary-color)]">Shopping Cart</h1>
                        <h2 className="font-semibold text-2xl text-[var(--primary-color)]">{items} Items</h2>
                    </div>
                    <div className=" mt-10 hidden md:flex mb-5">
                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                            Product Details
                        </h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
                            Quantity
                        </h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                            Price
                        </h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
                            Total
                        </h3>
                    </div>
                        
                    {
                        cartProducts.map(Product => <Cart_product key={Product.name} title={Product.description} brand={Product.id} img={Product.img} quantity={Product.avg_ratings} />)
                    }
                  
                    <NavLink to='/' className="flex font-semibold text-[var(--primary-color)] text-sm mt-10">
                        <svg
                            className="fill-current mr-2 text-[var(--primary-color)]-600 w-4"
                            viewBox="0 0 448 512"
                        >
                            <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                        </svg>
                        Continue Shopping
                    </NavLink>
                </div>
                <div id="summary" className="w-full md:w-1/4 px-8 py-10 bg-[#f6f6f6]">
                    <h1 className="font-semibold text-2xl border-b pb-8 text-[var(--primary-color)]">Order Summary</h1>
                    <div className="flex justify-between mt-10 mb-5">
                        <span className="font-semibold text-sm uppercase">Items</span>
                        <span className="font-semibold text-sm">{ total }$</span>
                    </div>
                    <div>
                        <label className="font-medium inline-block mb-3 text-sm uppercase">
                            Shipping
                        </label>
                        <select className="block p-2 text-gray-600 w-full text-sm">
                            <option>Standard shipping - $20.00</option>
                        </select>
                    </div>
                    <div className="py-10">
                        <label
                            htmlFor="promo"
                            className="font-semibold inline-block mb-3 text-sm uppercase"
                        >
                            Promo Code
                        </label>
                        <input
                            type="text"
                            id="promo"
                            placeholder="Enter your code"
                            className="p-2 text-sm w-full"
                        />
                    </div>
                    <button className="bg-transparent hover:bg-gray-300 px-5 py-2 text-sm text-gray-800 border border-gray-800 rounded-full uppercase">
                        Apply
                    </button>
                    <div className="border-t mt-8">
                        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                            <span>Total cost</span>
                            <span>${total + 10}</span>
                        </div>
                        <button className="bg-[var(--primary-color)] rounded-lg font-semibold hover:bg-light-blue-700 py-3 text-sm text-white uppercase w-full">
                            Checkout
                        </button>
                    </div>
                </div>
            </div>  
        </div>

    )
}

export default Cart