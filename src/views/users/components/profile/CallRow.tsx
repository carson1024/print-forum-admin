import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai"
import { Link } from "react-router-dom"
import { formatNumber, formatShortAddress, formatTimestamp } from "../../../../utils/style"
import IconCopy from 'assets/img/icons/copy.svg';
import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import { MdCheck } from "react-icons/md";
import { showToastr } from "../../../../toastr";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import React, { act, useEffect } from "react";
import { supabase } from "lib/supabase";

export const CallRow = ({
  call
}: {
  call: any
}) => {
  const [isCopied, setIsCopied] = useState(false);
  const [confirmVote, setConfirmVote] = useState(0);
  const [ratioVote, setRatioVote] = useState(0);
  const [timelimit, setTimeLimit] = useState(false);
  const [featured, setFeatured] = useState(0);
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    if (localStorage.getItem(call.address + call.user_id) == "yes") { setConfirmVote(1) }
    if (localStorage.getItem(call.address + call.user_id) == "no") { setConfirmVote(2) }
      setTimeLimit(true);
      if (call.is_featured == true) {
        setFeatured(call.featured)
      }
    }, []);

  const handleCopy = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (isCopied) return;
    setIsCopied(true);
    await navigator.clipboard.writeText(call.address);
    showToastr("Address copied to clipboard!", "success");
    setTimeout(() => setIsCopied(false), 2000);
  }


  return  <Link to={`/admin/token/${call.address}?id=${call.id} &user=${call.user_id}`} key={call.id}>
    <div className="bg-gray-50 p-1.5 pr-3 rounded sm:rounded-[40px] flex flex-col gap-2 sm:gap-3 cursor-pointer">
        <div className="flex items-center gap-2.5">
          <div className="flex flex-wrap grow">
            <div className="flex grow gap-2 sm:gap-3 items-center">
              <img src={call.image} className="w-[44px] h-[44px] sm:w-16 sm:h-16 circle"/>
              
                <div className="flex gap-1.5 sm:gap-2.5 items-center">
                <span className="text-sm sm:text-base font-bold">${call.symbol} </span>
                { 
                  featured > 1 ? <div>
                  <span className={`badge-multiplier-${featured}X`}></span> 
                  </div> :
                  <></>
                }
                  <div onClick={handleCopy} className="bg-gray-100 px-1.5 py-1 sm:px-2 sm:py-1.5 rounded-full flex text-xs gap-1 items-center">
                  <span>CA</span>
                    <span className="truncate text-gray-400">{formatShortAddress(call.address)}</span>
                    <button className="text-gray-400">{
                      !isCopied ? <img src={IconCopy} className="opacity-40"/>
                      : <span className='text-[#06cf9c]'><MdCheck size={16} /></span>
                    }</button>
                  </div>
                  <span className="text-sm text-gray-600">{formatTimestamp(call.updated_at)}</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2.5">
                  <div className="bg-gray-100 px-1.5 py-1 sm:px-2 sm:py-1.5 rounded-full flex text-xs gap-1">
                    Marketcap {formatNumber(call.init_market_cap)} to {formatNumber(call.changedCap)}
                </div>
                  {
                    call.percentage==100?<></>:call.percentage>100?
                    <div className="bg-green-600 px-1.5 py-1 sm:px-2 sm:py-1.5 text-xs flex gap-0.5 items-center rounded-full text-black">
                      <AiFillCaretUp />
                      <span>{call.percentage}%</span>
                    </div> :
                    <div className="bg-red-400 px-1.5 py-1 sm:px-2 sm:py-1.5 text-xs flex gap-0.5 items-center rounded-full text-black">
                      <AiFillCaretDown />
                      <span>{call.percentage}%</span>
                    </div>
                  }
                </div>
            </div>     
          </div>
          <button className="bg-gray-100 text-gray-400 w-8 h-8 circle-item !hidden lg:!flex">
            <FaChevronRight />
          </button>
        </div>
        <div className="flex md:hidden items-center gap-1 sm:gap-3 justify-between">      
      </div>
     </div>
   </Link>

}