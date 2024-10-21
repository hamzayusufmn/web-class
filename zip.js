
function citystateAdress(city, state) {
let address = city + ' ,' + state.toUpperCase()
    return address


console.log(citystateAdress('seattle', 'WA'))
}
console.log(isMinnesota(55555))
function isMinnesota(code) {
    /// 55001 and 5673
 if (code >= 55001  && code <= 56763) {
     return true
    } else {
     return false
 }
}
console.log((isMinnesota(55403)))

function ValidGpa(gpa) {
    if (gpa >= 0 && gpa <= 4) {
        return true
    } else {
        false
    }
}
console.log(ValidGpa(4))

let  classname = 'web programming'
let classcode = 2560
let department = 'itec'
 console.log(`this clas is ${department} ${classcode} ${classname}`)

let takenCSharp = true
let takenJava = false

if( takenCSharp || takenJava ) {
    console.log('you meet the requirments for android class')
} else {
    console.log('you must take c# or java')
}