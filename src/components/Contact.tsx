import Topbar from "../main-components/Topbar"
import Placeholder from "./Placeholder"
import Footer from "../main-components/Footer"

const Contact = () => {
  return (
    <>
    <Topbar />
    <div className="flex flex-col gap-10 m-4 text-xl">

      <div className="flex flex-col px-16 gap-6 pt-16">
        <div className="flex justify-center text-4xl">Contact Us</div>

        <div className="flex flex-col gap-4">
          <Placeholder width="w-full" />
          <Placeholder width="w-full" />
          <Placeholder width="w-full" />
          <Placeholder width="w-full" />
          <Placeholder width="w-50" />
        </div>

        <div className="flex flex-col gap-4 pt-28">
          <Placeholder width="w-20" />
          <Placeholder width="w-full" />
          <Placeholder width="w-20" />
          <Placeholder width="w-full" />
          <Placeholder width="w-20" />
          <Placeholder width="w-full" />
          <Placeholder width="w-20" />
        </div>

        <div className="flex justify-center">
          <div className="border rounded-xl p-2 px-16">Send</div>
        </div>

      </div>

    </div>
    <Footer />
    </>
  )
}

export default Contact
