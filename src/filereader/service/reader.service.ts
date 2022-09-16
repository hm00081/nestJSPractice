import { Injectable } from '@nestjs/common';
import * as fs from 'fs'; // * = 모든것을 fs로 받겠다.
import { join } from 'path';

@Injectable()
export class ReaderService {
  constructor() {
    this.readFile('a.txt').then(console.log);
  }
  public async readFile(path: string) {
    const result = fs.readFileSync(join(__dirname, '../../../data', path));
    return result.toString();
  }

  public async readCSVToJson(path: string) {
    const result = fs.readFileSync(join(__dirname, '../../../data', path));
    const lines = result.toString().replace(/\"/g, '').split('\n');

    const headers = lines[0].split(',');
    const data: { [key in string]: number | string }[] = [];
    for (let i = 1; i < lines.length - 1; i++) {
      const line = lines[i];
      const values = line.split(',');
      const obj = {};
      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = values[j];
      }
      data.push(obj);
    }
    return data;
  }
}
