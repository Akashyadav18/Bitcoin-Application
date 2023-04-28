import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {server} from '../index'
import { Container, HStack, Heading, VStack, Text, Button } from '@chakra-ui/react';
import Loading from './Loading';
import ErrorComponent from './ErrorComponent';

const Exchanges = () => {

    const [exchanges, setExchanges] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchExchanges = async () => {
            try{
                const {data} = await axios.get(`${server}/exchanges?page=${page}`);
                setExchanges(data);
                setLoading(false);
            }
            catch(error){
                setError(true);
                setLoading(false);
            }
        }
        fetchExchanges();
    }, [page]);

    const handleSub = () => {
        setPage(prevState => prevState - 1)
        setLoading(true);
    }
    const handleAdd = () => {
        setPage(prevState => prevState + 1)
        setLoading(true);
    }

    if(error) return <ErrorComponent/>

  return (
    <Container maxW={'container.xl'}>
        {loading ? <Loading/> : 
        (
            <>
                <HStack wrap={'wrap'}>
                    {
                        exchanges.map((i) => (
                            <ExchangeCard key={i.id} name={i.name} img={i.image} rank={i.trust_score_rank} 
                            url={i.url} country={i.country} year={i.year_established}/>   
                        )) 
                    }
                </HStack>
                <HStack justifyContent={"space-evenly"}>
                    <Button onClick={handleSub} bgColor={'blackAlpha.900'} color={"white"}>Previous {page-1}</Button>
                    <Button onClick={handleAdd} bgColor={'blackAlpha.900'} color={"white"}>Next {page+1}</Button>
                </HStack>
            </>
        )}
    </Container>
  )
}

const ExchangeCard = ({name, img, rank, url, country, year}) => (
    <a href={url} target={'blank'}>
        <VStack w={"60"} shadow={"lg"} p={"12"} m={"4"} borderRadius={"lg"} transition={"all 0.3s"}
        css={{
            "&:hover": {
                transform:"Scale(1.1)"
            }
        }}
        >
            <img src={img} w={'4'} h={"4"} objectFit={"container"} alt={'exchange'}/>
            <Heading size={"md"} onOfLines={1}>{rank}</Heading>
            <Heading size={"sm"} onOfLines={"1"}>Name : {name}</Heading>
            <Text onOfLines={"1"}>Country : {country} - {year}</Text>

        </VStack>
    </a>
)

export default Exchanges
