import { Box, Flex, Heading, Link, Text, Button, Divider } from '@chakra-ui/react'

// colors: #F6F2EE, #DCCCBB, #212121, #333333, #808080

function Footer (){
	return (
		<Flex direction='column' align='center' backgroundColor='#212121' color='white' >
			<Flex as='nav' align='center' justify='space-between' w='full' p={10}>
				<Flex direction={['column', 'column', 'row']} ml={['1em', '1em', '4em']} mr={['1em', '1em', '4em']} justify='space-between' w='full'>
					<Flex direction='column' gap={8} pb={[0, 10, 0]}>
						<Link  href='/' as='span' style={{textDecoration: 'none'}}>
							<Heading size='lg' color=''>theracurephysio</Heading>
						</Link>
						<Text fontSize='lg' whiteSpace='pre-line'>
							{`85 Sandalwood Pkwy E
						Brampton, Ontario
						L6Z 4S3
						(905) 846-7314`}
						</Text>
						<Link href='https://theracurephysio.janeapp.com/' style={{textDecoration: 'none'}}>
							<Button size='lg' bgColor='#333333' color='white' _hover={{bg: '#808080'}}>Book now</Button>
						</Link>
					</Flex>
					<Flex direction='column' gap={4} fontSize='lg' fontWeight='bold' whiteSpace='pre-line' pb={[10, 10, 0]}>
						<Heading size='md'>
							{`MON-FRI
						8AM-8PM`}
						</Heading>
						<Heading size='md'>
							{`SAT
						8AM-4PM`}
						</Heading>
						<Heading size='md'>
							{`SUN
						CLOSED`}
						</Heading>
					</Flex>
					<Flex direction='column' gap={4} fontSize='lg' fontWeight='bold' whiteSpace='pre-line'>
						<Heading size='md'>PHONE: (905) 846-7314</Heading>
						<Heading size='md'>EMAIL: theracurephysio@yahoo.ca</Heading>
					</Flex>
				</Flex>
			</Flex>
			<Divider w='90%'/>
			<Flex ml={['1em', '1em', '4em']} mr={['1em', '1em', '4em']} pt={4} pb={4} gap={4} fontSize='lg' fontWeight='bold' whiteSpace='pre-line'>
				<Text>All rights reserved @ theracurephysio</Text>
			</Flex>
		</Flex>
	)
}

export default Footer