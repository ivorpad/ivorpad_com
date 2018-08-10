import Typography from 'typography'

const typography = new Typography({
  baseLineHeight: 1.666,
  headerFontFamily: ['Merriweather', 'serif'],
  googleFonts: [
    {
      name: 'Montserrat',
      styles: [
        '100',
        '300',
        '400',
        '700',
      ],
    },
    {
      name: 'Merriweather',
      styles: [
        '300',
        '300i',
        '400',
        '700',
      ],
    },
  ],
})

export default typography;