var fs = require('fs');

fs.readFile('input.txt', function(err, data) {
    if(err) throw err;

    var lines = data.toString().split("\n");
    
    const sum = lines.reduce((sum, line) => {    
        const numbers = line.match(/\d/g);
        
        if (!numbers) return sum;

        const firstNum = numbers[0];
        const lastNum = numbers[numbers.length - 1];
        const number = firstNum + lastNum;
        return sum + +number; 
    }, 0)

    console.log('sum', sum);
    // answer: 55447 (I think, I may have accidentally adjusted files after subnitting)
});