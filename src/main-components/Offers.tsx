const Offers = () => {
  return (
    <div className="flex text-[10px] min-[600px]:text-[12px] min-[800px]:text-[16px] min-[1024px]:text-[20px] min-[1440px]:text-[24px] flex-col gap-4 bg-[#006747] rounded-xl p-3 pb-10 px-8 min-[600px]:px-12">
      <div className="text-white text-[16px] min-[600px]:text-[28px] min-[800px]:text-[32px] min-[1024px]:text-[36px]">What We Offer</div>

      <div className="flex text-center flex-col gap-8 min-[600px]:gap-12 min-[1024px]:p-10 min-[1440px]:p-8 pt-0 min-[600px]:pt-6">
        <div className="flex justify-center gap-12 min-[600px]:gap-16">
          <div className="flex justify-center items-center bg-white flex-2 rounded-xl h-24 p-1">Student Workshops & Training</div>
          <div className="flex justify-center items-center bg-white flex-2 rounded-xl h-24 p-1">Classroom Project Support</div>
          <div className="flex justify-center items-center bg-white flex-2 rounded-xl h-24 p-1">Design Software Guidance</div>
        </div>

        <div className="flex justify-center gap-12 min-[600px]:gap-16">
          <div className="flex justify-center items-center bg-white flex-2 rounded-xl h-24 p-1">Research & Innovation Projects</div>
          <div className="flex justify-center items-center bg-white flex-2 rounded-xl h-24 p-1">STEM & Creative Exploration</div>
          <div className="flex justify-center items-center bg-white flex-2 rounded-xl h-24 p-1">Large Format Printing</div>
        </div>
      </div>
    </div>
  )
}

export default Offers
