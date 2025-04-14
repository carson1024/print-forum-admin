import { FaArrowDown } from "react-icons/fa";
import Modal from ".."
import { ImArrowDown } from "react-icons/im";
import User from 'assets/img/sample/user.png';
import IconUpload from 'assets/img/icons/upload.svg';
import IconTwitter from 'assets/img/icons/twitter.svg';
import IconTelegram from 'assets/img/icons/telegram.svg';
import IconSolana from 'assets/img/icons/solana.svg';
import { IoCheckmark } from "react-icons/io5";
import React, { useEffect, useState,useRef } from "react";

const EditLinkModal = ({
    isOpen,
    profile,
    onChange,
    onOk,
    onCancel,
}: Readonly<{
    onChange: (id:string,xaddress:string,taddress:string,saddress:string) => void
    profile:any,
    isOpen: boolean,
    onOk: () => void
    onCancel: () => void
}>) => {
    const [xaddress, setXaddress] = useState('');  
    const [taddress, setTaddress] = useState(''); 
    const [saddress, setSaddress] = useState(''); 
    const handlechange = () => {
        onChange(profile.id, xaddress,taddress, saddress);
        onOk();
      }
  

  return <Modal isOpen={isOpen} onClose={onCancel} extraClass="w-[540px]">
    <div className="space-y-6">
      <h1 className="text-lg font-bold text-white">UsernameLong’s links</h1>
      <div className="border border-gray-100"></div>
      <div className=''>
        {/* Social Links */}
        <div className="space-y-5">
          <div className="flex items-center bg-gray-50 rounded-full px-4 py-2.5 gap-2">
            <img src={IconTwitter} className="w-5 h-5" />
            <input
              type="text"
              defaultValue={profile.xaddress}
              placeholder="example@email.com"
              className="bg-transparent flex-grow outline-none text-white placeholder-gray-500 text-sm"
              onChange={(e) => setXaddress(e.target.value)}
              onClick={(e) => setXaddress('')}
            />
          </div>

          <div className="flex items-center bg-gray-50 rounded-full px-4 py-2.5 gap-2">
            <img src={IconTelegram} className="w-[28px] h-[28px]" />
            <input
              type="text"
              defaultValue={profile.taddress}
              placeholder="t.com/username"
              className="bg-transparent flex-grow outline-none text-white placeholder-gray-500 text-sm"
              onChange={(e) => setTaddress(e.target.value)}
              onClick={(e) => setTaddress('')}
            />
          </div>

          <div className="flex items-center bg-gray-50 rounded-full px-4 py-2.5 gap-2">
            <img src={IconSolana} className="w-6 h-6" />
            <input
              type="text"
              defaultValue={profile.saddress}
              placeholder="address"
              className="bg-transparent flex-grow outline-none text-white placeholder-gray-500 text-sm"
              onChange={(e) => setSaddress(e.target.value)}
              onClick={(e) => setSaddress('')}
            />
          </div>
        </div>
      </div>
      {/* Save Button */}
      <button className="w-full btn py-3" onClick={() => handlechange()}>Save</button>
    </div>
  </Modal>
}

export default EditLinkModal;