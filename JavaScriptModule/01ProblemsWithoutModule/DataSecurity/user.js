const user = {
  username:"jack",
  age:22,
  address:"cool street on Mars",
  bankAccount:[
    "broWhyYouAreLaughing",
    "sisYouAreGorgeous"
  ]
}

function getUserInfo(){
  return {
    username:user.username,
    age:user.age,
    address:user.address
  }
}