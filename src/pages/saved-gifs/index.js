import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Heading, Box, Image } from '@chakra-ui/react'
import { GifsList } from '../../components/gifs-list';
import { removeGifFromSaved } from '../../redux/gifs/gifs.actions';
import { BackLink, SearchPageLink } from './saved-gifs.sc';

export const SavedGifs = () => {
  const dispatch = useDispatch();
  const savedGifs = useSelector(state => state.gifs.savedGifs)

  const removeFromFavorites = ({gif}) => {
    dispatch(removeGifFromSaved(gif))
  }

  return <Container maxW='100vw' marginTop='15px'>
    <SavedGifsHeader />
    {
      savedGifs.length ?
      <GifsList gifs={savedGifs} canRemove={true} onAction={removeFromFavorites} /> :
      <EmptyFavoritesMessage />
    }
  </Container>
}

const SavedGifsHeader = () => <Box position='relative'>
  <BackLink to='/search'>
    <Image src='back-icon.svg'/>
    Go back
  </BackLink>
  <Heading as="h2" size="lg" textAlign='center'>
    My saved GIFs
  </Heading>
</Box>

const EmptyFavoritesMessage = () => <Heading size='sm' textAlign='center' mt={12}>
  There are no saved GIFs for now. Go ahead and
  <SearchPageLink to='/search'> add them</SearchPageLink>
</Heading>