export function shuffleArray<T>(array: T[]) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}


export function isLoggedIn() {
  console.log('isLoggedIn')
  if (document.cookie.indexOf('token=') === -1) {
    console.log('' + false)
    debugger;
    return false
  } else {
    console.log('' + true)
    debugger;
    return true
  }
}
