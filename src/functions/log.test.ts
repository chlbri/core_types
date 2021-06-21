import { generate5Tests } from '../test';
import { log } from './log';

generate5Tests(
  log,
  [[1], [2], [3, 4], ['true'], [false]],
  [undefined, undefined, undefined, undefined, undefined],
);
