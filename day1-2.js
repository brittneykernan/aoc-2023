var fs = require('fs');

const numberMap = {
    'one':'1',
    'two':'2',
    'three':'3',
    'four':'4',
    'five':'5',
    'six':'6',
    'seven':'7',
    'eight':'8',
    'nine':'9',
    1:'1',
    2:'2',
    3:'3',
    4:'4',
    5:'5',
    6:'6',
    7:'7',
    8:'8',
    9:'9'
}

fs.readFile('input.txt', function(err, data) {
    if(err) throw err;

    var lines = data.toString().split("\n");

    const getNumberFromLine = function(line) {
        const numbers = line.match(/\d|one|two|three|four|five|six|seven|eight|nine/g);
        
        if (!numbers) return 0;

        const firstNum = numberMap[numbers[0]];
        const lastNum = numberMap[numbers[numbers.length - 1]];
        const number = firstNum + lastNum;
        // console.log(number)

        return +number;
    }

    // console.log(getNumberFromLine(lines[887]));
    
    const sum = lines.reduce((sum, line) => {    
        const number = getNumberFromLine(line);
        return sum + number; 
    }, 0)

    console.log('sum', sum)
});