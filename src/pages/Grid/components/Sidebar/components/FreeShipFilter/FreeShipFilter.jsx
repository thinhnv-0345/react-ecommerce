import { FormControl, FormLabel, Switch, Text, VStack } from '@chakra-ui/react'
import React, { useContext } from 'react'
import SidebarContext from '../../sidebar.context'

function FreeShipFilter() {
  const sidebarCtx = useContext(SidebarContext)

  return (
    <VStack w="100%" alignItems="flex-start" pt="32px" pb="32px">
      <Text fontSize="11px" fontWeight="500" letterSpacing="1px">
        FREE SHIPPING
      </Text>
      <FormControl display="flex" alignItems="center" _hover={{ cursor: 'pointer' }}>
        <FormLabel
          htmlFor="free-shipping"
          mb="0"
          fontSize="14.4px"
          fontWeight="400"
          cursor="pointer"
        >
          Display only items with free shipping
        </FormLabel>
        <Switch
          id="free-shipping"
          onChange={e => {
            sidebarCtx.setIsFreeShip(e.target.checked)
          }}
          checked={sidebarCtx.isFreeShip ? true : false}
        />
      </FormControl>
    </VStack>
  )
}

export default FreeShipFilter
