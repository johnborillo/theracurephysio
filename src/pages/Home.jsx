import { Box, Heading, Text } from '@chakra-ui/react'

function HomePage () {

	return (
		<>
			<Box>
				{/* Landing Page */}
				<Box bgImage="url('/images/img2.jpeg')" bgSize="cover" bgPos="center" maxW='100%' h={600} pt={8} pb={8}
				>
					<Heading as="h1" size="2xl" ml='1.5em' mr='1.5em'>Home</Heading>
					<Text>issa homepage</Text>
				</Box>

				{/* Services offered */}
				<Box as='section'>
					<Heading as="h1" size="2xl">Services offered</Heading>
					<Text>issa homepage</Text>
				</Box>


				{/* Testimonials */}

				{/* Availability */}
			</Box>
		</>
	)
}

export default HomePage