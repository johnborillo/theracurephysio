import React, { useState, useEffect } from 'react'
import { Box, Heading, Text, Flex, Link, Button, SimpleGrid, Image, HStack, VStack, Tag } from '@chakra-ui/react'

function Services () {


	return (
		<> 
			<Box as='section' pt={14} pb={14} bgColor='#333333' color='white'>
				<Flex textAlign='center' direction={['column', 'column']} gap={7} ml={['2em', '2em', '4em']} mr={['2em', '2em', '4em']}>
					<Heading as="h1" size="2xl">What is physiotherapy?</Heading>
					<Text fontSize='xl'>
						Physiotherapy is dedicated to your recovery and performance enhancement. Whether you&apos;re healing from an injury, managing discomfort, or aiming to elevate your physical abilities, <b>theracurephysio</b> offers tailored sessions designed specifically for you. With our comprehensive approach, we&apos;re committed to supporting your journey towards optimal health and fitness.
					</Text>
				</Flex>
			</Box>


			<Box as='section' pt={16} pb={16} bgColor='#fffffff'>
				<Flex direction={['column', 'column']} gap={7} ml={['2em', '2em', '4em']} mr={['2em', '2em', '4em']}>
					<Heading as="h1" size="2xl">Our Services</Heading>
					<Box>
						<Heading mb={3}>Physiotherapy</Heading>
						<SimpleGrid columns={[1, 1, 3]} spacing={4}>
							<Flex direction='column' justifyContent='space-between' ml={3} mr={3}>
								<Image src='/images/img3.jpeg' alt='Initial Assessment & Treatment' objectFit='cover' boxSize={['100%', 350]} />
								<Heading as='h4' size='md' mt={2}>Initial Assessment & Treatment</Heading>
								<Text fontSize='lg' mt={2} mb={[4, 4]}>Begin your journey with a thorough evaluation and personalized treatment plan tailored to your needs.</Text>
							</Flex>
							<Flex direction='column' justify='space-between' ml={3} mr={3}>
								<Image src='/images/img13.jpeg' alt='Reassessment Assessment & Treatment' objectFit='cover' boxSize={['100%', 350]} />
								<Heading as='h4' size='md' mt={2}>Reassessment & Treatment</Heading>
								<Text fontSize='lg' mt={2} mb={[4, 4]}>Stay on track with ongoing evaluations and targeted therapies to optimize your progress.</Text>
							</Flex>
							<Flex direction='column' justify='space-between' ml={3} mr={3}>
								<Image src='/images/img7.jpeg' alt='Subsequent Visit' objectFit='cover' boxSize={['100%', 350]} />
								<Heading as='h4' size='md' mt={2}>Subsequent Visit</Heading>
								<Text fontSize='lg' mt={2} mb={[4, 4]}>Continue recovery with follow-up sessions focused on refining your treatment and maximizing your results.</Text>
							</Flex>
						</SimpleGrid>
					</Box>
					<Box>
						<Heading mb={3}>Chiropractic</Heading>
						<SimpleGrid columns={[1, 1, 3]} spacing={4}>
							<Flex direction='column' justifyContent='space-between' ml={3} mr={3}>
								<Image src='/images/img22.jpeg' alt='Initial Assessment & Treatment' objectFit='cover' boxSize={['100%', 350]} />
								<Heading as='h4' size='md' mt={2}>Initial Assessment & Treatment</Heading>
								<Text fontSize='lg' mt={2} mb={[4, 4]}>A comprehensive evaluation and personalized treatment plan tailored to your specific needs.</Text>
							</Flex>
							<Flex direction='column' justify='space-between' ml={3} mr={3}>
								<Image src='/images/img11.jpeg' alt='Reassessment Assessment & Treatment' objectFit='cover' boxSize={['100%', 350]} />
								<Heading as='h4' size='md' mt={2}>Chiropractic Subsequent Visit</Heading>
								<Text fontSize='lg' mt={2} mb={[4, 4]}>Alignment and wellness with follow-up sessions focused on progress tracking and targeted adjustments.</Text>
							</Flex>
							<Flex direction='column' justify='space-between' ml={3} mr={3}>
								<Image src='/images/img10.jpeg' alt='Subsequent Visit' objectFit='cover' boxSize={['100%', 350]} />
								<Heading as='h4' size='md' mt={2}>Adjustment Visit</Heading>
								<Text fontSize='lg' mt={2} mb={[4, 4]}>Gentle and effective realignment of your spine, designed to alleviate discomfort and enhance overall well-being.</Text>
							</Flex>
						</SimpleGrid>
					</Box>
				</Flex>
			</Box>
		</>
	)
}

export default Services