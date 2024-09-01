import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8').toString().trim().split('\n');

interface Subject {
  name: string;
  credit: number;
  grade: string;
}

const gradePoints: { [key: string]: number } = {
  'A+': 4.5,
  A0: 4.0,
  'B+': 3.5,
  B0: 3.0,
  'C+': 2.5,
  C0: 2.0,
  'D+': 1.5,
  D0: 1.0,
  F: 0.0,
};

const subjects: Subject[] = input.map((line) => {
  const [name, credit, grade] = line.split(' ');
  return { name, credit: parseFloat(credit), grade };
});

let totalGradePoints = 0;
let totalCredits = 0;

subjects.forEach((subject) => {
  if (subject.grade !== 'P') {
    totalCredits += subject.credit;
    if (subject.grade in gradePoints) {
      totalGradePoints += subject.credit * gradePoints[subject.grade];
    }
  }
});

const gpa = totalGradePoints / totalCredits;
console.log(gpa.toFixed(6));
