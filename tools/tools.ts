import * as fs from 'fs';
import * as path from 'path';

export const readFileContent = (filePath: string): string => {
    return fs.readFileSync(path.resolve(filePath), 'utf-8');
};