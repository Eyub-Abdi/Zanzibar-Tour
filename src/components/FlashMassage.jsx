import { useToast } from '@chakra-ui/react'
import { useEffect } from 'react'

// CONTEXT
function FlashMassage({ showFlash, title, description, status }) {
  const toast = useToast()
  useEffect(() => {
    if (showFlash)
      toast({
        title, //: 'Account created.',
        description, //: "We've created your account for you.",
        status, //: 'error',
        duration: 6000,
        isClosable: true,
        padding: '20px'
      })
  }, [showFlash, toast, title, description, status])
  return null
}
export default FlashMassage
