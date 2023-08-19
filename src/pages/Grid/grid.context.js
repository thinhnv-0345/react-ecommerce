import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
import generateFetchUrl from '../../helpers/ganerateFetchUrl'

const BASE_URL = 'http://localhost:8000'

const GridContext = createContext({
  products: [],
  categories: [],
  brands: [],
  ratings: 0,
  isLoading: true,
  hitOfPage: 16,
  numOfPage: 1,
  setFetchProductsUrl: () => {},
  setHitOfPage: () => {}
})

export const GridContextProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [brands, setBrands] = useState([])
  const [ratings, setRatings] = useState([])
  const [hitOfPage, setHitOfPage] = useState(16)
  const [numOfPage, setNumOfPage] = useState(1)

  const [fetchProductsUrl, setFetchProductsUrl] = useState(generateFetchUrl({ page: 1, limit: 16 }))
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data: categories } = await axios.get(`${BASE_URL}/categories?_sort=name&_order=ASC`)
        if (categories) setCategories(categories)
      } catch (error) {
        console.log(error)
      }
    }

    const fetchBrands = async () => {
      try {
        const { data: brandDatas } = await axios.get(
          `${BASE_URL}/brands?_sort=quantity&_order=DESC`
        )
        if (brandDatas) setBrands(brandDatas)
      } catch (error) {
        console.log(error)
      }
    }

    const fetchRatings = async () => {
      try {
        const { data: ratinsData } = await axios.get(`${BASE_URL}/ratings?_sort=rating&_order=DESC`)
        if (ratinsData) setRatings(ratinsData)
      } catch (error) {
        console.log(error)
      }
    }

    fetchCategories()
    fetchBrands()
    fetchRatings()
  }, [])

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(fetchProductsUrl)
      .then(response => {
        setNumOfPage(Math.ceil(Number(response.headers['x-total-count']) / hitOfPage))
        setProducts(response.data)
        setIsLoading(false)
        window.scrollTo({
          top: 366
        })
      })
      .catch(err => {
        console.log(err)
      })
  }, [fetchProductsUrl, hitOfPage])

  return (
    <GridContext.Provider
      value={{
        products,
        categories,
        brands,
        ratings,
        hitOfPage,
        numOfPage,
        isLoading,
        setHitOfPage,
        setFetchProductsUrl
      }}
    >
      {children}
    </GridContext.Provider>
  )
}

export default GridContext
