import { FaArrowDown } from "react-icons/fa";
import Modal from "."
import { ImArrowDown } from "react-icons/im";
import User from 'assets/img/sample/user.png';
import IconUpload from 'assets/img/icons/upload.svg';
import IconTwitter from 'assets/img/icons/twitter.svg';
import IconTelegram from 'assets/img/icons/telegram.svg';
import IconSolana from 'assets/img/icons/solana.svg';
import { IoCheckmark } from "react-icons/io5";
import IconUser from 'assets/img/icons/user.svg';
import { formatShortAddress, formatTimestamp } from "../../utils/style";
import React, { useEffect, useState,useRef } from "react";
const EditDiscussionModal = ({
    comment,
    id,
    user,
    isOpen,
    onOk,
    onCancel,
    onChange
}: Readonly<{
    user:any,
    id:string,
    comment:string,
    isOpen: boolean,
    onOk: () => void
    onCancel: () => void
    onChange: (id:string,news:string) => void
}>) => {
  const [newscomment, setNewscomment] = useState('');  
  const handlechange = () => {
    if (newscomment !== '') { onChange(id, newscomment); }
    onOk();
  }
  
  return <Modal isOpen={isOpen} onClose={onCancel} extraClass="w-[540px]">
    <div className="space-y-4 sm:space-y-6">
      <h1 className="text-lg font-bold text-white">Comment edit</h1>
      <div className="border border-gray-100"></div>
      <div className="flex gap-3 items-center">
        <div className="w-8 h-8 bg-black circle-item">
          {user.avatar == null ? <img src={IconUser} className="w-2.5 h-2.5" /> :
             <img src={user.avatar} className="w-8 h-8 sm:w-[30px] sm:h-[30px] bg-black circle-item" />
          }
        </div>
        <span className="font-bold">{user.name}</span>
        <span className="text-sm text-gray-600">{formatTimestamp(user.created_at)} ago</span>
      </div>
      <textarea
        placeholder="Write a short bio..."
        defaultValue={comment}
        onChange={(e) => setNewscomment(e.target.value)}
        onClick={(e) => setNewscomment('')}
        className="bg-gray-50 rounded-[20px] flex-grow outline-none placeholder-gray-500 resize-none p-3 sm:p-5 w-full text-gray-600"
        rows={6}
      ></textarea>
      {/* Save Button */}
      <button className="w-full btn py-3" onClick={handlechange}>Save</button>
    </div>
  </Modal>
}

export default EditDiscussionModal;