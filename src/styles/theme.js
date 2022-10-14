import emotionStyled from '@emotion/styled'

import colors from './colors'

const heights = {
  navbar: 6,
  footer: 6,
}

const zIndex = {
  under: -1,
  ground: 0,
  initial: 1,
  navBar: 10,
  topLevel: 5,
  modal: 100,
}

export const theme = {
  colors,
  heights,
  zIndex,
}

export const styled = emotionStyled
