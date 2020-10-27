const fs = require ("fs");

function toJson(filename) {
    let str = fs.readFileSync(filename).toString()
    let regex = /=\S+/gm    //toute les lignes qui contiennnt le = sont garder
    str = str.match(regex).toString()
    console.log(str)
    // let regex3 = /^|$/gm
    // str = str.replace(regex3, '"')
    // console.log(str)
    fs.writeFileSync("env.json", str);
}

// toJson(process.argv[2])
// fs.writeFileSync("env.json", str);