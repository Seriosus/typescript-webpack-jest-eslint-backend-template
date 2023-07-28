import path from 'path';
import fs from 'fs';
export const f = () => 5;

const x: Gang = { global: false };

console.log(fs.readFileSync(path.join(__dirname, '..', 'statics', 'test.txt'), { encoding: 'utf-8' }));
console.log(x);
