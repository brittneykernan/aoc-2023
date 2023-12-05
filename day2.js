var fs = require('fs');

const numCubesPerColor = {
    'red': 12,
    'green': 13,
    'blue': 14
};

fs.readFile('input-day-2.txt', function(err, data) {
    if(err) throw err;

    var lines = data.toString().split("\n");
    
    const sum = lines.reduce((sum, line) => {
        let isGamePossible = true;
        const [idBlock, revealBlock] = line.split(":")
        const id = idBlock.split(" ")[1];
        const reveals = revealBlock.split(";");
                
        // convert this to a while for speed
        reveals.forEach((reveal) => {
            // split up count + colors from reveal
            const numCubesPerColorStrings = reveal.split(",");
            numCubesPerColorStrings.forEach((numCubesPerColorString) => {
                const [num, color] = numCubesPerColorString.trim().split(" ");
                // is this reveal possible?
                if( num > numCubesPerColor[color]) {
                    isGamePossible = false;
                }
            });
        });

        // console.log(revealBlock, isGamePossible)

        // how to 
        if(isGamePossible) {
            return sum + +id
        }

        return sum;
    }, 0);

    console.log('sum', sum)
    // answer 2913
});