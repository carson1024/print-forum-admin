import React, { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Token from 'assets/img/sample/token.png';
import IconCopy from 'assets/img/icons/copy.svg';
import Header from "components/header";

const Calls = () => {
  const [activeTab, setActiveTab] = useState<'featured' | 'latest'>('featured');
  const [filter, setFilter] = useState("All Ranks");
  const forumData = [
    { id: 1, name: "$PEPESI", multiplier: "10X", rank: "1", caller: "UsernameLong", marketcap: "475.5k to 880.4k", percentage: "519%" },
    { id: 2, name: "$PEPESI", multiplier: "100X", rank: "2", caller: "UsernameLong", marketcap: "475.5k to 880.4k", percentage: "519%" },
    { id: 3, name: "$PEPESI", multiplier: "20X", rank: "3", caller: "UsernameLong", marketcap: "475.5k to 880.4k", percentage: "519%" },
    { id: 4, name: "$PEPESI", multiplier: "10X", rank: "4", caller: "UsernameLong", marketcap: "475.5k to 880.4k", percentage: "519%" },
    { id: 5, name: "$PEPESI", multiplier: "100X", rank: "6", caller: "UsernameLong", marketcap: "475.5k to 880.4k", percentage: "519%" },
  ];

  return (<>
    <div className="flex gap-5 h-full">
      <div className="card flex-grow p-0 flex flex-col overflow-hidden">
        <Header>
          <div className="py-3 flex justify-between items-center">
            <div className='btn-group lighter'>
              <button className="btn btn-sm active">Featured</button>
              <button className="btn btn-sm">Latest</button>
            </div>
            <div className='ml-auto px-3 py-2 rounded-full bg-gray-100 text-white hidden sm:flex items-center gap-2'>
              <span className='text-base text-gray-500 font-semibold'>All Ranks</span>
              <span className='text-base font-semibold'>All Ranks</span>
              <span className='text-sm text-gray-500'><AiFillCaretDown /></span>
            </div>
          </div>
        </Header>
        <div className='m-4 mb-2 sm:m-6 px-3 py-2 rounded-full bg-gray-100 text-white flex sm:hidden items-center gap-2 ml-auto'>
          <span className='text-sm sm:text-base text-gray-500 font-semibold'>All Ranks</span>
          <span className='text-sm sm:text-base font-semibold'>All Ranks</span>
          <span className='text-sm text-gray-500'><AiFillCaretDown /></span>
        </div>
        <div className="p-4 sm:p-6 flex flex-col gap-3 overflow-auto flex-grow">
          {forumData.map((item) => (<Link to="/admin/token/123" key={item.id}>
            <div className="bg-gray-50 p-1.5 pr-3 rounded sm:rounded-full flex items-center gap-2.5 flex-wrap md:flex-nowrap">
              <div className="flex flex-wrap grow">
                <div className="flex grow gap-2 sm:gap-3 items-center">
                  <div className="grow space-y-1 sm:space-y-1.5 flex gap-2.5 items-center">
                    <img src={Token} className="w-[44px] h-[44px] md:w-[59px] md:h-[59px] circle"/>
                    <div className="flex flex-wrap gap-1">
                      <div className="flex gap-1.5 sm:gap-2.5 items-center">
                        <span className="font-bold">{item.name}</span>
                        <span className={`badge-multiplier-${item.multiplier}`}></span>
                        <div className="bg-gray-100 px-1.5 py-1 sm:px-2 sm:py-1.5 rounded-full flex text-xs gap-1 items-center">
                          <span>CA</span>
                          <span className="truncate text-gray-400">Gmx…AyW</span>
                          <button className="text-gray-400"><img src={IconCopy} className="opacity-40"/></button>
                        </div>
                        <span className="text-sm text-gray-600">3m</span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2.5">
                        <div className="bg-gray-100 px-1.5 py-1 sm:px-2 sm:py-1.5 rounded-full flex text-xs gap-1">
                          Marketcap {item.marketcap}
                        </div>
                        <div className="bg-green-600 px-1.5 py-1 sm:px-2 sm:py-1.5 text-xs flex gap-0.5 items-center rounded-full text-black">
                          <AiFillCaretUp />
                          <span>{item.percentage}</span>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <div className="p-1.5 sm:p-3 rounded-full border border-gray-150 flex items-center gap-2.5">
                  <span className="badge-rank-1"></span>
                  <div className="space-y-0.5">
                    <div className="flex gap-2 text-xs">
                      <span className="text-gray-600">Caller</span>
                    </div>
                    <div className="flex gap-1 items-center">
                      <span className="font-bold text-sm">UsernameLong</span>
                      <span className="text-xs text-gray-600">55%</span>
                    </div>
                  </div>
                </div>
                <button className="bg-gray-100 text-gray-400 w-8 h-8 circle-item mr-4 !hidden xl:!flex">
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </Link>
          ))}
        </div>
      </div>
    </div>
  </>
  );
}

export default Calls;