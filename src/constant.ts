import { join } from 'path';

export const CWD = process.cwd(); // 当前目录
export const GENERATOR_DIR = join(__dirname, '../generators'); // join就是将多个目录合并成系统可以识别的目录