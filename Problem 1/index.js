// jshint esversion:6
const fs = require('fs');
let data = fs.readFileSync('./input.txt', 'utf8').split('\r\n');
let sum = 0;
let highest = 0;
let arr = [];

for (let i = 0; i < data.length; i++){
    if (data[i] == "" ){
        // if (sum > highest){highest = sum;}
        arr.push(sum);
        sum = 0;
    } else{
        sum += parseInt(data[i]);
    }
}
arr.sort(function(a, b){return b-a;});
sum = arr[0] + arr[1] + arr[2];
console.log(sum);
