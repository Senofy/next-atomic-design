// https://github.com/diegohaz/arc/wiki/Styling
import { reversePalette } from 'styled-theme/composer'

const theme = {}

theme.palette = {
    primary: [
        '#E5F1FA',
        '#BED7FA',
        '#93B8F9',
        '#6596FB',
        '#3772FF',
        '#215AF0',
        '#0237E1',
        '#001FCE',
        '#0011A0'
    ],
    secondary: [
        '#E9F6EE',
        '#C2E6CF',
        '#9AD5AF',
        '#6FC48E',
        '#44AF69',
        '#319D54',
        '#1C8741',
        '#0B7A32',
        '#006224'
    ],
    danger: [
        '#F7E1E6',
        '#EFB6BF',
        '#E68894',
        '#DF5867',
        '#D62839',
        '#C51725',
        '#B2000D',
        '#9B0003',
        '#750200'
    ],
    alert: ['#ffa000', '#ffc107', '#ffd761', '#ffecb3'],
    success: ['#388e3c', '#4caf50', '#7cc47f', '#c8e6c9'],
    white: ['#fff', '#fff', '#eee'],
    grayscale: [
        '#F3F4F4',
        '#DADBDD',
        '#BEC1C3',
        '#A2A5AA',
        '#82868C',
        '#6C7076',
        '#54575E',
        '#42464C',
        '#2E323A'
    ],
}

theme.reversePalette = reversePalette(theme.palette)

theme.fonts = {
    primary: 'Inter, sans-serif',
    pre: 'Poppins, sans-serif',
    quote: 'Inter, sans-serif',
}

theme.sizes = {
    maxWidth: '1100px',
}

export default theme