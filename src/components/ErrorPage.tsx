import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div>Sorry, there's nothing here.</div>
      <div className="text-[#006747]"><Link to="/">Go back home</Link></div>
    </div>
  )
}

export default ErrorPage
