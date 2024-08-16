import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin').toString().trim();

const ascii = input.charCodeAt(0);

console.log(ascii);
