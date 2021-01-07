const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    (true) ?
    setTimeout(() => {
      resolve('Do something async')
    }, 3000) :
    reject(new Error('Test error'))
  })
}
const anotherFunction = async () => {
  try {
    const something = await doSomethingAsync()
    console.log(something)
  } catch(error) {
    console.error(error)
  }
}
console.log('Before function execution')
anotherFunction()
console.log('After function excecution')