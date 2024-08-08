import 'styled-components'
import { defaultTheme } from './theme'

// extrair a tipagem criada pelo typescript
type ThemeType = typeof defaultTheme
declare module 'styled-components' {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    export interface DefaultTheme extends ThemeType { }
}
