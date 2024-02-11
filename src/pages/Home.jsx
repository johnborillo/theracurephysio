import React, { useState, useEffect } from 'react'
import { Box, Heading, Text, Flex, Link, Button, SimpleGrid, Image, HStack, VStack, Tag } from '@chakra-ui/react'
import ChakraCarousel from '../components/ChakraCarousel'
import capsFirst from '../utils/capsFirst'
import testimonies from '../data/testimonies'
import GoogleMap from '../components/GoogleMap'

function HomePage () {

	return (
		<>
			<Box>
				{/* Landing Page */}
				<Flex alignItems='center' bgImage="url('/images/img5.jpeg')" bgSize='cover' bgPos='center' maxW='100%' h={700} pt={8} pb={8}>
					<Flex direction='column' gap={7} ml={['2em', '2em', '4em']} mr={['2em', '2em', '4em']}>
						<Heading as="h1" size="3xl" color='white' onClick={() => console.log(testimonies)}>Unlock Your Potential, Embrace Your Progress</Heading>
						<Text fontSize='2xl' color='white'>Expert physiotherapy to help you overcome pain and enhance physical wellness</Text>
						<Link href='https://theracurephysio.janeapp.com/' style={{textDecoration: 'none'}} isExternal>
							<Button size='lg' bgColor='#F6F2EE' _hover={{backgroundColor: '#E6DBD0'}}>Get started</Button>
						</Link>
					</Flex>
				</Flex>

				{/* Services offered */}
				<Box as='section' pt={16} pb={16} bgColor='#F6F2EE'>
					<Flex direction={['column', 'column']} gap={7} ml={['2em', '2em', '4em']} mr={['2em', '2em', '4em']}>
						<Heading as="h1" size="2xl">Explore Our Offerings</Heading>
						<Text fontSize='xl'>Discover tailored solutions for your needs. From rehabilitation to performance enhancement, our services are designed to empower you.</Text>
						<Box>
							<Heading mb={2}>Physiotherapy</Heading>
							<SimpleGrid columns={[1, 1, 3]} spacing={4}>
								<Flex direction='column' justifyContent='space-between' ml={3} mr={3}>
									<Image src='/images/img3.jpeg' alt='Initial Assessment & Treatment' objectFit='cover' boxSize={['100%', 350]} />
									<Heading as='h4' size='md' mt={2}>Initial Assessment & Treatment</Heading>
									<Text fontSize='lg' mt={2} mb={[4, 4]}>Begin your journey with a thorough evaluation and personalized treatment plan tailored to your needs.</Text>
								</Flex>
								<Flex direction='column' justify='space-between' ml={3} mr={3}>
									<Image src='/images/img6.jpeg' alt='Reassessment Assessment & Treatment' objectFit='cover' boxSize={['100%', 350]} />
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
							<Heading mb={2}>Chiropractic</Heading>
							<SimpleGrid columns={[1, 1, 3]} spacing={4}>
								<Flex direction='column' justifyContent='space-between' ml={3} mr={3}>
									<Image src='/images/img9.jpeg' alt='Initial Assessment & Treatment' objectFit='cover' boxSize={['100%', 350]} />
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

				{/* Testimonials */}
				<Box as='section' pt={16} pb={12}>
					<Flex direction='column' gap={7} ml={['2em', '2em', '4em']} mr={['2em', '2em', '4em']}>
						<Heading as="h1" size="2xl">Real Results, Real Stories</Heading>
						<Text fontSize='xl'>Discover the transformative experiences of our clients firsthand through heartfelt testimonials. Hear how our services have positively impacted their lives, inspiring hope and confidence in your own journey towards wellness.</Text>
						<ChakraCarousel gap={32}>
							{testimonies.map((post, index) => (
								<Flex
									key={index}
									boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
									justifyContent="space-between"
									flexDirection="column"
									overflow="hidden"
									bg="#F6F2EE"
									rounded={5}
									flex={1}
									p={5}
								>
									<VStack mb={6}>
										<Heading
											fontSize={{ base: 'xl', md: '2xl' }}
											textAlign="left"
											w="full"
											mb={2}
										>
											{capsFirst(post.title)}
										</Heading>
										<Text w="full">{capsFirst(post.body)}</Text>
									</VStack>

									{/* <Flex justifyContent="space-between">
										<HStack spacing={2}>
											<Tag size="sm" variant="outline" colorScheme="green">
												User: {post.userId}
											</Tag>
											<Tag size="sm" variant="outline" colorScheme="cyan">
												Post: {post.id - 5}
											</Tag>
										</HStack>
										<Button
											onClick={() => alert(`Post ${post.id - 5} clicked`)}
											colorScheme="green"
											fontWeight="bold"
											color="gray.900"
											size="sm"
										>
											More
										</Button>
									</Flex> */}
								</Flex>
							))}
						</ChakraCarousel>
					</Flex>
				</Box>

				

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
			</Box>
		</>
	)
}

export default HomePage