import React from 'react';
import Link from 'next/link';

const NavLink = ({name, link, hash}) => {
    return(
        <li className="navItem">
            <Link 
                href={hash ? hash : link} 
                aria-label={name} 
                data-attribute-page-target={name} 
                className="nav-link">
                {name}
            </Link>
        </li>
    )
    }

export default NavLink;
