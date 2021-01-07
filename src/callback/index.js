function sum(num1, num2) {
  return num1 + num2
}
function calc(num1, num2, callback) {
  return callback(num1, num2)
}
console.log(calc(1, 5, sum))

function printDate(nowDate) {
  console.log(nowDate)
}
function createDate(callback) {
  console.log(new Date)
  setTimeout(function() {
    let date = new Date
    callback(date)
  }, 3000)
}
createDate(printDate)