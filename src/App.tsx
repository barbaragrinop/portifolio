import './index.css'

import { Header } from "./components"
import { AboutMe, Home, Projects, Works } from "./pages"

function App() {

  return (
    <div className="w-full relative ">
      <Header />
      <Home />
      <AboutMe />
      <Works />
      <Projects />
    </div>
  )
}

export default App
