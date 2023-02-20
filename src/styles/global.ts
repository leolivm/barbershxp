import { globalCss } from '@ignite-ui/react'
import { Roboto } from '@next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: '100',
})

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
    fontFamily: roboto.style.fontFamily,
  },

  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },
})
