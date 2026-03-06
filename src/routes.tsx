import App from './App.tsx'
import Contact from './components/Contact.tsx'
import ErrorPage from './components/ErrorPage.tsx'
import Gallery from './components/Gallery.tsx'
import GalleryItemPage from './components/GalleryItemPage.tsx'

const routes = [
  {path:"/", element: <App />},
  {path:"/gallery", element: <Gallery />},
  {path:"/gallery/:id", element: <GalleryItemPage />},
  {path:"/contact", element: <Contact />},
  {path:"*", element: <ErrorPage />},
]

export default routes
