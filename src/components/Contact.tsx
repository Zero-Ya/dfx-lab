import { ScrollRestoration } from "react-router-dom"
import Topbar from "../main-components/Topbar"
import Footer from "../main-components/Footer"

const Contact = () => {
  return (
    <>
      <Topbar />
      <div className="flex flex-col font-montserrat items-center text-[10px] min-[600px]:text-[12px] min-[800px]:text-[16px] min-[1024px]:text-[20px] m-4 min-[600px]:px-8 min-[800px]:px-12 gap-4 min-[600px]:gap-6 min-[800px]:gap-8 pt-10 min-[600px]:pt-16 min-[800px]:pt-24">
      {/* <hr className="w-full h-[1.5px] bg-black shadow-2xl border-0 rounded-xl"/> */}
        <div className="flex font-montserrat-bold justify-center text-[24px] min-[600px]:text-[28px] min-[800px]:text-[32px] min-[1024px]:text-[36px]">Contact Us</div>
        
        <div className="w-11/12 min-[1024px]:w-4/5 text-center py-3 min-[600px]:py-4 min-[800px]:py-6">Have a question, collaboration idea, or project inquiry? The DFX Lab team would love to hear from you. Reach out and we’ll get back to you as soon as possible.</div>

        <form className="w-4/5 min-[1024px]:w-2/3 min-[1440px]:w-1/2 flex flex-col gap-6 min-[800px]:gap-10 rounded-xl border border-gray-100 p-6 min-[800px]:p-8 min-[1024px]:p-10 shadow-xl">
          <div className="text-[16px] min-[600px]:text-[20px] min-[800px]:text-[24px] min-[1024px]:text-[28px] min-[1440px]:text-[30px]">Send Us a Message</div>
          <div className="flex flex-col gap-1 min-[600px]:gap-2">
            <div>Full Name:</div>
            <input className="w-full p-2 bg-gray-100 rounded-xl" type="text" placeholder="John Doe" />
          </div>

          <div className="flex flex-col gap-1 min-[600px]:gap-2">
            <div>Email Address:</div>
            <input className="w-full p-2 bg-gray-100 rounded-xl" type="email" placeholder="johndoe@gmail.com" />
          </div>

          <div className="flex flex-col gap-1 min-[600px]:gap-2">
            <div>Organization / Company (Optional):</div>
            <input className="w-full p-2 bg-gray-100 rounded-xl" type="text" />
          </div>

          <div className="flex flex-col gap-1 min-[600px]:gap-2">
            <div>Subject:</div>
            <select className="w-full p-2 bg-gray-100 rounded-xl">
              <option>General Inquiry</option>
              <option>Collaboration</option>
              <option>Project Support</option>
              <option>Other</option>
            </select>
          </div>

          <div className="flex flex-col gap-1 min-[600px]:gap-2">
            <div>Message:</div>
            <textarea className="w-full p-2 h-28 min-[800px]:h-50 bg-gray-100 rounded-xl" placeholder="Enter message here..." />
          </div>

          <button className="flex justify-center p-2 bg-[#006747] hover:bg-[#004d35] text-white rounded-xl">Submit</button>
        </form>
      </div>
      <ScrollRestoration />
      <Footer />
    </>
  )
}

export default Contact
