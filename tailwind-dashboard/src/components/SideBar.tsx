import { GoMarkGithub } from 'react-icons/go'
import { CiCoffeeCup, CiBatteryFull, CiWheat } from 'react-icons/ci'
import { IoFlashlightOutline, IoFlashlight } from 'react-icons/io5'
import useDarkMode from '../hooks/useDarkMode';
import React from 'react';
import { IconBaseProps } from 'react-icons';

const Sidebar = () => {
    return ( 
    <div className="fixed top-0 left-0 h-screen w-16 m-0 
    flex flex-col bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white shadow-lg" >

        
        <SideBarIcon icon={<CiCoffeeCup size="28" />} />
        <SideBarIcon icon={<CiBatteryFull size="28" />} />
        <SideBarIcon icon={<CiWheat size="28" />} />
        <SideBarIcon icon={<GoMarkGithub size="28" />} />
        <SideBarIcon icon={<SwitchTheme />} />
    </div>
    );
}

const SwitchTheme = () => {
    const [darkTheme, setDarkTheme] = useDarkMode()
    const handleMode = () => setDarkTheme(!darkTheme)

    return ( 
        <span onClick={handleMode}>
        {darkTheme ? (
                <IoFlashlightOutline size='28' /> 
            ) : (
                <IoFlashlight size='28' />
            )}
        </span>
    );
}

const SideBarIcon = ({ icon, text = 'tooltip 🚨' } : { icon: React.ReactElement<IconBaseProps>, text?: string }) => {
    return (
    <div className='sidebar-icon group'>
        {icon}

        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
    )
    
}


export default Sidebar;