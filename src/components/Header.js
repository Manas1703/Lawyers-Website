import React, {useEffect, useState} from 'react'

import Nav from './Nav'
import NavMobile from './NavMobile'

//import logo
import Logo from '../assets/img/Aklank Jain & Associates Logo.jpg';

const Header = () => {
    const [bg, setBg] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>80){
                setBg(true)
            }else{
                setBg(false)
            }
        })
    }); 
    
    return(
    <header 
     className={`${bg && 'bg-white shadow-md py-4'}
     p-8 lg:px-0 w-full fixed z-10 transition-all duration-300`}>
    
        <div className="container mx-auto flex items-center justify-between" >
            {/* logo */}
            <a href='#'>
                <img src = {Logo} alt=''/>  {/* style={{ width: `${200}px`, height: `${217}px` }} /> */}
            </a>
            {/* nav  */}
            <Nav/>
            {/* navmobile */}
            <NavMobile/>
        </div>

    </header>
    );
};

export default Header;