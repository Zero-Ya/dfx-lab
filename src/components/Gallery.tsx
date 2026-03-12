import { useState, useEffect } from "react";
import { Link, ScrollRestoration } from "react-router-dom";
import Topbar from "../main-components/Topbar"
import GalleryItem from "./GalleryItem";
import Footer from "../main-components/Footer";
import { galleryData } from "../data-storage/galleryData";

// Lucide icons
import { Search, Funnel } from 'lucide-react';

interface item {
  id: number,
  name: string,
  imageData: string,
  date: string,
  equipment: string,
  description: string,
}

const Gallery = () => {
  const [filteredItems, setFilteredItems] = useState<item[]>([])

  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('All')

  const handleFilter = () => {
    if (filter === "All") return setFilteredItems(galleryData)
    setFilteredItems(galleryData)
    setFilteredItems(galleryData.filter((item) => item.equipment.toLowerCase().includes(filter.toLowerCase())))
  }

  useEffect(() => {
    setFilteredItems(galleryData.filter((item) => 
      item.name.toLowerCase().includes(query.toLowerCase())
    ))
    setFilter('')
  }, [query])

  useEffect(() => {
    handleFilter()
  }, [filter])

  return (
    <>
    <Topbar />
    <div className="flex flex-col font-montserrat gap-4 m-4 min-[600px]:px-8 min-[800px]:px-12 text-[10px] min-[600px]:text-[12px] min-[800px]:text-[16px] min-[1024px]:text-[20px] min-[600px]:gap-6 pt-14 min-[600px]:pt-20 min-[800px]:pt-24">
      {/* <hr className="w-full h-[1.5px] bg-black shadow-2xl border-0 rounded-xl"/> */}
      <div className="flex flex-col gap-4">
        <div className="flex font-montserrat-semibold text-[16px] min-[600px]:text-[28px] min-[800px]:text-[32px] min-[1024px]:text-[36px] justify-center">Explore Projects</div>

        <div className="flex gap-2 min-[600px]:gap-4 min-[800px]: text-[10px] min-[600px]:text-[12px] min-[800px]:text-[16px] min-[1024px]:text-[20px] justify-between">
          <div className="flex flex-2 items-center gap-4 border border-gray-100 shadow-xl rounded-xl p-2">
            <Search />
            <input className="w-full focus:outline-none focus:ring-0" type="search" placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)} />
          </div>

          <div className="flex flex-1 items-center gap-4 border border-gray-100 shadow-xl rounded-xl p-2">
            <Funnel />
            <div className="w-full">
              <select className="w-full flex gap-4" value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="All">All</option>
                <option value="3D Scanner">3D Scanner</option>
                <option value="FDM 3D Printer">FDM 3D Printer</option>
                <option value="Resin 3D Printer">Resin 3D Printer</option>
                <option value="CAD Workstation">CAD Workstation</option>
                <option value="CAD Software">CAD Software</option>
                <option value="UV Curing Station">UV Curing Station</option>
                <option value="Laser Cutter">Laser Cutter</option>
                <option value="CNC Machine">CNC Machine</option>
                <option value="Post-Processing Station">Post-Processing Station</option>
              </select>
            </div>
          </div>
        </div>

        <div className="w-full pt-2 min-[600px]:pt-8 px-0 min-[600px]:px-6 min-[800px]:px-12 grid grid-cols-2 gap-6 min-[600px]:gap-12 gap-y-12 min-[600px]:gap-y-16">
          {filteredItems.map((item) =>
            <Link to={`/gallery/${item.id}`}>
              <GalleryItem key={item.id} data={item} />
            </Link>
          )}
        </div>
      </div>

    </div>
    <ScrollRestoration />
    <Footer />
    </>
  )
}

export default Gallery
