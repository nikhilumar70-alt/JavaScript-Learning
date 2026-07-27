const name = "Nikhil"

const repocont = 66

// console.log(name + repocont + "jaihind");  // aise mt likho kyu ye sytax purana ho huka h 
 
console.log(`Hello myname is ${name} and my aim is ${repocont} bss aise hi `);

const gameName = new String('nikhil')
console.log(gameName)
console.log(typeof gameName)
console.log(gameName[0]) // value ke element ko aacces krna
console.log(gameName.__proto__); // gameName ka prototype batana tumko lage ka empty h but nhi h usme element
console.log(gameName.length );
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('l')) 

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-10,4)
console.log(anotherString)
 
const newStringOne = "     nikhil   "
console.log(newStringOne)
console.log(newStringOne.trim()) // space ko remove kr deta h 


const url = "https://nikhil.com/mikh%89ilokais"

console.log(url.replace('%89' , '^'))
console.log(url.includes('ppp')) 

const classsName = "Rah_ul"
console.log(classsName.split('_')) // is ka mtlb h ki jaha jaha _ ye milega waha string toot jayegi 