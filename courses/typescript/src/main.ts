import Person from "./classes/index";

const p = new Person("John", 27);

document.body.innerText = JSON.stringify(p);