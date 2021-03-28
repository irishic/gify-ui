import { color } from '../../utils'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import styled from 'styled-components'

export const SearchPageLink = styled(Link)`
  color: ${color('light')}
`

export const BackLink = styled(Link)`
  position: absolute;
  left: 0;
  display: flex;
  align-items: center;
  white-space: nowrap;
  top: 50%;
  transform: translateY(-50%);

  img {
    width: 15px;
    height: 15px;
    margin-right: 5px;
  }
`