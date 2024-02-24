import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import Services from './pages/Services'

function App () {
	
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/services" element={<Services />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
