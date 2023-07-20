import Cart_product from "../components/cart_product"
import { NavLink } from "react-router-dom";

const Cart = () => {

    const cart_items = [
        {
            title: "Iphone 6S",
            brand: "Apple",
            img: "https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z",
            quantity: 1,
            price: 400.00,
            get total() {
                return this.price * this.quantity;
            }

        },
        {
            title: "Snowboard Jacket Winter Coats",
            brand: "BIYLACLESEN",
            img: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
            quantity: 2,
            price: 56.99,
            get total() {
                return this.price * this.quantity;
            }

        },
        {
            title: "SanDisk SSD PLUS 1TB Internal SSD",
            brand: "SanDisk",
            img: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
            quantity: 2,
            price: 189.00,
            get total() {
                return this.price * this.quantity;
            }

        }
      
    ]

    const total = cart_items.reduce((acc, item) => acc + item.total, 0)
    const items = cart_items.length
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
                        cart_items.map(item => <Cart_product key={item.title} title={item.title} brand={item.brand} img={item.img} quantity={item.quantity} price={item.price} total={item.total} />)
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
                        <span className="font-semibold text-sm uppercase">Items 3</span>
                        <span className="font-semibold text-sm">{ total }$</span>
                    </div>
                    <div>
                        <label className="font-medium inline-block mb-3 text-sm uppercase">
                            Shipping
                        </label>
                        <select className="block p-2 text-gray-600 w-full text-sm">
                            <option>Standard shipping - $10.00</option>
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