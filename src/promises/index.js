const sometimesWillHappen = () => {
  /**
   * Generamos una nueva promesa que recibe como parámetro dos
   * funciones: una que se ejecutará si el resultado es exitoso y otra
   * que se ejecutará si el resultado es negativo
   */
  return new Promise((resolve, reject) => {
    if(true) {
      resolve('Success message')
    } else {
      reject('Error message')
    }
  })
}
// Implementando la función asíncrona
sometimesWillHappen()
  // lo que sucede después de que se resuelve la promesa
  .then(response => console.log(response))
  // lo que sucede cuando no se puede resolver exitósamente
  .catch(error => console.error(error))
// Generamos otra función asíncrona y su implementación
sometimesWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if(true) {
      setTimeout(() => {
        resolve('Success message')
      }, 2000);
    } else {
      const error = new Error('Error message')
      reject(error)
    }
  })
}
sometimesWillHappen2()
  .then(response => console.log(response))
  .catch(error => console.error(error))
// Para hacer algo después de que se ejecuten dos promesas, podemos usar el método `all()`
Promise.all([sometimesWillHappen(), sometimesWillHappen2()])
  .then(response => {
    console.log('Results array: ', response)
  })
  .catch(error => {
    console.error(error)
  })