import React, { useState, useEffect } from 'react'
import { Box, Heading, Text, Flex, Link, Button, SimpleGrid, Image, HStack, VStack, Tag } from '@chakra-ui/react'

const content = [
    {
        name: 'Azriel Diacamos',
        image: '/images/azriel_pfp.png',
        alt: 'Azriel Diacamos',
        title: 'Physiotherapist',
        bio: 'Azriel Diacamos is a registered physiotherapist with a passion for helping others. He has a strong background in sports medicine and orthopedic physiotherapy, with a focus on manual therapy and exercise prescription. Azriel is dedicated to providing personalized care and empowering his clients to achieve their health and wellness goals.',
    },
    {
        name: 'Franilyn (Ani) Lapuz',
        image: '/images/franilyn_pfp.jpeg',
        alt: 'Franilyn (Ani) Lapuz',
        title: 'Physiotherapist',
        bio: 'Jenny Lee is a registered physiotherapist with a special interest in women’s health and pelvic floor physiotherapy. She is committed to providing compassionate care and evidence-based treatments to help her clients achieve optimal health and well-being. Jenny is passionate about empowering her clients to take an active role in their recovery and overall wellness.',
    },
    {
        name: 'Dr. Charles Goldman',
        image: '/images/profile_placeholder.jpeg',
        alt: 'Dr. Charles Goldman',
        title: 'Chiropractor',
        bio: 'Dr. John Doe is a licensed chiropractor with a focus on musculoskeletal health and wellness. He is dedicated to providing personalized care and evidence-based treatments to help his clients achieve optimal health and well-being. Dr. Doe is passionate about empowering his clients to take an active role in their recovery and overall wellness.',
    }
]

function About () {
    return (
		<>
           <Box as='section' pt={14} pb={14} bgSize='cover' bgPos='center'>
				<Flex textAlign='center' direction={['column', 'column']} gap={7} ml={['2em', '2em', '4em']} mr={['2em', '2em', '4em']}>
					<Heading as="h1" size="2xl">Meet Our Team</Heading>
					<Text fontSize='xl'>
						Meet our dedicated team of expert physiotherapists and skilled chiropractor, all committed to providing personalized care just for you. With a range of specialties and a shared focus on your well-being, we're here to help you meet your health goals.
					</Text>
                    <SimpleGrid columns={[1, 1, 3]} spacing={4}>
                        {content.map((item) => (
                            <Flex direction='column' justify='space-between' alignItems='center' bgColor={'#F6F2EE'} p={8} pl={2} rounded='lg'>
                                <Image src={item.image} alt={item.alt} maxW='100%' h={40} rounded='lg' mb={4}/>
                                <VStack spacing={2} align='center'>
                                    <Heading as='h3' size='lg'>{item.name}</Heading>
                                    <Text fontSize='md'>{item.title}</Text>
                                    <Text fontSize='md'>{item.bio}</Text>
                                </VStack>
                            </Flex>
						))}
                    </SimpleGrid>
				</Flex>
			</Box>
		</>
	)
}

export default About