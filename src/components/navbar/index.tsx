import Logo from 'assets/img/logo.png';
import IconTwitter from 'assets/img/icons/twitter.svg';
import IconTelegram from 'assets/img/icons/telegram.svg';
import IconSolana from 'assets/img/icons/solana.svg';
import RestrictedModal from 'components/modal/RestrictedModal';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { GrAnnounce } from "react-icons/gr";
import { FaUser } from 'react-icons/fa';

const Navbar = (props: {
  currentRoute: string;
  secondary?: boolean | string;
}) => {
  const { currentRoute } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="card rounded space-y-6 w-[327px] px-4 py-8 flex flex-col">
      <div className='ml-5'>
        <img src={Logo} />
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <Link to="/admin/dashboard" className={`nav-item ${currentRoute == 'dashboard' ? 'active' : ''}`}><MdDashboard className="mr-2" size={24}/> Dashboard</Link>
        <Link to="/admin/users" className={`nav-item ${currentRoute == 'users' ? 'active' : ''}`}><FaUser className="mr-2" size={20} /> Users</Link>
        <Link to="/admin/calls" className={`nav-item ${currentRoute == 'calls' ? 'active' : ''}`}><HiMiniArrowsUpDown className="mr-2" size={24} /> Calls</Link>
        <Link to="/admin/announcements" className={`nav-item ${currentRoute == 'announcements' ? 'active' : ''}`}><GrAnnounce className="mr-2" size={24} /> Announcements</Link>
      </div>
      <Link to={"/login"} className='ml-5 text-gray-600'>Log out</Link>
    </div>
  )
}

export default Navbar;