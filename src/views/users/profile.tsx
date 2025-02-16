import React, { useState } from "react";
import { FaChevronDown, FaChevronLeft, FaChevronRight, FaChevronUp } from "react-icons/fa";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { IoMdCopy } from "react-icons/io";
import User from 'assets/img/sample/user.png';
import IconCopy from 'assets/img/icons/copy.svg';
import IconSend from 'assets/img/icons/send.svg';
import { Link, useNavigate, useNavigation } from "react-router-dom";
import Dexscreener from 'assets/img/sample/dexscreener.png';
import Photon from 'assets/img/sample/photon.png';
import { FaExternalLinkAlt } from "react-icons/fa";
import IconUser from 'assets/img/icons/user.svg';
import { MdEdit } from "react-icons/md";
import ProfileTab from "./components/profile/GeneralTab";
import CallsTab from "./components/profile/CallsTab";
import TradingTab from "./components/profile/TradingTab";
import GeneralTab from "./components/profile/GeneralTab";

const ProfileDetail = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All Ranks");
  const [activeTab, setActiveTab] = useState<'profile' | 'calls' | 'trade'>('profile');
  const [isEditProfileModalOpen ,setIsEditProfileModalOpen] = useState(false);
  const forumData = [
    { id: 1, name: "$PEPESI", multiplier: "10X", rank: "1", caller: "UsernameLong", marketcap: "475.5k to 880.4k", percentage: "519%" },
    { id: 2, name: "$PEPESI", multiplier: "100X", rank: "2", caller: "UsernameLong", marketcap: "475.5k to 880.4k", percentage: "519%" },
    { id: 3, name: "$PEPESI", multiplier: "20X", rank: "3", caller: "UsernameLong", marketcap: "475.5k to 880.4k", percentage: "519%" },
    { id: 4, name: "$PEPESI", multiplier: "10X", rank: "4", caller: "UsernameLong", marketcap: "475.5k to 880.4k", percentage: "519%" },
    { id: 5, name: "$PEPESI", multiplier: "100X", rank: "6", caller: "UsernameLong", marketcap: "475.5k to 880.4k", percentage: "519%" },
    { id: 6, name: "$PEPESI", multiplier: "20X", rank: "10", caller: "UsernameLong", marketcap: "475.5k to 880.4k", percentage: "519%" },
    { id: 6, name: "$PEPESI", multiplier: "20X", rank: "10", caller: "UsernameLong", marketcap: "475.5k to 880.4k", percentage: "519%" },
    { id: 6, name: "$PEPESI", multiplier: "20X", rank: "10", caller: "UsernameLong", marketcap: "475.5k to 880.4k", percentage: "519%" },
    
  ];

  return <div className="flex gap-5 h-full">
    <div className="card flex-grow p-0 flex flex-col overflow-hidden">
      <div className="px-6 py-6 border-b-[1px] border-gray-100 flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <button onClick={() => navigate(-1)} className="bg-gray-100 text-gray-400 w-8 h-8 circle-item">
            <FaChevronLeft />
          </button>
          <img src={User} className="w-8 h-8 circle"/>
          <div className="flex gap-3 items-center">
            <span className="font-bold text-base">UsernameLong</span>
          </div>
        </div>
        <div className="btn-group light">
          <button className={`btn btn-sm ${activeTab == 'profile' ? 'active' : ''}`} onClick={() => setActiveTab('profile')}>General Information</button>
          <button className={`btn btn-sm ${activeTab == 'calls' ? 'active' : ''}`} onClick={() => setActiveTab('calls')}>Calls</button>
          <button className={`btn btn-sm ${activeTab == 'trade' ? 'active' : ''}`} onClick={() => setActiveTab('trade')}>Trading</button>
        </div>
      </div>
      
      <div className="flex-grow relative overflow-hidden">
        {
          activeTab == 'profile' ?
            <GeneralTab />
          : activeTab == 'calls' ?
            <CallsTab />
          :
            <TradingTab />
        }
      </div>
    </div>
  </div>
}

export default ProfileDetail;