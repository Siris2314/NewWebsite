import {Button,Container, Box, Heading, Image,SimpleGrid,useColorModeValue, List, ListItem, Link,Icon} from '@chakra-ui/react'
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from "../components/layouts/article"
import { BioSection, BioYear } from '../components/bio'
import Funfact from '../components/funfact'
import {IoLogoGithub, IoLogoLinkedin, IoMailSharp} from 'react-icons/io5'
import {SiDevpost} from 'react-icons/si'
const Page = () => {
    return (
        <Layout>
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={4} mb={6} align="center">
                <strong>Fun fact of the day: </strong>
                <Funfact/>
            </Box>
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Arihant Tripathi
                     </Heading>
                     <p>Machine Learning Student</p>
                </Box>
                <Box flexShrink={0} mt={{base:4, md:0}} ml={{md:6}} align="center">
                    <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/newphoto.png" alt="Profile Image"/>
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    About Me
                </Heading>
            
            <Paragraph>My name is Arihant Tripathi, I am currently an undergraduate student majoring in computer science at Rutgers University, New Brunswick and pursuing a Bachelors in Sciences in Computer Science. I am an avid computer scientist, who loves to explore the vast field of CS, with a passion for Machine Learning and Artificial Intelligence</Paragraph>
        <Box align="center" my={4}>
        <NextLink href="/projects">
        <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">Projects </Button>
        </NextLink>
        </Box>
        </Section>
        <Section delay={0.2}>
            <Heading as="h3" variant="section-title">
                Bio
            </Heading>
            <BioSection>
                <BioYear>September 2020</BioYear>
                Entered Rutgers Univerisity as an Undergraduate studying Computer Science and Statistics
            </BioSection>
            <BioSection>
                <BioYear>June 2021 - August 2021</BioYear>
                Interned at Edenred, worked on an NLP based Chatbot
            </BioSection>
            <BioSection>
                <BioYear>January 2022 - Current</BioYear>Became a part time lecturer for Computer Architecture(CS211) at Rutgers University
            </BioSection>
            <BioSection>
                <BioYear>June 2022 - August 2022</BioYear>Interned at JPMorgan, worked on a clustering ML Algorithm to find the right type of customers for a certain loan
            </BioSection>
          

        </Section>
        <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
                Hobbies
            </Heading>
            <Paragraph>
                Coding, Playing Video Games, Running, Badminton, Photography, Hiking
            </Paragraph>
        </Section>
        <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
             Contact Links
        </Heading>
        <List>
            <ListItem>
                <Link href="https://github.com/Siris2314" target="_blank">
                    <Button variant="ghost" colorScheme="cyan" leftIcon={<Icon as={IoLogoGithub} />}>Siris2314</Button>
                </Link>
            </ListItem>
            <ListItem>
                <Link href="https://www.linkedin.com/in/arihant-tripathi-2374b7191/" target="_blank">
                    <Button variant="ghost" colorScheme="cyan" leftIcon={<Icon as={IoLogoLinkedin} />}>Arihant Tripathi</Button>
                </Link>
            </ListItem>
            <ListItem>
                <Link href="mailto:tarihant2001@gmail.com"  target="_blank">
                    <Button variant="ghost" colorScheme="cyan" leftIcon={<Icon as={IoMailSharp} />}>tarihant2001@gmail.com</Button>
                </Link>
            </ListItem>
            <ListItem>
                <Link href="https://devpost.com/Siris2314?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"  target="_blank">
                    <Button variant="ghost" colorScheme="cyan" leftIcon={<Icon as={SiDevpost} />}>Arihant Tripathi</Button>
                </Link>
            </ListItem>
        </List>
        </Section>
        </Container>
        </Layout>
       
    )
    
}

export default Page;