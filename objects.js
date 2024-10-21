let user = { username: 'clara', password: 'zebra'}
console.log(user.username)
console.log(user['username'])
console.log(user.password)
console.log(user['password'])

let whatproperty = 'password'
console.log(user[whatproperty])

let usernameproperty = 'username'
console.log(user[usernameproperty])