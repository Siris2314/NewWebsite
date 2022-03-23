import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Photo from '../images/newphoto.png'
import {BioSection, BioYear} from '../components/bio'
import Layout from '../components/layouts/article'

const Page = () => {
  return (
      <Layout>
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        align="center"
      >
        Hello, I am a Machine Learning and Data Science Enthusiast
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Arihant Tripathi
          </Heading>
          <p>Machine Learning Engineer and Data Scientist</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            src={Photo.src}
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            alt="Profile Image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About Me
        </Heading>
        <Paragraph>
          My name is Arihant Tripathi, I am currently an undergraduate student
          majoring in computer science at Rutgers University, New Brunswick and
          pursuing a Bachelors in Sciences in Computer Science. I am an avid
          computer scientist, who loves to explore the vast field of CS, with a
          passion for Machine Learning and Artificial Intelligence
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/projects">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Projects
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
    <Heading as="h2" variant="section-title">
        Work History
      </Heading>
      <BioSection>
          <BioYear>June 2021 -  August 2021</BioYear>
          Intern at Edenred
      </BioSection>
      <BioSection>
          <BioYear>January 2022 -  Current</BioYear>
          Teaching Assistant in the Department of Computer Science
      </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
            Hobbies
        </Heading>
        <Paragraph>
          Learning Completely Random Stuff, Learning more Programming Languages, Video Games, Anime, Marvel/DC Movies, Badminton, Martial Arts
        </Paragraph>
      </Section>
    </Container>
    </Layout>
  )
}
export default Page

