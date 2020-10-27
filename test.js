

// \S+[=]\S+ supprimer tout ce qui contient le =

const fs = require ("fs");
// let str = "# TEST APP=development PORT=4242 # SALUT DATABASE_URL=postgres://majdi:@localhost:5432/mhacki_sea.dev JWT_ENCRYPTION=*z)KP2L6IMdJ&geoZ,HfEn-zymAg84T1qrR;tXx9MH JWT_EXPIRATION=10000"


let str = fs.readFileSync('env.txt').toString()
console.log(str);
str = str.match(/\S+=\S+/gm).toString()
let regex = /=\S+/gm    //toute les lignes qui contiennnt le = sont garder
vari = str.match(regex).toString()
console.log(vari)
console.log('OK')
let regex2 = /=/gm
vari = vari.replace(regex2, '="')
// JSON.stringify(vari)
fs.writeFileSync("env.json",  vari);


// let regex2 = /=/gm
// str = str.replace(regex2, '":"')
// console.log(str)
// console.log('OK')
// console.log('OK')
// console.log('OK')

// let regex3 = /^|$/gm
// str = str.replace(regex3, ' " ')
// console.log(str)

// let regex4 = /,/gm
// str = str.replace(regex4, '",\n"')
// console.log("OK")
// console.log(str)


// fs.writeFileSync("env.json",  str);
