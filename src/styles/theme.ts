import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    black: {
      main: '#000000',
      contrastText: '#FFFFFF',
    },
    yellow: {
      main: '#FFD600',
      contrastText: '#000000',
    },
  },

  components: {
    MuiAppBar: {},
  },
});

/**
 * 외부 라이브러리에서 선언된 인터페이스를 확장하기 위해서 declare를 사용하면 된다.
 */
declare module '@mui/material/styles' {
  interface Palette {
    black: Palette['primary']; // primary에서 사용하는 모든 속성을 netural에 넣어주기 위해 의도된 것
    yellow: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    black?: PaletteOptions['primary'];
    yellow?: PaletteOptions['primary'];
  }
}

/**
 * Button의 컬러 속성이 가능한 것들이 있게끔 확장 해주는 것
 * 문서 보면서 작업 하면 될 듯
 */
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    black: true;
    yellow: true;
  }
}

declare module '@mui/material/AppBar' {
  interface AppBarPropsColorOverrides {
    yellow: true;
  }
}
