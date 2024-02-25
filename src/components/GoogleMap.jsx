import { Box } from '@chakra-ui/react'
import {APIProvider, Map} from '@vis.gl/react-google-maps'

const GoogleMap = () => {

	return (
		<>
			<Box w={['21em', '22em', '40em']} h='full'>
				<APIProvider apiKey={(process.env.GOOGLE_MAP_API_KEY)}>
					<Map
						zoom={18}
						center={{lat: 43.72182964672301, lng: -79.79750731504609}}
						gestureHandling={'greedy'}
						disableDefaultUI={true}
					/>
				</APIProvider>
			</Box>
		</>
	)
}

export default GoogleMap