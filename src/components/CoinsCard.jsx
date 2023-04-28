import { Heading, VStack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const CoinsCard = (props) => {
  return (
    <Link to={`/coins/${props.id}`}>
        <VStack w={"60"} shadow={"lg"} p={"12"} m={"4"} borderRadius={"lg"} transition={"all 0.3s"}
        css={{
            "&:hover": {
                transform:"Scale(1.1)"
            }
        }}
        >
            <img src={props.img} w={'4'} h={"4"} objectFit={"container"} alt={'exchange'}/>
            <Heading size={"md"} onOfLines={1}>{props.symbol}</Heading>
            <Text size={"sm"} onOfLines={"1"}>Name : {props.name}</Text>
            <Text onOfLines={"1"}> {props.price ? `${props.currencySymbol}${props.price}` : "NA"}</Text>

        </VStack>
    </Link>
  )
}

export default CoinsCard
