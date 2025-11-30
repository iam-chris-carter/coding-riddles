import * as fs from 'fs';
import * as path from 'path';
import * as crypto from 'crypto';

export const readFileContent = (filePath: string): string => {
    return fs.readFileSync(path.resolve(filePath), 'utf-8');
};

export const generateMD5Hash = (inputString: string) => {
    const hash = crypto.createHash('md5');
    hash.update(inputString);
    return hash.digest('hex'); // Returns the hash in hexadecimal format
}