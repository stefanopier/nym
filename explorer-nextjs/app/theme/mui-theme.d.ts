import { Theme, ThemeOptions, Palette, PaletteOptions } from '@mui/material/styles';
import { NymTheme, NymPaletteWithExtensions, NymPaletteWithExtensionsOptions } from '@nymproject/mui-theme';

/**
 * If you are unfamiliar with Material UI theming, please read the following first:
 * - https://mui.com/customization/theming/
 * - https://mui.com/customization/palette/
 * - https://mui.com/customization/dark-mode/#dark-mode-with-custom-palette
 *
 * This file adds typings to the theme using Typescript's module augmentation.
 *
 * Read the following if you are unfamiliar with module augmentation and declaration merging. Then
 * look at the recommendations from Material UI docs for implementation:
 * - https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation
 * - https://www.typescriptlang.org/docs/handbook/declaration-merging.html#merging-interfaces
 * - https://mui.com/customization/palette/#adding-new-colors
 *
 *
 * IMPORTANT:
 *
 * The type augmentation must match MUI's definitions. So, notice the use of `interface` rather than
 * `type Foo = { ... }` - this is necessary to merge the definitions.
 */

declare module '@mui/material/styles' {
  /**
   * This augments the definitions of the MUI Theme with the Nym theme, as well as
   * a partial `ThemeOptions` type used by `createTheme`
   *
   * IMPORTANT: only add extensions to the interfaces above, do not modify the lines below
   */
  interface Theme extends NymTheme { }
  interface ThemeOptions extends Partial<NymTheme> { }
  interface Palette extends NymPaletteWithExtensions { }
  interface PaletteOptions extends NymPaletteWithExtensionsOptions { }
}
