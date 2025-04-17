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
import { formatTimestamp } from "../../../../utils/style";
import { supabase } from "lib/supabase";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

type Props = {
  myprofile: {
    name: string;
    email: string;
    avatar: string;
    xp: string;
    rank: string;
    winrate: string;
    callcount: string;
    achievements: string;
    created_at: string;
    taddress: string;
    xaddress: string;
    saddress: string;
    bio: string;
  };
};

const GeneralTab = ({ myprofile }: Props) => {
  const [isEditDescriptionModalOpen, setIsEditDescriptionModalOpen] = useState(false);
  const [isEditLinkModalOpen, setIsEditLinkModalOpen] = useState(false);
  const [isEditRankModalOpen, setIsEditRankModalOpen] = useState(false);
  const [isEditAchievementsModalOpen, setIsEditAchievementsModalOpen] = useState(false);

  const savedescription = async(id:string, news:string) => {
      const { error: updateError } = await supabase
            .from("users")
            .update({ bio:news })
            .eq("id", id);
          if (updateError) {
            console.error("Update failed:", updateError);
          } else {
            myprofile.bio = news;
          }
  }

  const savelink = async (id: string, xaddress: string, taddress: string, saddress: string) => {
  const updates: { [key: string]: string } = {};
  
    if (xaddress !== '') { updates.xaddress = xaddress; myprofile.xaddress = xaddress;   (document.getElementById("x") as HTMLInputElement).value = xaddress;}
   if (taddress !== '') { updates.taddress = taddress; myprofile.taddress = taddress;  (document.getElementById("t") as HTMLInputElement).value = taddress; }
   if (saddress !== '') { updates.saddress = saddress; myprofile.saddress = saddress;   (document.getElementById("s") as HTMLInputElement).value = saddress;}

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
  const handlechangerank = async (id:string,xp: string, rank: string) => {
    const { error: updateError } = await supabase
    .from("users")
    .update({xp:xp,rank:rank})
    .eq("id", id);

  if (updateError) {
    console.error("Update failed:", updateError);
  }
    setIsEditRankModalOpen(false)
  }

  const handleupdateachieve = async (achievements: any) => {
     const achievementarray = [];
    if (achievements.includes("other-og")) achievementarray.push("OG")
    if (achievements.includes("rank-1")) achievementarray.push("1x")
    if (achievements.includes("rank-2")) achievementarray.push("2x")
    if (achievements.includes("rank-3")) achievementarray.push("3x")
    if (achievements.includes("rank-4")) achievementarray.push("4x")
    if (achievements.includes("rank-5")) achievementarray.push("5x")
    if (achievements.includes("rank-6")) achievementarray.push("6x")
    if (achievements.includes("rank-7")) achievementarray.push("7x")
    if (achievements.includes("rank-8")) achievementarray.push("8x")
    if (achievements.includes("rank-9")) achievementarray.push("9x")
    if (achievements.includes("rank-10")) achievementarray.push("10x")
    if (achievements.includes("call-5X")) achievementarray.push("c5X")
    if (achievements.includes("call-10X")) achievementarray.push("c10X")
    if (achievements.includes("call-50X")) achievementarray.push("c50X")
    if (achievements.includes("call-100X")) achievementarray.push("c100X")
    if (achievements.includes("user-10")) achievementarray.push("u10")
    if (achievements.includes("user-50")) achievementarray.push("u50")
    if (achievements.includes("user-100")) achievementarray.push("u100")
    if (achievements.includes("money-50k")) achievementarray.push("m50k")
    if (achievements.includes("money-100k")) achievementarray.push("m100k")
    if (achievements.includes("money-500k")) achievementarray.push("m500k")
    if (achievements.includes("money-1m")) achievementarray.push("m1m")
    if (achievements.includes("register-1m")) achievementarray.push("reg1m")
    if (achievements.includes("register-3m")) achievementarray.push("reg3m")
    if (achievements.includes("register-1y")) achievementarray.push("reg1y")
    if (achievements.includes("social-telegram")) achievementarray.push("t")
    if (achievements.includes("social-solana")) achievementarray.push("s")
    if (achievements.includes("social-twitter")) achievementarray.push("x")
    if (achievements.includes("other-influencer")) achievementarray.push("influ")
    if (achievements.includes("other-alpha")) achievementarray.push("alpha")
    if (achievements.includes("other-neverskip")) achievementarray.push("never")
    if (achievements.includes("other-partner")) achievementarray.push("partner")
    if (achievements.includes("other-bughunter")) achievementarray.push("bug")
    const { error: updateError } = await supabase
    .from("users")
    .update({achievements:achievementarray})
    .eq("name", myprofile.name);

  if (updateError) {
    console.error("Update failed:", updateError);
    }
    setIsEditAchievementsModalOpen(false)
  }


  return (<>
    <div className="overflow-auto h-full p-4 sm:p-6 text-white">
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
        <div className='space-y-4'>
          <div className="flex items-center gap-3 flex-wrap">
            <div className='flex items-center gap-3'>
              <div className="bg-gray-50 rounded-full px-3 py-1.5 flex items-center gap-1">
                <span className="text-xs text-gray-600">Followers</span>
                <span className="text-xs text-primary">12</span>
              </div>
              <div className="bg-gray-50 rounded-full px-3 py-1.5 flex items-center gap-1">
                <span className="text-xs text-gray-600">Win rate</span>
                <span className="text-xs text-green-600">{myprofile.winrate}%</span>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <div className="bg-gray-50 rounded-full px-3 py-1.5 flex items-center gap-1">
                <span className="text-xs text-gray-600">Calls</span>
                <span className="text-xs text-white">{myprofile.callcount}</span>
              </div>
              <div className="bg-gray-50 rounded-full px-3 py-1.5 flex items-center gap-1">
                <span className="text-xs text-gray-600">Account age</span>
                <span className="text-xs text-white">{formatTimestamp(myprofile.created_at) }</span>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4'>
            {/* <div className='rounded-[20px] p-6 flex items-center justify-between bg-gray-50 flex-wrap gap-4'>
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
            </div> */}
            <div className='rounded-[20px] p-6 space-y-4 bg-gray-50'>
              <div className='flex justify-between'>
                <div className='text-md font-semibold'>Description</div>
                <button className="btn btn-edit" onClick={() => setIsEditDescriptionModalOpen(true)}>
                  <MdEdit className="mr-1" size={16} /> Edit
                </button>
              </div>
              <div className='text-gray-600 text-xs !leading-[135%]'>
                {myprofile.bio}
              </div>
            </div>
          
          </div>
          <div className='rounded-[20px] p-6 space-y-6 bg-gray-50'>
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
                    defaultValue={myprofile.xaddress }
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
                    defaultValue={myprofile.taddress }
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
                    defaultValue={myprofile.saddress }
                    className="bg-transparent flex-grow outline-none text-white placeholder-gray-500 text-sm"
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4'>
          <div className="p-6 rounded-[20px] bg-gray-50 space-y-4">
            <div className='flex justify-between'>
              <div className='text-md font-semibold'>Rank progression</div>
              <button className="btn btn-edit" onClick={() => setIsEditRankModalOpen(true)}>
                <MdEdit className="mr-1" size={16} /> Edit
              </button>
            </div>
            <div className="space-y-2 text-white">
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <span className={`badge-rank-${myprofile.rank}`}></span>
                  <span className="text-sm text-white">Rank {myprofile.rank }</span>
                </div>
                <div className="flex gap-2 items-center">
                  <span className={`badge-rank-${Number(myprofile.rank) + 1}`}></span>
                  <span className="text-sm text-gray-600">Rank {Number(myprofile.rank) + 1}</span>
                </div>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div className="bg-red-300 h-full" style={{ width: `${Number(myprofile?.xp)*100/1000}%` }}></div>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-white">{myprofile.xp } XP</span>
                <span className="text-gray-600 text-sm">1000 XP</span>
              </div>
            </div>
          </div>
          <div className="rounded-[20px] bg-gray-50 text-white p-6 space-y-4">
            <div className='flex justify-between'>
              <div className='text-md font-semibold'>Achievements</div>
              <button className="btn btn-edit" onClick={() => setIsEditAchievementsModalOpen(true)}>
                <MdEdit className="mr-1" size={16} /> Edit
              </button>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-wrap gap-2">
                <Tippy theme="yellowTooltip" content="You reached rank 1" delay={[0, 0]}>
                 {myprofile?.achievements.includes("1x") ?   <button className="text-yellow-400">
                   <span className="badge-rank-1"></span> 
                  </button>: <></>}
                </Tippy>
                <Tippy theme="yellowTooltip" content="You reached rank 2" delay={[0, 0]}>
                 {myprofile?.achievements.includes("2x") ? <button className="text-yellow-400">
                     <span className="badge-rank-2"></span>
                  </button> : <></>}
                </Tippy>
                <Tippy theme="yellowTooltip" content="You reached rank 3" delay={[0, 0]}>
                  {myprofile?.achievements.includes("3x") ? <button className="text-yellow-400">
                    <span className="badge-rank-3"></span> 
                  </button>: <></>}
                </Tippy>
                <Tippy theme="yellowTooltip" content="You reached rank 4" delay={[0, 0]}>
                  {myprofile?.achievements.includes("4x") ?  <button className="text-yellow-400">
                     <span className="badge-rank-4"></span> 
                  </button>: <></>}
                </Tippy>
                <Tippy theme="yellowTooltip" content="You reached rank 5" delay={[0, 0]}>
                    {myprofile?.achievements.includes("5x") ? <button className="text-yellow-400">
                    <span className="badge-rank-5"></span> 
                  </button>: <></>}
                </Tippy>
                <Tippy theme="yellowTooltip" content="You reached rank 6" delay={[0, 0]}>
                  {myprofile?.achievements.includes("6x") ? <button className="text-yellow-400">
                     <span className="badge-rank-6"></span> 
                  </button>: <></>}
                </Tippy>
                <Tippy theme="yellowTooltip" content="You reached rank 7" delay={[0, 0]}>
                 {myprofile?.achievements.includes("7x") ?  <button className="text-yellow-400">
                     <span className="badge-rank-7"></span> 
                  </button>: <></>}
                </Tippy>
                <Tippy theme="yellowTooltip" content="You reached rank 8" delay={[0, 0]}>
                  {myprofile?.achievements.includes("8x") ?  <button className="text-yellow-400">
                    <span className="badge-rank-8"></span> 
                  </button>: <></>}
                </Tippy>
                <Tippy theme="yellowTooltip" content="You reached rank 9" delay={[0, 0]}>
                    {myprofile?.achievements.includes("9x") ? <button className="text-yellow-400">
                   <span className="badge-rank-9"></span> 
                  </button>: <></>}
                </Tippy>
                <Tippy theme="yellowTooltip" content="You reached rank 10" delay={[0, 0]}>
                  {myprofile?.achievements.includes("10x") ? <button className="text-yellow-400">
                     <span className="badge-rank-10"></span> 
                  </button>: <></>}
                </Tippy>
                <Tippy theme="yellowTooltip" content="You set your Telegram address" delay={[0, 0]}>
                 {myprofile?.achievements.includes("t") ? <button className="text-yellow-400">
                      <span className="badge-social-telegram"></span> 
                  </button>: <></>}
                </Tippy>
                <Tippy theme="yellowTooltip" content="You set your Twitter address" delay={[0, 0]}>
                  {myprofile?.achievements.includes("x") ?<button className="text-yellow-400">
                      <span className="badge-social-twitter"></span> 
                  </button>: <></>}
                </Tippy>
                <Tippy theme="yellowTooltip" content="You set your Solana address" delay={[0, 0]}>
                 {myprofile?.achievements.includes("s") ? <button className="text-yellow-400">
                      <span className="badge-social-solana"></span>
                  </button> : <></>}
                </Tippy>
                <Tippy theme="yellowTooltip" content="You get 5X marketCap" delay={[0, 0]}>
                  {myprofile?.achievements.includes("c5x") ? <button className="text-yellow-400">
                     <span className="badge-call-5X"></span> 
                  </button>: <></>}
                </Tippy>
                <Tippy theme="yellowTooltip" content="You get 10X marketCap" delay={[0, 0]}>
                   {myprofile?.achievements.includes("c10x") ? <button className="text-yellow-400">
                    <span className="badge-call-10X"></span> 
                  </button>: <></>}
                </Tippy>
                <Tippy theme="yellowTooltip" content="You get 50X marketCap" delay={[0, 0]}>
                  {myprofile?.achievements.includes("c50x") ?<button className="text-yellow-400">
                      <span className="badge-call-50X"></span>
                  </button> : <></>}
                </Tippy>
                <Tippy theme="yellowTooltip" content="You get 100X marketCap" delay={[0, 0]}>
                  {myprofile?.achievements.includes("c100x") ?<button className="text-yellow-400">
                      <span className="badge-call-100X"></span> 
                  </button>: <></>}
                </Tippy>
                <Tippy theme="yellowTooltip" content="10 people copytrade you" delay={[0, 0]}>
                   {myprofile?.achievements.includes("u10") ? <button className="text-yellow-400">
                    <span className="badge-user-10"></span> 
                  </button>: <></>}
                </Tippy>
                <Tippy theme="yellowTooltip" content="50 people copytrade you" delay={[0, 0]}>
                   {myprofile?.achievements.includes("u50") ? <button className="text-yellow-400">
                    <span className="badge-user-50"></span>
                  </button> : <></>}
                </Tippy>
                <Tippy theme="yellowTooltip" content="100 people copytrade you" delay={[0, 0]}>
                   {myprofile?.achievements.includes("u100") ?<button className="text-yellow-400">
                     <span className="badge-user-100"></span> 
                  </button>: <></>}
                </Tippy>
                <Tippy theme="yellowTooltip" content="You earn 50K-money" delay={[0, 0]}>
                 {myprofile?.achievements.includes("m50k") ? <button className="text-yellow-400">
                      <span className="badge-money-50k"></span> 
                  </button>: <></>}
                </Tippy>
                <Tippy theme="yellowTooltip" content="You earn 100K-money" delay={[0, 0]}>
                   {myprofile?.achievements.includes("m100k") ? <button className="text-yellow-400">
                    <span className="badge-money-100k"></span>
                  </button> : <></>}
                </Tippy>
                <Tippy theme="yellowTooltip" content="You earn 500K-money" delay={[0, 0]}>
                  {myprofile?.achievements.includes("m500k") ? <button className="text-yellow-400">
                     <span className="badge-money-500k"></span> 
                  </button>: <></>}
                </Tippy>
                <Tippy theme="yellowTooltip" content="You earn 1m-money" delay={[0, 0]}>
                  {myprofile?.achievements.includes("m1m") ? <button className="text-yellow-400">
                     <span className="badge-money-1m"></span> 
                  </button>: <></>}
                </Tippy>
                <Tippy theme="yellowTooltip" content="Your account has 1 month history" delay={[0, 0]}>
                  {myprofile?.achievements.includes("reg1m") ? <button className="text-yellow-400">
                     <span className="badge-register-1m"></span> 
                  </button>: <></>}
                </Tippy>
                <Tippy theme="yellowTooltip" content="Your account has 3 months history" delay={[0, 0]}>
                  {myprofile?.achievements.includes("reg3m") ? <button className="text-yellow-400">
                     <span className="badge-register-3m"></span>
                  </button> : <></>}
                </Tippy>
                <Tippy theme="yellowTooltip" content="Your account has 1 year history" delay={[0, 0]}>
                  {myprofile?.achievements.includes("reg1y") ?<button className="text-yellow-400">
                      <span className="badge-register-1y"></span> 
                  </button>: <></>}
                </Tippy>
                <Tippy theme="yellowTooltip" content="You are a influencer" delay={[0, 0]}>
                  {myprofile?.achievements.includes("influ") ? <button className="text-yellow-400">
                     <span className="badge-other-influencer"></span> 
                  </button>: <></>}
                </Tippy>
                <Tippy theme="yellowTooltip" content="Alpha action" delay={[0, 0]}>
                  {myprofile?.achievements.includes("alpha") ? <button className="text-yellow-400">
                     <span className="badge-other-alpha"></span> 
                  </button>: <></>}
                </Tippy>
                <Tippy theme="yellowTooltip" content="You have a best partner" delay={[0, 0]}>
                   {myprofile?.achievements.includes("partner") ? <button className="text-yellow-400">
                    <span className="badge-other-partner"></span> 
                  </button>: <></>}
                </Tippy>
                <Tippy theme="yellowTooltip" content="You never did skip" delay={[0, 0]}>
                  {myprofile?.achievements.includes("never") ? <button className="text-yellow-400">
                     <span className="badge-other-neverskip"></span> 
                  </button>: <></>}
                </Tippy>
                <Tippy theme="yellowTooltip" content="You found some bugs of this site" delay={[0, 0]}>
                  {myprofile?.achievements.includes("bug") ? 
                  <button className="text-yellow-400">
                     <span className="badge-other-bughunter"></span> 
                  </button>: <></>}
                </Tippy>
                <Tippy theme="yellowTooltip" content="You registered on this site" delay={[0, 0]}>
                  {myprofile?.achievements.includes("OG") ?
                  <button className="text-yellow-400">
                      <span className="badge-other-og"></span>
                  </button> : <></>}
                </Tippy>

                {/* <span className="badge-money-50k"></span>
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
                <span className="badge-user-50"></span> */}
                {/* <button className="w-8 h-8 text-xs font-bold bg-white circle-item text-black">+5</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <EditDescriptionModal onChange={(id, news)=>savedescription(id, news) }  isOpen={isEditDescriptionModalOpen} profile={myprofile } onOk={() => setIsEditDescriptionModalOpen(false)} onCancel={() => setIsEditDescriptionModalOpen(false)} />
    <EditLinkModal onChange={(id, xaddress,taddress,saddress)=>savelink(id, xaddress,taddress,saddress) } profile={myprofile } isOpen={isEditLinkModalOpen} onOk={() => setIsEditLinkModalOpen(false)} onCancel={() => setIsEditLinkModalOpen(false)} />
    <EditRankModal profile={myprofile } isOpen={isEditRankModalOpen}  onCancel={(id,xp,rank) =>handlechangerank(id, xp, rank) } />
    <AchievementsModal profile={myprofile } isOpen={isEditAchievementsModalOpen} onCancel={(achievements) =>handleupdateachieve(achievements) } />
  </>);
}

export default GeneralTab;