let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync("./input/11720.txt").toString();
let LENGTH = input.length;
let num = Math.ceil(LENGTH / 10);
for (let i = 0; i < num; i++) {
  console.log(input.slice(i * 10, (i + 1) * 10));
}
// var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
// var str="";
// for(var i=0;i<input.length;i++){
// 	str+=input[i];
// 	if(i%10==9 || (input.length-1==i)){
// 		console.log(str);
// 		str="";
// 	}
// }
