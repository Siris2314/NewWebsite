import {Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import {Title, Meta} from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Player from '../../components/player'


const Project = () => {

    return(
        <Layout title="stockenable">
            <Container>
                <Title>Stock Enable <Badge>2021-Current</Badge></Title>

                <P>
                A python package built to allow stock prediction and crypto prediction
                </P>

                <List ml={4} my={4}>
                <ListItem>
                <Meta>Source Code</Meta>
                <Link href="https://github.com/Siris2314/StockEnable">
                    https://github.com/Siris2314/StockEnable<ExternalLinkIcon mx="2px"/>
                </Link>
                </ListItem>
                <ListItem>
                <Meta>Tech Stack</Meta>
                <span>Python,SQL,Pandas,Numpy,Tensorflow</span>
                </ListItem>
                <ListItem>
                <Meta>Features</Meta>
                <span>A python package built to allow stock prediction and crypto prediction, built on the powerful TensorFlow Library, StockEnable/StockFast is a package that allows for easy stock and crypto prediction.</span>
                </ListItem>
                </List>
                <Player url="https://youtu.be/ZVOeaGZsNC0 "/>
            </Container>


        </Layout>
    )


}