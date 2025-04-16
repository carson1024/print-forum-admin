import { FaArrowDown } from "react-icons/fa";
import Modal from ".."
import { IoMdAddCircleOutline } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";
import { useEffect, useState } from "react";
import { IoMdCheckmark } from "react-icons/io";

//'multiplier-2X', 'multiplier-5X', 'multiplier-10X', 'multiplier-20X', 'multiplier-30X', 'multiplier-50X', 'multiplier-100X', 'multiplier-200X', 'multiplier-500X', 'multiplier-1000X',
const ALL_ACHIVEMENTS: string[] = [
  'rank-1', 'rank-2', 'rank-3', 'rank-4', 'rank-5', 'rank-6', 'rank-7', 'rank-8', 'rank-9', 'rank-10', 
  'call-5X', 'call-10X', 'call-50X', 'call-100X', 'user-10', 'user-50', 'user-100', 'money-50k', 'money-100k', 'money-500k', 'money-1m', 'register-1m', 'register-3m', 'register-1y',
  'social-twitter', 'social-telegram', 'social-solana', 'other-influencer', 'other-alpha', 'other-neverskip', 'other-partner', 'other-bughunter', 'other-og'
]
const EditAchievementsModal = ({
    editMode,
    initialAchivements,
    updateAchievements,
    onCancel,
  }: Readonly<{
    initialAchivements: string[],
    editMode: string,
    updateAchievements: (achievements: string[]) => void,
    onCancel: () => void,
  }>) => {
  const [selectedAchievements, setSelectedAchievements] = useState([]);
  const [displayAchievements, setDisplayAchievements] = useState([]);

  useEffect(() => {
    setDisplayAchievements(editMode == 'remove' ? initialAchivements : ALL_ACHIVEMENTS.filter(element => !initialAchivements.includes(element)));
  }, [editMode, initialAchivements]);

  const handleUpdate = () => {
    const result = editMode == 'add' ? initialAchivements.concat(selectedAchievements) : initialAchivements.filter(element => !selectedAchievements.includes(element))
    updateAchievements(result);
    setSelectedAchievements([]);
  }

  const toggleAchievement = (key: string) => {

    selectedAchievements.indexOf(key);
    console.log(key);
    const index = selectedAchievements.indexOf(key);
    if (index > -1) {
      setSelectedAchievements(selectedAchievements.filter((achievement) => achievement !== key));
    }else {
      setSelectedAchievements(prevArray => [...prevArray, key]);
    }
    console.log(selectedAchievements);
    
  }

  return <Modal isOpen={!!editMode} onClose={onCancel} extraClass="w-[540px]">
    <div className="space-y-4 sm:space-y-6">
      <h1 className="text-md sm:text-lg font-bold text-white">Edit achievements</h1>
      <div className="border border-gray-100"></div>
      <div className="flex flex-wrap gap-2 items-center">
        {
          displayAchievements.map((key: string) => <button className="relative" onClick={() => toggleAchievement(key)}>
            <span className={`badge-${key}`}></span>
            {
              selectedAchievements.includes(key) && 
              <div className="absolute flex items-center justify-center font-bold left-0 top-0 w-full h-full bg-black/70 circle">
                <IoMdCheckmark 
                  className={`${editMode == 'add' ? 'text-green-600' : 'text-red-400'} `} 
                  size={24} />
              </div>
            }
          </button>)
        }
      </div>
      
      <div className="">
        {
          editMode == 'add' ?
            <button className="w-full btn btn-green py-3" onClick={() => handleUpdate()}><IoMdAddCircleOutline size={24} className="mr-2" /> Add {selectedAchievements.length} achievements</button> : 
            <button className="w-full btn btn-red py-3" onClick={() => handleUpdate()}><GrSubtractCircle size={24} className="mr-2" /> Remove {selectedAchievements.length} achievements</button>
        }
      </div>
    </div>
  </Modal>
}

export default EditAchievementsModal;