import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 3000,
	},
	define: {
		'process.env': Object.fromEntries(
		  Object.entries(process.env).map(([key, value]) => [key, JSON.stringify(value).replace(/"/g, '')])
		)
	}
})
