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

const EditDescriptionModal = ({
    profile,
    isOpen,
    onOk,
    onCancel,
    onChange,
}: Readonly<{
    onChange: (id:string,news:string) => void
    profile:any,
    isOpen: boolean,
    onOk: () => void
    onCancel: () => void
}>) => {
  const [newscomment, setNewscomment] = useState('');  
  const handlechange = () => {
      if (newscomment !== '') { onChange(profile.id, newscomment); }
      onOk();
    }
  

  return <Modal isOpen={isOpen} onClose={onCancel} extraClass="w-[540px]">
    <div className="space-y-6">
      <h1 className="text-md sm:text-lg font-bold text-white">{profile.name }’s description</h1>
      <div className="border border-gray-100"></div>
      <textarea
        placeholder="Write a short bio..."
        defaultValue={profile.bio}
        className="bg-gray-50 rounded-[20px] flex-grow outline-none placeholder-gray-500 resize-none p-3 sm:p-5 w-full text-gray-600"
        rows={10}
        onChange={(e) => setNewscomment(e.target.value)}
        onClick={(e) => setNewscomment('')}
      ></textarea>
      {/* Save Button */}
      <button className="w-full btn py-3" onClick={() => handlechange()}>Save</button>
    </div>
  </Modal>
}

export default EditDescriptionModal;