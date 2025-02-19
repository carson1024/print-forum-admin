import IconTwitter from 'assets/img/icons/twitter.svg';
import IconTelegram from 'assets/img/icons/telegram.svg';
import IconSolana from 'assets/img/icons/solana.svg';
import { FaChevronDown, FaChevronRight, FaChevronUp } from "react-icons/fa";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { IoMdCopy } from "react-icons/io";
import Token from 'assets/img/sample/token.png';
import IconCopy from 'assets/img/icons/copy.svg';
import { Link } from "react-router-dom";
import IconUser from 'assets/img/icons/user.svg';
import IconSend from 'assets/img/icons/send.svg';
import { MdEdit } from 'react-icons/md';
import { useState } from 'react';
import EditDiscussionModal from 'components/modal/EditDiscussionModal';

const DiscussionTab = () => {
  const [isEditDiscussionModalOpen, setEditDiscussionModalOpen] = useState(false);

  return (<>
    <div className="p-4 sm:p-6 h-full flex flex-col space-y-3 overflow-hidden">
      <div className="flex-grow overflow-auto">
        <div className='flex flex-col'>
          {
            Array(10).fill(0).map(() => <div className="flex gap-3 sm:gap-4 border-b-[1px] border-gray-100 py-3">
              <div>
                <div className="w-9 h-9 sm:w-[50px] sm:h-[50px] bg-black circle-item">
                  <img src={IconUser} className="w-2.5 h-2.5" />
                </div>
              </div>
              <div className="space-y-1 flex-grow">
                <div className="flex justify-between items-center">
                  <div className="flex gap-1 items-center">
                    <div className="circle-item w-7 h-7 bg-red-300 text-black text-sm font-bold">V</div>
                    <span className="font-bold text-sm text-gray-600">UsernameLong</span>
                    <span className="text-xs text-gray-600">55%</span>
                    <span className="text-sm text-gray-600">3m</span>
                  </div>
                  <button className="btn btn-edit" onClick={() => setEditDiscussionModalOpen(true)}>
                    <MdEdit className="mr-1" size={16} /> <span className='hidden sm:block'>Edit</span>
                  </button>
                </div>
                <p className='text-sm sm:text-base !leading-[135%]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>)
          }
        </div>
      </div>
      <div className="relative rounded-full bg-gray-100 px-12 py-2 flex items-center">
        <div className="absolute left-1 flex items-center">
          <div className="relative w-8 h-8 bg-black circle-item">
            <img src={IconUser} className="w-2.5 h-2.5" />
          </div>
        </div>
        <input type="text" className="w-full bg-transparent outline-none text-white" placeholder="Add a comment..." />
        <div className="absolute right-3 flex items-center">
          <button onClick={() => setEditDiscussionModalOpen(true)}>
            <img src={IconSend} className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
    <EditDiscussionModal isOpen={isEditDiscussionModalOpen} onCancel={() => setEditDiscussionModalOpen(false)} onOk={() => setEditDiscussionModalOpen(false)} />
  </>);
}

export default DiscussionTab;