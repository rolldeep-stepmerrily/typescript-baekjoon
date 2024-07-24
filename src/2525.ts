import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const startTime = input[0].split(' ');
const hour = parseInt(startTime[0]);
const minute = parseInt(startTime[1]);
const duration = parseInt(input[1]);

const totalMinute = hour * 60 + minute + duration;
const resultHour = Math.floor(totalMinute / 60);
const resultMinute = totalMinute % 60;

const time = `${resultHour > 23 ? resultHour % 24 : resultHour} ${resultMinute}`;

console.log(time);
