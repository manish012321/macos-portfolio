
import dayjs from 'dayjs';
import { navIcons, navLinks } from '#constants';
import React from 'react'


const Navbar = () => {

   
    return (
        <nav>
            <div>
                <img src="/images/logo.svg" alt='logo' />
                <p className='font-bold'>Macos Portfolio</p>

                <ul>
                    {navLinks.map((item) => {
                        return (
                            <li key={item.id}>
                               <p>{item.name}</p>
                            </li>
                        );
                    })}
                </ul>

            </div>

            <div>
                <ul>
                    {navIcons.map((item) => (
                        <li key={item.id}>
                            <img src={item.img} className='icon-hover' alt={`icon-${item.id}`} />
                        </li>
                    ))}
                </ul>

                <time> {dayjs().format("ddd MMM D h:mm A")}</time>
            </div>
        </nav>
    )
}

export default Navbar
