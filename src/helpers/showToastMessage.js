import { Toast } from '@chakra-ui/react'

const showToastMessage = (message, status) => {
  return Toast({
    title: message,
    position: 'top-right',
    isClosable: true,
    status: status,
    duration: 3000
  })
}

export default showToastMessage
