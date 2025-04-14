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
import { checkCall, formatNumber, formatShortAddress, formatTimestamp } from "../../../utils/style";
import { supabase } from "lib/supabase";
const TokenTab = ({
  callers,
  top10HolderInfo,
  top3Holders,
  token,
  ratioVote,
  profile
}: {
  ratioVote:any,
  callers: any,
  top3Holders:any,
  top10HolderInfo:any,
  token: any,
  profile:any
}) => {
  const [isEditLinkModalOpen, setIsEditLinkModalOpen] = useState(false);
  const savelink = async (id: string, xaddress: string, taddress: string, saddress: string) => {
  const updates: { [key: string]: string } = {};
  
    if (xaddress !== '') { updates.xaddress = xaddress; profile.xaddress = xaddress;   (document.getElementById("x") as HTMLInputElement).value = xaddress;}
  if (taddress !== '') { updates.taddress = taddress; profile.taddress = taddress;  (document.getElementById("t") as HTMLInputElement).value = taddress; }
  if (saddress !== '') { updates.saddress = saddress; profile.saddress = saddress;   (document.getElementById("s") as HTMLInputElement).value = saddress;}

  if (Object.keys(updates).length === 0) return; // Nothing to update

  const { error: updateError } = await supabase
    .from("users")
    .update(updates)
    .eq("id", id);

  if (updateError) {
    console.error("Update failed:", updateError);
  } else {
    // Object.assign(myprofile, updates); // Update local profile
    }
  };


  return (<>
    <div className="overflow-auto h-full p-4 sm:p-6 text-white">
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div className='rounded-[22px] bg-gray-50 p-6 space-y-4'>
          <div className='text-md font-semibold'>General information</div>
          <div className="flex gap-3 flex-wrap">
            <div className="bg-gray-100 px-2 py-1.5 rounded-full flex text-xs gap-1">
              Marketcap {formatNumber(token.init_market_cap)} to {formatNumber(token.changedCap)}
            </div>
            <div className="bg-green-600 px-2 py-1.5 text-xs flex gap-0.5 items-center rounded-full text-black">
              <AiFillCaretUp />
              <span>{token.percentage}%</span>
            </div>
          </div>
          <div className="flex gap-2">
            <span>Callers</span> 
            <span className="bg-gray-100 px-2 py-1.5 rounded-full text-white text-xs">{callers}</span>
          </div>
          <div className="flex gap-2">
            <span>Top 10 holders</span> 
            <span className="bg-gray-100 px-2 py-1.5 rounded-full text-white text-xs">{top10HolderInfo.pct.toFixed(2)}% (${formatNumber(top10HolderInfo.uiAmount*token.changedPrice)})</span>
          </div>
          <div className="flex gap-2 flex-wrap">
            <span>Top 3 holders</span>
            <div className="flex gap-0.5 sm:gap-2"> 
              {top3Holders.map((holder: { pct: number; uiAmount: number }) => (
                <span className="bg-gray-100 px-2 py-1.5 rounded-full text-white text-xs">{holder.pct.toFixed(2)}% (${formatNumber(holder.uiAmount*token.changedPrice)})</span>
              ))}
            </div>
          </div>
          <div className="flex gap-1 items-center">
            <div className="circle-item w-6 h-6 bg-gray-100 text-green-600 text-sm pb-[2px]"><AiFillCaretUp /></div>
            <div className="circle-item w-6 h-6 bg-gray-100 text-red-400 text-sm pt-[2px]"><AiFillCaretDown /></div>
            <span className="text-xs text-gray-600">{ratioVote}%</span>
          </div>
        </div>
        <div className='rounded-[22px] p-6 space-y-6 bg-gray-50'>
          <div className='flex justify-between'>
            <div className='text-md font-semibold'>Links</div>
            <button className="btn btn-edit" onClick={() => setIsEditLinkModalOpen(true)}>
              <MdEdit className="mr-1" size={16} /> Edit
            </button>
          </div>
          <div className=''>
            {/* Social Links */}
            <div className="space-y-5">
              <div className="flex items-center bg-gray-50 rounded-full px-4 py-2.5 gap-2">
                <img src={IconTwitter} className="w-5 h-5" />
                <input
                  id="x"
                  type="text"
                  placeholder="example@email.com"
                  defaultValue={profile.xaddress}
                  className="bg-transparent flex-grow outline-none text-white placeholder-gray-500 text-sm"
                  disabled
                />
              </div>

              <div className="flex items-center bg-gray-50 rounded-full px-4 py-2.5 gap-2">
                <img src={IconTelegram} className="w-[28px] h-[28px]" />
                <input
                  id="t"
                  type="text"
                  placeholder="t.com/username"
                  defaultValue={profile.taddress}
                  className="bg-transparent flex-grow outline-none text-white placeholder-gray-500 text-sm"
                  disabled
                />
              </div>

              <div className="flex items-center bg-gray-50 rounded-full px-4 py-2.5 gap-2">
                <img src={IconSolana} className="w-6 h-6" />
                <input
                  id="s"
                  type="text"
                  placeholder="address"
                  defaultValue={profile.saddress}
                  className="bg-transparent flex-grow outline-none text-white placeholder-gray-500 text-sm"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
       <EditLinkModal onChange={(id, xaddress,taddress,saddress)=>savelink(id, xaddress,taddress,saddress) } profile={profile } isOpen={isEditLinkModalOpen} onOk={() => setIsEditLinkModalOpen(false)} onCancel={() => setIsEditLinkModalOpen(false)} />

    {/* <EditLinkModal onChange={(id, xaddress,taddress,saddress)=>savelink(id, xaddress,taddress,saddress) } profile={myprofile } isOpen={isEditLinkModalOpen} onOk={() => setIsEditLinkModalOpen(false)} onCancel={() => setIsEditLinkModalOpen(false)} /> */}
  </>);
}

export default TokenTab;