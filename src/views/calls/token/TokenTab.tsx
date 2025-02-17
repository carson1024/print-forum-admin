import IconTwitter from 'assets/img/icons/twitter.svg';
import IconTelegram from 'assets/img/icons/telegram.svg';
import IconSolana from 'assets/img/icons/solana.svg';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { MdEdit } from 'react-icons/md';
import { useState } from 'react';
import EditDescriptionModal from 'components/modal/profile/EditDescriptionModal';
import EditLinkModal from 'components/modal/profile/EditLinkModal';
import EditRankModal from 'components/modal/profile/EditRankModal';
import EditAchievementsModal from 'components/modal/profile/EditAchievementsModal';
import AchievementsModal from 'components/modal/profile/AchievementsModal';

const TokenTab = () => {
  const [isEditLinkModalOpen, setIsEditLinkModalOpen] = useState(false);

  return (<>
    <div className="overflow-auto h-full p-6 text-white">
      <div className='grid grid-cols-2 gap-5'>
        <div className='rounded-[22px] bg-gray-50 p-6 space-y-4'>
          <div className='text-md font-semibold'>General information</div>
          <div className="flex gap-3 flex-wrap">
            <div className="bg-gray-100 px-2 py-1.5 rounded-full flex text-xs gap-1">
              Marketcap 475.5k to 880.4k
            </div>
            <div className="bg-green-600 px-2 py-1.5 text-xs flex gap-0.5 items-center rounded-full text-black">
              <AiFillCaretUp />
              <span>519%</span>
            </div>
          </div>
          <div className="flex gap-2">
            <span>Callers</span> 
            <span className="bg-gray-100 px-2 py-1.5 rounded-full text-white text-xs">72</span>
          </div>
          <div className="flex gap-2">
            <span>Top 10 holders</span> 
            <span className="bg-gray-100 px-2 py-1.5 rounded-full text-white text-xs">22.4% ($20m)</span>
          </div>
          <div className="flex gap-2 flex-wrap">
            <span>Top 3 holders</span>
            <div className="flex gap-2"> 
              {Array(3).fill(0).map((holder, index) => (
                <span key={index} className="bg-gray-100 px-2 py-1.5 rounded-full text-white text-xs">3.3% ($1.3m)</span>
              ))}
            </div>
          </div>
          <div className="flex gap-1 items-center">
            <div className="circle-item w-6 h-6 bg-gray-100 text-green-600 text-sm pb-[2px]"><AiFillCaretUp /></div>
            <div className="circle-item w-6 h-6 bg-gray-100 text-red-400 text-sm pt-[2px]"><AiFillCaretDown /></div>
            <span className="text-xs text-gray-600">55%</span>
          </div>
        </div>
        <div className='rounded-[22px] p-6 space-y-6 bg-gray-50'>
          <div className='flex justify-between'>
            <div className='text-md font-semibold'>Links</div>
            <button className="btn px-3 py-1.5 text-sm btn-outline" onClick={() => setIsEditLinkModalOpen(true)}>
              <MdEdit className="mr-1" size={16} /> Edit
            </button>
          </div>
          <div className=''>
            {/* Social Links */}
            <div className="space-y-5">
              <div className="flex items-center bg-gray-50 rounded-full px-4 py-2.5 gap-2">
                <img src={IconTwitter} className="w-5 h-5" />
                <input
                  type="text"
                  placeholder="example@email.com"
                  className="bg-transparent flex-grow outline-none text-white placeholder-gray-500 text-sm"
                  disabled
                />
              </div>

              <div className="flex items-center bg-gray-50 rounded-full px-4 py-2.5 gap-2">
                <img src={IconTelegram} className="w-[28px] h-[28px]" />
                <input
                  type="text"
                  placeholder="t.com/username"
                  className="bg-transparent flex-grow outline-none text-white placeholder-gray-500 text-sm"
                  disabled
                />
              </div>

              <div className="flex items-center bg-gray-50 rounded-full px-4 py-2.5 gap-2">
                <img src={IconSolana} className="w-6 h-6" />
                <input
                  type="text"
                  placeholder="address"
                  className="bg-transparent flex-grow outline-none text-white placeholder-gray-500 text-sm"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <EditLinkModal isOpen={isEditLinkModalOpen} onOk={() => setIsEditLinkModalOpen(false)} onCancel={() => setIsEditLinkModalOpen(false)} />
  </>);
}

export default TokenTab;