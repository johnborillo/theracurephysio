import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme/theme.js'
import { SpeedInsights } from "@vercel/speed-insights/next"

ReactDOM.createRoot(document.getElementById('root')).render(
	<ChakraProvider theme={theme}>
		<React.StrictMode>
			<BrowserRouter>
				<SpeedInsights />
				<App />
			</BrowserRouter>
		</React.StrictMode>
	</ChakraProvider>
)
