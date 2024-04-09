const formatDate = (dateString: string) => {
  const options = { day: '2-digit' as const, month: '2-digit' as const, year: 'numeric' as const }
  const date = new Date(dateString)
  const formattedDate = new Intl.DateTimeFormat('ja-JP', options).format(date).replace(/\//g, '.')
  return formattedDate
}

export default formatDate
