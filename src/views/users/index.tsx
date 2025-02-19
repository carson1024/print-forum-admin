import React, { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getMultiplierType, getRankChar } from "utils/style";
import IconUser from 'assets/img/icons/user.svg';
import { MdEdit } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import Header from "components/header";

const Users = () => {
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
        <Header>
          <div className="py-3 flex justify-between items-center">
            <div className="bg-gray-50 px-3 py-1 rounded-full text-white flex items-center gap-2">
              <IoSearchSharp size={24} className="text-gray-600"/>
              <input 
                type="text" 
                className="bg-transparent outline-none text-white flex-grow text-sm max-w-[140px]"
                placeholder="Search user"
              />
            </div>
            <div className='btn-group lighter hidden sm:flex'>
              <button className="btn btn-sm active">All</button>
              <button className="btn btn-sm">Traders</button>
              <button className="btn btn-sm">Non Traders</button>
            </div>
          </div>
        </Header>
        
        <div className="p-4 sm:p-6 flex flex-col gap-3 overflow-auto flex-grow">
          <div className='btn-group lighter sm:hidden'>
            <button className="btn btn-sm active">All</button>
            <button className="btn btn-sm">Traders</button>
            <button className="btn btn-sm">Non Traders</button>
          </div>
          {Array(5).fill(0).map((item, index) => (<Link to="/admin/profile/123" key={index}>
            <div className="bg-gray-50 p-3 rounded-full flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="badge-rank-8"></span>
                <div className="space-y-0.5">
                  <div className="text-xs text-gray-600">Rank 5</div>
                  <div className="flex gap-1 items-center">
                    <span className="font-bold text-sm">UsernameLong</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="bg-gray-100 text-gray-400 w-8 h-8 circle-item">
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

export default Users;