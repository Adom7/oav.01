const fs = require ("fs");

function toJson(filename) {
    let file = fs.readFileSync(filename).toString()
    let regex = /^;.*$/gm
    file = file.replace(regex, "")
    file = file.replace(/\r?\n|\r/gm,'')
    fs.writeFileSync("php.json", file);
}

toJson(process.argv[2])