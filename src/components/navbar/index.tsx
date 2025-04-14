import Logo from 'assets/img/logo.png';
import IconTwitter from 'assets/img/icons/twitter.svg';
import IconTelegram from 'assets/img/icons/telegram.svg';
import IconSolana from 'assets/img/icons/solana.svg';
import RestrictedModal from 'components/modal/RestrictedModal';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdClose, MdDashboard } from "react-icons/md";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { GrAnnounce } from "react-icons/gr";
import { FaTimes, FaUser } from 'react-icons/fa';
import { useSidebar } from './provider';
const handleLogout = () => { 
  window.location.href = "/login";
  sessionStorage.setItem("accessToken", "0");
}
const Navbar = (props: {
  currentRoute: string;
  secondary?: boolean | string;
}) => {
  const { currentRoute } = props;
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <nav className={`card rounded space-y-6 min-w-[100%] sm:min-w-[327px] px-4 py-8 flex flex-col absolute z-[1] xl:relative bg-dark1 xl:bg-gray-50 h-full ease-in-out duration-300 ${isSidebarOpen ? 'left-0' : 'left-[-150%] xl:left-0'}`}>
      <button className="absolute right-4 top-8 text-gray-400 text-md block xl:hidden" onClick={toggleSidebar}><MdClose/></button>
      <div className='ml-5'>
        <img src={Logo} className='h-9' />
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <Link to="/admin/dashboard" className={`nav-item ${currentRoute == 'dashboard' ? 'active' : ''}`} onClick={toggleSidebar}><MdDashboard className="mr-2" size={24}/> Dashboard</Link>
        <Link to="/admin/users" className={`nav-item ${currentRoute == 'users' ? 'active' : ''}`} onClick={toggleSidebar}><FaUser className="mr-2" size={20} /> Users</Link>
        <Link to="/admin/calls" className={`nav-item ${currentRoute == 'calls' ? 'active' : ''}`} onClick={toggleSidebar}><HiMiniArrowsUpDown className="mr-2" size={24} /> Calls</Link>
        <Link to="/admin/announcements" className={`nav-item ${currentRoute == 'announcements' ? 'active' : ''}`} onClick={toggleSidebar}><GrAnnounce className="mr-2" size={24} /> Announcements</Link>
      </div>
      <button className='ml-5 text-gray-600' onClick={handleLogout}>Log out</button>
    </nav>
  )
}

export default Navbar;