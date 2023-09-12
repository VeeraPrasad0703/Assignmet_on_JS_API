const quote = document.querySelector('.quote')
var count = 0
// quote.innerHTML = `Loading`
const quote_btn = document.querySelector('.btn')
const getQuote = () => {
  const data = fetch('https://type.fit/api/quotes').then((response) => {
    return response.json()
  })
  data.then((data) => {
    count = count + 1
    if (count > 15) count = 0
    console.log(data)
    console.log(data.text)
    quote.innerHTML = `<h1>Quote-${data[count].text}<h1>
 <h1>Author-${data[count].author}</h1>`
  })

  data.catch((error) => {
    quote.outerHTML = `<h1>Ooops Something went wrong</h1>`
  })
}
quote_btn.addEventListener('click', () => {
  quote.innerHTML = `Wait while fetching`
  getQuote()
})
