import React, { useEffect, useState } from 'react'
import 'gestalt/dist/gestalt.css'
import { Box, ColorSchemeProvider, Container } from "gestalt"
import ThemeContext from '../../contexts/ThemeContext'
import Header from "../Header"

const Layout = (props) => {
  const { children } = props
  const [scheme, setScheme] = useState('light')

  const toggleScheme = () => {
    const nextScheme = scheme === 'light' ? 'dark' : 'light'

    localStorage.setItem('scheme', nextScheme)

    setScheme(scheme)
  }

  useEffect(() => {
    if (typeof window === 'undefined') return

    if (localStorage && localStorage.getItem('scheme')) {
      const colorScheme = localStorage.getItem('scheme')

      setScheme(colorScheme)
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ scheme, toggleScheme }}>
      <ColorSchemeProvider colorScheme={scheme}>
        <Box color="white" minHeight="100vh">
          <Container>
            <Header/>
            {children}
          </Container>
        </Box>
      </ColorSchemeProvider>
    </ThemeContext.Provider>
  )
}

export default Layout
