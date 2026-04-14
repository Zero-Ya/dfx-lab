import { Link } from 'react-router-dom'
import usf_logo from "../assets/logos/usf_logo.png"
import dfx_logo from "../assets/logos/dfx_logo_new.png"

const Topbar = () => {
  return (
    <div className="w-screen z-99 p-4 pr-8 pt-4 -mt-4 bg-white fixed flex justify-between items-center">
      <img className='w-auto h-3 min-[400px]:h-4 min-[600px]:h-6 min-[800px]:h-10 min-[1024px]:h-12' src={usf_logo} />

      <div className="flex text-[8px] min-[600px]:text-[10px] min-[800px]:text-[14px] min-[1024px]:text-[18px] font-montserrat-semibold items-center gap-4 min-[600px]:gap-6 min-[800px]:gap-10">
        <div><Link to="/">Home</Link></div>
        <div><Link to="/gallery">Gallery</Link></div>
        <div><Link to="/contact">Contact</Link></div>
        <img className="w-auto h-5 min-[400px]:h-6 min-[600px]:h-10 min-[800px]:h-12 min-[1024px]:h-14" src={dfx_logo} />
      </div>
    </div>
  )
}

export default Topbar
