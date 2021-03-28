import styled from 'styled-components'
import { Grid } from '@chakra-ui/react'
import { color } from './utils'

export const Header = styled.div`
  padding: 10px;
  background-color: ${color('header')}
`

export const AppGrid = styled(Grid)`
  min-height: 100vh;
`