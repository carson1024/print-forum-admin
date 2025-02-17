import IconTwitter from 'assets/img/icons/twitter.svg';
import IconTelegram from 'assets/img/icons/telegram.svg';
import IconSolana from 'assets/img/icons/solana.svg';
import { AiFillCaretDown } from 'react-icons/ai';
import { useState } from 'react';
import { IoCheckmark } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import CopyingModal from 'components/modal/CopyingModal';
import AllCopiersModal from 'components/modal/AllCopiersModal';

const TradingTab = () => {
  const [isCopying, setIsCopying] = useState(false);
  const [isCopyingModalOpen, setIsCopyingModalOpen] = useState(false);
  const [isAllCopiersModalOpen, setIsAllCopiersModalOpen] = useState(false);

  return (<>
    <div className="overflow-auto h-full">
      <div className="space-y-6 p-6">
        <div className="">
          <div className="flex-grow space-y-6">
            <div className='p-5 bg-gray-50 rounded-[22px] space-y-5'>
              <div className='flex justify-between items-center'>
                <span className='font-semibold text-md'>Overview</span>
                <div className='px-2.5 py-1.5 rounded-full bg-gray-100 text-white flex items-center gap-2'>
                  <span className='text-sm font-semibold'>7 days</span>
                  <span className='text-sm text-gray-500'><AiFillCaretDown /></span>
                </div>
              </div>
              <div className='border border-gray-100'></div>
              <div className='grid grid-cols-3 gap-8'>
                <div className='space-y-4'>
                  <div className='flex justify-between items-center'>
                    <span className='font-semibold'>Performance</span>
                  </div>
                  <div className='flex flex-wrap gap-4'>
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-gray-600">ROI</span>
                      <span className="text-xs text-green-600">+ 13.00</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-gray-600">PNL</span>
                      <span className="text-xs text-green-600">+20 SOL</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-gray-600">Sharpe Ratio</span>
                      <span className="text-xs text-white">3.98</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-gray-600">MDD</span>
                      <span className="text-xs text-white">4.60%</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-gray-600">Win Rate</span>
                      <span className="text-xs text-white">100.00%</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-gray-600">Win Days</span>
                      <span className="text-xs text-white">58</span>
                    </div>
                  </div>
                </div>
                <div className='space-y-4'>
                  <div className='flex'>
                    <span className='font-semibold'>Lead Trader Overview</span>
                  </div>
                  <div className='flex flex-wrap gap-4'>
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-gray-600">Copier PnL</span>
                      <span className="text-xs text-red-400">-17 SOL</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-gray-600">Leading Balance</span>
                      <span className="text-xs text-white">5 SOL</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-gray-600">AUM</span>
                      <span className="text-xs text-white">4 SOL</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-gray-600">Profit Sharing</span>
                      <span className="text-xs text-white">10%</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-gray-600">Minimum Copy Amount</span>
                      <span className="text-xs text-white">0.5 SOL</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-gray-600">Last Trade</span>
                      <span className="text-xs text-white">2025-01-16 09:05</span>
                    </div>
                  </div>
                </div>
                <div className='space-y-4'>
                  <div className='flex justify-between items-center'>
                    <span className='font-semibold'>Finances</span>
                  </div>
                  <div className='flex flex-wrap gap-2'>
                    <div className='px-3 py-1.5 rounded-full bg-gray-100 text-white flex items-center gap-2'>
                      <span className='text-sm font-semibold text-gray-600'>Trader profit</span>
                      <span className='text-sm font-semibold text-green-600'>2 SOL</span>
                    </div>
                    <div className='px-3 py-1.5 rounded-full bg-gray-100 text-white flex items-center gap-2'>
                      <span className='text-sm font-semibold text-gray-600'>Followers</span>
                      <span className='text-sm font-semibold text-white'>12</span>
                    </div>
                    <div className='px-3 py-1.5 rounded-full bg-gray-100 text-white flex items-center gap-2'>
                      <span className='text-sm font-semibold text-gray-600'>TFA</span>
                      <span className='text-sm font-semibold text-white'>12 SOL</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='border border-gray-100'></div>
              <div className='space-y-3'>
                <div className='flex justify-between items-center'>
                  <div className='flex gap-2 items-center'>
                    <span className='text-sm font-semibold'>Top Copiers</span>
                    <span className='text-xs text-gray-600'>{'(Amount locked / Profit)'}</span>
                  </div>
                  <button className='text-primary text-xs font-normal hover:text-primary/80' onClick={() => setIsAllCopiersModalOpen(true)}>View All</button>
                </div>
                <div className='flex flex-wrap gap-4'>
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-gray-600">UsernameLong</span>
                    <span className="text-xs text-green-600">9/0.3 SOL</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-gray-600">cv9r69ww</span>
                    <span className="text-xs text-green-600">9/0.3 SOL</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-gray-600">UsernameLong</span>
                    <span className="text-xs text-green-600">9/0.3 SOL</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-gray-600">cv9r69ww</span>
                    <span className="text-xs text-green-600">9/0.3 SOL</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-gray-600">UsernameLong</span>
                    <span className="text-xs text-green-600">9/0.3 SOL</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-gray-600">cv9r69ww</span>
                    <span className="text-xs text-green-600">9/0.3 SOL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className='flex items-center justify-between mt-10 mb-5'>
            <h3 className="text-md font-bold">Trades</h3>
            <div className="btn-group light">
              <button className="btn btn-sm text-base active">Active</button>
              <button className="btn btn-sm text-base">Past</button>
            </div>
          </div>
          <div className="space-y-3">
            {
              Array(2).fill(0).map((value, index) => <div className="bg-gray-50 rounded-full text-sm px-4 py-3 flex items-center gap-5">
                <div className="w-[5%]">
                  {
                    index % 2 == 0 ?
                      <button className="rounded-full bg-green-600 text-black px-1.5 py-1 text-xs">Buy</button>
                    :
                      <button className="rounded-full bg-red-400 text-white px-1.5 py-1 text-xs">Sell</button>
                  }
                </div>
                <div className="w-[20%]">
                  {
                    index % 2 == 0 ? <span className='text-primary text-sm font-bold'>Self Trade</span>
                    :
                    <div className="flex gap-2 items-center">
                      <span className="badge-rank-8"></span>
                      <div className="space-y-1">
                        <div className="flex gap-2 text-xs">
                          <span className="text-gray-600">Rank 5</span>
                          <span className="text-primary">COPYING</span>
                        </div>
                        <p className="text-sm font-bold">UsernameLong</p>
                      </div>
                    </div>
                  }
                </div>
                <div className="w-[7%] space-y-1">
                  <p className="text-xs text-white/60">Pair</p>
                  <p className="text-xs text-white">UNIUSDT</p>
                </div>
                <div className="w-[7%] space-y-1">
                  <p className="text-xs text-white/60">Executed</p>
                  <p className="text-xs text-white">7.87 UNI</p>
                </div>
                <div className="w-[7%] space-y-1">
                  <p className="text-xs text-white/60">Total</p>
                  <p className="text-xs text-white">0.01 SOL</p>
                </div>
                <div className="w-[7%] space-y-1">
                  <p className="text-xs text-white/60">Role</p>
                  <p className="text-xs text-white">Taiker</p>
                </div>
                <div className="grow text-gray-600 text-right">
                  2025-01-16 15:45:17
                </div>
              </div>)
            }
          </div>
        </div>
      </div>
    </div>
    <CopyingModal isOpen={isCopyingModalOpen} onOk={() => {
      setIsCopyingModalOpen(false);
      setIsCopying(true)
    }} onCancel={() => setIsCopyingModalOpen(false)} />
    <AllCopiersModal isOpen={isAllCopiersModalOpen} onClose={() => setIsAllCopiersModalOpen(false)} />
  </>);
}

export default TradingTab;