import {Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {GridItem} from '../components/grid-item'
import IBMCert from '../public/images/IBMCert.png'
import Clock from '../components/clock'

const current = new Date();
const date = `${current.getMonth() + 1}/${current.getDate()}/${current.getFullYear()}`;
const Posts = () => (
    <Layout title="Certifications">
        <Container>
            <Heading as="h4" fontSize={20} mb={4}>
                Certifications as of {date} -  <Clock />
            </Heading>
            <Section delay={0.5}>
                <SimpleGrid columns={[1,1,2]} gap={6}> 
                <GridItem title="IBM Data Science Certification" thumbnail={IBMCert} href="https://coursera.org/verify/professional-cert/EG9LX3C9QGF3">
                </GridItem>
                </SimpleGrid>
            </Section>

        </Container>


    </Layout>
)

export default Posts;