function zigZag(s, numOfRows) {
if(numOfRows === 1) {
    return s;
}
const rows = Array.from({length: numOfRows}, () => []);
const cycle = 2*(numOfRows - 1);

for(let i = 0; i< s.length;i++) {
let rowNumer = i % cycle;
if(rowNumer >= numOfRows) {
    rowNumer = cycle - rowNumer
}
rows[rowNumer].push(s[i]);
}
console.log(rows.reduce((acc, curr) => acc +=  curr.join(''), ''));

}

zigZag('PAYPALISHIRING', 4);