import IconTwitter from 'assets/img/icons/twitter.svg';
import IconTelegram from 'assets/img/icons/telegram.svg';
import IconSolana from 'assets/img/icons/solana.svg';
import { FaChevronDown, FaChevronRight, FaChevronUp } from "react-icons/fa";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { IoMdCopy } from "react-icons/io";
import Token from 'assets/img/sample/token.png';
import IconCopy from 'assets/img/icons/copy.svg';
import { Link } from "react-router-dom";

const CallersTab = () => {
  const forumData = [
    { id: 1, name: "$PEPESI", multiplier: "10X", rank: "1", caller: "UsernameLong", marketcap: "475.5k to 880.4k", percentage: "519%" },
    { id: 2, name: "$PEPESI", multiplier: "100X", rank: "2", caller: "UsernameLong", marketcap: "475.5k to 880.4k", percentage: "519%" },
    { id: 3, name: "$PEPESI", multiplier: "20X", rank: "3", caller: "UsernameLong", marketcap: "475.5k to 880.4k", percentage: "519%" },
    { id: 4, name: "$PEPESI", multiplier: "10X", rank: "4", caller: "UsernameLong", marketcap: "475.5k to 880.4k", percentage: "519%" },
    { id: 5, name: "$PEPESI", multiplier: "100X", rank: "6", caller: "UsernameLong", marketcap: "475.5k to 880.4k", percentage: "519%" },
    { id: 6, name: "$PEPESI", multiplier: "20X", rank: "10", caller: "UsernameLong", marketcap: "475.5k to 880.4k", percentage: "519%" },
    { id: 7, name: "$PEPESI", multiplier: "20X", rank: "10", caller: "UsernameLong", marketcap: "475.5k to 880.4k", percentage: "519%" },
    { id: 8, name: "$PEPESI", multiplier: "20X", rank: "10", caller: "UsernameLong", marketcap: "475.5k to 880.4k", percentage: "519%" },
  ];
  return (<>
    <div className="p-4 sm:p-6 h-full flex flex-col space-y-3">
      <div className="flex-grow overflow-auto">
        <div className='flex flex-col gap-3'>
          {Array(6).fill(0).map((item, index) => (<Link to="" key={index}>
            <div className="bg-gray-50 px-2.5 sm:px-4 py-1.5 rounded sm:rounded-full flex items-center w-full flex-wrap gap-2">
              <div className="flex items-center gap-3">
                <p className="font-semibold w-[25px]">#{index+1}</p>
                <div className="p-1.5 rounded-full border border-gray-150 flex items-center gap-2.5">
                  <div className="circle-item w-7 h-7 bg-red-300 text-black text-sm font-bold">V</div>
                  <div className="space-y-0.5">
                    <div className="flex gap-1 items-center">
                      <span className="font-bold text-sm">UsernameLong</span>
                      <span className="text-xs text-gray-600">55%</span>
                    </div>
                  </div>
                </div>
                <div className='text-sm text-gray-600 ml-auto md:hidden'>1 min ago</div>
              </div>
              <div className='flex items-center gap-1 sm:gap-3 grow'>
                <div className="px-2 py-2 sm:px-5 sm:py-3 rounded-full bg-gray-100 flex gap-1">
                  <div className="flex gap-1">
                    <span className="text-xs">Marketcap</span>
                    <span className="text-xs text-primary font-semibold">200X</span>
                  </div>
                  <span className="text-xs text-white"><b>475.5k</b> to <b>880.4k</b></span>
                </div>
                <div className='text-sm text-gray-600 ml-auto hidden md:block'>1 min ago</div>
                <div className='ml-auto md:ml-0'>
                  <span className="rounded-full bg-primary px-1 py-1 sm:px-2 sm:py-1.5 text-xs text-black font-semibold">+10 XP</span>
                </div>
              </div>
            </div>
          </Link>
          ))}
        </div>
      </div>
    </div>
  </>);
}

export default CallersTab;