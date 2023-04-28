import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {server} from '../index'
import { Button, Container, HStack, RadioGroup, Radio } from '@chakra-ui/react'
import Loading from './Loading'
import CoinsCard from './CoinsCard'
import ErrorComponent from './ErrorComponent'

const Coins = () => {

  const [coins, setCoins] = useState([]);
  const [currency, setCurrency] = useState("inr");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const currencySymbol = currency === "inr" ? "₹" : currency==="eur" ? "€" : "$"

  useEffect(() => {
    const fetchCoins = async () => {
      try{
        const {data} = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
        console.log(data);
        setCoins(data);
        setLoading(false);
      }
      catch(err){
        setError(true);
        setLoading(false);
      }
    }
    fetchCoins();
  }, [currency, page])

  function handleNext () {
    setPage(prevState => prevState + 1);
    setLoading(true);
  }
  function handlePrevious () {
    setPage(prevState => prevState - 1);
    setLoading(true);
  }

  if (error) return <ErrorComponent/>

  return (
    <Container maxW={'container.xl'}>
      {loading ? <Loading/> : 
        <>

          <RadioGroup value={currency} onChange={setCurrency} p={8}>
            <HStack spacing={"4"}>
              <Radio value={"inr"}>INR</Radio>
              <Radio value={"usd"}>USD</Radio>
              <Radio value={"eur"}>EUR</Radio>
            </HStack>
          </RadioGroup>

          <HStack wrap={'wrap'}>
              {
                coins.map((i) => (
                  <CoinsCard key={i.id} id={i.id} name={i.name} img={i.image} symbol={i.symbol} 
                  price={i.current_price} currencySymbol={currencySymbol}/>
                ))
              }
          </HStack>
          <HStack justifyContent={"space-evenly"}>
            <Button bgColor={"blackAlpha.900"} color={"white"} onClick={handlePrevious}> previous {`${page - 1}`}</Button>
            <Button bgColor={"blackAlpha.900"} color={"white"} onClick={handleNext}>Next  {`${page + 1}`}</Button>
          </HStack>
        </>
      }
    </Container>
   
  )
}

export default Coins
