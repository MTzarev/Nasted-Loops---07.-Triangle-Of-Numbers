function triangleOfNumbers (row){
    
    for (let i=1; i<=row; i++){
        let symbol = "";
        for (let j=1; j<=i; j++){
            symbol +=  i + " "
        }
        console.log(`${symbol}`)

    }
    }
triangleOfNumbers(6)