import { ScrollRestoration } from 'react-router-dom'

// Components
import Topbar from './main-components/Topbar.tsx'
import News from './main-components/News.tsx'
import About from './main-components/About.tsx'
import Offers from './main-components/Offers.tsx'
import Equipment from './main-components/Equipment.tsx'
import LearnMore from './main-components/LearnMore.tsx'
import Footer from './main-components/Footer.tsx'

function App() {
  return (
    <>
    <Topbar />
    <div className="flex flex-col font-montserrat gap-6 min-[600px]:gap-10 m-4 px-0 min-[600px]:px-8 min-[800px]:px-12">

      <News />
      <About />
      <Offers />
      <Equipment />
      <LearnMore />
      <ScrollRestoration />

    </div>
    <Footer />
    </>
  )
}

export default App
