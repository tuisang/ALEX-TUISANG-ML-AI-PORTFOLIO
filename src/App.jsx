import { About } from './components/About'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Portfolio } from './components/Portfolio'


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Portfolio></Portfolio>
      <Experience></Experience>
      <Contact></Contact>
    </div>
  ) 
}

export default App
