import React, { useState, useEffect } from "react";
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
import Header from "components/header";
import { supabase } from "lib/supabase";
import { SkeletonList } from "utils/skeleton";

const ProfileDetail = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All Ranks");
  const [activeTab, setActiveTab] = useState<'profile' | 'calls' | 'trade'>('profile');
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const [profile, setProfile] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [mainid, setMainid] = useState('');
  const [avatar, setAvatar] = useState("");
 
  useEffect(() => {
     setIsLoading(true);
   const params = new URLSearchParams(window.location.search);
   const id = params.get("id");
    setMainid(id);
   const scan = async () => {
    const { data, error } = await supabase
        .from("users")
        .select("*")
        .match({ "id": id });
    if (error) {
        console.error("Fetch failed:", error);
        return; // Stop execution if there's an error
        }
    if (data.length > 0) {
      setProfile(data)
      setAvatar(data[0].avatar)
     setIsLoading(false);
     }
   };
    scan(); 

    const channel = supabase
      .channel("my_calls")
      .on("postgres_changes", { event: "UPDATE", schema: "public", table: "users" }, scan)
      .subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

   const handleReprofile = async (xaddress: string, taddress: string, saddress: string, bio: string, preview: string) => { 
    setAvatar(preview);
    profile[0].avatar = preview;
    if (profile[0].xaddress !== xaddress) {
       const updatedProfile = [...profile];  // Create a copy of the array
       updatedProfile[0] = { ...updatedProfile[0], xaddress: xaddress };  // Update the specific element
       setProfile(updatedProfile);
    }
    if (profile[0].taddress !== taddress) {
       const updatedProfile = [...profile];  // Create a copy of the array
       updatedProfile[0] = { ...updatedProfile[0], taddress: taddress };  // Update the specific element
       setProfile(updatedProfile);
    }
    if (profile[0].saddress !== saddress) {
      const updatedProfile = [...profile];  // Create a copy of the array
      updatedProfile[0] = { ...updatedProfile[0], saddress: saddress };  // Update the specific element
      setProfile(updatedProfile);
    }

  }

  return <div className="flex gap-5 h-full">
    <div className="card flex-grow p-0 flex flex-col overflow-hidden">
      <Header>
        <div className="py-3 flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <button onClick={() => navigate(-1)} className="bg-gray-100 text-gray-400 w-8 h-8 circle-item">
              <FaChevronLeft />
            </button>
            { 
              isLoading || profile[0].avatar == null ? <img src={IconUser} className="w-8 h-8 circle" /> :
              <img src={profile[0].avatar} className="w-8 h-8 circle"/>
            }
            <div className="flex gap-3 items-center">
              <span className="font-bold text-base">{profile[0]?.name}</span>
            </div>
          </div>
          <div className="hidden md:flex btn-group light">
            <button className={`btn btn-sm ${activeTab == 'profile' ? 'active' : ''}`} onClick={() => setActiveTab('profile')}>General Information</button>
            <button className={`btn btn-sm ${activeTab == 'calls' ? 'active' : ''}`} onClick={() => setActiveTab('calls')}>Calls</button>
            <button className={`btn hidden btn-sm ${activeTab == 'trade' ? 'active' : ''}`} onClick={() => setActiveTab('trade')}>Trading</button>
          </div>
        </div>
      </Header>
      <div className="m-4 mb-2 sm:m-6 btn-group light sm:hidden justify-center">
        <button className={`btn btn-sm ${activeTab == 'profile' ? 'active' : ''}`} onClick={() => setActiveTab('profile')}>General Information</button>
        <button className={`btn btn-sm ${activeTab == 'calls' ? 'active' : ''}`} onClick={() => setActiveTab('calls')}>Calls</button>
        <button className={`btn hidden btn-sm ${activeTab == 'trade' ? 'active' : ''}`} onClick={() => setActiveTab('trade')}>Trading</button>
      </div>

      {isLoading ? <div className="p-4 sm:p-6 flex flex-col gap-5 flex-grow"> <SkeletonList /></div> :
      <div className="flex-grow relative overflow-hidden">
        {
          activeTab == 'profile' ?
            <GeneralTab myprofile={profile[0]} />
          : activeTab == 'calls' ?
            <CallsTab myprofile={profile[0]} />
          :
            <TradingTab />
        }
      </div>
      }
      
    </div>
  </div>
}

export default ProfileDetail;