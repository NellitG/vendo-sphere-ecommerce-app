import React from "react";
import { NavLink, useNavigate } from 'react-router-dom'

import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
    List,
    ListItem,
} from "@material-tailwind/react";
import {

    Bars3Icon,
    XMarkIcon,
    ShoppingCartIcon

} from "@heroicons/react/24/outline";

import propTypes from 'prop-types'

function NavList({setOpenNav = ()=>{}}) {
    return (
        <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
            <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
            >

                <NavLink className='text-black' to='/'  color="red" onClick={()=>setOpenNav(false)}>
                    <ListItem to='/' className="flex items-center gap-2 py-2 pr-4">
                        Home
                    </ListItem>
                </NavLink>

            </Typography>

            <Typography

                variant="small"
                color="blue-gray"
                className="font-normal"
            >

                <NavLink className='text-black' to='/products' onClick={()=>setOpenNav(false)}>
                    <ListItem className="flex items-center gap-2 py-2 pr-4">
                        Calculator
                    </ListItem>
                </NavLink>
            </Typography>

            <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
            >

                <NavLink className='text-black' to='/about us' onClick={()=>setOpenNav(false)}>
                    <ListItem to='/' className="flex items-center gap-2 py-2 pr-4">
                        About Us
                    </ListItem>
                </NavLink>

            </Typography>
            <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
            > <NavLink className='text-black' to='/contact' onClick={()=>setOpenNav(false)}>
                    <ListItem className="flex items-center gap-2 py-2 pr-4">

                        Contact

                    </ListItem>
                </NavLink>
            </Typography>
            <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
            >
                <NavLink className='text-black flex items-center gap-1' to='/cart' onClick={()=>setOpenNav(false)}>
                    <ListItem className="flex items-center gap-2 py-2 pr-4">
                        <ShoppingCartIcon width={20} />
                        Cart
                    </ListItem>
                </NavLink>
            </Typography>
        </List>
    );
}

NavList.propTypes = {
    setOpenNav: propTypes.func
}

export default function ComplexNavbar() {

    const navigate = useNavigate()
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    return (
        <Navbar className="fixed top-2 md:top-5 left-1/2 -translate-x-1/2 bg-white z-30  md:mx-auto w-11/12   md:max-w-screen-xl px-4 py-2 fade-in">
            <div className="flex items-center justify-between text-white-900">
                <div className="w-40">
                    <NavLink to='/'>
                     
                    </NavLink>
                </div>
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <div className="hidden gap-2 lg:flex">
                    <Button variant="gradient" size="sm" color="yellow" onClick={() => navigate('/login')}>
                        Sign In
                    </Button>
                    <Button variant="gradient" size="sm" color="yellow" onClick={() => navigate('/register')}>
                        Sign Up
                    </Button>
                </div>
                <IconButton
                    variant="text"
                    color="blue-gray"
                    className="lg:hidden"
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList setOpenNav={setOpenNav} />
                <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
                    <Button variant="gradient" size="sm" color="yellow" fullWidth onClick={() => {navigate('/login');setOpenNav(false)}}>
                        Sign In
                    </Button>
                    <Button variant="gradient" size="sm" color="yellow" fullWidth onClick={() => {navigate('/register');setOpenNav(false)}}>
                        Sign Up
                    </Button>
                </div>
            </Collapse>
        </Navbar>
    );
}