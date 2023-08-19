import { Box, Checkbox, HStack, Tag, Text } from '@chakra-ui/react'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import SidebarContext from '../../sidebar.context'

function BrandFilterItem({ item }) {
  const sidebarCtx = useContext(SidebarContext)
  let isInCurrBrands = sidebarCtx.currBrands.includes(item.name)

  const handleCheckBoxOnChange = e => {
    if (isInCurrBrands) {
      sidebarCtx.setCurrBrands(currBrands => {
        const newCurrBrands = currBrands.filter(val => !(val === item.name))
        return newCurrBrands
      })
    } else {
      sidebarCtx.setCurrBrands(currBrands => {
        const newCurrBrands = [...currBrands]
        newCurrBrands.push(item.name)
        return newCurrBrands
      })
    }
  }

  return (
    <Checkbox
      isChecked={isInCurrBrands ? true : false}
      icon={
        <Box fontSize="5px">
          <FontAwesomeIcon icon={faCircle} />
        </Box>
      }
      onChange={handleCheckBoxOnChange}
    >
      <HStack as="button" gap="0" ml="8px" pointerEvents="none" cursor="pointer">
        <Text sx={styles.title} fontWeight={isInCurrBrands === item.name ? 'bold' : '400'}>
          {item?.name}
        </Text>
        <Tag sx={styles.tag}>{item?.quantity}</Tag>
      </HStack>
    </Checkbox>
  )
}

const styles = {
  tag: {
    fontSize: '10px',
    fontWeight: '700',
    lineHeight: '1',
    minH: '16px',
    minW: 'auto',
    pl: '4px',
    pr: '4px',
    bgColor: 'dark.50',
    color: 'dark.800',
    borderRadius: '4px'
  },
  title: {
    color: 'dark.1000',
    fontSize: '14.4px',
    mr: '8px'
  }
}

export default BrandFilterItem
