import styled from 'styled-components'

export const ActionIconsContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  button {
    background: transparent !important;

    img {
      border-color: transparent;
      width: 20px;
      height: 20px;
    }

    &:hover {
      transform: scale(1.2)
    }
    &:active {
      transform: scale(0.85)
    }
  }
`

export const GifWrapper = styled.div`
  width: 100%;
  height: 0;
  padding-top: 100%;
  position: relative;

  img {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  &:hover img {
    object-fit: contain;
  }

  .chakra-spinner {
    position: absolute;
    top: calc(50% - 1.5rem);
    left: calc(50% - 1.5rem);
  }
`