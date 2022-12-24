import Head from 'next/head';
import {Box,Container} from '@chakra-ui/react'
import Navbar from '../navbar'
import GokuLoader from '../goku-loader'
import dynamic from 'next/dynamic'

const GokuLoad = dynamic(() => import('../goku'), {
  ssr: false,
  loading: () => <GokuLoader />
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
                <GokuLoad />
                {children}
            </Container>
        </Box>
    )
}

export default Main;