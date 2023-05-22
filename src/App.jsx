import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Experiences from "./pages/Experiences"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"
import About from "./components/About"
import Contact from "./components/Contact"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Experiences />
    },
    {
      path: "/projects",
      element: <Projects />
    },
    {
      path: "/skills",
      element: <Skills />
    },
  ])

  return (
    <div className="grid lg:grid-cols-12 text-center text-white">
      <About />
      <RouterProvider router={router} />
      <Contact />
    </div>
  )
}

export default App
