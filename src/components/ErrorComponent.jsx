import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

const ErrorComponent = () => {
  return (
    <Alert
    status='error'
    position={"fixed"}
    top={"50%"}
    left={"50%"}
    transform={"translateX(-50%)"}
    
    w={"container.lg"}
    p={"5"}
    >
      <AlertIcon > <h3 alignItems={"center"}>Error</h3> </AlertIcon>
    </Alert>
  )
}

export default ErrorComponent
