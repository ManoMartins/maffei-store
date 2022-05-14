import { extendTheme } from '@chakra-ui/react';
import { scale } from 'chroma-js';

export enum AccentColorEnum {
  primary = '#9146FF',
  secondary = '#6ca420',
}

const extractColors = (themeColor: string): string[] =>
  scale([themeColor, '#FFFFFF']).mode('lch').colors(11);

const getThemes = (accentColors: [string, AccentColorEnum][]) => {
  const accentThemes: Record<string, Record<number, string>> = {};

  accentColors.forEach(([key, value]) => {
    const colors = extractColors(value);

    accentThemes[key] = {
      900: colors[0],
      800: colors[1],
      700: colors[2],
      600: colors[3],
      500: colors[4],
      400: colors[5],
      300: colors[6],
      200: colors[7],
      100: colors[8],
      50: colors[9],
    };
  });

  return accentThemes;
};

export const accentThemes = getThemes(Object.entries(AccentColorEnum));

export const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        background: '#0e0e10',
      },
    },
  },

  colors: {
    ...accentThemes,
  },
});
