import { MdEmail, MdLock } from "react-icons/md";
import Modal from "."
import { FaXTwitter } from "react-icons/fa6";
import { IoMdEye, IoMdLock } from "react-icons/io";
import Logo from 'assets/img/logo.png';
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return <div className="flex items-center h-screen">
    <div className={`bg-dark1 text-white rounded shadow-lg p-8 sm:p-[50px] relative w-[92%] sm:w-[540px] space-y-4 sm:space-y-6 m-auto`}>
      {/* Modal Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-base sm:text-lg font-bold">Log in</h2>
        <img src={Logo} className="h-9" />
      </div>
      {/* Divider */}
      <div className="border-t border-gray-700"></div>
      
      <div className="space-y-2">
        {/* Email Login */}
        <p className="text-sm sm:text-base font-semibold">Email</p>
        <div className="input-field w-full">
          <MdEmail className="text-gray-600 ml-1 text-base sm:text-lg" />
          <input 
            type="email" 
            placeholder="example@email.com" 
            className="bg-transparent flex-grow outline-none text-white placeholder-gray-500 text-sm sm:text-base"
          />
        </div>
      </div>

      <div className="space-y-2">
        {/* Password */}
        <p className="font-semibold mb-2 text-sm sm:text-base">Password</p>
        <div className="input-field w-full">
          <MdLock className="text-gray-600 ml-1 text-base sm:text-lg" />
          <input 
            type="password" 
            placeholder="" 
            className="bg-transparent flex-grow outline-none text-white placeholder-gray-500 text-sm sm:text-base"
          />
          <button>
            <IoEyeOutline className="text-gray-600 ml-1 text-base sm:text-lg" />
          </button>
        </div>
      </div>

      {/* Log in */}
      <Link to="/admin" className="w-full btn btn-base sm:btn-lg sm:text-base py-3">
        Log in
      </Link>
    </div>
  </div>
}

export default LoginPage;