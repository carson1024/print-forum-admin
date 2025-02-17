import { FaArrowDown } from "react-icons/fa";
import Modal from ".."
import { IoMdAddCircleOutline } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";
import { useState } from "react";
import EditAchievementsModal from "./EditAchievementsModal";

const AchievementsModal = ({
    isOpen,
    onCancel,
  }: Readonly<{
    isOpen: boolean,
    onCancel: () => void
  }>) => {
  const [achievements, setAchievements] = useState(['rank-1', 'rank-2', 'rank-3', 'rank-4', 'call-5X', 'call-10X', 'social-twitter', 'social-telegram', 'social-solana', 'other-influencer', 'other-alpha', 'register-1m', 'money-100k']);
  const [editMode, setEditMode] = useState<'add' | 'remove' | null>(null);

  return <Modal isOpen={isOpen} onClose={onCancel} extraClass="w-[540px]">
    <div className="space-y-6">
      <h1 className="text-lg font-bold text-white">UsernameLong’s achievements</h1>
      <div className="border border-gray-100"></div>
      <div className="flex flex-wrap gap-2 items-center">
        {achievements.map((key:string) => <span className={`badge-${key}`}></span>)}
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <button className="w-full btn btn-green py-3" onClick={() => setEditMode('add')}><IoMdAddCircleOutline size={24} className="mr-2" /> Add XP</button>
        <button className="w-full btn btn-red py-3" onClick={() => setEditMode('remove')}><GrSubtractCircle size={24} className="mr-2" /> Remove XP</button>
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