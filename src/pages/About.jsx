import React, { useState, useEffect } from 'react'
import { Box, Heading, Text, Flex, Link, Button, SimpleGrid, Image, HStack, VStack, Tag } from '@chakra-ui/react'

const content = [
    {
        name: 'Azriel Diacamos',
        image: '/images/azriel_pfp.png',
        alt: 'Azriel Diacamos',
        title: 'Physiotherapist',
        bio: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet sem vitae diam luctus porttitor congue eu urna. Vivamus sagittis imperdiet justo ut molestie. Suspendisse dapibus blandit ullamcorper. Curabitur ac velit leo. Praesent nibh velit, lobortis in cursus nec, congue scelerisque neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis id tristique dui.`,
    },
    {
        name: 'Franilyn (Ani) Lapuz',
        image: '/images/franilyn_pfp.jpeg',
        alt: 'Franilyn (Ani) Lapuz',
        title: 'Physiotherapist',
        bio: 'Nullam finibus turpis ut dolor consectetur, et consequat augue laoreet. Suspendisse sit amet lectus porta, finibus nibh at, mollis justo. Aliquam pretium, est in eleifend tincidunt, turpis mauris euismod nulla, sit amet rhoncus nunc mi non quam. Fusce eu faucibus diam, in posuere justo. Maecenas vitae ipsum eros. Nullam iaculis ex quis felis auctor, et faucibus justo dignissim. Nam fringilla.',
    },
    {
        name: 'Dr. Charles Goldman',
        image: '/images/profile_placeholder.jpeg',
        alt: 'Dr. Charles Goldman',
        title: 'Chiropractor',
        bio: 'Nunc vel iaculis nisl. Nulla aliquam lobortis libero at pellentesque. Praesent porttitor, ligula sed elementum bibendum, felis enim ornare odio, at viverra leo nisi vel est. Etiam eget mauris nulla. In quis urna non quam iaculis porttitor. In tincidunt vitae nibh vehicula efficitur. Suspendisse lectus enim, semper at semper quis, vestibulum a nunc. Ut nec quam id lorem feugiat suscipit.',
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