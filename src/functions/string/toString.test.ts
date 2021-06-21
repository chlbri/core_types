import { generate5Tests } from '../../test';
import { toString } from './toString';

generate5Tests(
  toString,
  [[1], [2], [3, 4], ['true'], [false]],
  [['1'], ['2'], ['3', '4'], ['true'], ['false']],
);
