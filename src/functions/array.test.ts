import { generate5Tests } from '../test';
import { isArray } from './array';

generate5Tests(
  isArray,
  [[1], [2], [[3, 4]], ['true'], [false]],
  [false, false, true, false, false],
);
