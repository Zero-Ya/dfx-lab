const Newsletter = () => {
  return (
    <div className="flex flex-col items-center max-w-96 gap-2 text-black bg-white rounded-lg p-2 min-[800px]:p-4 min-[1024px]:p-8">
      <div className="min-[800px]:text-[20px] min-[1024px]:text-[24px]">Join Our Newsletter</div>

      <div className="flex flex-col items-center gap-2">
        <div className="text-center min-[600px]:max-w-72 min-[1024px]:max-w-full">Subscribe to our newsletter to see inspiring contents, news and announcements.</div>
        <div className="flex gap-2">
          <div className="bg-gray-100 p-2 rounded-xs">
            <input className="focus:outline-none focus:ring-0" type="text" id="email" name="email" placeholder="Email..." />
          </div>
          <button className="cursor-pointer rounded-xs p-2 bg-[#006747] active:bg-[#004a32] text-white">Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
