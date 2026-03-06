// Imports
import { useState, useEffect } from 'react'

import { newsData } from '../data-storage/newsData';

import NewsBox from "../components/NewsBox"

const News = () => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut: ReturnType<typeof setTimeout>;

  const newsLength = newsData.length;

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

  return (
    <div className="flex text-[16px] flex-col gap-4 justify-center items-center pt-10 min-[600px]:pt-16 min-[800px]:pt-20">
      <hr className="w-full h-[1.5px] bg-black"/>
      <div className="w-full text-left text-[16px] min-[600px]:text-[28px] min-[800px]:text-[32px] min-[1024px]:text-[36px] pl-8 min-[600px]:pl-12">What's New</div>

      <div onMouseEnter={() => {
          setAutoPlay(false);
          clearTimeout(timeOut);
        }}
        onMouseLeave={() => setAutoPlay(true)}
        className="w-full h-80 rounded-xl bg-black relative overflow-hidden">
        {newsData.map((item, index) => (
          <NewsBox key={item.id} current={current} index={index} item={item} />
        ))}
        <div onClick={slideLeft} className={`${autoPlay && "hidden"} select-none text-3xl text-white size-4 min-[600px]:size-8 pb-2.25 flex justify-center items-center absolute top-1/2 left-5 -translate-y-1/2 border-white border rounded-full cursor-pointer`}>&lsaquo;</div>
        <div onClick={slideRight} className={`${autoPlay && "hidden"} select-none text-3xl text-white size-4 min-[600px]:size-8 pb-2.25 flex justify-center items-center absolute top-1/2 right-5 -translate-y-1/2 border-white border rounded-full cursor-pointer`}>&rsaquo;</div>

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
