const square = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ];
  
  const smallerSquare = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"]
  ];
  
  const unRoll = (square) => {
  let resArr = [];
  resArr = [...square[0]];
  for( i = 1; i<square.length-1; i++){
    resArr = [...resArr, square[i][square[i].length-1]];
  }
  resArr = [...resArr, ...square[square.length-1].reverse()];
  for( j = square.length-2; j>0 ; j--){
    resArr = [...resArr, square[j][0]];
  }
  for(k = 1; k< square[1].length-1; k++){
    resArr = [...resArr, square[1][k]];
  }
  if(square.length > 3){
      for(x = square.length-2; x<square.length-1; x++){
          resArr = [...resArr, square[x][square[x].length-2], square[x][square[x].length-3]];
  }
  }
  return resArr;
  }
  console.log(unRoll(square));
  console.log(unRoll(smallerSquare));
  

module.exports = unRoll;
