import React, { useState, useEffect } from 'react'
import { Box, Heading, Text, Flex, Link, Button, SimpleGrid, Image, HStack, VStack, Tag } from '@chakra-ui/react'
import GoogleMap from '../components/GoogleMap'

function Contact () {

	return (
		<>
			{/* Availability */}
			<Flex maxW='100%' h={700} pt={8} pb={8} bgColor='#F6F2EE' bgImage="url('/images/img8.jpg')" bgSize='cover' bgPos='center'>
				<Flex w='full' alignItems={['flex-start', 'flex-start', 'center']} direction={['column', 'column', 'row']} justifyContent='space-between' ml={['2em', '2em', '4em']} mr={['2em', '2em', '4em']} color='white'>
					<Flex direction='column'>
						<Heading as="h1" size="3xl" mb={8}>Our Clinic</Heading>
						<Text fontSize='2xl' whiteSpace='pre-line' pb={['1em']}>
							{`85 Sandalwood Pkwy E
    							Brampton, Ontario
    							L6Z 4S3
    							(905) 846-7314`}
						</Text>
					</Flex>
					<GoogleMap />
				</Flex>
			</Flex>
		</>
	)
}

export default Contact