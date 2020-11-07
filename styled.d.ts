import 'styled-components';


interface Palette {
  primary: string[];
  secondary: string[];
  danger: string[];
  alert: string[];
  success: string[];
  white: string[];
  grayscale: string[];
}

interface Fonts {
  primary: string;
  pre: string;
  quote: string;
}

interface Sizes {
  maxWidthTablet: string;
  maxWidthDesktop: string;
  maxWidthDesktopWide: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: Palette;
    sizes: Sizes;
    fonts: Fonts;
    reversePalette: Palette;
  }
}