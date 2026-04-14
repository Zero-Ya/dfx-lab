// Imports
import { useState, useEffect, useRef } from 'react'

import { newsData } from '../data-storage/newsData';

import NewsBox from "../components/NewsBox"

const News = () => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut: ReturnType<typeof setTimeout>;

  const newsLength = newsData.length;

  const scrollbarRef = useRef<HTMLDivElement>(null);

  const slideRight = () => {
    current >= newsLength - 1 ? setCurrent(0) : setCurrent(current + 1);
  };

    const slideLeft = () => {
    current <= 0 ? setCurrent(newsLength - 1) : setCurrent(current - 1);
  };

  useEffect(() => {
    autoPlay &&
    (timeOut = setTimeout(() => {
      slideRight();
    }, 3000))
  })

  useEffect(() => {
    if (!scrollbarRef.current) return;
    const boxWidthPos = scrollbarRef.current.scrollWidth / newsLength;
    scrollbarRef.current.scrollLeft = boxWidthPos * current;
  })

  return (
    <div className="flex text-[14px] flex-col gap-4 justify-center items-center pt-14 min-[600px]:pt-20 min-[800px]:pt-24"> 
      {/* Previously pt-10 min-[600px]:pt-16 min-[800px]:pt-20 */}
      {/* <hr className="w-full h-[1.5px] bg-black shadow-2xl border-0 rounded-xl"/> */}
      <div className="w-full font-montserrat-semibold text-left text-[14px] min-[600px]:text-[26px] min-[800px]:text-[30px] min-[1024px]:text-[34px] pl-6 min-[600px]:pl-12">What's New</div>

      <div className="flex size-full relative">

      <div onMouseEnter={() => {
          setAutoPlay(false);
          clearTimeout(timeOut);
        }}
        onMouseLeave={() => setAutoPlay(true)}
        ref={scrollbarRef}
        className="flex w-full h-50 min-[600px]:h-80 rounded-xl shadow-xl bg-black min-[800px]:overflow-x-hidden overflow-x-scroll overflow-y-hidden min-[800px]:snap-none snap-x min-[800px]:snap-proximity snap-mandatory min-[800px]:scroll-auto scroll-smooth no-scrollbar relative">
        {newsData.map((item, index) => (
          <NewsBox key={item.id} current={current} index={index} item={item} />
        ))}
        <div onClick={slideLeft} className={`${autoPlay && "min-[800px]:hidden"} hidden select-none text-[28px] text-white size-4 min-[600px]:size-8 pb-2 pl-0 min-[800px]:flex justify-center items-center absolute top-1/2 left-5 -translate-y-1/2 border-white border rounded-full cursor-pointer`}>&lsaquo;</div>
        <div onClick={slideRight} className={`${autoPlay && "min-[800px]:hidden"} hidden select-none text-[28px] text-white size-4 min-[600px]:size-8 pb-2 pl-0.5 min-[800px]:flex justify-center items-center absolute top-1/2 right-5 -translate-y-1/2 border-white border rounded-full cursor-pointer`}>&rsaquo;</div>
      </div>

      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 translate-y-0">
        {newsData.map((item, index) => 
        <div key={item.id} onClick={() => setCurrent(index)} className={`size-2 m-1 border border-white cursor-pointer rounded-full inline-block ${index == current && "bg-white"}`}>
        </div>)}
      </div>

      </div>

    </div>
  )
}

export default News
