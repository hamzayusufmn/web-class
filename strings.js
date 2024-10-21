let text = ' the classes in itec are 1150, 1250,2300'

let replaced = text.replace('itec', 'ITEC')
console.log(replaced)

let message = ' the classes are 1150 , 1250, 2300'
let replaceregex = message.replace(/\d{4}/g, 'ITEC $&')
console.log(replaceregex)
// will replace the message with/ good pratice to include the ITEC professer said it isnt likely we do this
// in class
// it will let you make mistakes and testing code is vital and use debugger