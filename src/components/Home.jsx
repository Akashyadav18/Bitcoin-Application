import React from 'react';
import {Text, Box} from "@chakra-ui/react";

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
      <img w={"full"} h={"85vh"} objectFit={"content"} 
      src={"https://images.news18.com/ibnlive/uploads/2022/06/crypto-market-crash-165521150016x9.jpg"} alt="crypto"/>  
      <Text fontSize={"6xl"} textAlign={"center"} fontWeight={"thin"} color={"whiteAlpha.700"} mt={"-20"}>
      XCrypto
      </Text>  
    </Box>
  )
}

export default Home
