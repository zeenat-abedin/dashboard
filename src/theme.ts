import { createTheme } from '@mui/material';

const theme = createTheme({
  spacing: 8,
});

declare module '@mui/material/styles' {
  interface DefaultTheme {
    spacing?: (factor: number) => string;
  }
}

export default theme;