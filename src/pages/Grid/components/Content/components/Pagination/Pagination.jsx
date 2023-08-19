import { Button, HStack } from '@chakra-ui/react'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useState } from 'react'
import GridContext from '../../../../grid.context'

function Pagination() {
  const gridCtx = useContext(GridContext)
  const [currPage, setCurrPage] = useState(1)
  console.log(gridCtx.numOfPage)
  let arr = Array.from(Array(gridCtx.numOfPage), (x, index) => index + 1)

  const handleChangePage = page => {
    gridCtx.setFetchProductsUrl(fetchProductsUrl => {
      return fetchProductsUrl.replace(/_page=\d+/g, `_page=${page}`)
    })
  }

  arr = arr.filter(val => {
    if (currPage > 3 && currPage < gridCtx.numOfPage - 2) {
      return val >= currPage - 2 && val <= currPage + 2
    } else if (currPage >= gridCtx.numOfPage - 2) {
      return val >= gridCtx.numOfPage - 4
    } else {
      return val <= 5
    }
  })

  return (
    <HStack mt="80px">
      <Button
        pointerEvents={currPage === 1 ? 'none' : 'fill'}
        color={currPage === 1 ? 'dark.200' : 'dark.800'}
        bgColor="transparent"
        _hover={{ bgColor: 'transparent' }}
        onClick={() => {
          if (currPage > 1) {
            setCurrPage(currPage => currPage - 1)
            handleChangePage(currPage - 1)
          }
        }}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </Button>
      <HStack>
        {arr.map(item => {
          return (
            <Button
              colorScheme={item === currPage ? 'primary' : 'gray'}
              h="40px"
              w="40px"
              onClick={() => {
                setCurrPage(item)
                handleChangePage(item)
              }}
            >
              {item}
            </Button>
          )
        })}
      </HStack>
      <Button
        pointerEvents={currPage === gridCtx.numOfPage ? 'none' : 'fill'}
        bgColor="transparent"
        color={currPage === gridCtx.numOfPage ? 'dark.200' : 'dark.800'}
        _hover={{ bgColor: 'transparent' }}
        onClick={() => {
          if (currPage <= gridCtx.numOfPage - 1) {
            setCurrPage(currPage => currPage + 1)
            handleChangePage(currPage + 1)
          }
        }}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </Button>
    </HStack>
  )
}

export default Pagination
