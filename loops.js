let birds = ['owl', 'robin', 'eagle']
console.log(birds)
// arrays can be added opposed to python

birds.forEach(function () {
    // repeat for once for each object in array
    // will be called for each object
    console.log(birds)
    // for loop
})

for (let x = 0; x < birds.length ; x = x+1) {
    let bird = birds[x]
    console.log(bird.toUpperCase())
}