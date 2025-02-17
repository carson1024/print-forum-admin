import IconTwitter from 'assets/img/icons/twitter.svg';
import IconTelegram from 'assets/img/icons/telegram.svg';
import IconSolana from 'assets/img/icons/solana.svg';
import { AiFillCaretUp } from 'react-icons/ai';
import { MdEdit } from 'react-icons/md';
import { useState } from 'react';
import EditDescriptionModal from 'components/modal/profile/EditDescriptionModal';
import EditLinkModal from 'components/modal/profile/EditLinkModal';
import EditRankModal from 'components/modal/profile/EditRankModal';
import EditAchievementsModal from 'components/modal/profile/EditAchievementsModal';
import AchievementsModal from 'components/modal/profile/AchievementsModal';

const GeneralTab = () => {
  const [isEditDescriptionModalOpen, setIsEditDescriptionModalOpen] = useState(false);
  const [isEditLinkModalOpen, setIsEditLinkModalOpen] = useState(false);
  const [isEditRankModalOpen, setIsEditRankModalOpen] = useState(false);
  const [isEditAchievementsModalOpen, setIsEditAchievementsModalOpen] = useState(false);

  return (<>
    <div className="overflow-auto h-full p-6 text-white">
      <div className='grid grid-cols-2 gap-5'>
        <div className='space-y-4'>
          <div className="flex items-center gap-3">
            <div className="bg-gray-50 rounded-full px-3 py-1.5 flex items-center gap-1">
              <span className="text-xs text-gray-600">Followers</span>
              <span className="text-xs text-primary">12</span>
            </div>
            <div className="bg-gray-50 rounded-full px-3 py-1.5 flex items-center gap-1">
              <span className="text-xs text-gray-600">Win rate</span>
              <span className="text-xs text-green-600">56%</span>
            </div>
            <div className="bg-gray-50 rounded-full px-3 py-1.5 flex items-center gap-1">
              <span className="text-xs text-gray-600">Calls</span>
              <span className="text-xs text-white">125</span>
            </div>
            <div className="bg-gray-50 rounded-full px-3 py-1.5 flex items-center gap-1">
              <span className="text-xs text-gray-600">Account age</span>
              <span className="text-xs text-white">2 years</span>
            </div>
          </div>
          <div className='rounded-[20px] p-6 flex items-center justify-between bg-gray-50'>
            <div className="space-y-2">
              <div className="text-md font-semibold"><span className="text-xl font-bold">2.1</span> SOL</div>
              <p className="text-sm text-white/60">Current Balance</p>
            </div>
            <div className='flex gap-5'>
              <div className="space-y-0.5">
                <p className="text-white/60 text-sm">Copying</p>
                <div className="text-white font-semibold flex gap-2">
                  <span>0.2 SOL</span>
                  <div className="bg-green-600 px-1 py-0.5 text-xs flex items-center rounded-full text-white">
                    <span className="text-sm"><AiFillCaretUp /></span>
                    <span>12%</span>
                  </div>
                </div>
              </div>
              <div className="space-y-0.5">
                <p className="text-white/60 text-sm">Unallocated</p>
                <div className="text-white font-semibold flex gap-2">
                  <span>2 SOL</span>
                </div>
              </div>
            </div>
          </div>
          <div className='rounded-[20px] p-6 space-y-4 bg-gray-50'>
            <div className='flex justify-between'>
              <div className='text-md font-semibold'>Description</div>
              <button className="btn px-3 py-1.5 text-sm btn-outline" onClick={() => setIsEditDescriptionModalOpen(true)}>
                <MdEdit className="mr-1" size={16} /> Edit
              </button>
            </div>
            <div className='text-gray-600 text-xs leading-snug'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut consectetur ligula. Mauris congue imperdiet ante non lobortis. In ante tellus, ultrices a consectetur a, euismod vel leo. Fusce dictum pellentesque orci ac malesuada.
            </div>
          </div>
          <div className='rounded-[20px] p-6 space-y-6 bg-gray-50'>
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
        <div className='space-y-4'>
          <div className="p-6 rounded-[20px] bg-gray-50 space-y-4">
            <div className='flex justify-between'>
              <div className='text-md font-semibold'>Rank progression</div>
              <button className="btn px-3 py-1.5 text-sm btn-outline" onClick={() => setIsEditRankModalOpen(true)}>
                <MdEdit className="mr-1" size={16} /> Edit
              </button>
            </div>
            <div className="space-y-2 text-white">
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <span className="badge-rank-3"></span>
                  <span className="text-sm text-white">Rank 3</span>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="circle-item bg-gray-50 w-8 h-8 text-xs font-bold">IV</span>
                  <span className="text-sm text-gray-600">Rank 4</span>
                </div>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div className="bg-red-300 h-full" style={{ width: '25%' }}></div>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-white">165 XP</span>
                <span className="text-gray-600 text-sm">1000 XP</span>
              </div>
            </div>
          </div>
          <div className="rounded-[20px] bg-gray-50 text-white p-6 space-y-4">
            <div className='flex justify-between'>
              <div className='text-md font-semibold'>Achievements</div>
              <button className="btn px-3 py-1.5 text-sm btn-outline" onClick={() => setIsEditAchievementsModalOpen(true)}>
                <MdEdit className="mr-1" size={16} /> Edit
              </button>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-wrap gap-2">
                <span className="badge-money-50k"></span>
                <span className="badge-register-1m"></span>
                <span className="badge-social-twitter"></span>
                <span className="badge-social-telegram"></span>
                <span className="badge-social-solana"></span>
                <span className="badge-call-10X"></span>
                <span className="badge-user-50"></span>
                <span className="badge-other-bughunter"></span>
                <span className="badge-money-50k"></span>
                <span className="badge-register-1m"></span>
                <span className="badge-social-twitter"></span>
                <span className="badge-social-telegram"></span>
                <span className="badge-social-solana"></span>
                <span className="badge-call-10X"></span>
                <span className="badge-user-50"></span>
                <span className="badge-other-bughunter"></span>
                <span className="badge-money-50k"></span>
                <span className="badge-register-1m"></span>
                <span className="badge-call-10X"></span>
                <span className="badge-user-50"></span>
                <button className="w-8 h-8 text-xs font-bold bg-white circle-item text-black">+5</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <EditDescriptionModal isOpen={isEditDescriptionModalOpen} onOk={() => setIsEditDescriptionModalOpen(false)} onCancel={() => setIsEditDescriptionModalOpen(false)} />
    <EditLinkModal isOpen={isEditLinkModalOpen} onOk={() => setIsEditLinkModalOpen(false)} onCancel={() => setIsEditLinkModalOpen(false)} />
    <EditRankModal isOpen={isEditRankModalOpen} onAdd={() => setIsEditRankModalOpen(false)} onRemove={() => setIsEditRankModalOpen(false)} onCancel={() => setIsEditRankModalOpen(false)} />
    <AchievementsModal isOpen={isEditAchievementsModalOpen} onCancel={() => setIsEditAchievementsModalOpen(false)} />
  </>);
}

export default GeneralTab;