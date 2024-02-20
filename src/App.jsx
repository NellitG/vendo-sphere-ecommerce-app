import ComplexNavbar from './components/navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Footer from './components/footer'
import Login from './pages/login'
import Register from './pages/register'
import ProductPage from './pages/calculator'
import Contact from './pages/contact'
import Cart from './pages/cart'
import Page_Not_Found from './pages/page_not_found'
import AboutUs from './pages/about us'
import Products from './components/products'
import { CartContext } from './contexts/CartContext'
import { useState } from 'react'

function App() {
    const [cartProducts, setCartProducts]= useState([])


    return (

        <CartContext.Provider value={{
            cartProducts,
            setCartProducts
        }} >
            <ComplexNavbar />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path='login' element={<Login/>} />
                <Route path="register" element={<Register/>} />
                <Route path="products" element={<ProductPage/> } />
                <Route path="contact" element={<Contact/>} />
                <Route path="cart" element={<Cart/>} />
                <Route path="*" element={<Page_Not_Found/>} />
                <Route path="about us" element={<AboutUs/>} />
                <Route exact path="/"component={Products} />
                <Route path="/cart" component={Cart} />
            </Routes>
            <Footer/>
        </CartContext.Provider>
    )
}

export default App
