const currencyFormater = (value: number) => {
  const valueFormater = new Intl.NumberFormat('pt-pt', {
    style: "currency",
    currency: "EUR"
  }).format(value)

  return valueFormater
}

export {currencyFormater}