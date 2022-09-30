import NextLink from 'next/link'
import {Box, Heading,Text, Container, Divider, Button} from '@chakra-ui/react'

const NotFound = () => {
    return (
        <Container>
        <Heading as="h1">Page Not Found</Heading>
        <Text>This Page Does Not Exist</Text>
        <Divider my={6} />
        
        <Box my={6} align="center">
            <NextLink href="/">
                <Button colorScheme="cyan">Back to Homepage</Button>
            </NextLink>
        </Box>
        </Container>
    )
}

export default NotFound