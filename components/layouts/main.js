import Head from 'next/head';
import {Box,Container} from '@chakra-ui/react'
import Navbar from '../navbar'
import VoxelDogLoader from '../goku-loader'
import dynamic from 'next/dynamic'

const LazyVoxelDog = dynamic(() => import('../goku'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})
const Main = ({children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Arihant Tripathi</title>
            </Head>
            <Navbar router={router.asPath} />
            <Container maxW="container.md" pt={14}>
                <LazyVoxelDog />
                {children}
            </Container>
        </Box>
    )
}

export default Main;