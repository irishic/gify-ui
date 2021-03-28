import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Box, Image, Heading, IconButton, Spinner } from '@chakra-ui/react'
import { ActionIconsContainer, GifWrapper } from './gifs-list.sc'
import { REMOVE, SAVE } from '../../constants'

const LikeIcon = () => <img src='heart-icon.svg' />
const RemoveIcon = () => <img src='trash-icon.svg' />

const GifFallback = () => <Spinner
  thickness="4px"
  speed="0.8s"
  color="light"
  size="xl"
/>

export const GifsList = ({gifs, canSaveFavorite, canRemove, onAction}) => {
  const onActionClick = action => {
    onAction(action)
  }

  return <Grid templateColumns='repeat(5, minmax(0, 1fr))' mt={6}>
    {
      gifs.map(gif => <Box key={gif.id} mr={5} mb={4} position='relative'>
          <GifWrapper>
            <Image src={gif.images.downsized.url} alt={gif.title} fallback={<GifFallback />} />
          </GifWrapper>
          <ActionIconsContainer className='gif-action-icons-container'>
            {canSaveFavorite ? <IconButton icon={<LikeIcon />} onClick={() => onActionClick({action: SAVE, gif})} /> : ''}
            {canRemove ? <IconButton icon={<RemoveIcon />} onClick={() => onActionClick({action: REMOVE, gif})} /> : '' }
          </ActionIconsContainer>
          <Heading as="h5" size="xs" mt={2}>{gif.title}</Heading>
          <Box>{gif.username}</Box>
      </Box>)
    }
  </Grid>
}

GifsList.propTypes = {
  gifs: PropTypes.arrayOf(PropTypes.object),
  canSaveFavorite: PropTypes.bool,
  canRemove: PropTypes.bool,
  onAction: PropTypes.func
}

GifsList.defaultProps = {
  gifs: [],
  canSaveFavorite: false,
  canRemove: false,
  onAction: () => {}
}
