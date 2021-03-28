import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { Input, Button, Flex } from '@chakra-ui/react'
import { UnderlinedLink, SearchForm } from './search.sc';

export const Search = ({onSubmit}) => {
  const [inputValue, setInputValue] = useState('')
  const onSearchSubmit = e => {
    e.preventDefault()
    onSubmit(inputValue)
  }
  return (
    <Flex alignItems='center'>
      <SearchForm onSubmit={onSearchSubmit}>
        <Flex>
          <Input type="text" value={inputValue} onChange={({target}) => setInputValue(target.value)} />
          <Button
            ml={2}
            colorScheme="teal"
            isLoading={false}
            type="submit"
          >
            Search for GIF
          </Button>
        </Flex>
      </SearchForm>
      <UnderlinedLink to='/saved'>My saved GIFs</UnderlinedLink>
    </Flex>
  )
}

Search.propTypes = {
  onSubmit: PropTypes.func
}

Search.defaultProps = {
  onSubmit: () => {}
}