import { FaArrowDown } from "react-icons/fa";
import Modal from ".."
import { IoMdAddCircleOutline } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";
import { useState } from 'react';
const EditRankModal = ({
    isOpen,
    onCancel,
    profile,
  }: Readonly<{
    isOpen: boolean,
    onCancel: (id:string,xp:string,rank:string) => void
    profile:any
  }>) => {
  const [xp, setXp] = useState(profile.xp ?? 0);
  const [rank, setRank] = useState(profile.rank ?? 0);
  const [id, setID] = useState(profile.id ?? 0);
  const onAdd = () => {
    setXp(xp + 1);
    if (0 <= xp && xp < 20) { setRank(1)}
    else  if (20 <= xp && xp < 44) { setRank(2) }
    else  if (44 <= xp && xp < 72) { setRank(3) }
    else  if (72 <= xp && xp < 104) { setRank(4) }
    else  if (104 <= xp && xp < 144) { setRank(5) }
    else  if (144 <= xp && xp < 184) { setRank(6) }
    else  if (184 <= xp && xp < 244) { setRank(7) }
    else  if (244 <= xp && xp < 292) { setRank(8) }
    else  if (292 <= xp && xp < 364) { setRank(9) }
    else  if (364 <= xp ) { setRank(10)}
  }

  const onRemove = () => {
    if (xp <= 0) { return; }
    setXp(xp - 1);
    if (0 <= xp && xp < 20) { setRank(1)}
    else  if (20 <= xp && xp < 44) { setRank(2) }
    else  if (44 <= xp && xp < 72) { setRank(3) }
    else  if (72 <= xp && xp < 104) { setRank(4) }
    else  if (104 <= xp && xp < 144) { setRank(5) }
    else  if (144 <= xp && xp < 184) { setRank(6) }
    else  if (184 <= xp && xp < 244) { setRank(7) }
    else  if (244 <= xp && xp < 292) { setRank(8) }
    else  if (292 <= xp && xp < 364) { setRank(9) }
    else  if (364 <= xp ) { setRank(10)}
    
  }
  
  return <Modal isOpen={isOpen} onClose={()=>onCancel(id,xp,rank)} extraClass="w-[540px]">
    <div className="space-y-4 sm:space-y-6">
      <h1 className="text-md sm:text-lg font-bold text-white">{profile.name}’s rank</h1>
      <div className="border border-gray-50 rounded-[22px] p-4 flex items-center justify-between flex-wrap gap-1">
        <div className="text-gray-600">Current rank</div>
        <div className="flex gap-2 items-center">
          <span className={`badge-rank-${rank}`}></span>
          <span>Rank {profile.rank}</span>
          <span className="text-gray-600">({xp}/1000XP)</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <button className="w-full btn btn-sm text-xs sm:text-base btn-green py-3" onClick={() => onAdd()}><IoMdAddCircleOutline size={24} className="mr-2" /> Add XP</button>
        <button className="w-full btn btn-sm text-xs sm:text-base btn-red py-3" onClick={() => onRemove()}><GrSubtractCircle size={24} className="mr-2" /> Remove XP</button>
      </div>
    </div>
  </Modal>
}

export default EditRankModal;