const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N,arr] = input
const scores = arr.split(' ').map(el=>Number(el))
const max = Math.max(...scores)
let answer = 0
for(let i =0;i< N;i++){
    answer += scores[i] / max * 100
}

console.log(Number(answer/N).toFix(1))