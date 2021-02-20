import { Global } from '@emotion/react'
import { extendTheme } from '@chakra-ui/react'

export const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'NotoSans';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(/fonts/Noto_Sans_JP/NotoSansJP-Regular.otf);
      }
      
      @font-face {
        font-family: 'NotoSans';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(/fonts/Noto_Sans_JP/NotoSansJP-Bold.otf);
      }
      
      @font-face {
        font-family: 'NotoSans';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(/fonts/Noto_Sans_JP/NotoSansJP-Light.otf);
      }
      `}
  />
)

const theme = extendTheme({
  fonts: {
    heading: 'NotoSans',
    body: 'NotoSans'
  }
})

export default theme
