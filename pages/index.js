import {Button,Container, Box, Heading,Image,useColorModeValue} from "@chakra-ui/react"
import NextLink from 'next/link'
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { ChevronRightIcon } from "@chakra-ui/icons"


const Page = () => {

    const photo = require('/images/newphoto.png').default
    return(
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')} p={3} mb={6} align="center">
                Hello, I am a Machine Learning and Data Science Enthusiast
            </Box>

            <Box display={{md:'flex'}}>
             <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
                Arihant Tripathi
            </Heading>
            <p>Machine Learning Engineer and Data Scientist</p>
            </Box>
            <Box flexShrink={0} mt={{base:4, md:0}} ml={{md:6}} align="center">
                <Image src={photo} borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" alt="Profile Image"/>
            </Box>
          </Box>

          <Section delya={0.1}>
              <Heading as="h3" variant="section-title">
                  About Me
              </Heading>
              <Paragraph>
                My name is Arihant Tripathi, I am currently an undergraduate student majoring in computer science at Rutgers University, New Brunswick and pursuing a Bachelors in Sciences in Computer Science. I am an avid computer scientist, who loves to explore the vast field of CS, with a passion for Machine Learning and Artificial Intelligence
              </Paragraph>
              <Box align="center" my={4}>
                <NextLink href="/projects">

                    <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
                        Projects
                    </Button>
                </NextLink>
              </Box>
           </Section>
        </Container>
    )
}
export default Page