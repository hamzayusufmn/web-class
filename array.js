let animals = [ 'lion', 'tiger', 'cheetah']

console.log(animals)
console.log(animals[1])
console.log(animals[1000])

animals[6] = 'giraffe'
console.log(animals[1])

animals.push('elephants')
// push adds to array list
console.log(animals)


animals.unshift('deer')
console.log(animals)

let firstAnimal = animals.shift()
console.log((firstAnimal))
console.log(animals)
