import {buildLegacyTheme} from 'sanity';

const props = {
  '--mjk_white': '#f9f9f9',
  '--mjk_black': '#222222',
  '--mjk_red': '#D05353',
  '--mjk_blue': '#48639c',
  '--mjk_green': '#5e9859',
  '--mjk_yellow': '#f9e784',
  '--mjk_orange': '#F7996E',
  '--mjk_purple-700': '#935998',
  '--mjk_purple-400': '#C597C7',
  '--mjk_purple-200': '#E7C3E8',
  '--mjk_accent-800': '#38CEC6',
  '--mjk_tertiary-300': '#CD6493',
  '--mjk_dark-mode': '#3E3E3E',
};

export const theme = buildLegacyTheme({
  // Base Theme Colors
  '--gray-base': '#DADADA',
  // '--gray-dark': '#747474',
  '--component-bg': props['--mjk_white'],
  '--component-text-color': props['--mjk_black'],

  // Brand
  '--brand-primary': props['--mjk_purple-700'],

  // Defult Button
  '--default-button-color': '#666',
  '--default-button-primary-color': props['--mjk_purple-700'],
  '--default-button-success-color': props['--mjk_green'],
  '--default-button-warning-color': props['--mjk_yellow'],
  '--default-button-danger-color': props['--mjk_red'],

  // State
  '--state-info-color': props['--mjk_blue'],
  '--state-success-color': props['--mjk_green'],
  '--state-warning-color': props['--mjk_yellow'],
  '--state-danger-color': props['--mjk_red'],

  // NavBar
  '--main-navigation-color': props['--mjk_black'],
  '--main-navigation-color--inverted': props['--mjk_white'],

  '--focus-color': props['--mjk_purple-700'],
});
