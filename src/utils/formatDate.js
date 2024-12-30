// ALLOW TODAY IN VALID DATE LIST

export function formatHours() {
  const today = new Date()
  return today.setHours(0, 0, 0, 0)
}

export const formatDate = date => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0') // Months are 0-indexed
  const day = String(date.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}
