import {Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import {Title, Meta} from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Player from '../../components/player'


const Project = () => {
    return(
        <Layout title="NecroFinance">
            <Container>
                <Title>NecroFinance <Badge>2021-Current</Badge></Title>

                <P>
                A powerful financial assistant built with databases, Neural Networks, and Natural Language Processing. Made to simulate stock and crypto purchasing using NLP and Tensorflow. Do not use this for Financial Purposes, I am not responsible for any financial decisions made based on this bot, I am not a financial advior. Please seek a professional for actual financial endeavors.
                </P>

                <List ml={4} my={4}>
                <ListItem>
                <Meta>Source Code</Meta>
                <Link href="https://github.com/Siris2314/NecroFinance">
                    https://github.com/Siris2314/NecroFinance<ExternalLinkIcon mx="2px"/>
                </Link>
                </ListItem>
                <ListItem>
                <Meta>Tech Stack</Meta>
                <span>Python,SQL,Pandas,Numpy,Tensorflow, SKLearn, MathPlotLib, Plotly</span>
                </ListItem>
                <ListItem>
                <Meta>Features</Meta>
                <span>ML Based Stock and Crypto purchasing system, Financial prediction system, Stock and Crypto data analysis</span>
                </ListItem>
                </List>
                <Player url="https://youtu.be/ZVOeaGZsNC0 "/>
            </Container>


        </Layout>
    )




}


export default Project