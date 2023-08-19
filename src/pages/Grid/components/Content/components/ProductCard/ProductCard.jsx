import { Center, HStack, Image, Text, VStack } from '@chakra-ui/react'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function ProductCard({ product }) {
  return (
    <VStack alignItems="flex-start">
      <Center minH="150px">
        <Image src={product?.image} alignSelf="center" />
      </Center>
      <Text
        textTransform="uppercase"
        fontSize="12px"
        letterSpacing="1px"
        fontWeight="bold"
        color="dark.500"
      >
        {product?.category_lvl0}
      </Text>
      <Text fontSize="14.4px" fontWeight="bold" color="dark.800">
        {product?.name}
      </Text>
      <Text fontSize="14.4px" color="dark.800" height="40px" overflowY="hidden">
        {product?.description}
      </Text>
      <HStack>
        <Text fontSize="11px" color="primary.500" fontWeight="bold">
          $
        </Text>
        <Text fontSize="14px" color="dark.800" fontWeight="bold">
          {product?.price}
        </Text>
        <HStack
          border="0.5px solid"
          borderColor="primary.500"
          borderRadius="3px"
          fontSize="6px"
          pl="4px"
          pr="4px"
          gap="2px"
          color="primary.500"
        >
          <FontAwesomeIcon icon={faStar} />
          <Text fontSize="10px" fontWeight="bold">
            {product?.rating}
          </Text>
        </HStack>
      </HStack>
    </VStack>
  )
}

export default ProductCard
