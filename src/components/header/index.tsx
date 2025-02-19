import { useSidebar } from "components/navbar/provider";
import { FaTimes } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

const Header = ({ children }: {
  children: React.ReactNode
}) => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (<>
    <div className="px-4 sm:px-6 py-1 sm:py-3 border-b-[1px] border-gray-100 flex items-center gap-3">
      <button className="circle-item text-gray-400 bg-gray-100 min-w-8 w-8 h-8 xl:!hidden" onClick={toggleSidebar}>{ !isSidebarOpen ? <IoMenu /> : <FaTimes/> }</button>
      <div className="grow">{ children }</div>
    </div>
  </>);
}

export default Header;