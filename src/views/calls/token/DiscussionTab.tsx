import IconTwitter from 'assets/img/icons/twitter.svg';
import IconTelegram from 'assets/img/icons/telegram.svg';
import IconSolana from 'assets/img/icons/solana.svg';
import { FaChevronDown, FaChevronRight, FaChevronUp } from "react-icons/fa";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { IoMdCopy } from "react-icons/io";
import Token from 'assets/img/sample/token.png';
import IconCopy from 'assets/img/icons/copy.svg';
import { Link } from "react-router-dom";
import IconUser from 'assets/img/icons/user.svg';
import IconSend from 'assets/img/icons/send.svg';
import { MdEdit } from 'react-icons/md';
import { useState } from 'react';
import EditDiscussionModal from 'components/modal/EditDiscussionModal';
import EditDiscussionAdminModal from 'components/modal/EditDiscussionAdminModal';
import { useEffect } from 'react';
import { supabase } from "lib/supabase";
import { formatShortAddress, formatTimestamp } from "../../../utils/style";
import { SkeletonList, SkeletonRow } from "../../../utils/skeleton";

const DiscussionTab = ({
  profile,
  paddress
}: {
  profile: any,
  paddress:string,
  }) => {
  const [isEditDiscussionModalOpen, setEditDiscussionModalOpen] = useState(false);
  const [isEditDiscussionAdminModalOpen, setEditDiscussionAdminModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState([]);
  const [calls, setCalls] = useState([]);
  const [comments, setComments] = useState([]);
  const [admincomments, setAdminComments] = useState([]);
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const [newcomment, setNewcomment] = useState(''); 
  const [commentID, setCommentID] = useState(''); 
  const [commentUser, setCommentUser] = useState({}); 
  const [adminComment, setAdminComment] = useState('');
  const [indexnumber, setIndexnumber] = useState(null);
  const [indexadminnumber, setIndexAdminnumber] = useState(null);

  const saveNewcomment = async(id:string, news:string) => {
      const { error: updateError } = await supabase
            .from("comments")
            .update({ comment:news })
            .eq("id", id);
          if (updateError) {
            console.error("Update failed:", updateError);
          } else {
            setComments(prevComments => {
            const updated = [...prevComments];
            updated[indexnumber] = { ...updated[indexnumber], comment: news };
            return updated;
            });
          }
  }

    const saveNewAdmincomment = async(id:string, news:string) => {
      const { error: updateError } = await supabase
            .from("admincomments")
            .update({ comment:news })
            .eq("id", id);
          if (updateError) {
            console.error("Update failed:", updateError);
          } else {
            setAdminComments(prevComments => {
            const updated = [...prevComments];
            updated[indexadminnumber] = { ...updated[indexadminnumber], comment: news };
            return updated;
            });
          }
      }

        const adminsend = async () => {
        const { data: admindata, error: insertError } = await supabase
        .from("admincomments")
        .insert({ comment: adminComment, address: paddress })
        .select(); // 👈 make sure to include this so Supabase returns the inserted row(s)

      if (insertError) {
        console.error("Insert failed:", insertError);
      } else if (admindata && admindata.length > 0) {
        setAdminComment("");

        // Use the returned row directly
        admincomments.push({
          address: paddress,
          comment: adminComment,
          created_at: new Date(admindata[0].created_at), // or use Date.now() if you prefer
          id: admindata[0].id,
        });
      }
  }

  useEffect(() => {
    setIsLoading(true)
     const scan = async () => {
    
       const { data:allcomments, error:allcommentserror } = await supabase
              .from("comments")
              .select("*,users(*)")
              .eq("address",paddress)
              .order("created_at", { ascending: false });
           if (allcommentserror) {
              console.error("Fetch failed:", allcommentserror);
              return; 
              }
           if (allcomments.length > 0) {
             setComments(allcomments)

       } 
       const { data:alladmincomments, error:alladmincommentserror } = await supabase
              .from("admincomments")
              .select("*")
              .eq("address",paddress)
              .order("created_at", { ascending: false });
           if (alladmincommentserror) {
              console.error("Fetch failed:", alladmincommentserror);
              return; 
              }
           if (alladmincomments.length > 0) {
             setAdminComments(alladmincomments)
              } 
       setIsLoading(false)
     };
    scan(); 
    
  }, []);

  return (<>
    <div className="p-4 sm:p-6 h-full flex flex-col space-y-3 overflow-hidden">
      <div className="flex-grow overflow-auto">
        <div className='flex flex-col'>
          {isLoading ?<div ><SkeletonList /></div> :
            <div>
              {
                comments.map((item,index) => <div className="flex gap-3 sm:gap-4 border-b-[1px] border-gray-100 py-3">
                    <div className="w-9 h-9 sm:w-[50px] sm:h-[50px] bg-black circle-item">
                      { 
                        item.users.avatar !==null? <img src={item.users.avatar} className="w-9 h-9 sm:w-[50px] sm:h-[50px] bg-black circle-item" />:
                        <img src={IconUser} className="w-2.5 h-2.5" /> 
                      }
                     </div>
                     <div className="space-y-1 flex-grow">
                      <div className="flex justify-between items-center">
                      <div className="flex gap-1 items-center">
                        <div className="circle-item w-7 h-7 bg-red-300 text-black text-sm font-bold">V</div>
                        <span className="font-bold text-sm text-gray-600">{item.users.name}</span>
                        <span className="text-xs text-gray-600">{item.users.winrate}%</span>
                        <span className="text-sm text-gray-600">{formatTimestamp(item.created_at)}</span>
                      </div>
                      <button className="btn btn-edit" onClick={() => { setEditDiscussionModalOpen(true); setNewcomment(item.comment); setCommentID(item.id); setCommentUser(item.users); setIndexnumber(index); }}>
                        <MdEdit className="mr-1" size={16} /> <span className='hidden sm:block'>Edit</span>
                      </button>
                    </div>
                    <p className='text-sm sm:text-base !leading-[135%]'>
                      {item.comment}
                    </p>
                   </div>
                </div>)
              }

              {
                admincomments.map((item,index) => <div className="flex gap-3 sm:gap-4 border-b-[1px] border-gray-100 py-3">
                    <div className="w-9 h-9 sm:w-[50px] sm:h-[50px] bg-black circle-item">
                        <img src={IconUser} className="w-2.5 h-2.5" /> 
                     </div>
                     <div className="space-y-1 flex-grow">
                      <div className="flex justify-between items-center">
                      <div className="flex gap-1 items-center">
                        <div className="circle-item w-7 h-7 bg-red-300 text-black text-sm font-bold">V</div>
                        <span className="font-bold text-sm text-gray-600">Administrator</span>
                        <span className="text-sm text-gray-600">{formatTimestamp(item.created_at)}</span>
                      </div>
                      <button className="btn btn-edit" onClick={() => { setEditDiscussionAdminModalOpen(true); setNewcomment(item.comment); setCommentID(item.id); setIndexAdminnumber(index); }}>
                        <MdEdit className="mr-1" size={16} /> <span className='hidden sm:block'>Edit</span>
                      </button>
                    </div>
                    <p className='text-sm sm:text-base !leading-[135%]'>
                      {item.comment}
                    </p>
                   </div>
                </div>)
              }
            </div>
          }
        </div>
      </div>
      <div className="relative rounded-full bg-gray-100 px-12 py-2 flex items-center">
        <div className="absolute left-1 flex items-center">
          <div className="relative w-8 h-8 bg-black circle-item">
            <img src={IconUser} className="w-2.5 h-2.5" />
          </div>
        </div>
        <input type="text" className="w-full bg-transparent outline-none text-white" placeholder="Add a comment..." value={adminComment} onChange={(e)=>setAdminComment(e.target.value)}/>
        <div className="absolute right-3 flex items-center">
          <button onClick={adminsend}>
            <img src={IconSend} className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
    <EditDiscussionAdminModal comment={newcomment} id={commentID} isOpen={isEditDiscussionAdminModalOpen} onCancel={() => setEditDiscussionAdminModalOpen(false)} onOk={() => setEditDiscussionAdminModalOpen(false)} onChange={(id,news) => saveNewAdmincomment(id,news)} />
    <EditDiscussionModal comment={newcomment} user={commentUser} id={commentID} isOpen={isEditDiscussionModalOpen} onCancel={() => setEditDiscussionModalOpen(false)} onOk={() => setEditDiscussionModalOpen(false)} onChange={(id, news) => saveNewcomment(id, news)} />
  </>);
}

export default DiscussionTab;