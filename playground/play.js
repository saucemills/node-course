function whichDirection(arr) {
  let index = {}
  let currentIndex = 0

  for (let i = 0; i < arr.length; i++) {
    index[i] = {
      value: arr[i],
      visited: false,
    }
  }

  if (index[currentIndex].value === 0) return 'Deadend'

  while (currentIndex >= 0 && currentIndex <= arr.length - 1) {
    if (index[currentIndex].visited || index[currentIndex].value === 0)
      return 'Deadend'

    index[currentIndex].visited = true

    currentIndex += index[currentIndex].value
  }

  if (currentIndex < 0) return 'Left'
  if (currentIndex > arr.length - 1) return 'Right'
}

console.log(whichDirection([1, 1, 5])) // "Right"
console.log(whichDirection([1, 1, -5])) // "Left"
console.log(whichDirection([0, 1, 5])) // "Deadend"
console.log(whichDirection([1, 1, -1])) // "Deadend"
console.log(whichDirection([1, 1, -2])) // "Deadend"
