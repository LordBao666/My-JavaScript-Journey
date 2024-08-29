const PI =3.1415926

function helloWorld(){
  return "helloWorld";
}

class Person{
  #name
  #age

  constructor(name,age){
    this.#name = name;
    this.#age=age;
  }

  toString(){
    return `Person: ${this.#name}, age: ${this.#age}`;
  }
}

const lucyNumber = 4 ; //Mista says no!!!

export {PI,helloWorld,Person};

export default lucyNumber;

