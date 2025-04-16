import { FaArrowDown } from "react-icons/fa";
import Modal from ".."
import { IoMdAddCircleOutline } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";
import { useState,useEffect } from "react";
import EditAchievementsModal from "./EditAchievementsModal";

const AchievementsModal = ({
    isOpen,
    profile, 
    onCancel,
}: Readonly<{
    profile:any,
    isOpen: boolean,
    onCancel: (achievements:any) => void
  }>) => {
  // const [achievements, setAchievements] = useState(['rank-1', 'rank-2', 'rank-3', 'rank-4','rank-5','rank-6','rank-7','rank-8','rank-9','rank-10','call-5X', 'call-10X','call-50X','call-100X', 'social-twitter', 'social-telegram', 'social-solana', 'other-influencer', 'other-alpha', 'register-1m', 'money-100k']);
  const [achievements, setAchievements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editMode, setEditMode] = useState<'add' | 'remove' | null>(null);

  useEffect(() => {
    setIsLoading(true);
    const scan = async () => {
    const achievementarray = [];
    if (profile.achievements.includes("OG")) achievementarray.push("other-og")
    if (profile.achievements.includes("1x")) achievementarray.push("rank-1")
    if (profile.achievements.includes("2x")) achievementarray.push("rank-2")
    if (profile.achievements.includes("3x")) achievementarray.push("rank-3")
    if (profile.achievements.includes("4x")) achievementarray.push("rank-4")
    if (profile.achievements.includes("5x")) achievementarray.push("rank-5")
    if (profile.achievements.includes("6x")) achievementarray.push("rank-6")
    if (profile.achievements.includes("7x")) achievementarray.push("rank-7")
    if (profile.achievements.includes("8x")) achievementarray.push("rank-8")
    if (profile.achievements.includes("9x")) achievementarray.push("rank-9")
    if (profile.achievements.includes("10x")) achievementarray.push("rank-10")
    if (profile.achievements.includes("c5x")) achievementarray.push("call-5X")
    if (profile.achievements.includes("c10x")) achievementarray.push("call-10X")
    if (profile.achievements.includes("c50x")) achievementarray.push("call-50X")
    if (profile.achievements.includes("c100x")) achievementarray.push("call-100X")
    if (profile.achievements.includes("u10")) achievementarray.push("user-10")
    if (profile.achievements.includes("u50")) achievementarray.push("user-50")
    if (profile.achievements.includes("u100")) achievementarray.push("user-100")
    if (profile.achievements.includes("m50k")) achievementarray.push("money-50k")
    if (profile.achievements.includes("m100k")) achievementarray.push("money-100k")
    if (profile.achievements.includes("m500k")) achievementarray.push("money-500k")
    if (profile.achievements.includes("m1m")) achievementarray.push("money-1m")
    if (profile.achievements.includes("reg1m")) achievementarray.push("register-1m")
    if (profile.achievements.includes("reg3m")) achievementarray.push("register-3m")
    if (profile.achievements.includes("reg1y")) achievementarray.push("register-1y")
    if (profile.achievements.includes("t")) achievementarray.push("social-telegram")
    if (profile.achievements.includes("s")) achievementarray.push("social-solana")
    if (profile.achievements.includes("x")) achievementarray.push("social-twitter")
    if (profile.achievements.includes("influ")) achievementarray.push("other-influencer")
    if (profile.achievements.includes("alpha")) achievementarray.push("other-alpha")
    if (profile.achievements.includes("never")) achievementarray.push("other-neverskip")
    if (profile.achievements.includes("partner")) achievementarray.push("other-partner")
    if (profile.achievements.includes("bug")) achievementarray.push("other-bughunter")
    setAchievements(achievementarray);
   };
      scan(); 
    }, []);

  return <Modal isOpen={isOpen} onClose={()=>onCancel(achievements)} extraClass="w-[540px]">
    <div className="space-y-4 sm:space-y-6">
      <h1 className="text-md sm:text-lg font-bold text-white">{profile.name}’s achievements</h1>
      <div className="border border-gray-100"></div>
      <div className="flex flex-wrap gap-2 items-center">
        {achievements.map((key:string) => <span className={`badge-${key}`}></span>)}
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <button className="w-full btn btn-sm text-xs sm:text-base btn-green" onClick={() => setEditMode('add')}><IoMdAddCircleOutline size={24} className="mr-2" /> Add XP</button>
        <button className="w-full btn btn-sm text-xs sm:text-base btn-red" onClick={() => setEditMode('remove')}><GrSubtractCircle size={24} className="mr-2" /> Remove XP</button>
      </div>
    </div>
    <EditAchievementsModal 
      editMode={editMode}
      initialAchivements={achievements}
      onCancel={() => setEditMode(null)}
      updateAchievements={(achievements) => {
        setAchievements(achievements);
        setEditMode(null);
      }}
    />
  </Modal>
}

export default AchievementsModal;