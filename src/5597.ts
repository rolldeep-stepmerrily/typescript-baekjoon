import * as fs from 'fs';

const students = Array.from({ length: 30 }, (_, i) => i + 1);

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const goodStudents = input.map(Number);

const badStudents = students.filter((student) => {
  return !goodStudents.includes(student);
});

badStudents.sort((a, b) => a - b);

console.log(badStudents.join('\n'));
