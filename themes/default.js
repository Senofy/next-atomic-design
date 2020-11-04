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
    white: ['#fff', 'rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.3)', 'rgba(255, 255, 255, 0.4)', 'rgba(255, 255, 255, 0.5)', 'rgba(255, 255, 255, 0.6)', 'rgba(255, 255, 255, 0.7)', 'rgba(255, 255, 255, 0.8)'],
    grayscale: [
        '#f4f5f8',
        '#e3e7ed',
        '#cdd4e0',
        '#b4bdce',
        '#97a3b9',
        '#7987a1',
        '#596882',
        '#3b4863',
        '#1c273c',
    ],
}

theme.reversePalette = reversePalette(theme.palette)

theme.fonts = {
    primary: '"IBM Plex Sans", sans-serif',
    pre: 'Inter, sans-serif',
    quote: '"IBM Plex Sans", sans-serif',
}

theme.sizes = {
    maxWidth: '1140px',
}

export default theme