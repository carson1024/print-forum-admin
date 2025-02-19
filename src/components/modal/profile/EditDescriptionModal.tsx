import { FaArrowDown } from "react-icons/fa";
import Modal from ".."
import { ImArrowDown } from "react-icons/im";
import User from 'assets/img/sample/user.png';
import IconUpload from 'assets/img/icons/upload.svg';
import IconTwitter from 'assets/img/icons/twitter.svg';
import IconTelegram from 'assets/img/icons/telegram.svg';
import IconSolana from 'assets/img/icons/solana.svg';
import { IoCheckmark } from "react-icons/io5";

const EditDescriptionModal = ({
    isOpen,
    onOk,
    onCancel,
  }: Readonly<{
    isOpen: boolean,
    onOk: () => void
    onCancel: () => void
  }>) => {
  return <Modal isOpen={isOpen} onClose={onCancel} extraClass="w-[540px]">
    <div className="space-y-6">
      <h1 className="text-md sm:text-lg font-bold text-white">UsernameLong’s description</h1>
      <div className="border border-gray-100"></div>
      <textarea
        placeholder="Write a short bio..."
        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut consectetur ligula. Mauris congue imperdiet ante non lobortis. In ante tellus, ultrices a consectetur a, euismod vel leo. Fusce dictum pellentesque orci ac malesuada."
        className="bg-gray-50 rounded-[20px] flex-grow outline-none placeholder-gray-500 resize-none p-3 sm:p-5 w-full text-gray-600"
        rows={10}
      ></textarea>
      {/* Save Button */}
      <button className="w-full btn py-3" onClick={() => onOk()}>Save</button>
    </div>
  </Modal>
}

export default EditDescriptionModal;