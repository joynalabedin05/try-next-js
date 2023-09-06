import Link from 'next/link';
import React from 'react';
import {usePathname} from "next/navigation";
import ClassNames from '@/utils/ClassNames';

const NavLink = ({children, href,exact = false, activeClassName, ...props}) => {
    const path = usePathname();
    const active = exact? path===href : path.startsWith(href);
    const classes = ClassNames(props.ClassName, active && activeClassName);
    if(classes){
        props.className= classes;
    }
    return (
        <Link href={href} {...props}>
            {children}
        </Link>
    );
};

export default NavLink;