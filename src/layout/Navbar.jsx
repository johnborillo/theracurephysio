import { Box, Flex, Heading, Link, Text, Button } from '@chakra-ui/react'

const links = [
	{ name: 'Home', href: '/' },
	{ name: 'About', href: '/about' },
	{ name: 'Services', href: '/services' },
	{ name: 'Contact', href: '/contact' },
]

function Navbar (){
	return (
		<Flex as='nav' align='center' justify='space-between' w='full' p={4} backgroundColor='lightblue' >
			<Link ml='4em' mr='4em' href='/' as='span' style={{textDecoration: 'none'}}>
				<Heading size='lg'>Theracurephysio</Heading>
			</Link>
			<Flex ml='4em' mr='4em' justify='flex-end' gap={8}>
				{links.map((link) => (
					<Link href={link.href} key={link.name} p={2} style={{textDecoration: 'none'}}>
						<Text>{link.name}</Text>
					</Link>
				))}
				<Link href='https://theracurephysio.janeapp.com/' style={{textDecoration: 'none'}}>
					<Button>Book now</Button>
				</Link>
			</Flex>
		</Flex>
	)
}

export default Navbar