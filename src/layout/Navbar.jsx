import { Box, Flex, Heading, Link, Text, Button, IconButton, useDisclosure } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

// colors: #F6F2EE, #DCCCBB, #212121, #333333, #808080
// coolors, therma chakra

const links = [
	{ name: 'HOME', href: '/' },
	{ name: 'ABOUT', href: '/about' },
	{ name: 'SERVICES', href: '/services' },
	{ name: 'CONTACT', href: '/contact' },
]

function Navbar (){
	const { isOpen, onToggle } = useDisclosure()

	return (
		<Flex as='nav' align='center' justify='space-between' w='full' p={4} backgroundColor='#F6F2EE' >
			<Flex direction='column'>
				<Link ml={['2em', '2em', '4em']} mr={['2em', '2em', '4em']} href='/' as='span' style={{textDecoration: 'none'}}>
					<Heading size='lg' color=''>theracurephysio</Heading>
				</Link>
				<Box
					display={{ base: isOpen ? 'block' : 'none', md: 'none' }}
					mr='4em'
				>
					<Flex direction='column' alignItems={isOpen ? 'left' : 'center'} justify='center' mt={4} ml={isOpen ? '2em' : null}>
						{links.map((link) => (
							<Link href={link.href} key={link.name} p={2} style={{textDecoration: 'none'}}>
								<Text color='' _hover={{color: '#808080'}}>{link.name}</Text>
							</Link>
						))}
						<Link href='https://theracurephysio.janeapp.com/' style={{textDecoration: 'none'}}>
							<Button bgColor='#333333' color='white' _hover={{bg: '#808080'}}>Book now</Button>
						</Link>
					</Flex>
				</Box>
			</Flex>
			<IconButton
				aria-label='Open Menu'
				icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
				display={{ base: 'block', md: 'none' }}
				onClick={onToggle}
			/>
			<Flex ml='4em' mr='4em' justify='flex-end' gap={8}  display={{ base: 'none', md: 'flex' }}>
				{links.map((link) => (
					<Link href={link.href} key={link.name} p={2} style={{textDecoration: 'none'}}>
						<Text color='' _hover={{color: '#808080'}}>{link.name}</Text>
					</Link>
				))}
				<Link href='https://theracurephysio.janeapp.com/' style={{textDecoration: 'none'}}>
					<Button bgColor='#333333' color='white' _hover={{bg: '#808080'}}>Book now</Button>
				</Link>
			</Flex>
			
			
		</Flex>
	)
}

export default Navbar