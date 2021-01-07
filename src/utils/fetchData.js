let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const fetchData = api_url => {
  return new Promise((resolve, reject) => {
    const xthttp = new XMLHttpRequest()
    xthttp.open('GET', api_url, true);
    xthttp.onreadystatechange = (() => {
      if(xthttp.readyState === 4) {
        xthttp.status === 200 ?
          resolve(JSON.parse(xthttp.responseText)) :
          reject(new Error(`Error en la consulta a ${api_url}`))
      }
    })
    xthttp.send()
  })
}
module.exports = fetchData