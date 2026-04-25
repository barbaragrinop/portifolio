import './index.css'

import { Header } from "./components"
import { AboutMe, Home } from "./pages"

function App() {

  return (
    <div className="w-full  relative max-h-">
	    <Header />
        <Home />
      <div className='px-5 py-10 max-w-4xl mx-auto'>
        <AboutMe />
      </div>
    </div>
  )
}

export default App
