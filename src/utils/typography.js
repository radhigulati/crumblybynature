import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'
import wordpressKubrickTheme from 'typography-theme-wordpress-kubrick'
import bootstrapTheme from 'typography-theme-bootstrap'

Wordpress2016.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
})

delete Wordpress2016.googleFonts

//const typography = new Typography(Wordpress2016)
//const typography = new Typography(wordpressKubrickTheme)
const typography = new Typography(bootstrapTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
