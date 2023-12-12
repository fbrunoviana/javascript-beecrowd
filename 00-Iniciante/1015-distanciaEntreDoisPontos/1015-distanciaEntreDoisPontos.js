var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
newLinesOne = lines[0].split(' ')
newLinesTwo = lines[1].split(' ')

x1 = parseFloat(newLinesOne[0])
y1 = parseFloat(newLinesOne[1])
x2 = parseFloat(newLinesTwo[0])
y2 = parseFloat(newLinesTwo[1])

p1 = (Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))).toFixed(4);
console.log(p1)