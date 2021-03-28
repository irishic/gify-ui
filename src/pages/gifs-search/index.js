import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '@chakra-ui/react'
import { Search } from '../../components/search';
import { GifsList } from '../../components/gifs-list';
import { addGifToSaved, clearGifsSearchResult, searchGifs } from '../../redux/gifs/gifs.actions'

export const GifsSearch = () => {
  const dispatch = useDispatch();
  const gifsSearchResult = useSelector(state => state.gifs.gifsSearchResult)

  const callSearchGifs = searchString => {
    dispatch(searchGifs(searchString))
  }

  const saveToFavorites = ({gif}) => {
    dispatch(addGifToSaved(gif))
  }

  useEffect(() => {
    dispatch(searchGifs())

    return () => dispatch(clearGifsSearchResult())
  }, [])

  return (
    <Container maxW='100vw' marginTop='15px'>
      <Search onSubmit={callSearchGifs} />
      <GifsList gifs={gifsSearchResult} canSaveFavorite={true} onAction={saveToFavorites} />
    </Container>
  )
}