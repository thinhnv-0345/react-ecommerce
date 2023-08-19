import { Box, HStack, Tag } from '@chakra-ui/react'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import SidebarContext from '../../sidebar.context'

function RatingFilterItem({ rating, quantity }) {
  const sidebarCtx = useContext(SidebarContext)
  const handleOnClick = e => {
    if (sidebarCtx.rating === rating) {
      sidebarCtx.setRating(0)
    } else {
      sidebarCtx.setRating(rating)
    }
  }
  return (
    <HStack as="button" gap="16px" onClick={handleOnClick}>
      <HStack>
        {[1, 2, 3, 4, 5, 6].map(item => {
          return item > rating ? (
            <Box key={item} color="dark.50">
              <FontAwesomeIcon icon={faStar} />
            </Box>
          ) : (
            <Box key={item} color={sidebarCtx.rating === rating ? 'primary.500' : 'primary.400'}>
              <FontAwesomeIcon icon={faStar} />
            </Box>
          )
        })}
      </HStack>
      <Tag sx={styles.tag}>{quantity}</Tag>
    </HStack>
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
    color: 'dark.300',
    borderRadius: '4px'
  }
}

export default RatingFilterItem
