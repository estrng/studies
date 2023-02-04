class person {
  instantiatedAt = new Date();

  constructor(public name: string, public age: number) {
    console.log(`The Person ${name} has ${age} years old and was instantiated at ${this.instantiatedAt}`);
  }
}


export default person;