import { FaArrowDown } from "react-icons/fa";
import Modal from ".."
import { IoMdAddCircleOutline } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";

const EditRankModal = ({
    isOpen,
    onAdd,
    onRemove,
    onCancel,
  }: Readonly<{
    isOpen: boolean,
    onAdd: () => void,
    onRemove: () => void
    onCancel: () => void
  }>) => {
  return <Modal isOpen={isOpen} onClose={onCancel} extraClass="w-[540px]">
    <div className="space-y-4 sm:space-y-6">
      <h1 className="text-md sm:text-lg font-bold text-white">UsernameLong’s rank</h1>
      <div className="border border-gray-50 rounded-[22px] p-4 flex items-center justify-between flex-wrap gap-1">
        <div className="text-gray-600">Current rank</div>
        <div className="flex gap-2 items-center">
          <span className="badge-rank-5"></span>
          <span>Rank 5</span>
          <span className="text-gray-600">(163/1000XP)</span>
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