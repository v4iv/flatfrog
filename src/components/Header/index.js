import React from 'react'
import { Box, Icon } from 'gestalt'

const Header = () => {
  return (
    <Box color="white"
      rounding={1}
      margin={1}
      padding={2}
      display="flex"
      alignItems="center"
      borderStyle="sm">
      <Box padding={2}>
        <Icon color="watermelon"
          icon="sparkle"
          size={32}
          inline
          accessibilityLabel="flatfrog"
        />
      </Box>

      <Box flex="grow" paddingX={1} />
    </Box>
  )
}

export default Header
