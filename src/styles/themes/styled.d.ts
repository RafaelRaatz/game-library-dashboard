import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;
      tertiary: string;

      background: string;
      text: string;
      buttonLight: string;
      buttonDark: string;
    };
  }
}
