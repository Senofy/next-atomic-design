// https://github.com/diegohaz/arc/wiki/Styling
import { reversePalette } from 'styled-theme/composer'

const theme = {}

theme.palette = {
    primary: [
        '#0168FA'
    ],
    secondary: [
        '#7987A1'
    ],
    danger: [
        '#DC3545'
    ],
    alert: ['#ffa000', '#ffc107', '#ffd761', '#ffecb3'],
    success: ['#388e3c', '#4caf50', '#7cc47f', '#c8e6c9'],
    white: ['#fff'],
    grayscale: [
        '#f4f5f8',
        '#3b4863'
    ],
}

theme.reversePalette = reversePalette(theme.palette)

theme.fonts = {
    primary: 'IBM Plex Sans, sans-serif',
    pre: 'Inter, sans-serif',
    quote: 'IBM Plex Sans, sans-serif',
}

theme.sizes = {
    maxWidth: '1140px',
}

export default theme