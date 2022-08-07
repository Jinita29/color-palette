import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import { ROUTE_USER } from '../../config/routeConfig';
import { Images } from './../../static/Images';
import { Icon } from '@iconify/react';

const Header = () => {
    const localThemeMode = JSON.parse(localStorage.getItem('themeMode'));
    const [darkMode, setDarkMode ] = useState(localThemeMode ? localThemeMode : false);

    const getBody = document.querySelector('body');
    useEffect(()=>{
        if(darkMode){
            getBody.classList.add('dark')
        }else{
            getBody.classList.remove('dark')
        }
        localStorage.setItem('themeMode', JSON.stringify(darkMode));
    },[darkMode])
    return (
        <>
           <header className={'bg-light dark:bg-dark py-3 shadow fixed left-0 right-0 top-0 w-full z-[999]'}>
               <div className={'container'}>
                   <div className={'flex justify-between items-center'}>
                       <Link  to={ROUTE_USER?.HOME} ><img src={Images?.Logo} alt="Logo" width={30} height={30} /></Link>

                       <button className={'text-dark dark:text-light text-2xl focus-visible:outline-0'} onClick={()=> setDarkMode(!darkMode)}>
                           {darkMode ? <Icon icon="octicon:sun-16" /> : <Icon icon="eva:moon-fill" />}
                       </button>
                   </div>
               </div>
           </header>
        </>
    )
}

export default Header;