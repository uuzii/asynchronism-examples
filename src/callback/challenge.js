let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const API = 'https://rickandmortyapi.com/api/character/'

console.log(API)

function fetchData(api_url, callback) {
  let xthttp = new XMLHttpRequest()
  // Definiendo el método, la url y activando el asincronismo de nuestra petición
  xthttp.open('GET', api_url, true);
  xthttp.onreadystatechange = function(event) {
    // Leyendo el estado en el que senencuentra xhttp (1-5)
    if(xthttp.readyState === 4) {
      // Leyendo el código del status http
      if(xthttp.status === 200) {
        // Nuestro callback recibiría un error y luego la respuesta
        callback(null, JSON.parse(xthttp.responseText))
      } else {
        const error = new Error(`Error en la consulta a ${api_url}`)
        return callback(error, null)
      }
    }
  }
  xthttp.send()
}

fetchData(API, function(firstError, firstResponse) {
  if(firstError) return console.error(firstError)
  fetchData(API + firstResponse.results[0].id, function(secondError, secondResponse) {
    if(secondError) return console.error(secondError)
    fetchData(secondResponse.origin.url, function(thirdError, thirdResponse) {
      if(thirdError) return console.error(thirdError)
      console.log(firstResponse.info.count)
      console.log(secondResponse.name)
      console.log(thirdResponse.dimension)
    })
  })
})