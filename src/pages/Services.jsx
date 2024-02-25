import React, { useState, useEffect } from 'react'
import { Box, Heading, Text, Flex, Link, Button, SimpleGrid, Image, HStack, VStack, Tag } from '@chakra-ui/react'

const content = [
	{
		title: 'Physiotherapy',
		items: [{
			key: 0,
			title: 'Initial Assessment & Treatment',
			body: 'A comprehensive initial assessment and treatment session. A thorough evaluation to understand unique needs and challenges, devleoping personalized treatment plans designed to address specific concerns and goals. Expect a 90-minute session focused on holistic care and tailored interventions to kickstart the path to recovery and well-being.',
			price: '$125',
			length: '90 minutes',
			image: '/images/img3.jpeg',
			alt: 'Initial Assessment & Treatment'
		},
		{
			key: 1,
			title: 'Reassessment & Treatment',
			body: "Ensure your progress stays on track with our reassessment and treatment sessions. Through ongoing evaluations and targeted therapies, we refine treatment plans to optimize results. Whether you're recovering from an injury or managing a chronic condition, expect 60-minute sessions designed to support your path to peak physical health and mobility.",
			price: '$100',
			length: '60 minutes',
			image: '/images/img13.jpeg',
			alt: 'Reassessment Assessment & Treatment'
		},
		{
			key: 2,
			title: 'Subsequent Visit',
			body: 'Maintain and enhance your progress with subsequent visit sessions. 45-minute appointments focused on refining treatment plans and maximizing results. We provide dedicated support and guidance as you continue on your journey to improved function and well-being.',
			price: '$80',
			length: '45 minutes',
			image: '/images/img7.jpeg',
			alt: 'Subsequent Visit'
		}]
	},{
		title: 'Chiropractic',
		items: [{
			key: 0,
			title: 'Initial Assessment & Treatment',
			body: 'Chiropractic care with a thorough initial assessment and treatment session. Our chiropractor conducts detailed evaluations to understand your unique needs and health goals.',
			price: '$100',
			length: '60 minutes',
			image: '/images/img22.jpeg',
			alt: 'Initial Assessment & Treatment'
		},
		{
			key: 1,
			title: 'Chiropractic Subsequent Visit',
			body: "Maintain spinal health and wellness with subsequent visit sessions. 30-minute appointments focued on tracking progress and providing targeted adjustments to support ongoing alignment and mobility.",
			price: '$65',
			length: '30 minutes',
			image: '/images/img11.jpeg',
			alt: 'Chiropractic Subsequent Visit'
		},
		{
			key: 2,
			title: 'Adjustment Visit',
			body: "Gentle and effective realignment with our adjustment visit sessions. Designed to alleviate discomfort and enhance overall well-being, these 15-minute appointments focus on targeted adjustments to promote spinal health and mobility.",
			price: '$35',
			length: '15 minutes',
			image: '/images/img10.jpeg',
			alt: 'Adjustment Visit'
		}]
	}
]

function Services () {

	return (
		<> 
			<Box as='section' pt={14} pb={14} bgImage="url('/images/img22v2.jpeg')" color='white' bgSize='cover' bgPos='center'>
				<Flex textAlign='center' direction={['column', 'column']} gap={7} ml={['2em', '2em', '4em']} mr={['2em', '2em', '4em']}>
					<Heading as="h1" size="2xl">Why physiotherapy?</Heading>
					<Text fontSize='xl'>
						Physiotherapy is dedicated to recovery and performance enhancement. Whether you&apos;re healing from an injury, managing discomfort, or aiming to elevate your physical abilities, <b>theracurephysio</b> offers tailored sessions designed specifically for you. With our comprehensive approach, we&apos;re committed to supporting your journey towards optimal health and fitness.
					</Text>
				</Flex>
			</Box>

			<Box as='section' pt={16} pb={16} bgColor='white'>
				<Flex direction={['column', 'column']} gap={7} ml={['2em', '2em', '4em']} mr={['2em', '2em', '4em']}>
					<Heading as="h1" size="2xl" >Our services and rates</Heading>
					<Text fontSize='xl'>
						Explore personalized options that meet your requirements.
					</Text>
					{content.map((section) => (
						<Box key={section.title}>
							<Heading mb={3}>{section.title}</Heading>
							<SimpleGrid columns={1} spacing={4}>
								{section.items.map((item) => (
									<Flex direction='row' justify='space-between' alignItems='center' bgColor={'#F6F2EE'} pt={2} pr={4} pl={2} rounded='lg'>
										<Flex key={item.key} direction='column' justifyContent='space-between' ml={3} mr={3}>
											{/* <Image src={item.image} alt={item.alt} objectFit='cover' boxSize={['100%', 350]} _hover={{ shadow: 'lg', transform: 'translate(-3px, -3px)' }} transition="all 0.2s ease-in-out" /> */}
											<Heading as='h4' size='md' mt={2}>{item.title}</Heading>
											<Text fontSize='lg' mt={2} mb={[4, 4]}>{item.body}</Text>
										</Flex>
										<Flex direction='column' flexShrink={0}>
											<Heading>{item.price}</Heading>
											<Text>{item.length}</Text>
										</Flex>
									</Flex>
								))}
							</SimpleGrid>
						</Box>
					))}
				</Flex>
			</Box>
		</>
	)
}

export default Services