const text='hoy aprendiendo expresiones regulares a2';
const regexCoordinates = /\w\d/g;
console.log(text.match(regexCoordinates));

const randomData = "015 354 8787 687351 3512 8735";
const regexpFourDigits = /\b\d{4}\b/g;
console.table(randomData.match(regexpFourDigits));

const date = "01-09-2025";
const regexDate = /^([0-2][0-9]|4[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/;
console.table(date.match(regexDate));

const email = "avillamizar779@gmail.com";
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
console.log(email.match(regexEmail));

const clave = "C0nstras*ña";
const regexClave =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
console.log(clave.match(regexClave));


