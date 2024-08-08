import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import {defaultTheme}  from './theme/theme.ts'
import { router } from './router/index.tsx'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './theme/globalStyle.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
