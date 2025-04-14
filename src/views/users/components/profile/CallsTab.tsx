import IconTwitter from 'assets/img/icons/twitter.svg';
import IconTelegram from 'assets/img/icons/telegram.svg';
import IconSolana from 'assets/img/icons/solana.svg';
import { FaChevronDown, FaChevronRight, FaChevronUp } from "react-icons/fa";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { IoMdCopy } from "react-icons/io";
import Token from 'assets/img/sample/token.png';
import IconCopy from 'assets/img/icons/copy.svg';
import { Link } from "react-router-dom";
import { supabase } from "lib/supabase";
import { useState, useEffect } from 'react';
import { formatNumber, formatShortAddress, formatTimestamp } from "../../../../utils/style"
import { SkeletonList, SkeletonRow } from "../../../../utils/skeleton";
import { MdCheck } from "react-icons/md";
import { showToastr } from "../../../../toastr";
import { CallRow } from "./CallRow";
type Props = {
  myprofile: {
    id: string;
    name: string;
    email: string;
    avatar: string;
    xp: string;
    rank: string;
    winrate: string;
    callcount: string;
    achievements: string;
    created_at: string;
    taddress: string;
    xaddress: string;
    saddress: string;
    bio: string;
  };
};

const CallsTab = ({ myprofile }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [calls, setCalls] = useState([]);
  const [isCopied, setIsCopied] = useState(false);
  
  useEffect(() => {
     setIsLoading(true);
     const scan = async () => {
      const { data, error } = await supabase
          .from("calls")
          .select("*")
          .match({ "user_id": myprofile.id })
          .order("created_at", { ascending: false });
      if (error) {
          console.error("Fetch failed:", error);
          return; // Stop execution if there's an error
          }
       if (data.length > 0) {
         setCalls(data);
         setIsLoading(false);
       }
     };
      scan(); 
  
      const channel = supabase
        .channel("my_calls")
        .on("postgres_changes", { event: "INSERT", schema: "public", table: "calls" }, scan)
        .subscribe();
      return () => {
        supabase.removeChannel(channel);
      };
  }, []);

  return (<>
    <div className="p-4 sm:p-6 h-full flex flex-col space-y-3">
      <div className="flex-grow overflow-auto">
        <div className='flex flex-col gap-3'>
          { isLoading || !calls.length ?
          <SkeletonList />
         : 
          calls.map((item) => <CallRow call={item} key={item.id} />)
        }
        
        </div>
      </div>
    </div>
  </>);
}

export default CallsTab;