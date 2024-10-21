function shout(text) {
    let shouty_text = text.toUpperCase()  + '!!!!!'
    return shouty_text
}


console.log(shout('hello world'))
let message = shout('hello web programmers')
console.log(message)
//

function  f_to_c(f) {
    let celsius = f - 32 * 5 /9
    return celsius.toFixed()
    // returns a rounded number
// string can be used in next block
}

 let todayTemp = 77
todaycelsis = f_to_c(todayTemp)
console.log(todaycelsis)