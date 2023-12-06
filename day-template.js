var fs = require('fs');

fs.readFile('input.txt', function(err, data) {
    if(err) throw err;

    var lines = data.toString().split("\n");

    const actOnLine = function(line) {
        

        return 0;
    }

    // console.log(getNumberFromLine(lines[887]));
    
    const sum = lines.reduce((sum, line) => {    
        const number = actOnLine(line);
        return sum + number; 
    }, 0)

    console.log('sum', sum)
});