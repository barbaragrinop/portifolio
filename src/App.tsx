import './index.css'

import { Header } from "./components"
import { AboutMe, Home, Works } from "./pages"

function App() {

  return (
    <div className="w-full relative ">
      <Header />
      <Home />
      <AboutMe />
      <Works />
    </div>
  )
}

export default App
