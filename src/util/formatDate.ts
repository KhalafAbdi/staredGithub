const formatDate = (date: Date) => {
  const dateArray = date.toString().split('T')

  return dateArray[0]
}

export default formatDate
