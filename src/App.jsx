import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'

function App () {	
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/services" element={<Services />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
