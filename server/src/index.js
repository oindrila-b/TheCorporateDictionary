"use strict";
export const __esModule = true;
import * as pino from 'pino';
var logger = pino["default"]();
logger.info('hello world');
var child = logger.child({ a: 'property' });
child.info('hello child!');
