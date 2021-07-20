const unRoll = require("./unroll");

describe("#unRoll", function () {

  it("is a function", function () {
    expect(typeof unRoll).toEqual("function");
  });

  it("returns an array as result", function(){
    expect(typeof unRoll([[1,2,3],[4,5,6],[7,8,9]])).toEqual("object")
  });

  it("check if the function works properly", function(){
    expect(unRoll([[1,2,3],[4,5,6],[7,8,9]])).toEqual([1,2,3,6,9,8,7,4,5])
  });

  
});
