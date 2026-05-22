import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Collection from './components/Collection'
import Runway from './components/Runway'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Collection />
        <Runway />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
