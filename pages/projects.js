import {Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Section from '../components/section'
import {ProjectGridItem} from '../components/grid-item'
import necroAtomicThumb from '../public/images/necroAtomicThumb.png'
import necroFinance from '../public/images/necroFinance.png'
import th from '../public/images/th.jpg'
const Projects = () => {

    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Projects
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <ProjectGridItem id="necroatomicbot" title="NecroAtomicBot" thumbnail={necroAtomicThumb}><strong>ML Based Discord Bot</strong></ProjectGridItem>
                </Section>
                <Section>
                    <ProjectGridItem id="necrofinance" title="NecroFinance" thumbnail={necroFinance}><strong>Financial Virtual Assistant built using NLP</strong></ProjectGridItem>
                </Section>
                <Section>
                    <ProjectGridItem id="stockenable" title="StockEnable" thumbnail={th}><strong>Python Package built with Neural Networks to make prediction easier</strong></ProjectGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Projects