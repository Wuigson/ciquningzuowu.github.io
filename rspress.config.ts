import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
    base: '/',
    root: path.join(__dirname, 'docs'),
    title: '洛理科技社学习指北',
    icon: '/favicon.ico',

});
