
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Token from 'assets/img/sample/token.png';
import IconCopy from 'assets/img/icons/copy.svg';
import Header from "components/header";
import React, { useState, useEffect } from 'react';
import {useSearchParams } from 'react-router-dom';
import { supabase } from "lib/supabase";
import { SkeletonList } from "../../utils/skeleton";
import { CallRow } from "../../../src/views/users/components/profile/CallRow";
// import { checkPrice } from "components/cron/netlify";

const options = ["All Ranks", "Level 1", "Level 2", "Level 3", "Level 4", "Level 5", "Level 6", "Level 7", "Level 8", "Level 9", "Level 10"];

function useOutsideAlerter(ref: any, setX: any): void {
  React.useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setX(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
    // Unbind the event listener on clean up
    document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setX]);
}


const Calls = () => {
  const token = sessionStorage.getItem("accessToken")
  if (!token || token !== "admin") { window.location.href = "/login";}
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<"featured" | "latest">(searchParams.get('type') as "featured" | "latest" || 'latest');
  const [isLoading, setIsLoading] = useState(true);
  const [callList, setCallList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState(searchParams.get('level') || "All Ranks");
  const wrapperRef = React.useRef(null);
 
  useOutsideAlerter(wrapperRef, setIsOpen);
  useEffect(() => {

   setIsLoading(true);
   const fetchCalls = async () => {
   const { data, error } = await supabase
        .from("calls")
        .select("*, users(*)")
        .order("updated_at", { ascending: false })
     if (error) {
        console.error("Error fetching calls:", error.message);
        return;
     }
     if (activeTab==null || activeTab == "latest") {
       if (filters == "All Ranks" || filters == null) {
         setCallList(data.filter(call => call.is_featured === false));
         }
       else {
         setCallList((data.filter(call => call.is_featured === false)).filter(call => call.users.rank === parseInt(filters.slice(6, 8), 10)));
       }
     }
     else if (activeTab == "featured") {
       if (filters == "All Ranks" || filters ==null) {
         setCallList(data.filter(call => call.is_featured === true));
       }
       else {
         setCallList((data.filter(call => call.is_featured === true)).filter(call => call.users.rank === parseInt(filters.slice(6, 8), 10)));
       }
     }
       setIsLoading(false);
    }
    fetchCalls();   
   const interval = setInterval(() => {
    fetchCalls();   
    // checkPrice();
    }, 20000);
    
   const channel  = supabase
      .channel("my_calls")
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "calls" }, fetchCalls)
      .subscribe();
     return () => {
      supabase.removeChannel(channel );
      clearInterval(interval);
    };
  }, [filters,activeTab]);

  const featuredlist = () => {
    setActiveTab("featured");
    setSearchParams({ type: "featured", level: filters });
  }
  
  const lastestlist = () => {
    setActiveTab("latest");
    setSearchParams({ type: "latest",level: filters });
  }
  
  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (op: string): void =>{
    setFilters(op);
    setSearchParams({ type:activeTab, level: op });
    setIsOpen(false);
  };

  return (<>
    <div className="flex gap-5 h-full">
      <div className="card flex-grow p-0 flex flex-col overflow-hidden">
        <Header>
          <div className="py-3 flex justify-between items-center">
            <div className='btn-group lighter'>
              <button className={`btn btn-sm ${activeTab == 'featured' ? 'active' : ''}`} onClick={() => featuredlist()}>Featured</button>
              <button className={`btn btn-sm ${activeTab == 'latest' ? 'active' : ''}`} onClick={() => lastestlist()} >Latest</button>
            </div>
            <div ref={wrapperRef} className="relative inline-block text-left">
        <button
        className="flex rounded-full items-center bg-primary/20 text-primary px-3 py-2 hover:bg-primary/30 text-xs md:text-base"
        onClick={toggleDropdown}>
        <span className="text-primary/30 mr-2">Show</span> <span>{filters}</span>
        <AiFillCaretDown className="text-primary/30 ml-1" /></button>
        {isOpen && (
          <div className="absolute left-1/2 transform -translate-x-1/2 mt-1 w-36 text-white overflow-hidden rounded-sm pb-2 z-10 text-sm bg-neutral-800 shadow-lg">
          {options.map((op) => (
            <button
              key={op}
              className={`block w-full px-4 py-2.5 text-left hover:text-black hover:bg-primary/50 ${filters == op ? 'bg-primary/50 text-black' : ''}`}
              onClick={() => handleSelect(op)}>
              {op}
            </button>
              ))}
          </div>
        )}
        </div>
          </div>
        </Header>
        <div className='m-4 mb-2 sm:m-6 px-3 py-2 rounded-full bg-gray-100 text-white flex sm:hidden items-center gap-2 ml-auto'>
          <span className='text-sm sm:text-base text-gray-500 font-semibold'>Shows</span>
          <span className='text-sm sm:text-base font-semibold'>Shows</span>
          <span className='text-sm text-gray-500'><AiFillCaretDown /></span>
        </div>
        <div className="p-4 sm:p-6 flex flex-col gap-3 overflow-auto flex-grow" onClick={() => setIsOpen(false)}>
          { isLoading || !callList.length ?
          <SkeletonList />
         : 
          callList.map((item) => <CallRow call={item} key={item.id} />)
        }
        </div>
      </div>
    </div>
  </>
  );
}

export default Calls;