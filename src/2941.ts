import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin').toString().trim();

const cAlphabet = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

const result = cAlphabet.reduce((str, alphabet) => {
  return str.split(alphabet).join('0');
}, input);

console.log(result.length);
