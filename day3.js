var fs = require('fs');

fs.readFile('input-day-3.txt', function(err, data) {
    if(err) throw err;

    // let sum = 0;
    const lines = data.toString().split("\n");

    const symbolCoordinates = lines.reduce((coordinateArray, line, y) => {
        line.split('').forEach((character, x) => {
            if(character !== '.' && isNaN(character)) {
                return coordinateArray.push([x, y])
            }
        });
        return coordinateArray
    }, []);   
    
    // console.log(symbolCoordinates)
    
    // one optimization is to combine loops into one, build the symbols as you go
    
    const sum = lines.reduce((sum, line, y) => {   
        // const y = 0;
        let currentNumber = '';
        let hasAdjacentSymbol = false;

        line.split('').forEach( (character, x) => {

            // if is a number character
            const isNumber = !isNaN(character);

            if( isNumber ) {
                // add it to the current number string
                currentNumber += character;

                // look around for symbols if we haven't found one yet
                if(!hasAdjacentSymbol) {
                    const adjacentSymbolCoordinate = symbolCoordinates.find( (coordinate) => {
                        if(coordinate[0] >= x-1 && coordinate[0] <= x+1 && 
                            coordinate[1] >= y-1 && coordinate[1] <= y+1) {
                            return true
                        } 
                    });
                    
                    // console.log(character, adjacentSymbolCoordinate)

                    if(adjacentSymbolCoordinate) {
                        hasAdjacentSymbol = true;
                    }
                }
            }

            // if we're at a character after a number or 
            // if we're at the end of the line
            if(!isNumber || x === line.length - 1 ) {
                if(currentNumber !== '') {
                    // add that number to the sum 
                    if(hasAdjacentSymbol) {
                        sum += +currentNumber;
                        hasAdjacentSymbol = false;
                    }
                    // console.log(currentNumber);
                    currentNumber = '';
                }
            }
            // console.log(currentNumber)
        });
        // return 0;
        return sum;
    }, 0)

    console.log('sum', sum)
    // sample correct answer is 4361
    // 517866 is too low, I wasn't counting numbers at end of lines
    // 520135 is correct
});