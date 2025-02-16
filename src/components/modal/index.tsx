import { FaTimes } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const Modal = ({
  isOpen,
  onClose,
  hideCloseButton,
  extraClass,
  children,
}: Readonly<{
  isOpen: boolean,
  onClose: () => void,
  hideCloseButton?: boolean,
  extraClass?: string,
  children: React.ReactNode
}>) => {
  if (!isOpen) return <></>;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50" onClick={onClose}>
      <div className={`bg-dark1 text-white rounded shadow-lg p-[50px] relative max-w-[620px] ${extraClass || ''}`} onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button 
          className={`absolute top-[50px] right-[50px] text-gray-300 hover:text-gray-500 ${hideCloseButton ? 'hidden' : ''}`}
          onClick={onClose}
        >
          <MdClose size={24} />
        </button>
        {/* Modal Content */}
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Modal;