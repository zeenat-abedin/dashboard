import { createTheme } from '@mui/material';
import { DefaultTheme } from '@mui/material/styles';

const theme = createTheme({
  spacing: 8,
});

declare module '@mui/material/styles' {
  interface DefaultTheme {
    spacing?: (factor: number) => string;
    // Add other custom properties here
  }
}

export default theme;