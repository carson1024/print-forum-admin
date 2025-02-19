import React, { useState } from "react";
import { FaChevronDown, FaChevronLeft, FaChevronRight, FaChevronUp } from "react-icons/fa";
import Token from 'assets/img/sample/token.png';
import { Link, useNavigate, useNavigation } from "react-router-dom";
import TokenTab from "./token/TokenTab";
import CallersTab from "./token/CallersTab";
import DiscussionTab from "./token/DiscussionTab";
import IconDiscussion from 'assets/img/icons/discussion.svg';
import Header from "components/header";

const TokenDetail = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'token' | 'callers' | 'discussion'>('token');

  return <div className="flex gap-5 h-full">
    <div className="card flex-grow p-0 flex flex-col overflow-hidden">
      <Header>
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-3 items-center">
            <button onClick={() => navigate(-1)} className="bg-gray-100 text-gray-400 w-8 h-8 circle-item">
              <FaChevronLeft />
            </button>
            <img src={Token} className="w-[59px] h-[59px] circle my-1"/>
            <div className="flex gap-3 items-center">
              <span className="font-bold text-lg">$PEPESI</span>
            </div>
          </div>
          <div className="btn-group light hidden sm:flex">
            <button className={`btn btn-sm ${activeTab == 'token' ? 'active' : ''}`} onClick={() => setActiveTab('token')}>Token</button>
            <button className={`btn btn-sm ${activeTab == 'callers' ? 'active' : ''}`} onClick={() => setActiveTab('callers')}>Callers</button>
            <button className={`btn btn-sm ${activeTab == 'discussion' ? 'active' : ''}`} onClick={() => setActiveTab('discussion')}><img src={IconDiscussion} className="mr-1"/> Discussion</button>
          </div>
        </div>
      </Header>
      
      <div className="m-4 mb-2 sm:m-6 ml-auto btn-group light sm:hidden">
        <button className={`btn btn-sm ${activeTab == 'token' ? 'active' : ''}`} onClick={() => setActiveTab('token')}>Token</button>
        <button className={`btn btn-sm ${activeTab == 'callers' ? 'active' : ''}`} onClick={() => setActiveTab('callers')}>Callers</button>
        <button className={`btn btn-sm ${activeTab == 'discussion' ? 'active' : ''}`} onClick={() => setActiveTab('discussion')}><img src={IconDiscussion} className="mr-1"/> Discussion</button>
      </div>
      <div className="flex-grow relative overflow-hidden">
        {
          activeTab == 'token' ?
            <TokenTab />
          : activeTab == 'callers' ?
            <CallersTab />
          :
            <DiscussionTab />
        }
      </div>
    </div>
  </div>
}

export default TokenDetail;