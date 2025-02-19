import React, { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getMultiplierType, getRankChar } from "utils/style";
import IconUser from 'assets/img/icons/user.svg';
import { MdEdit } from "react-icons/md";
import Header from "components/header";

const Announcements = () => {
  return (<>
    <div className="flex gap-5 h-full">
      <div className="card flex-grow p-0 flex flex-col overflow-hidden">
        <Header>
          <div className="py-3 flex justify-between items-center">
            <div className='ml-auto px-3 py-2 rounded-full bg-gray-100 text-white flex items-center gap-2'>
              <span className='text-base font-semibold'>7 days</span>
              <span className='text-sm text-gray-500'><AiFillCaretDown /></span>
            </div>
          </div>
        </Header>
        
        <div className="p-6 flex flex-col gap-5 overflow-auto flex-grow">
        </div>
      </div>
    </div>
  </>
  );
}

export default Announcements;