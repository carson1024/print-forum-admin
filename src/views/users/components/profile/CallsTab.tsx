import IconTwitter from 'assets/img/icons/twitter.svg';
import IconTelegram from 'assets/img/icons/telegram.svg';
import IconSolana from 'assets/img/icons/solana.svg';
import { FaChevronDown, FaChevronRight, FaChevronUp } from "react-icons/fa";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { IoMdCopy } from "react-icons/io";
import Token from 'assets/img/sample/token.png';
import IconCopy from 'assets/img/icons/copy.svg';
import { Link } from "react-router-dom";

const CallsTab = () => {
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
        {forumData.map((item) => (<Link to="/token/123" key={item.id}>
          <div className="bg-gray-50 p-2 sm:p-1.5 rounded flex items-center gap-2.5">
            <div className="flex flex-wrap grow">
              <div className="flex grow gap-3 items-center">
                <div className="flex gap-2.5 items-center flex-wrap">
                  <div className="flex gap-1.5 sm:gap-2.5 items-center">
                    <img src={Token} className="w-9 h-9 sm:w-[59px] sm:h-[59px] circle"/>
                    <span className="text-sm sm:text-base font-bold">{item.name}</span>
                    <span className={`badge-multiplier-${item.multiplier}`}></span>
                    <div className="bg-gray-100 px-2 py-1.5 rounded-full flex text-xs gap-1 items-center">
                      <span className='text-xs sm:text-sm'>CA</span>
                      <span className="text-xxs sm:text-xs truncate text-gray-400">Gmx…AyW</span>
                      <button className="text-gray-400"><img src={IconCopy} className="opacity-40"/></button>
                    </div>
                  </div>
                  <div className="flex gap-2.5 items-center">
                    <div className="bg-gray-100 px-2 py-1.5 rounded-full flex text-xs gap-1">
                      Marketcap {item.marketcap}
                    </div>
                    <div className="bg-green-600 px-2 py-1.5 text-xs flex gap-0.5 items-center rounded-full text-black">
                      <AiFillCaretUp />
                      <span>{item.percentage}</span>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-600">2025-01-16 15:45:17</span>
                  </div>
                </div>
              </div>
            </div>
            <button className="bg-gray-100 text-gray-400 w-8 h-8 circle-item mr-4 !hidden lg:!flex">
              <FaChevronRight />
            </button>
          </div>
        </Link>
        ))}
        </div>
      </div>
    </div>
  </>);
}

export default CallsTab;