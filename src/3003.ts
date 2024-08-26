import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const [king, queen, rook, bishop, knight, pawn] = input.map((element) => parseInt(element));

const kingCount = 1 - king;
const queenCount = 1 - queen;
const rookCount = 2 - rook;
const bishopCount = 2 - bishop;
const knightCount = 2 - knight;
const pawnCount = 8 - pawn;

const chess = [kingCount, queenCount, rookCount, bishopCount, knightCount, pawnCount];

console.log(chess.join(' '));
