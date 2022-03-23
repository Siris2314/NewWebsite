import {Container, Box, Heading, SimpleGrid, Divider} from '@chakra-ui/react'
import Section from '../components/section'
import {WorkGridItem} from '../components/grid-item'

import banner from '../images/necroAtomicThumb.png'
import banner2 from '../images/necroFinance.png'
import banner3 from "../images/FgTq0eT.png"
import Layout from '../components/layouts/article'

const Projects = () => {
    return (
        <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Projects
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
            <Section>
                <WorkGridItem id="NecroAtomic" title="NecroAtomicBot" thumbnail={banner}>
                A MultiPurpose Discord Bot build with Node.js that utilizes multiple APIs, Databases, and Machine Learning Algorithms to deliver a powerful bot for users
                </WorkGridItem>
            </Section>
            <Section>

            <WorkGridItem id="NecroFinance" title="NecroFinance" thumbnail={banner2}>
                A powerful financial assistant built with databases, Neural Networks, and Natural Language Processing, that simulates stock trading, stock predicting, and crypto prediction
            </WorkGridItem>
            </Section>

            <Section>
            <WorkGridItem id="Djs-Search" title="Djs-Search" thumbnail={banner3}>
                 A VS Code extension made for Discord.js developers to make API references easier to access. Built in Javascript with the powerful VsCode WebView API.
            </WorkGridItem>
            </Section>


            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Projects