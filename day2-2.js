var fs = require('fs');

fs.readFile('input-day-2-2.txt', function(err, data) {
    if(err) throw err;

    var lines = data.toString().split("\n");
    
    const sum = lines.reduce((sum, line) => {
        // const line = lines[0];
        const maxAmountOfCubesPerColor = {
            'red': 0,
            'green': 0,
            'blue': 0
        }
        const [_, revealBlock] = line.split(":")
        const reveals = revealBlock.split(";");
                
        // convert this to a while for speed
        reveals.forEach((reveal) => {
            // split up count + colors from reveal
            const numCubesPerColorStrings = reveal.split(",");
            numCubesPerColorStrings.forEach((numCubesPerColorString) => {
                const [numString, color] = numCubesPerColorString.trim().split(" ");
                const num = +numString

                if(color === 'red') {
                    // console.log(num ,maxAmountOfCubesPerColor[color] )
                }
                if( num > maxAmountOfCubesPerColor[color]) {
                    maxAmountOfCubesPerColor[color] = num;
                }
            });
        });

        // console.log(revealBlock, maxAmountOfCubesPerColor  )

        const power = Object.values(maxAmountOfCubesPerColor).reduce((sum, value) => sum * value);
        return sum + power;
    }, 0);

    console.log('sum', sum, 'got it?', sum === 55593)
});