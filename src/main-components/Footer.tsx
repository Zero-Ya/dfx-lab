import Newsletter from "../components/Newsletter"

const Footer = () => {
  return (
    <>
    <div className="w-full flex flex-col min-[600px]:flex-row font-montserrat-semibold text-[10px] min-[600px]:text-[10px] min-[800px]:text-[12px] min-[1024px]:text-[16px] text-white gap-6 min-[800px]:gap-12 min-[1024px]:gap-24 justify-between p-6 px-6 min-[600px]:px-8 min-[800px]:px-12 min-[1024px]:px-14 mt-12 min-[600px]:mt-10 min-[800px]:mt-12 min-[1024px]:mt-16 min-[1440px]:mt-24 bg-gray-400">
      <div className="w-full flex justify-between min-[600px]:justify-start gap-6 min-[800px]:gap-12 min-[1024px]:gap-24">
        <div className="flex flex-col gap-2">
          <div className="text-[12px] min-[600px]:text-[14px] min-[800px]:text-[16px] min-[1024px]:text-[18px] text-gray-500">Follow Us</div>
          <div>Instagram: @dfxlab</div>
          <div>LinkedIn: DFX Lab</div>
          <div>YouTube: DFX Lab Studio</div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="text-[12px] min-[600px]:text-[14px] min-[800px]:text-[16px] min-[1024px]:text-[18px] text-gray-500">Get Started</div>
          <div className="flex items-start gap-2">
            <div className="min-w-12 min-[800px]:min-w-16 min-[1024px]:min-w-20">Location:</div>
            <div className="flex flex-col">
              <div>123 Innovation Drive</div>
              <div>Building Name, Room 101</div>
              <div>City, State 00000</div>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <div className="min-w-12 min-[800px]:min-w-16 min-[1024px]:min-w-20">Lab Hours:</div>
            <div className="flex flex-col">
              <div>Monday – Friday: 9:00 AM – 6:00 PM</div>
              <div>Saturday: 10:00 AM – 2:00 PM</div>
              <div>Sunday: Closed</div>
            </div>
          </div>
        </div>

      </div>

      <div className="flex flex-col gap-2 justify-center items-center">
        <Newsletter />
      </div>
    </div>

    <div className="font-montserrat-semibold text-[10px] min-[800px]:text-[12px] min-[1024px]:text-[16px] flex justify-center py-6">
      All Rights Reserved
    </div>
    </>
  )
}

export default Footer
