import React, { useEffect,useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getMultiplierType, getRankChar } from "utils/style";
import IconUser from 'assets/img/icons/user.svg';
import { MdEdit } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import Header from "components/header";
import { supabase } from "lib/supabase";
import { SkeletonList,SkeletonRow } from "../../utils/skeleton";
const Users = () => {
  const token = sessionStorage.getItem("accessToken")
  if (!token || token !== "admin") { window.location.href = "/login";}
  const [activeTab, setActiveTab] = useState<'featured' | 'latest'>('featured');
  const [filter, setFilter] = useState("");
  const [users, setUsers] = useState([]);
  const [saveusers, setSaveUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
  setIsLoading(true);
  const fetchCalls = async () => {
  const { data, error } = await supabase
        .from("users")
        .select("*")
        .order('rank', { ascending: false })  // higher rank first
        .order('winrate', { ascending: false }); 
      if (error) {
        console.error("Error fetching calls:", error.message);
        return;
      }
    if (data.length > 0) { setUsers(data); setSaveUsers(data);  setIsLoading(false); }
     }
    fetchCalls();   
    
  }, []);
  const handleSearch = () => { 
    const newdata = saveusers.filter(user => user.name.includes(filter) === true);
    setUsers(newdata);
  }




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
                onChange={(e) => setFilter(e.target.value)}
                onKeyDown={(e) => {
                   if (e.key === 'Enter') {
                   handleSearch();
                }
                }}
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
          {
            isLoading || !users.length ? (<><SkeletonRow opacity={90} /><SkeletonRow opacity={90} /><SkeletonRow opacity={90} /><SkeletonRow opacity={70} /><SkeletonRow opacity={50} /><SkeletonRow opacity={30} /></>)
              : (
                <>
                  {users.map((user, index) => (<Link to={`/admin/profile?id=${user.id}`} key={index}>
                    <div className="bg-gray-50 p-3 rounded-full flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className={`badge-rank-${user.rank}`}></span>
                        <div className="space-y-0.5">
                          <div className="text-xs text-gray-600">Rank {user.rank }</div>
                          <div className="flex gap-1 items-center">
                            <span className="font-bold text-sm">{user.name}</span>
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
                </>
              )}
        </div>
      </div>
    </div>
  </>
  );
}

export default Users;