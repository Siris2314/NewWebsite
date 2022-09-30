import {Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import {Title, ProjectImage, Meta} from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
    return (
        <Layout title="NecroAtomicBot">
            <Container>
                <Title>NecroAtomicBot <Badge>2020-Current</Badge></Title>
                <P>
                    A powerful discord bot that allows for secure moderation of discord servers, while also providing other features such as music and utility commands. An open source bot, NecroAtomic Bot is always looking for more contributors to help expand the project much further
                </P>
            <List ml={4} my={4}>
            <ListItem>
                <Meta>Source Code</Meta>
                <Link href="https://github.com/Siris2314/NecroAtomicBot">
                    https://github.com/Siris2314/NecroAtomicBot <ExternalLinkIcon mx="2px"/>
                </Link>
            </ListItem>
            <ListItem>
                <Meta>Tech Stack</Meta>
                <span>NodeJS,TensorflowJS, TFNode, DiscordJS</span>
            </ListItem>
            <ListItem>
                <Meta>Features</Meta>
                <span>ML Based Moderation System,Music System that supports YouTube and Spotify, Utility commands for every type of discord user</span>
            </ListItem>
            </List>
            <ProjectImage src="/images/necro1.png" alt="NecroAtomicBot"/>
            </Container>
        </Layout>
    )
}

export default Project