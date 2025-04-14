import React, { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getMultiplierType, getRankChar } from "utils/style";
import IconUser from 'assets/img/icons/user.svg';
import EditDiscussionModal from "../../components/modal/EditDiscussionModal";
import { MdEdit } from "react-icons/md";
import Header from "components/header";
import { useEffect } from 'react';
import { supabase } from "lib/supabase";
import { formatShortAddress, formatTimestamp } from "../../utils/style";
import { SkeletonList, SkeletonRow } from "../../utils/skeleton";

const Dashboard = () => {
  const token = sessionStorage.getItem("accessToken")
  if (!token || token !== "admin") { window.location.href = "/login";}
  const [activeTab, setActiveTab] = useState<'featured' | 'latest'>('featured');
  const [filter, setFilter] = useState("All Ranks");
  const [isLoading, setIsLoading] = useState(true);
  const [notifications, setNotifications] = useState([]);
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const [newcomment, setNewcomment] = useState(''); 
  const [commentID, setCommentID] = useState(''); 
  const [commentUser, setCommentUser] = useState({}); 
  const [updatedcomment, setUpdatedcomment] = useState('');
  const [indexnumber, setIndexnumber] = useState(null);

  const saveNewcomment = async(id:string, news:string) => {
    const { error: updateError } = await supabase
          .from("notifications")
          .update({ comment:news })
          .eq("id", id);
        if (updateError) {
          console.error("Update failed:", updateError);
        } else {
          setUpdatedcomment(news);
        }
  }
  useEffect(() => {
    setIsLoading(true)
     const scan = async () => {
       const { data:allnotifications, error:allnotificationserror } = await supabase
              .from("notifications")
              .select("*,users(*)")
              .order("created_at", { ascending: false });
           if (allnotificationserror) {
              console.error("Fetch failed:", allnotificationserror);
              return; 
              }
           if (allnotifications.length > 0) {
             setNotifications(allnotifications)
           } 
     };
    scan(); 
    setIsLoading(false)
  }, []);
  
  return (<>
    <div className="flex gap-5 h-full">
      <div className="card flex-grow p-0 flex flex-col overflow-hidden">
        <Header>
          <div className="py-3 flex justify-between items-center">
            <div className='ml-auto px-3 py-2 rounded-full bg-gray-100 text-white flex items-center gap-2'>
              <span className='text-sm sm:text-base font-semibold'>7 days</span>
              <span className='text-sm text-gray-500'><AiFillCaretDown /></span>
            </div>
          </div>
        </Header>
        
        <div className="p-4 sm:p-6 flex flex-col gap-5 overflow-auto flex-grow">
          
          <div className="p-6 space-y-2 bg-gray-50 rounded  flex-col gap-5 flex-grow ">
            <div className="text-md font-semibold">Latest notifications</div>
            {isLoading || ! notifications.length ?<div className=""><SkeletonList/></div>:
            <div>
              {notifications.map((item, index) => (<Link to="" key={index}>
                <div className="flex gap-4 py-4 border-b-[1px]">
                  {
                  isLoading==true || item.users.avatar==null? <div className="relative w-8 h-8 sm:w-[50px] sm:h-[50px] bg-black circle hidden sm:flex items-center justify-center">
                      <img src={IconUser} className="w-2 h-2 sm:w-4 sm:h-4" />
                    </div> :
                    <div className="relative w-8 h-8 sm:w-[50px] sm:h-[50px] bg-black circle hidden sm:flex items-center justify-center">
                      <img src={item.users.avatar} className="w-8 h-8 sm:w-[50px] sm:h-[50px] bg-black circle-item" />
                    </div>
                  }
                  
                  <div className="space-y-2 grow">
                    <div className="flex gap-2 items-center">
                      <div className={"circle-item min-w-7 w-7 h-7 bg-red-300 text-black text-sm font-bold badge-rank-" + item.users.rank}></div>
                      <div className="flex gap-x-2 items-center flex-wrap">
                        <span className="font-bold text-gray-600">{item.users.name}</span>
                        <span className="text-xs text-gray-600">{item.users.winrate}%</span>
                        <span className="text-xs text-gray-600 bold">{item.title}</span>
                        <div className="text-sm text-gray-600">{ formatTimestamp(item.created_at)} ago</div>
                      </div>
                      <div className="ml-auto">
                        {/* <button className="btn btn-edit" onClick={() => { setIsEditProfileModalOpen(true); setNewcomment(item.comment); setCommentID(item.id); setCommentUser(item.users); setIndexnumber(index); }}>
                          <MdEdit className="" size={16} /> <span className="hidden sm:block ml-1">Edit</span>
                        </button> */}
                      </div>
                    </div>
                    <div className="text-sm">{item.content}</div>
                  </div>
                </div>
              </Link>
              ))}
            </div>}
          </div>
        </div>
      </div>
    </div>
    {/* <EditDiscussionModal comment={newcomment} user={commentUser} id={commentID} isOpen={isEditProfileModalOpen}  onOk={() => setIsEditProfileModalOpen(false)} onCancel={() => setIsEditProfileModalOpen(false)} onChange={(id,news) => saveNewcomment(id,news)}  /> */}
  </>
  );
}

export default Dashboard;