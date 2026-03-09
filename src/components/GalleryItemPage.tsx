// Imports
import { useState, useRef, useEffect } from "react";
import { Link, useParams, ScrollRestoration } from "react-router-dom"
import Topbar from "../main-components/Topbar"
import Footer from "../main-components/Footer";
import { galleryData } from "../data-storage/galleryData";

const GalleryItemPage = () => {
  const [scrollLeft, setScrollLeft] = useState(0);

  const [isSlidingLeft, setIsSlidingLeft] = useState(false);
  const [isSlidingRight, setIsSlidingRight] = useState(false);

  const swiperRef = useRef<HTMLDivElement>(null);

  const { id: itemId } = useParams();
  
  const galleryItem = (galleryData.filter((item) => item.id.toString() === itemId))[0];
  const otherItems = galleryData.filter((item) => item.id.toString() !== itemId);

  const handleOnScroll = () => {
    if (!swiperRef.current) return;
    setScrollLeft(swiperRef.current.scrollLeft);
  }

  //
  // Slider buttons 

  const handleSliderUp = (type: string) => {
    type === 'right' ? setIsSlidingRight(false) : setIsSlidingLeft(false);
  }

  const handleSliderDown = (type: string) => {
    type === 'right' ? setIsSlidingRight(true) : setIsSlidingLeft(true);
  }

  useEffect(() => {
    scrollLeft
    if (!swiperRef.current) return;
    isSlidingRight && (swiperRef.current.scrollLeft += 5);
    isSlidingLeft && (swiperRef.current.scrollLeft -= 5);
  })

  //

  useEffect(() => {
    if (!swiperRef.current) return;
    swiperRef.current.scrollLeft = 0;
  }, []);

  return (
    <>
    <Topbar />
    <div className="flex flex-col gap-6 min-[600px]:gap-10 m-4 text-[12px] min-[600px]:text-[14px] min-[800px]:text-[16px] min-[1024px]:text-[20px]">

      <div className="flex flex-col px-2 min-[600px]:px-8 gap-6 pt-16 min-[800px]:pt-28">
        <div className="flex flex-col min-[600px]:flex-row gap-4 min-[600px]:gap-6 min-[800px]:gap-8">
          <div className="flex justify-center items-center bg-gray-100 flex-2 rounded-xl w-full overflow-hidden">
            <img className="w-full rounded-xl" src={galleryItem.imageData} />
          </div>

          <div className="flex flex-1 flex-col gap-4 border border-gray-100 shadow-xl p-2 rounded-xl">
            <div className="flex text-[16px] min-[600px]:text-[20px] min-[800px]:text-[24px] min-[1024px]:text-[28px] flex-col gap-2">{galleryItem.name}</div>

            <div className="flex flex-col gap-2 h-full">
              <div>Date: {galleryItem.date}</div>
              <div>Equipment: {galleryItem.equipment}</div>
              <div>Description: {galleryItem.description}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex justify-center">Other diagrams</div>

        <div className="w-full h-full relative">
          <div ref={swiperRef}
            onScroll={() => handleOnScroll()}
            className="w-full min-[600px]:w-5/6 min-[1024px]:w-4/5 flex mx-auto gap-4 overflow-x-auto no-scrollbar relative">
            {otherItems.map((item) => (
              <Link className="flex flex-col gap-1 items-center w-1/2 min-[600px]:w-1/4 h-full grow-0 shrink-0" to={`/gallery/${item.id}`}>
                <div className="flex w-full h-28 justify-center items-center bg-gray-200 rounded-xl">
                  <img className="h-full rounded-xl" src={item.imageData} />
                </div>
                <div className="text-[10px] min-[600px]:text-[12px] min-[800px]:text-[14px] min-[1024px]:text-[16px]">{item.name}</div>
              </Link>
            ))}
          </div>

          <div className="hidden min-[600px]:flex w-8 h-8 pb-1.5 justify-center items-center absolute top-1/2 right-0 min-[1024px]:right-10 min-[1440px]:right-20 -translate-y-1/2 border-black border rounded-full cursor-pointer"
            onMouseDown={() => handleSliderDown('right')}
            onMouseUp={() => handleSliderUp('right')}>
            &rsaquo;
          </div>

          <div className="hidden min-[600px]:flex w-8 h-8 pb-1.5 justify-center items-center absolute top-1/2 left-0 min-[1024px]:left-10 min-[1440px]:left-20 -translate-y-1/2 border-black border rounded-full cursor-pointer"
            onMouseDown={() => handleSliderDown('left')}
            onMouseUp={() => handleSliderUp('left')}>
            &lsaquo;
          </div>
        </div>
      </div>
    </div>
    <ScrollRestoration />
    <Footer />
    </>
  )
}

export default GalleryItemPage
