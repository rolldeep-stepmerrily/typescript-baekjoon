import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const groupWord = (word: string) => {
  const wordMap = new Map<string, boolean>();
  let prevChar = '';
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    if (prevChar !== char) {
      if (wordMap.get(char)) {
        return false;
      }
      wordMap.set(char, true);
    }
    prevChar = char;
  }
  return true;
};

const N = Number(input[0]);

let count = 0;

for (let i = 1; i <= N; i++) {
  if (groupWord(input[i])) {
    count++;
  }
}

console.log(count);
