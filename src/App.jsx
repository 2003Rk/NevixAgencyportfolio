import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";

import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Cocktails from './components/Cocktails.jsx'
import About from './components/About.jsx'
import Art from './components/services.jsx'
import FeaturedWork from './components/FeaturedWork.jsx'
import GetInTouch from './components/GetInTouch.jsx'
import Menu from './components/Menu.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
 return (
	<main>
	 <Navbar />
	 <Hero />
	 <About />
	 <Art />
	 <FeaturedWork />
	 <GetInTouch />
	 <Footer />
	</main>
 )
}

export default App
