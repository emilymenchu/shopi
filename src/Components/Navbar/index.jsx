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
        to: '/category/clothes',
        text: 'Clothes',
        className: ''
    },
    {
        to: '/category/electronics',
        text: 'Electronics',
        className: ''
    },
    {
        to: '/category/furniture',
        text: 'Furniture',
        className: ''
    },
    {
        to: '/category/toys',
        text: 'Toys',
        className: ''
    },
    {
        to: '/category/others',
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
    const { count, openCheckoutSideMenu, setQuery, setCategory } = useContext(ShoppingCartContext);

    const changeQuery = (categoryName) => {
        setCategory(categoryName);
        setQuery(null);
    }   

    const activeStyle = 'underline underline-offset-4';
    return (
        <nav className='flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 font-light bg-white'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg' onClick={() => {changeQuery(null); } }>
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                {menuLeft.map(link => (
                    <li key={link.text} className={link.className} 
                    onClick={() => {changeQuery(link.text === 'All' ? undefined : link.text.toLocaleLowerCase()); }}
                    >
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
            <li className='flex gap-1 cursor-pointer' onClick={() => {openCheckoutSideMenu();}}>
                <ShoppingCartIcon className='size-5'></ShoppingCartIcon>
                 {count}
            </li>
            </ul>
        </nav>
    )
}

export default Navbar;