import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'

function App () {
	
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
