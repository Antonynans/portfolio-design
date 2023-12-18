import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Hire_me from "./components/Hire_me"
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio"
import Services from "./components/Services"


const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Hire_me />
        
      </main>
      <Footer />
    </div>
  )
}

export default App