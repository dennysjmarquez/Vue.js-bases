Vue.filter('currencyFilter', (value, symbol = '', decimal = 0) => {

  return `${value.toFixed(decimal).replace(/(\\d)(?=(\\d{3})+(?:\\.\\d+)?$)/g, "$1,")}${symbol}`

});
