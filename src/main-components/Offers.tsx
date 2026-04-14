const Offers = () => {
  return (
    <div className="flex text-[8px] min-[600px]:text-[10px] min-[800px]:text-[14px] min-[1024px]:text-[18px] min-[1440px]:text-[22px] flex-col gap-8 bg-[#006747] shadow-xl rounded-xl p-3 pb-10 px-6 min-[600px]:px-12">
      <div className="font-montserrat-semibold text-white text-[14px] min-[600px]:text-[26px] min-[800px]:text-[30px] min-[1024px]:text-[34px]">What We Offer</div>

      <div className="flex text-center flex-col gap-8 min-[600px]:gap-12 min-[1024px]:p-10 min-[1440px]:p-8 pt-0 min-[600px]:pt-6">
        <div className="flex justify-center gap-6 min-[600px]:gap-16">
          <div className="flex justify-center items-center bg-white flex-2 rounded-xl h-16 min-[600px]:h-24 p-1 shadow-xl">Student Workshops & Training</div>
          <div className="flex justify-center items-center bg-white flex-2 rounded-xl h-16 min-[600px]:h-24 p-1 shadow-xl">Classroom Project Support</div>
          <div className="flex justify-center items-center bg-white flex-2 rounded-xl h-16 min-[600px]:h-24 p-1 shadow-xl">Design Software Guidance</div>
        </div>

        <div className="flex justify-center gap-6 min-[600px]:gap-16">
          <div className="flex justify-center items-center bg-white flex-2 rounded-xl h-16 min-[600px]:h-24 p-1 shadow-xl">Research & Innovation Projects</div>
          <div className="flex justify-center items-center bg-white flex-2 rounded-xl h-16 min-[600px]:h-24 p-1 shadow-xl">STEM & Creative Exploration</div>
          <div className="flex justify-center items-center bg-white flex-2 rounded-xl h-16 min-[600px]:h-24 p-1 shadow-xl">Large Format Printing</div>
        </div>
      </div>
    </div>
  )
}

export default Offers
