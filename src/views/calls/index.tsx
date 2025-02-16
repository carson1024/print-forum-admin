import React, { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getMultiplierType, getRankChar } from "utils/style";
import IconUser from 'assets/img/icons/user.svg';
import { MdEdit } from "react-icons/md";

const Calls = () => {
  const [activeTab, setActiveTab] = useState<'featured' | 'latest'>('featured');
  const [filter, setFilter] = useState("All Ranks");
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
    <div className="flex gap-5 h-full">
      <div className="card flex-grow p-0 flex flex-col overflow-hidden">
        <div className="px-6 py-6 border-b-[1px] border-gray-100 flex justify-between items-center">
          <div className='ml-auto px-3 py-2 rounded-full bg-gray-100 text-white flex items-center gap-2'>
            <span className='text-base font-semibold'>7 days</span>
            <span className='text-sm text-gray-500'><AiFillCaretDown /></span>
          </div>
        </div>
        
        <div className="p-6 flex flex-col gap-5 overflow-auto flex-grow">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex items-center rounded p-8 bg-gray-50">
              <div className="py-4 space-y-1">
                <div className="text-2xl font-bold">14.7k</div>
                <div className="text-sm text-gray-600">Users total<span className="ml-1 text-green-600">+786</span></div>
              </div>
            </div>
            <div className="flex items-center rounded p-8 bg-gray-50">
              <div className="py-4 space-y-1">
                <div className="text-2xl font-bold">458</div>
                <div className="text-sm text-gray-600">Users copy trading<span className="ml-1 text-green-600">+24</span></div>
              </div>
            </div>
            <div className="flex items-center rounded p-8 bg-gray-50">
              <div className="py-4 space-y-1">
                <div className="text-2xl font-bold">458</div>
                <div className="text-sm text-gray-600">Users copy trading<span className="ml-1 text-green-600">+24</span></div>
              </div>
            </div>
          </div>
          <div className="p-6 space-y-2 bg-gray-50 rounded">
            <div className="text-md font-semibold">Latest comments</div>
            <div>
              {Array(5).fill(0).map((item, index) => (<Link to="" key={index}>
                <div className="flex gap-4 py-4 border-b-[1px]">
                  <div className="relative w-[50px] h-[50px] bg-black circle flex items-center justify-center">
                    <img src={IconUser} className="w-4 h-4" />
                  </div>
                  <div className="space-y-2 grow">
                    <div className="flex gap-1 items-center">
                      <div className="circle-item w-7 h-7 bg-red-300 text-black text-sm font-bold">V</div>
                      <span className="font-bold text-gray-600">UsernameLong</span>
                      <span className="text-xs text-gray-600">55%</span>
                      <div className="text-sm text-gray-600">1 min ago</div>
                    </div>
                    <div className="text-sm">Lorem ipsum dolor sit amet, consectetur.</div>
                  </div>
                  <div className="">
                    <button className="btn px-3 py-1.5 text-sm btn-outline">
                      <MdEdit className="mr-1" size={16} /> Edit
                    </button>
                  </div>
                </div>
              </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default Calls;