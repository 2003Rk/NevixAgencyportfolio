import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";

import Hero from './components/Hero.jsx'
import Cocktails from './components/Cocktails.jsx'
import About from './components/About.jsx'
import Art from './components/services.jsx'
import FeaturedWork from './components/FeaturedWork.jsx'
import Menu from './components/Menu.jsx'
import Contact from './components/Contact.jsx'

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
 return (
	<main>
	 <Hero />
	 <About />
	 <Art />
	 <FeaturedWork />
	</main>
 )
}

export default App
