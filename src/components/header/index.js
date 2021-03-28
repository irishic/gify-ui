import React from 'react'
import { Flex, Container, Heading } from '@chakra-ui/react'

export const Header = () => {
  return <Container bg='header' maxW='100vw' color='white'>
    <Flex h='100%' alignItems='center'>
      <Heading size="md">GIFy time✨</Heading>
    </Flex>
  </Container>
}