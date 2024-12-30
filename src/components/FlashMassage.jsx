import { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'

function FlashMassage({ showFlash, description, status }) {
  const notify = () =>
    status === 'error'
      ? toast.error(description, {
          duration: 3000,
          position: 'bottom-center'
        })
      : toast.success(description, {
          position: 'bottom-right',
          duration: 5000
        })
  useEffect(() => {
    if (showFlash) notify()
  }, [showFlash, description, status])
  return (
    <div>
      <Toaster />
    </div>
  )
}

export default FlashMassage
