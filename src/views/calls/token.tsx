import React, { useState,useEffect } from "react";
import { FaChevronDown, FaChevronLeft, FaChevronRight, FaChevronUp } from "react-icons/fa";
import Token from 'assets/img/sample/token.png';
import { Link, useNavigate, useNavigation } from "react-router-dom";
import TokenTab from "./token/TokenTab";
import CallersTab from "./token/CallersTab";
import DiscussionTab from "./token/DiscussionTab";
import IconDiscussion from 'assets/img/icons/discussion.svg';
import Header from "components/header";
import { checkCall,formatNumber, formatShortAddress, formatTimestamp } from "../../utils/style";
import { SkeletonList, SkeletonRow } from "../../utils/skeleton";
import { MdCheck } from "react-icons/md";
import { showToastr } from "../../toastr";
import { supabase } from "lib/supabase";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { getRankChar } from "../../utils/style";
import { TopHolderType } from "../../cache/CallModal";
import { CallReportType } from "../../cache/calls";
import { useLocation } from "react-router-dom";

const TokenDetail = () => {
 const token = sessionStorage.getItem("accessToken")
  if (!token || token !== "admin") { window.location.href = "/login";}
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'token' | 'callers' | 'discussion'>('token');
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const [top3Holders, setTop3Holders] = useState<TopHolderType[]>([]);
  const [top10HolderInfo, setTop10HolderInfo] = useState<TopHolderType>({ pct: 0, uiAmount: 0 });
  const [isCopied, setIsCopied] = useState(false);
  const [userid, setUserid] = useState("");
  const [paddress, setPaddress] = useState('');  
  const [callersCount, setCallersCount] = useState(0);
  const [topCallers, setTopCallers] = useState([]);
  const [sitem, setSitem] = useState([]);
  const [myUser, setMyUser] = useState([]);
  const [callReport, setCallReport] = useState<CallReportType | null>(null);
  const [ratioVote, setRatioVote] = useState(0);
  const handleCopy = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (isCopied) return;
    setIsCopied(true);
    await navigator.clipboard.writeText(callReport.pairAddress);
    showToastr("Address copied to clipboard!", "success");
    setTimeout(() => setIsCopied(false), 2000);
  }

  useEffect(() => {
       setIsLoading(true);
        const fetchCall = async () => {
          const pairAddress = location.pathname.substring(location.pathname.lastIndexOf('/') + 1).split('?')[0];
          const params = new URLSearchParams(window.location.search);
          const id = params.get("id");
          const myuser = params.get("user");
          setUserid(myuser);
          setPaddress(pairAddress)
          let result = await checkCall(pairAddress);
          if (!result) {
            console.log("Invalid CA", pairAddress);
            return;
          }

          const { data, error } = await supabase
            .from("calls")
            .select("*, users(*)")
            .eq("address", pairAddress)
            .order("addXP", { ascending: false });
          if (error) {
            console.error("Error fetching calls:", error.message);
          } else {
            setCallersCount(data.length);
            const uniqueCallers = Array.from(new Map(data.map(item => [item.user_id, item])).values());
            setTopCallers(uniqueCallers);
          }

          const { error: saveerror } = await supabase
            .from("calls")
            .update({ supply: result.token.supply })
            .eq("address", pairAddress);
          if (saveerror) {
            console.error("Error fetching calls:", error.message);
          } else {
            console.log("upgrade supply seccessful")
          }

          const { data: user, error: usererror } = await supabase
            .from("users")
            .select("*")
            .eq("id", myuser)
            .order("created_at", { ascending: false });
          if (usererror) {
            console.error("Error fetching calls:", usererror.message);
          } else {
            setMyUser(user);
          }

          const { data: ratio, error: ratioerror } = await supabase
            .from("vote")
            .select("*")
            .match({ "call_name": pairAddress, user_id: myuser });
          if (ratioerror) {
            console.error("Fetch failed:", ratioerror);
            return; // Stop execution if there's an error
          }
          if (ratio.length > 0) {
            setRatioVote(ratio[0].ratio)
          } else {
            setRatioVote(0)
          };
    
          const { data: item, error: itemerror } = await supabase
            .from("calls")
            .select("*")
            .eq("id", id)
            .order("created_at", { ascending: false });
          if (itemerror) {
            console.error("Error fetching calls:", itemerror.message);
          } else {
            setSitem(item);
          }

          let _top3Holders: TopHolderType[] = [];
          let _top10HolderInfo: TopHolderType = { pct: 0, uiAmount: 0 };
          result.topHolders.map((holder, index) => {
            if (index < 3) {
              _top3Holders.push(holder);
            }
            if (index < 10) {
              _top10HolderInfo.pct += holder.pct;
              _top10HolderInfo.uiAmount += holder.uiAmount;
            }
          });
          setCallReport(result);
          setTop3Holders(_top3Holders);
          setTop10HolderInfo(_top10HolderInfo);
          setIsLoading(false);
        }
        fetchCall();
    
  }, []);




  return <div className="flex gap-5 h-full">
    <div className="card flex-grow p-0 flex flex-col overflow-hidden">
      <Header>
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-3 items-center">
            <button onClick={() => navigate(-1)} className="bg-gray-100 text-gray-400 w-8 h-8 circle-item">
              <FaChevronLeft />
            </button>
            {isLoading ? <div style={{ width: '300px' }}><SkeletonRow opacity={90} /></div> :<>
              <img src={sitem[0].image} className="w-[59px] h-[59px] circle my-1"/>
              <div className="flex gap-3 items-center">
              <span className="font-bold text-lg">{sitem[0].name}</span>
              </div>
              </>
            }
            
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
        {isLoading ?<div className={`p-4 sm:p-6 flex flex-col gap-5 flex-grow ${isLoading ? 'overflow-hidden loading' : 'overflow-auto'}`} >  <SkeletonList /></div> :<>
        {
          activeTab == 'token' ?
              <TokenTab token={sitem[0]} profile={myUser[0]} top10HolderInfo={top10HolderInfo} top3Holders={top3Holders} callers={callersCount} ratioVote={ratioVote} />
          : activeTab == 'callers' ?
                <CallersTab topCallers={topCallers} />
          :
                <DiscussionTab profile={myUser[0]} paddress={paddress} />
        }</>
      }
      </div>
    </div>
  </div>
}

export default TokenDetail;