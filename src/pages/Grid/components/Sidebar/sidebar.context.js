import { createContext, useContext, useEffect, useState } from 'react'
import generateFetchUrl from '../../../../helpers/ganerateFetchUrl'
import GridContext from '../../grid.context'

export const MIN_RANGE_VALUE = 2
export const MAX_RANGE_VALUE = 5000
export const ONE_PER_CENT_VALUE = (MAX_RANGE_VALUE - MIN_RANGE_VALUE) / 100

const SidebarContext = createContext({
  currCategoryLvl0: '',
  currCategoryLvl1: '',
  currBrands: [],
  currRangeValue: [],
  isFreeShip: false,
  rating: 0,
  setCurrCategoryLvl0: () => {},
  setCurrCategoryLvl1: () => {},
  setCurrBrands: () => {},
  setCurrRangeValue: () => {},
  setIsFreeShip: () => {},
  setRating: () => {}
})

export const SidebarContextProvider = ({ children }) => {
  const gridCtx = useContext(GridContext)
  const [currCategoryLvl0, setCurrCategoryLvl0] = useState('')
  const [currCategoryLvl1, setCurrCategoryLvl1] = useState('')
  const [currBrands, setCurrBrands] = useState([])
  const [currRangeValue, setCurrRangeValue] = useState([])
  const [isFreeShip, setIsFreeShip] = useState(false)
  const [rating, setRating] = useState(0)

  useEffect(() => {
    const option = {
      category_lvl0: currCategoryLvl0,
      category_lvl1: currCategoryLvl1,
      free_shipping: isFreeShip,
      rating_gte: rating,
      price_gte: MIN_RANGE_VALUE + currRangeValue[0] * ONE_PER_CENT_VALUE,
      price_lte: MIN_RANGE_VALUE + currRangeValue[1] * ONE_PER_CENT_VALUE
    }

    const fetchUrl = generateFetchUrl({ page: 1, limit: 16 }, null, option, currBrands)

    gridCtx.setFetchProductsUrl(fetchUrl)
  }, [currCategoryLvl0, currCategoryLvl1, currBrands, currRangeValue, isFreeShip, rating, gridCtx])

  return (
    <SidebarContext.Provider
      value={{
        currCategoryLvl0,
        currCategoryLvl1,
        currBrands,
        currRangeValue,
        isFreeShip,
        rating,
        setCurrCategoryLvl0,
        setCurrCategoryLvl1,
        setCurrBrands,
        setCurrRangeValue,
        setIsFreeShip,
        setRating
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarContext
