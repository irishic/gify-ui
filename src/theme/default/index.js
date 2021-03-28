import { extendTheme } from '@chakra-ui/react'
import colors from './colors'

export const theme = {
  colors,
}

export const chakraTheme = extendTheme({
  colors,
})