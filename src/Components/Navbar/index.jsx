import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';

let menuLeft = [
    {
        to: '/',
        text: 'All',
        className: ''
    },
    {
        to: '/clothes',
        text: 'Clothes',
        className: ''
    },
    {
        to: '/electronics',
        text: 'Electronics',
        className: ''
    },
    {
        to: '/furniture',
        text: 'Furniture',
        className: ''
    },
    {
        to: '/toys',
        text: 'Toys',
        className: ''
    },
    {
        to: '/others',
        text: 'Others',
        className: ''
    },
]

let menuRight = [
    {
        to: '/my-orders',
        text: 'My orders',
        className: ''
    },
    {
        to: '/my-account',
        text: 'My Account',
        className: ''
    },
    {
        to: '/sign-in',
        text: 'Sign in',
        className: ''
    }
]

function Navbar() {
    const { count, openCheckoutSideMenu } = useContext(ShoppingCartContext);

    const activeStyle = 'underline underline-offset-4';
    return (
        <nav className='flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 font-light bg-white'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                {menuLeft.map(link => (
                    <li key={link.text} className={link.className}>
                        <NavLink to={link.to} className={({ isActive }) => isActive ? activeStyle : undefined}>
                            {link.text}
                        </NavLink>
                    </li>
                ))}
            </ul>

            <ul className='flex items-center gap-3'>
            <li className='text-black/60'>
                emily@email.com
            </li>
                {menuRight.map(link => (
                    <li key={link.text}>
                        <NavLink to={link.to}>
                            {link.text}
                        </NavLink>
                    </li>
                ))}
            <li className='flex gap-1 cursor-pointer' onClick={() => openCheckoutSideMenu()}>
                <ShoppingCartIcon className='size-5'></ShoppingCartIcon>
                 {count}
            </li>
            </ul>
        </nav>
    )
}

export default Navbar;