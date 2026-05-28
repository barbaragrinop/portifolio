import './index.css'

import { Header } from "./components"
import { AboutMe, Home } from "./pages"

function App() {

  return (
    <div className="w-full relative ">
      <Header />
      <Home />
      <AboutMe />
    </div>
  )
}

export default App
