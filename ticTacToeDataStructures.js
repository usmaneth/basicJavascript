/* 

123 
456 
789 

*/ 
//wrong / bad data structure 
{
    firstRow: {
        firstColumn: {col: 1, row: 1, value: 'X'};
        secondColumn: {col: 1, row: 2, value: null};
        thirdColumn: null; 
    },
    secondRow: {
        firstColumn: 'X';
        secondColumn: null; 
        thirdColumn: null; 
    }, 
    thirdRow: {
        firstColumn: 'X';
        secondColumn: null; 
        thirdColumn: null; 
    }
}


// better example using arrays: 

let gameBoard = [
    [null, null, null]
    [null, null, null]
    [null, null, null]
]

// even better DataStructure for this scenario 

gameBoard = [null, null, null, null, null, null,null, null, null]

