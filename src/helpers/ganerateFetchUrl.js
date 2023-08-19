const BASE_URL = 'http://localhost:8000'

const generateFetchUrl = (paginate, sort, operators, currBrands) => {
  let resultUrl = BASE_URL + '/products?'

  //paginate
  const page = paginate?.page ? paginate.page : 1
  const limit = paginate?.limit ? paginate.limit : 16
  resultUrl = resultUrl + `_page=${page}&_limit=${limit}`

  // sort
  const sortField = sort?.sortField ? sort.sortField : ''
  const order = sort?.order ? sort.order : ''
  if (sortField && order) {
    resultUrl = resultUrl + `&_sort=${sortField}&_order=${order}`
  }

  // operators
  for (const key in operators) {
    if (operators[key]) {
      const encodeValue = encodeURIComponent(operators[key])
      resultUrl = resultUrl + `&${key}=${encodeValue}`
    }
  }

  if (currBrands?.length > 0) {
    currBrands.forEach(val => {
      const encodeValue = encodeURIComponent(val)
      resultUrl = resultUrl + `&brand=${encodeValue}`
    })
  }

  return resultUrl
}

export default generateFetchUrl
