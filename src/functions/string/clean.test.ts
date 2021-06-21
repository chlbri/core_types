import { generate7Tests } from '../../test';
import { isClean } from './clean';

generate7Tests(
  isClean,
  [
    ['hfjg@'],
    ['TEedfcxJF56ERT'],
    ['3'],
    ['false<<>'],
    ['#*'],
    ['fdkfghfghv'],
    ['GUYCVCCZ'],
  ],
  [false, true, true, false, false, true, true],
);
