const currencyFormatter = (value: number) => {
  const valueFormater = new Intl.NumberFormat('pt-pt', {
    style: "currency",
    currency: "EUR"
  }).format(value)

  return valueFormater
}

function formatDate(value: string, country: string = 'pt-PT'){
  const options =  {day: 'numeric' , year: 'numeric', month: 'long', };
  const date = new Date(value).toLocaleDateString(country, options)

  return date
}


export {currencyFormater, formatDate}